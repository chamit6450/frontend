'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import BlockchainCard from "./HomeText";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Homepage() {
  return (
    <main className="min-h-screen bg-zinc-100 text-gray-900 p-6 lg:p-20 font-[family-name:var(--font-geist-mono)] flex flex-col gap-12 items-center">
     <BlockchainCard/>
     <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }} 
        className="relative z-20 mt-16"
      >
     
      <div className="flex justify-center mb-8">
  <Separator className="w-full max-w-xl" />
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl ">
       <Link href="/Deposit">
        <Card className="h-52 shadow-sm hover:shadow-md transition transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
          <CardHeader>
            <CardTitle>Deposit ETH</CardTitle>
            <CardDescription>Get tokenized instantly upon deposit.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm"> Deposit ETH to receive equivalent tokens, enabling you to unlock DeFi utility while securing your assets.
    </p>
          </CardContent>
        </Card>
        </Link>
       
       <Link href="/Deposit">
        <Card className="h-52 shadow-sm hover:shadow-md transition transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
          <CardHeader>
            <CardTitle>Withdraw ETH</CardTitle>
            <CardDescription>Return tokens to withdraw your original assets.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm"> Return your tokens and withdraw your original ETH, instantly and trustlessly on-chain.
       </p>
          </CardContent>
        </Card>
        </Link>

      <Link href="/Deposit">
        <Card className="h-52 shadow-sm hover:shadow-md transition transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
          <CardHeader>
            <CardTitle>Check Balance</CardTitle>
            <CardDescription>Track your token-backed ETH holdings.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm"> Instantly check how much tokenized ETH you hold — with full transparency and zero middlemen.
      </p>
          </CardContent>
        </Card>
        </Link>
      <Link href="/">
        <Card className="h-52 shadow-sm hover:shadow-md transition transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
          <CardHeader>
            <CardTitle>Bridge (Coming Soon)</CardTitle>
            <CardDescription>Transfer assets across chains — seamlessly.</CardDescription>
          </CardHeader>
          <CardContent>
           <p className="text-sm"> Soon you'll be able to move your ETH and tokens across chains securely — no central custodians required.
       </p>
       
          </CardContent>
        </Card>
        </Link>


 
      </div>
     </motion.div>
    </main>
  );
}
