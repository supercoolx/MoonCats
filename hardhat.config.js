/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv" ).config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const API_KEY = process.env.API_KEY || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""; // well known private key


module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.7",
  networks:{
    // ganache: {
    //   url:"http://127.0.0.1:7545",
    //   accounts: ['5c7db4585a9ac3b32286f5d2f93509ca83a0a18e4fbad4a66897e5d71df9e9ed']
    // },
    moonbasealpha: {
      url: `https://rpc.testnet.moonbeam.network`,
      chainId: 1287,
      accounts: [PRIVATE_KEY]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${API_KEY}`,
      accounts: [PRIVATE_KEY]
    } 
  }
};
