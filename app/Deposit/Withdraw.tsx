'use client'
import { useWriteContract } from "wagmi";
import { parseEther } from 'viem';
import ABI from './ABI';
import { useState } from "react";

import { ArrowRight, Wallet, Coins, BarChart3 } from 'lucide-react';
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
import MyBalance from "./Mybalance";


export default function WithdrawAssets(){

   const {data: hash, writeContract} = useWriteContract(); 
   const [amt,setAmt]  = useState('');
    const ethValue = parseEther(amt);
   async function submit(e: React.FormEvent<HTMLFormElement>){
     e.preventDefault();
      writeContract({
        address:'0x1b70295f44e77a0a903ef60fd70608a028217a9c',
        abi:ABI,
        functionName: 'withdrawAssets',
        args: [ethValue]
      })
   }
    return( 
        <>
        <div className="w-1/2">
           <Card className=" bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                 
           <CardHeader>
             <CardTitle>
              <div className="flex">
              <Label className="text-lg">
                <Coins className="w-6 h-6 text-blue-600" />
                Withdraw
                </Label>
              <div className="absolute right-8"><MyBalance/></div>
              </div>
              </CardTitle>
             <CardDescription>Withdraw your assets by submitting Specter tokens</CardDescription>
           </CardHeader>
           
           <CardContent>
                 <form onSubmit={submit} >
                  <Input placeholder="Enter value" onChange={(e)=>setAmt(e.target.value)}/><br></br>
                  <Button className="cursor-pointer" variant="outline" type="submit">Withdraw</Button>
                 {hash}
                 </form>
                 
           </CardContent>
       <CardFooter className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
       Return your tokens to redeem and withdraw your original ETH securely and transparently.
        </CardFooter>
         </Card>
         </div>
        </> 
    );
}