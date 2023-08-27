import { ethers } from "hardhat";
import hre from "hardhat";

import { ethers as eth } from "ethers";
// import { TransactionResponse } from "@ethersproject/abstract-provider";

const destination_chain_id = eth.getBigInt("12532609583862916517");
// const sender_contract_address: string = "0x0Fff7d9f7fB85C151C7B31B1107408758013c669";
const sender_contract_address: string = eth.getAddress("0x7FC3E07C95fE20110446eE36d56580Dd5e77b63e");
const receiver_contract_address: string = eth.getAddress("0xf7983514044EA57537006286b9A9fE9043AC5b4d");


const receive_message = async () => {
  const [signer] = await ethers.getSigners();
  const artifact = hre.artifacts.readArtifactSync("Receiver");
  
  const contract = await ethers.getContractAt(artifact.abi, receiver_contract_address, signer);

  const tx = await contract.getLastReceivedMessageDetails();

  console.log("Last received message details: ");
  console.log(tx);
}

receive_message();