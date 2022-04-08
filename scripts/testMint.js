// nft contract address on ganache
existingContractAddr = '0xe88d7e578Adec63119678b3b0a1759B539Dc151d'
mintAddr = '0x0Dc7a9023527a40AD30e115A7882D669E78271D7'

async function main() {

  // grab the NFT contract
  const nft = await hre.ethers.getContractAt("WavyNFT", existingContractAddr)

  // get account 0 from the blockchain provider
  const signer0 = await ethers.provider.getSigner(0)

  // get the nounce from account 0
  const nonce = await signer0.getTransactionCount()


  // mint token 1,2,3
  // assuming the express js server runs on port 3001
  for (let i = 1; i <= 3; i++) {
    await nft.awardItem(
      mintAddr, 
      `127.0.0.1:3001/${i}`,
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