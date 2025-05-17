'use client'
import { useReadContract, useAccount } from "wagmi";
import { formatEther } from "viem";
import ABI from './ABI';

export default function MyBalance() {
    const {address} = useAccount();
  const { data, isError, isLoading } = useReadContract({
    address: '0x1b70295f44e77a0a903ef60fd70608a028217a9c',
    abi: ABI,
    functionName: 'getBalance',
    account: address,
   
  });
const balance = data ? formatEther(BigInt(String(data))) : '0';
console.log(balance);
  return (
    <div>
      {isLoading && <p>Loading balance...</p>}
      {isError && <p>Error fetching balance</p>}
      {balance && (
        <p>
          Balance: {(balance)} ETH
          
        </p>
      )}
    </div>
  );
}
