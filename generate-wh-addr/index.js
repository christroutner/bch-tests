let BITBOXCli = require("bitbox-cli/lib/bitbox-cli").default;
let BITBOX = new BITBOXCli();
const fs = require("fs");

const config = require("./config.js");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const rp = require("request-promise");

//console.log(`config: ${JSON.stringify(config, null, 2)}`);

/*
wormhole.DataRetrieval.info().then(
  result => {
    console.log(result);
  },
  err => {
    console.log(err);
  }
);
*/

async function newAddress() {
  try {
    const options = {
      method: "GET",
      uri: `http://192.168.43.202:3000/v1/wallet/newAddress`,
      resolveWithFullResponse: true,
      json: true,
    };

    let result = await rp(options);
    console.log(`server returned: ${JSON.stringify(result, null, 2)}`);

    fs.writeFile("bch-test-address.txt", result.body, function(err) {
      if (err) {
        return console.error(err);
      }

      console.log(`bch-test-address.txt written successfully.`);
    });
  } catch (err) {
    console.error(`Error in newAddress: `, err);
    throw err;
  }
}
newAddress();
