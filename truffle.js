
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "avocado armed also position solution total token maze deny neutral bless share";

module.exports = {
  networks:{
    development : {
      host:"localhost",
      port:"8545",
      network_id:"*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/QWMgExFuGzhpu2jUr6Pq",0,9)
      },
      network_id: 3,
      gas: 4712388
  
    }
  }
};
