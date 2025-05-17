'use client';

import { useReadContract, useAccount } from "wagmi";
import { formatEther } from "viem";
import ABI from './ABI';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

export default function MyBalance() {
  const { address } = useAccount();

  const { data, isError, isLoading } = useReadContract({
    address: '0x1b70295f44e77a0a903ef60fd70608a028217a9c',
    abi: ABI,
    functionName: 'getBalance',
    account: address,
  });

  const balance = data ? formatEther(BigInt(String(data)))  : '0';

   return (
    <Card>
      
      <CardContent>
        {isLoading && (
          <Skeleton className="w-[140px] h-[24px] rounded-full" />
        )}
        {!isLoading && balance && (
          <p className="text-sm font-mono text-gray-800">
            My balance: {balance} ETH
          </p>
        )}
        {isError && (
          <p className="text-red-500">Error fetching balance</p>
        )}
      </CardContent>
    </Card>
  );
}
