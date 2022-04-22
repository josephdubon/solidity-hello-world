async function main() {
    // A ContractFactory in ethers.js is an abstraction used to deploy new smart
    // contracts, so HelloWorld here is a factory for instances of our hello world contract.
    // When using the hardhat-ethers plugin ContractFactory and Contract, instances are connected
    // to the first signer (owner) by default.
    const HelloWorld = await ethers.getContractFactory('Hello World!')

    // Calling deploy() on a ContractFactory will start the deployment, and return a Promise that
    // resolves to a Contract object. This is the object that has a method for each of our smart contract functions.

    // Start deployment, returning a promise that resolves to a contract object.
    const hello_world = await HelloWorld.deploy('Hello world!')
    console.log('Contract deployed to address: ', hello_world.address)
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err)
        process.exit(1)
    })