router = '0xD0daae2231E9CB96b94C8512223533293C3693Bf'
link = '0x779877A7B0D9E8603169DdbD7836e478b4624789'

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("Sender", [router, link]);

  console.log("Sender address:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });