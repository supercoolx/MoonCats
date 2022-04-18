import React, { useState } from 'react'
import { isWeb3Enable, contract } from "../utils/web3"
import { useAuth } from '../context/AuthContext'

const MainPage = () => {
    const price = 2;
    const uri = 'https://gateway.ipfs.io/ipfs/QmR4PEH7LPZb6eSd8Yiy46mzHQjAXAimm6UE2mfqgyPq94';
    const { address } = useAuth();
    const [count, setCount] = useState(1);
    const handlePlus = () => setCount(count + 1);
    const handleMinus = () => count > 1 && setCount(count - 1);
    const mint = async () => {
        if(!isWeb3Enable) return alert("Please install metamask.");
        if(!address) return alert("Please login");
        console.log("address: " + address);
        await contract.methods.safeMint(address, uri).send({ from: address })
        .then((res) => alert('success'))
        .catch(err => console.log(err.message));
    }

    return (
        <div>
            {/* market grid */}
            <div className="max-w-[500px] text-white mx-auto border-8 border-blue-600 bg-blue-400 rounded-xl p-10 mt-5">
                <div className='text-3xl font-bold'>Mint your Mooncat now!</div>
                <div className='py-2 text-xl font-semibold'>Enter the amount of Mooncats you would like to mint.</div>
                <div className='py-3 bg-blue-600 rounded-lg'>
                    <div className='text-2xl text-center'>Price per Mooncat</div>
                    <div className='pt-2 text-4xl text-center'><span className='font-bold'>{price}</span> GLMR Each</div>
                </div>
                <div className='flex mt-3 h-[60px] text-3xl'>
                    <button onClick={handleMinus} className='flex-1 bg-blue-600 rounded-l-lg'>-</button>
                    <div className='w-[30%] bg-blue-600 flex items-center justify-center'>{count}</div>
                    <button onClick={handlePlus} className='flex-1 bg-blue-600 rounded-r-lg'>+</button>
                </div>
                <div className='flex items-center justify-between px-3 py-3 mt-3 bg-blue-600 rounded-lg'>
                    <div className='text-2xl'>Total</div>
                    <div className='text-3xl'>{count * price} GLMR</div>
                </div>
                <button onClick={mint} className='w-full py-3 mt-3 text-2xl bg-blue-600 rounded-lg'>MINT</button>
            </div>
        </div>
    )
}

export default MainPage;