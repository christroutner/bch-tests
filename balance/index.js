const config = require("./config.js");

let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli(config);
const fs = require("fs");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const rp = require("request-promise");

//const BCH_ADDR = `qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;
const BCH_ADDR1 = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;
const BCH_ADDR2 = `bitcoincash:qrztjxyklxzm6vwf0uqqwrqud4cr37u89cs0hpphlv`;

async function getBalance() {
  try {
    BITBOX.Address.details([BCH_ADDR1]).then(
      result => {
        console.log(result);
      },
      err => {
        console.log(err);
      }
    );
  } catch (err) {
    console.error(`Error in getBalance: `, err);
    throw err;
  }
}
getBalance();
