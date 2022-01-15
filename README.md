## :earth_americas: Start express.js server (on port 3001)
```
- cd server
- npm i
- npm start
- http://127.0.0.1:3001/1 should gives metadata for token #1 
```




## :crystal_ball: Deploying contract and mint test tokens
```
- open ganache desktop client (or cli) and run quick start
- open remix IDE (web app or VSCode plugin) and connect to ganache
- compile and deploy contract
- copy the contract address on ganache network and replace existingContractAddr in testMint.js
- make sure the ganache RPC server address matches the "networks.ganache.url" in hardhat.config.js
- copy and paste ganache account 0 private key to "accounts" in hardhat.config.js
- cd to project root
- npm i
- npx hardhat compile (optional, run if error with getting artifact)
- npx hardhat run scripts/testMint.js --network ganache
```




## :rocket: Start react.js client app 
```
- change the NFT_CONTRACT_ADDRESS in ContractData.js to the deployed contract address
- cd to react-marketplace in project root
- npm i
- npm start
```
