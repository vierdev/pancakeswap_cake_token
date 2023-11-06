require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    // hardhat: {
    //   blockGasLimit: 352450000,
    //   allowUnlimitedContractSize: true
    // },
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: ["11edce40dee3d6bae7b74b7a217144a9ba4eea3876d89d791cf4a8a91f0102cd",],
      chainId: 5
    },
    // mumbai: {
    //   url: process.env.MUMBAI_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    mainnet: {
      url: "https://eth.llamarpc.com",
      accounts: ["3d21f5aea1f4277cfedd71862a89586df380736d1e36d36c4c49818205ef51be",],
      chainId: 1
    },
    // polygon: {
    //   url: process.env.POLYGON_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 137
    // },
    ecreditsTestnet: {
      url: "https://rpc.tst.ecredits.com",
      accounts: ["11edce40dee3d6bae7b74b7a217144a9ba4eea3876d89d791cf4a8a91f0102cd",],
      gasPrice: 21000000000
    }
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY
    },
  },
};
