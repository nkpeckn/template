import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url:
          "https://eth-mainnet.alchemyapi.io/v2/" +
          "bTl8tvtB9tZ0tyaJ74WoovJgXh0L9wOe",
      },
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.1",
  },
};

export default config;
