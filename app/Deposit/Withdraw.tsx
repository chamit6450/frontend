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
        <div className="w-1/3">
          <Card>
           <CardHeader>
             <CardTitle><Label>Withdraw</Label></CardTitle>
             <CardDescription>Withdraw your assets by submitting Specter tokens</CardDescription>
           </CardHeader>
           
           <CardContent>
                 <form onSubmit={submit} >
                  <Input placeholder="Enter value" onChange={(e)=>setAmt(e.target.value)}/><br></br>
                  <Button variant="outline" type="submit">Withdraw</Button>
                 {hash}
                 </form>
                 
           </CardContent>
       
         </Card>
         </div>
        </> 
    );
}