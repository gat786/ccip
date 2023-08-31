import { ethers } from "hardhat";
import hre from "hardhat";

import { ethers as eth } from "ethers";

import env_exports from "./exports";
// import { TransactionResponse } from "@ethersproject/abstract-provider";

const destination_chain_id = eth.getBigInt(env_exports.destination_chain_id);
// const sender_contract_address: string = "0x0Fff7d9f7fB85C151C7B31B1107408758013c669";
const sender_contract_address: string = eth.getAddress(env_exports.sender_contract_address);
const receiver_contract_address: string = eth.getAddress(env_exports.receiver_contract_address);

const message_to_send: string = "Lightweight Baby!";

const sendMessage = async () => {
  const [signer] = await ethers.getSigners();
  console.log("Using the account: ", await signer.getAddress());
  console.log("Sender contract address: ", sender_contract_address);

  console.log("Receiver present at address: ", receiver_contract_address);

  const artifact = hre.artifacts.readArtifactSync("Sender");

  const contract = await ethers.getContractAt(artifact.abi, sender_contract_address, signer);

  // console.log(contract);

  try{
    const tx = await contract.sendMessage(
      destination_chain_id,
      receiver_contract_address, 
      message_to_send
    );
    
    console.log("Message sent!");
    console.log("Transaction hash: ", tx.hash);
    console.log("Check current status of the transaction here: https://ccip.chain.link/tx/" + tx.hash)
  } catch (e) {
    console.log(e);
  }
}

sendMessage();
