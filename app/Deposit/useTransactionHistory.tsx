// import { useEffect, useState } from 'react';
// import { useAccount, usePublicClient } from 'wagmi';
// import { parseAbiItem } from 'viem';

// const DepositedEvent = parseAbiItem(
//   'event Deposited(address indexed user, uint256 amount)'
// );

// interface DepositedLog {
//   args: {
//     user: `0x${string}`;
//   };
//   blockNumber: bigint;
//   transactionHash: `0x${string}`;
// }

// export function UseTransactionHistory() {
//   const { address } = useAccount();
//   const publicClient = usePublicClient();
//   const [history, setHistory] = useState<DepositedLog[]>([]);
 
//   useEffect(() => {
//     async function fetchLogs() {
//       if (!address || !publicClient) return;

//       try {
//         const logs = await publicClient.getLogs({
//           address: '0x40c76059e8cbfe021494c5603ed666d200ebac63',
//           event: DepositedEvent, // Specify the parsed event
//           args: { user: address }, // Filter by user address
//           fromBlock: BigInt(0),
//           toBlock: 'latest',
//         });

//         setHistory(logs.reverse());
//       } catch (error) {
//         console.error('Failed to fetch logs:', error);
//       }
//     }

//     fetchLogs();
//   }, [address, publicClient]);

//   return history;
// }