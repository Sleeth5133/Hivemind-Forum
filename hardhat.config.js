require("@nomicfoundation/hardhat-toolbox")
require('dotenv').config()

module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_RPC || "https://rpc-mumbai.matic.today",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}