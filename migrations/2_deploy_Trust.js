const Users = artifacts.require("./Users.sol");

module.exports = (deployer, networks, accounts) => {
    deployer.deploy(Users);
}