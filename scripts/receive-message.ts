import { ethers } from "hardhat";
import hre from "hardhat";

import { ethers as eth } from "ethers";
import env_exports from "./exports";

const receiver_contract_address: string = eth.getAddress(env_exports.receiver_contract_address);


const receive_message = async () => {
  const [ signer ] = await ethers.getSigners();
  const artifact = hre.artifacts.readArtifactSync("Receiver");
  
  const contract = await ethers.getContractAt(artifact.abi, receiver_contract_address, signer);

  const tx = await contract.getLastReceivedMessageDetails();

  console.log("Last received message details: ");
  console.log(`Transaction id: ${tx[0]}`);
  console.log(`Message Received: ${tx[1]}`);
  console.log(`View Txn details here: https://ccip.chain.link/msg/${tx[0]}`);
}

receive_message();
