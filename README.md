# bch-tests

This repository contains simple node.js apps for exercising the Wormhole SDK
endpoints discussed in this
[Wormhole Tutorial pt 3](https://developer.bitcoin.com/tutorials/wormhole-3-tokens.html).

- Each app can be installed with `npm install`
- Each app can be executed with `npm start`

These programs use my own hard-coded addresses. Replace them with your own BCH
test-net addresses. If you are following along in the tutorial, this is the
order the are presented in the tutorial:

- `ping-wh-server` - Ping the server running the Worhmole capable full node wallet.
- `generate-wh-addr` - Generate a new public address in your Wormhole wallet.
- `burn-bch` - Burn a BCH coin to generate 100 WHC tokens.
- `token-balance` - Check the balance of tokens associated with an address.
