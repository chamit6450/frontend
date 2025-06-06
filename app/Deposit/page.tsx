// 'use client'
import DepositAssets from "./Deposit";
import MyBalance from "./Mybalance";
import Withdrawassets from "./Withdraw";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function DepositPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-000 w-full px-6 py-10 md:px-16 lg:px-32 font-[family-name:var(--font-geist-mono)]">
      {/* Page Description */}
      <div className="text-center mb-8 max-w-3xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
        Manage your digital assets <span className="text-blue-600">securely</span> and <span className="text-blue-600"> efficiently.</span> <br />
        Whether you're depositing ETH, withdrawing your funds, or checking your balance, everything is <span className="text-blue-600">seamless</span> and <span className="text-blue-600">transparent on-chain.</span>
      </div>

      {/* Balance Section */}
      {/* <div className="flex justify-center mb-6">
        <MyBalance />
      </div> */}

      {/* Actions Section */}
      <Tabs defaultValue="account" className="w-full max-w-5xl mx-auto">
        <TabsList className="mx-auto">
          <TabsTrigger value="account">Deposit</TabsTrigger>
          <TabsTrigger value="password">Withdraw</TabsTrigger>
        </TabsList>
        <TabsContent value="account"><DepositAssets /></TabsContent>
        <TabsContent value="password"><Withdrawassets /></TabsContent>
      </Tabs>
    </div>
  );
}