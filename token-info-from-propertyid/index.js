const config = require("../config.js");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const propertyId = 186;

async function getTokenInfo() {
  const retVal = await wormhole.DataRetrieval.property(propertyId);

  console.log(
    `Info from token with propertyId of ${propertyId}: ${JSON.stringify(
      retVal,
      null,
      2
    )}`
  );
}
getTokenInfo();
