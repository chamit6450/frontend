import DepositAssets from "./Deposit";
import MyBalance from "./Mybalance";
import Withdrawassets from "./Withdraw";

export default function DepositPage() {
  return (
    <div className="min-h-screen bg-zinc-100 w-full px-6 py-10 md:px-16 lg:px-32 font-[family-name:var(--font-geist-mono)]">
      
      {/* Page Description */}
      <div className="text-center mb-8 max-w-3xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
        Manage your digital assets <span className="text-blue-600">securely</span> and <span className="text-blue-600"> efficiently.</span> <br />
        Whether you're depositing ETH, withdrawing your funds, or checking your balance, everything is <span className="text-blue-600">seamless</span> and <span className="text-blue-600">transparent on-chain.</span>
      </div>

      {/* Balance Section */}
      <div className="flex justify-center mb-6">
        <MyBalance />
      </div>

      {/* Actions Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full">
        <DepositAssets />
        <Withdrawassets />
      </div>
    
    </div>
  );
}
