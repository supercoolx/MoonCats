// nft contract address on ganache
existingContractAddr = '0x38B3cd90D2C0AC3573E3377910254772E1F07259'
mintAddr = '0x77D33Bbb1Cc538355D91C29183Bfe7e39191113F'

async function main() {

  // grab the NFT contract
  const nft = await hre.ethers.getContractAt("WavyNFT", existingContractAddr)

  // get account 0 from the blockchain provider
  const signer0 = await ethers.provider.getSigner(0)

  // get the nounce from account 0
  const nonce = await signer0.getTransactionCount()


  // mint token 1,2,3
  for (let i = 1; i <= 3; i++) {
    await nft.awardItem(
      mintAddr, 
      `127.0.0.1:3000/${i}`,
      {nonce: nonce + i - 1}
    )
  }
  

}




// run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});