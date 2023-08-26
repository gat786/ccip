import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/types";

require('dotenv').config();

const sepolia_url = process.env.SEPOLIA_URL || "";
const mumbai_url = process.env.MUMBAI_URL || "";

const private_key = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: sepolia_url,
      accounts: [ private_key ]
    },
    mumbai: {
      url: mumbai_url,
      accounts: [ private_key ]
    }
  }
};

export default config;
