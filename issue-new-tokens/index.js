const config = require("./config.js");

let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli(config);
const fs = require("fs");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const rp = require("request-promise");

const BCH_ISSUER_ADDR = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;
const BCH_RECIEVER = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;
const propertyId = 182;

async function issueToken() {
  const retVal = await wormhole.Transaction.grant(
    BCH_ISSUER_ADDR,
    BCH_RECIEVER,
    propertyId,
    "12",
    "test memo"
  );

  console.log(`Tokens issues. TXID: ${retVal}`);
}
issueToken();

// Tokens issues. TXID: b702c048bca0cb0e1765de3a4eb23f39b9f671f7e71d2090d54912229b6ecb6c
