import { useState } from 'react'
import { BrowserProvider } from 'ethers'

export async function connectWallet() {
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

}