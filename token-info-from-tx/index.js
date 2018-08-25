const config = require("../config.js");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const TXID = `1faf0e19d2ce15734d5b6f4648c26bdc50dde9bdcd9156e4b6e2a48b015281c0`;

async function getTxInfo() {
  const retVal = await wormhole.DataRetrieval.transaction(TXID);

  console.log(`Info from TXID ${TXID}: ${JSON.stringify(retVal, null, 2)}`);
}
getTxInfo();
