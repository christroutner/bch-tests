/*
  Displays details of a specific transaction.
*/

"use strict";

let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli({ restURL: "https://trest.bitcoin.com/v1/" });

const TXID = `0e5c0a86add71b8b0be8b3a3ca5b2fae31d33dc12602e59a18f06defed2fb6a5`;
//const TXID = `704c55d2943e3aa468eabdf7d0d13e868793dbb410a9008f26197f4b84f7f03c`;
//const TXID = `0e5c0a86add71b8b0be8b3a3ca5b2fae31d33dc12602e59a18f06defed2fb6a5`;
//const TXID = `0e5c0a86add71b8b0be8b3a3ca5b2fae31d33dc12602e59a18f06defed2fb6a5`;

async function txDetail() {
  let details = await BITBOX.Transaction.details(TXID);
  console.log(details);

  console.log(
    `scriptPubKey[0]: ${JSON.stringify(details.vout[0].scriptPubKey, null, 2)}`
  );
}
txDetail();
