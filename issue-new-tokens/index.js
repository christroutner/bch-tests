/*
  BCH_ISSUER_ADDR is either the address with the ability to issue new tokens or
  the address that posseses tokens and can send them.

  It takes at least 1 confirmation before transaction will show up with
  token-info-from-propertyid or token-balance.
*/

const config = require("../config.js");

let Wormhole = require("wormholecash/lib/Wormhole").default;
let wormhole = new Wormhole(config);

const BCH_ISSUER_ADDR = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;
const BCH_RECIEVER = `bchtest:qq26vgef48hg26e666qtkvthjsmt4z6phyw5mgltlr`;
const propertyId = 186;

async function issueToken() {
  const retVal = await wormhole.Transaction.grant(
    BCH_ISSUER_ADDR,
    BCH_RECIEVER,
    propertyId,
    "14",
    "test memo"
  );

  console.log(`Tokens issues. TXID: ${retVal}`);
}
issueToken();

// Tokens issues. TXID: b702c048bca0cb0e1765de3a4eb23f39b9f671f7e71d2090d54912229b6ecb6c
