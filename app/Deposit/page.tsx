import DepositAssets from "./Deposit";
import MyBalance from "./Mybalance";
import Withdrawassets from "./Withdraw";
// import { UseTransactionHistory } from "./useTransactionHistory";
export default function Deposit(){
    return( 
        <>
        <MyBalance/>
         <DepositAssets/>
         <Withdrawassets/>
         {/* <UseTransactionHistory/> */}
        </> 
    );
}