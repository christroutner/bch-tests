let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli();
const fs = require("fs");

const config = require("./config.js");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

//console.log(`config: ${JSON.stringify(config, null, 2)}`);

wormhole.DataRetrieval.info().then(
  result => {
    console.log(result);
  },
  err => {
    console.log(err);
  }
);
