const fs = require("fs");

const config = require("../config.js");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const BCH_ADDR1 = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;

async function createManagedToken() {
  const retVal = await wormhole.Transaction.managed(
    BCH_ADDR1,
    1, // Must be 1
    8, // Precision of 8 decimal places.
    0, // 0 for new tokens
    "category",
    "subcategory",
    "T01", // 'Ticker symbol' (kind of)
    "p2pvps.org",
    "Test Description"
  );

  fs.writeFile("tx-info.txt", retVal, function(err) {
    if (err) {
      return console.error(err);
    }

    console.log(`TXID ${retVal} written to tx-info.txt successfully.`);
  });

  console.log(`Transaction returned: ${JSON.stringify(retVal, null, 2)}`);
}
createManagedToken();

// Transaction returned: "86c868c8e312d849d1cf1b10236353ed3513cc669c761d1c5a208d6f5c3cfb84"
