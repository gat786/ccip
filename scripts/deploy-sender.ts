
import hre from "hardhat";
import { ethers } from "hardhat";

import env_exports from "./exports";

const router  = env_exports.sender_router_address;
const link    = env_exports.sender_link_address;

async function main() {
  const [ deployer ] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await hre.ethers.deployContract("Sender", [ router, link ], deployer);

  console.log("Sender address:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
