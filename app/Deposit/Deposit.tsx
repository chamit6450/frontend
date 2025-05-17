'use client'
import { useWriteContract } from "wagmi";
import { parseEther } from 'viem';
import ABI from './ABI';
import { useState } from "react";
import { Wallet } from 'lucide-react';
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
        <div className="w-1/2">
   <Card className="bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                 
  <CardHeader>
    <CardTitle><Label className="text-lg"><Wallet className="w-6 h-6 text-blue-600" />Deposit</Label></CardTitle>
    <CardDescription>One step closer to decentralization. Deposit ETH today.</CardDescription>
  </CardHeader>
  
  <CardContent>
        <form onSubmit={submit} >
         <Input placeholder="Enter value" onChange={(e)=>setAmt(e.target.value)}/><br></br>
         <Button className="cursor-pointer" variant="outline" type="submit">Deposit</Button>
        {hash}
        </form>
        
  </CardContent>
     <CardFooter className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
      Deposit your ETH safely and instantly receive tokens that represent your deposited assets on the blockchain.
      </CardFooter>
</Card>

</div>

        </> 
    );
}