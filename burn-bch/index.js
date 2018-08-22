const config = require("./config.js");

let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli(config);
const fs = require("fs");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const rp = require("request-promise");

const BCH_ADDR1 = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;

wormhole.Transaction.burnBCHGetWHC(1, BCH_ADDR1).then(
  result => {
    console.log(result);
  },
  err => {
    console.log(err);
  }
);

// http://192.168.43.202:3000/v1/transaction/burnBCHGetWHC/1?redeemAddress=bchtest%3Aqq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr
// 3fe6e243b9c97ea7bb3bb87f4e517dd206e039edcb880e65aee3538983e4865f
