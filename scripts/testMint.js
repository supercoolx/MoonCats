// nft contract address on ganache
existingContractAddr = '0x34172523984c68Ab5604DD11DaFDFE43B53f58D8'
mintAddr = '0x0Dc4eB60e1B69bB7974fFa7b2281E8F969e16eA5'

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