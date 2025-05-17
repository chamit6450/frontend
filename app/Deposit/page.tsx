import DepositAssets from "./Deposit";
import MyBalance from "./Mybalance";
import Withdrawassets from "./Withdraw";
// import { UseTransactionHistory } from "./useTransactionHistory";
export default function Deposit(){
    return (
        <>
  <div className="m-8">
      <MyBalance />
      </div>
    <div className="flex flex-col md:flex-row gap-6 justify-center start p-6 w-full">
      <DepositAssets />
      <Withdrawassets />
    </div>
  </>
);

}