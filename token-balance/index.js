const config = require("./config.js");

let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli(config);
const fs = require("fs");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const rp = require("request-promise");

const BCH_ADDR1 = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;

wormhole.DataRetrieval.balancesForAddress(BCH_ADDR1).then(
  result => {
    console.log(result);
  },
  err => {
    console.log(err);
  }
);
