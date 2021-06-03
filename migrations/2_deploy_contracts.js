const Migrations = artifacts.require("BatchFlashDemo");

module.exports = async (deployer) => {
  await deployer.deploy(Migrations);
};
