'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import BlockchainCard from "./HomeText";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Coins, BarChart3 } from 'lucide-react';

export default function Homepage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <main className="min-h-screen bg-zinc-100 text-gray-900 p-6 lg:p-20 font-[family-name:var(--font-geist-mono)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BlockchainCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-20 mt-16"
        >
          <div className="flex justify-center mb-12">
            <Separator className="w-full max-w-xl bg-blue-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {[
              {
                title: "Deposit ETH",
                description: "Get tokenized instantly upon deposit.",
                content: "Deposit ETH to receive equivalent tokens, enabling you to unlock DeFi utility while securing your assets.",
                icon: <Wallet className="w-6 h-6 text-blue-600" />,
                href: "/Deposit"
              },
              {
                title: "Withdraw ETH",
                description: "Return tokens to withdraw your original assets.",
                content: "Return your tokens and withdraw your original ETH, instantly and trustlessly on-chain.",
                icon: <Coins className="w-6 h-6 text-blue-600" />,
                href: "/Deposit"
              },
              {
                title: "Check Balance",
                description: "Track your token-backed ETH holdings.",
                content: "Instantly check how much tokenized ETH you hold — with full transparency and zero middlemen.",
                icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                href: "/Deposit"
              },
              {
                title: "Bridge (Coming Soon)",
                description: "Transfer assets across chains — seamlessly.",
                content: "Soon you'll be able to move your ETH and tokens across chains securely — no central custodians required.",
                // icon: <Bridge className="w-6 h-6 text-blue-600" />,
                href: "/"
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <Link href={card.href}>
                  <Card className="h-52 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                          {card.title}
                        </CardTitle>
                        <CardDescription className="text-blue-600/80">
                          {card.description}
                        </CardDescription>
                      </div>
                      {card.icon}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {card.content}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
