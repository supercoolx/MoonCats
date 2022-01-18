/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();


module.exports = {
  solidity: "0.8.7",
  networks:{
    ganache: {
      url:"http://127.0.0.1:7545",
      accounts: ['5c7db4585a9ac3b32286f5d2f93509ca83a0a18e4fbad4a66897e5d71df9e9ed']
    }
  }
};
