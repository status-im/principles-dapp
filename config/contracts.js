module.exports = {
  default: {
    library: 'embarkjs',  
    dappConnection: [
      "$EMBARK",
      "$WEB3",  // uses pre existing web3 object if available (e.g in Mist)
      "ws://localhost:8546",
      "http://localhost:8545"
    ],

    gas: "auto",
    strategy: 'explicit',

    deploy: {
      ENSRegistry: {},
      PublicResolver: {
        args: ["$ENSRegistry"]
      },
      StatusPrinciplesSigner: {
        args: [ "$ENSRegistry"]
      }
    }
  }

};
