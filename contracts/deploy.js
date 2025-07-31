const hre = require("hardhat");

async function main() {
  const Hive = await hre.ethers.getContractFactory("HiveReputation");
  const hive = await Hive.deploy();
  await hive.deployed();
  console.log("✅ HiveReputation deployed to:", hive.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});