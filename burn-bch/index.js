/*
  This app currently does not work. Not sure why. Errors out with the following:
  wormhole.Transaction.burnBCHGetWHC is not a function
*/
const config = require("../config.js");

const fs = require("fs");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const BCH_ADDR1 = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;

async function burnBch() {
  const result = await wormhole.Transaction.burnBCHGetWHC(1, BCH_ADDR1);

  fs.writeFile("bch-burn-txid.txt", result, function(err) {
    if (err) {
      return console.error(err);
    }

    console.log(
      `BCH TXID ${result} successfully written to bch-burn-txid.txt.`
    );
  });
}
burnBch();
