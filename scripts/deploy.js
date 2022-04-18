// this script deploys the NFT contract to DApps host (alchemy infura)
async function main() {

    // grab the NFT contract
    const contract = await hre.ethers.getContractFactory("MyToken");
    
    // deploy the contract with await 
    const nft = await contract.deploy();
  
    // confirm deployment
    await nft.deployed();
    
    // log the address of the deployed contract
    console.log("contract deployed to:", nft.address);
    console.log(
        `The transaction that was sent to the network to deploy the Contract: ${
            nft.deployTransaction.hash
        }`
    );
}


// contract deployed to
// rinkeby: 



// run the main function
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});