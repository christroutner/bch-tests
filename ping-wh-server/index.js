const config = require("../config.js");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

wormhole.DataRetrieval.info().then(
  result => {
    console.log(result);
  },
  err => {
    console.log(err);
  }
);
