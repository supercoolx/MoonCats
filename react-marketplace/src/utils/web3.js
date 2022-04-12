import Web3 from "web3";
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from './ABI'

export const isWeb3Enable = !!window.ethereum;

const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS);

export const switchNetwork = (chainId) => {
    return web3.eth.net.getId().then(id => {
        if (id === chainId) return null;
        else return window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: Web3.utils.toHex(chainId) }],
        });
    })
}

export default web3;