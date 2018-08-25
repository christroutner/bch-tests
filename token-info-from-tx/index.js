const config = require("./config.js");

let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli(config);
const fs = require("fs");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const rp = require("request-promise");

const BCH_ADDR1 = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;
const TXID = `86c868c8e312d849d1cf1b10236353ed3513cc669c761d1c5a208d6f5c3cfb84`;

async function getTxInfo() {
  const retVal = await wormhole.DataRetrieval.transaction(TXID);

  console.log(`Info from TXID ${TXID}: ${JSON.stringify(retVal, null, 2)}`);
}
getTxInfo();
