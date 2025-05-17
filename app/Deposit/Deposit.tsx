'use client'
import { useWriteContract } from "wagmi";
import { parseEther } from 'viem';
import ABI from './ABI';
import { useState } from "react";

export default function DepositAssets(){

   const {data: hash, writeContract} = useWriteContract(); 
   const [amt,setAmt]  = useState('');
    const ethValue = parseEther(amt);
   async function submit(e: React.FormEvent<HTMLFormElement>){
     e.preventDefault();
      writeContract({
        address:'0x1b70295f44e77a0a903ef60fd70608a028217a9c',
        abi:ABI,
        functionName: 'depositAssets',
        value: ethValue
      })
   }
    return( 
        <>
        <form onSubmit={submit} >
         <input placeholder="Enter value" onChange={(e)=>setAmt(e.target.value)}/><br></br>
         <button>Deposit</button><br></br>
         </form>
        </> 
    );
}