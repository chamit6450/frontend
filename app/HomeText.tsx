'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface Block {
  id: number;
  initialX: number;
  initialY: number;
}

export default function BlockchainCard() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const newBlocks: Block[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      initialX: (Math.random() - 0.5) * 200, 
      initialY: (Math.random() - 0.5) * 200, 
    }));
    setBlocks(newBlocks);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Blockchain Blocks */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {blocks.map((block) => (
          <motion.div
            key={block.id}
            className="w-8 h-8 bg-blue-600 rounded-sm shadow-md"
            initial={{ x: block.initialX, y: block.initialY, opacity: 0, rotate: 45 }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
              scale: [1, 1.2, 1], // Pulse effect
            }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              delay: block.id * 0.2, // Staggered animation
              scale: { duration: 1, repeat: Infinity, repeatType: 'loop' },
            }}
          />
        ))}
      </div>

      {/* Card Component */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }} 
        className="relative z-20 mt-16"
      >
        <Card className="shadow-md border-gray-200">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-center">
              Welcome to the Future of <span className="text-blue-600">Decentralized Banking</span>
            </CardTitle>
            <CardDescription className="text-center pt-2">
              Effortlessly deposit ETH, earn tokens, and manage your digital assets with ease.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </div>
  );
}