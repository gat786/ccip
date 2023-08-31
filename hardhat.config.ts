import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/types";

require('dotenv').config();

const sender_url = process.env.SENDER_URL || "";
const receiver_url = process.env.RECEIVER_URL || "";

const private_key = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sender: {
      url: sender_url,
      accounts: [ private_key ]
    },
    receiver: {
      url: receiver_url,
      accounts: [ private_key ]
    }
  }
};

export default config;
