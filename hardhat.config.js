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
      accounts: ['3f5d293783c959fac63ccff8cf4e7800bc8bec60edc7246ed98a8bc16405344c']
    }
  }
};
