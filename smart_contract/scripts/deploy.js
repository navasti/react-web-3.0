const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transcations = await Transactions.deploy();

  await transcations.deployed();

  console.log("Transactions deployed to:", transcations.address);
};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
