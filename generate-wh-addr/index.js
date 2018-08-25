const fs = require("fs");

const config = require("../config.js");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

async function generateWallet() {
  let newAddress = await wormhole.Wallet.newAddress();

  fs.writeFile("bch-test-address.txt", newAddress, function(err) {
    if (err) {
      return console.error(err);
    }

    console.log(
      `BCH address ${newAddress} successfully written to bch-test-address.txt.`
    );
  });
}
generateWallet();
