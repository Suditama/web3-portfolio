'use client'

import { connectWallet } from '@/lib/wallet'
import { FaWallet } from 'react-icons/fa'
import { useState } from 'react'

export default function WalletButton() {

  
    const [isConnected, setIsConnected] = useState(false);

   const connectWallet = async () => {
    const wr = "are you sure you want to connect wallet";
    const metamask = "https://metamask.io/";

    if (window.confirm(wr)) {
        window.open(metamask);
        setIsConnected(true);
    } else {
        setIsConnected(false);
    }
   }

   
  return (
  <div>
            <button className="bg-purple-500 hover:bg-purple-700 cursor-pointer text-white font-bold py-2 px-4 rounded  " onClick={connectWallet}>
                {isConnected ? "Connected" : "Connect Wallet"}
            </button>
        </div>
  )
}
