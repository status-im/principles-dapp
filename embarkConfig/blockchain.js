module.exports = {
  default: {
    enabled: true,
    client: "geth" 
  },

  development: {
    client: 'ganache-cli',
    clientConfig: {
      miningMode: 'dev' 
    }
  },


  testnet: {
    networkType: "testnet", 
    syncMode: "light",
    accounts: [
      {
        nodeAccounts: true,
        password: "embarkConfig/testnet/password"
      }
    ]
  },

  livenet: {
    networkType: "livenet",
    syncMode: "light",
    accounts: [
      {
        nodeAccounts: true,
        password: "embarkConfig/livenet/password"
      }
    ]
  }

};
