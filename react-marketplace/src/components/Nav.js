import { configureMoonbeam } from "../utils/web3";
import { useAuth } from './../context/AuthContext'

const Nav = () => {
    const { address, setAddress } = useAuth();

    const connectMetamask = () => {
        // if(!isWeb3Enable) return alert('Please install metamask');
        if(address) return setAddress(null);
        configureMoonbeam()
        // .then(() => web3.eth.requestAccounts())
        .then(users => users[0])
        .then(user => setAddress(user))
        .catch(err => alert(err.message));
    }

    return (
        <div className='flex items-center justify-between px-10 py-2 bg-black'>
            <div className='text-xl text-white'>NFT Marketplace</div>
            <button onClick={connectMetamask} className='px-3 py-1 text-lg text-white border-2 border-white rounded-full'>{address ? address.substring(0, 6) + '...' + address.substring(address.length - 4) : 'Connect Wallet'}</button>
        </div>
    )
}

export default Nav;