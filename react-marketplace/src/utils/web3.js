import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from './ABI'
import { Networks } from './NetConfig';

const web3 = new Web3(window.ethereum);
const netConfig = Networks.MoonbaseAlpha;
export const configureMoonbeam = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });
    if (provider) {
        try {
            const accouts = await provider.request({ method: "eth_requestAccounts"});
            await provider.request(netConfig);
            web3.eth.net.getId().then(id => {
                if (id === netConfig.params.chainId) return null;
                else return window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(id) }],
                });
            })
            return accouts;
        } catch(e) {
            console.error(e);
        }
    } else {
        alert("Please install MetaMask");
    }
}
export const isWeb3Enable = !!window.ethereum;
export const contract = new web3.eth.Contract(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS);

export default web3;