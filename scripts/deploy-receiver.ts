import { ethers } from "hardhat";

import env_exports from "./exports";

const router = env_exports.receiver_router_address;

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("Receiver", [ router ]);

  console.log("Receiver address:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
