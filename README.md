# bch-tests

This repository contains simple node.js apps for exercising the Wormhole SDK
endpoints discussed in this
[Wormhole Tutorial pt 3](https://developer.bitcoin.com/tutorials/wormhole-3-tokens.html).
Before being able to use the code in this repository, you need to follow the steps
in [part 1](https://developer.bitcoin.com/tutorials/wormhole-1-setup.html)
and [part 2](https://developer.bitcoin.com/tutorials/wormhole-2-full-node.html)
to set up your own Wormhole-enabled Bitcoin Cash full node.

- Install dependencies by running `npm install`
- Each app can be executed by entering its directory and executing it with `npm start`

These programs use my own hard-coded addresses. Replace them with your own BCH
test-net addresses. If you are following along in the tutorial, this is the
order the are presented in the tutorial:

- `ping-wh-server` - Ping the server running the Worhmole capable full node wallet.
- `generate-wh-addr` - Generate a new public address in your Wormhole wallet.
  Send test BCH to this address using [a faucet](https://testnet.manu.backend.hamburg/bitcoin-cash-faucet).
  You'll need to wait for 6? confirmations before continuing.
- `burn-bch` - Burn a BCH coin to generate 100 WHC tokens. (not working)
- `token-balance` - Check the balance of tokens associated with an address.
- `create-managed-token` - Create a new 'managed' token.
- `token-info-from-tx` - Get token info (propertyId) from the tx returned by `create-managed-token`
- `token-info-from-propertyid` - Get additional token info from the propertyId assigned to a token.
- `issue-new-tokens` - Issue new tokens to a BCH address.
