import { ethers } from "hardhat";
import hre from "hardhat";

const polygon_chain_address: string = "12532609583862916517";
// const sender_contract_address: string = "0x0Fff7d9f7fB85C151C7B31B1107408758013c669";
const sender_contract_address: string = "0x7FC3E07C95fE20110446eE36d56580Dd5e77b63e";
const receiver_contract_address: string = "0xf7983514044EA57537006286b9A9fE9043AC5b4d";

const message_to_send: string = "Hello World! Again!";

const sendMessage = async () => {
  const [signer] = await ethers.getSigners();

  console.log("Using the account: ", await signer.getAddress());
  console.log("Sender contract address: ", sender_contract_address);

  console.log("Sending message to receiver contract present at address: ", receiver_contract_address);


  const sender_contract_factory = await ethers.getContractFactory("Sender", signer);

  const artifact = hre.artifacts.readArtifactSync("Sender");
  const sender_contract = new ethers.Contract(
    sender_contract_address,
    artifact.abi,
    signer
  );
  // let conn_sender_contract = sender_contract.connect(signer);

  const tx = await sender_contract.sendMessage(
    polygon_chain_address, // polygon mumbai chain address
    receiver_contract_address, // receiver address
    message_to_send // message to send
  );

  console.log(tx);
}

sendMessage();