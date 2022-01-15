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
      accounts: ['988def55eb3cbd451a2bd77dce508c4dc4e06fadc8801ad59b9492546dc295db']
    }
  }
};
