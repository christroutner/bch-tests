// wormholecash version 0.5.3
let Wormhole = require("wormholecash/lib/Wormhole").default;
//let wormhole = new Wormhole({ restURL: `http://localhost:3000/v1/` });
let wormhole = new Wormhole({ restURL: `http://trest.bitcoin.com/v1/` });

const util = require("util");
util.inspect.defaultOptions = {
  showHidden: true,
  colors: true
};

console.log(`Wormhole: ${util.inspect(Wormhole)}`);
//console.log(`wormhole.Address: ${util.inspect(wormhole.Address)}`);
console.log(`wormhole: ${util.inspect(wormhole)}`);

/*
Output:
  Wormhole: { [Function: Wormhole]
  [length]: 1,
  [name]: 'Wormhole',
  [prototype]: Wormhole { [constructor]: [Circular] } }

  wormhole.Address: Address { restURL: 'http://trest.bitcoin.com/v1/' }
*/
