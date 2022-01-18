// nft contract address on ganache
existingContractAddr = '0x97aAA1B324b89F854Ef6b5c861ee8B074F0D339a'
mintAddr = '0xD576b9353b5B4d7b03D72e0015a665b6811ede04'

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