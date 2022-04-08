// this script mints NFT tokens and give them to target account

// array of accounts to mint to
const accounts = [
    "0x0Dc7a9023527a40AD30e115A7882D669E78271D7"
];

// address of existing NFT contract deployed
const existingContractAddr = "";

// mint function
async function main() {

  // grab the NFT contract
  const nft = await hre.ethers.getContractAt("MoonCats", existingContractAddr);

  // get account 0 from the blockchain provider
  const signer0 = await ethers.provider.getSigner(0);

  // get the nounce from account 0
  const nonce = await signer0.getTransactionCount();

  // loop all accounts
  for(let i = 0; i < accounts.length; i++) {

    // token json object URI uploaded to public free IPFS
    const tokenURI = "https://gateway.ipfs.io/ipfs/QmR4PEH7LPZb6eSd8Yiy46mzHQjAXAimm6UE2mfqgyPq94";
    
    // mint nft to all the accounts in the list
    await nft.awardItem(
      accounts[i], 
      tokenURI,
      {nonce: nonce + i}
    )
  
  }

  console.log("Minting is complete!");
}


// run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});