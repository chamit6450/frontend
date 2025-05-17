'use client'
import { useWriteContract } from "wagmi";
import { parseEther } from 'viem';
import ABI from './ABI';
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"


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
        <div className="w-1/3">
          <Card>
  <CardHeader>
    <CardTitle><Label>Deposit</Label></CardTitle>
    <CardDescription>One step closer to decentralization. Deposit ETH today.</CardDescription>
  </CardHeader>
  
  <CardContent>
        <form onSubmit={submit} >
         <Input placeholder="Enter value" onChange={(e)=>setAmt(e.target.value)}/><br></br>
         <Button variant="outline" type="submit">Deposit</Button>
        {hash}
        </form>
        
  </CardContent>
  
    
 
  
</Card>

</div>

        </> 
    );
}