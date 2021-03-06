/*
  Sends some BCH from one address to another.

  Uses hard-coded values and a pre-generated wallet that has been funded with
  test BCH.
*/

"use strict";

let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli({ restURL: "https://trest.bitcoin.com/v1/" });

const lib = require('../../token-liquidity/lib/util.js');

const SEND_MNEMONIC = `pact whisper custom vintage busy dolphin lumber pretty bottom motion alcohol innocent affair view bulb wheel rude load someone crazy hire trim surprise wing`;
const SEND_ADDR = `bchtest:qzgjlerm2sfgpg562w2t6vm02tvdf3vpjvcea7nvrx`;


//const SEND_MNEMONIC = `empty rail board left bonus dinner laundry fetch tortoise shell pyramid awesome alley much float ugly essence asthma aerobic tourist notice mixture anxiety chaos`;
const RECV_ADDR = `bchtest:qrcyfng2qqm5nz98xzxlnztt9aguhf3twqq5l8ar5j`;

async function sendBch() {
  const balance = await lib.getBCHBalance(SEND_ADDR, false);
  console.log(`Balance of sending address ${SEND_ADDR} is ${balance} BCH.`);

  if(balance <= 0.0) {
    console.log(`Balance of sending address is zero. Exiting.`);
    process.exit(0);
  }

  const SEND_ADDR_LEGACY = BITBOX.Address.toLegacyAddress(SEND_ADDR);
  const RECV_ADDR_LEGACY = BITBOX.Address.toLegacyAddress(RECV_ADDR);
  console.log(`Sender Legacy Address: ${SEND_ADDR_LEGACY}`);
  console.log(`Receiver Legacy Address: ${RECV_ADDR_LEGACY}`);

  const balance2 = await lib.getBCHBalance(RECV_ADDR, false);
  console.log(`Balance of recieving address ${RECV_ADDR} is ${balance2} BCH.`);

  const utxo = await BITBOX.Address.utxo(SEND_ADDR);
  console.log(`utxo: ${JSON.stringify(utxo,null,2)}`);

  //process.exit(0);

  // instance of transaction builder
  let transactionBuilder = new BITBOX.TransactionBuilder("testnet");

  const satoshisToSend = 1000;
  let originalAmount = utxo[0].satoshis;
  const vout = utxo[0].vout;
  const txid = utxo[0].txid;

  // add input with txid and index of vout
  transactionBuilder.addInput(txid, vout);

  // get byte count to calculate fee. paying 1 sat/byte
  let byteCount = BITBOX.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 2 });
  console.log(`byteCount: ${byteCount}`);
  const satoshisPerByte = 1.2;
  const txFee = Math.floor(satoshisPerByte*byteCount);
  console.log(`txFee: ${txFee}`);

  // amount to send back to the sending address. It's the original amount - 1 sat/byte for tx size
  let remainder = originalAmount - satoshisToSend - txFee;

  // add output w/ address and amount to send
  transactionBuilder.addOutput(RECV_ADDR, satoshisToSend);
  transactionBuilder.addOutput(SEND_ADDR, remainder);
  //transactionBuilder.addOutput(RECV_ADDR_LEGACY, remainder);

  // Generate a change address from a Mnemonic of a private key.
  const change = changeAddrFromMnemonic(SEND_MNEMONIC);

  // Generate a keypair from the change address.
  const keyPair = BITBOX.HDNode.toKeyPair(change);

  // Sign the transaction with the HD node.
  let redeemScript;
  transactionBuilder.sign(0, keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount);

  // build tx
  let tx = transactionBuilder.build();
  // output rawhex
  let hex = tx.toHex();
  console.log(`Transaction raw hex: `);
  console.log(`${hex}`);

  // sendRawTransaction to running BCH node
  const broadcast = await BITBOX.RawTransactions.sendRawTransaction(hex);
  console.log(`Transaction ID: ${broadcast}`);

}
sendBch();

// Generate a change address from a Mnemonic of a private key.
function changeAddrFromMnemonic(mnemonic) {
  // root seed buffer
  let rootSeed = BITBOX.Mnemonic.toSeed(mnemonic);

  // master HDNode
  let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, 'testnet');

  // HDNode of BIP44 account
  let account = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'");

  // derive the first external change address HDNode which is going to spend utxo
  let change = BITBOX.HDNode.derivePath(account, "0/0");

  return change;
}
