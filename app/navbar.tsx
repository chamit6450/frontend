'use client';
import { useState } from 'react';
import { WagmiProvider, createConfig, http ,useConnect, useAccount, useDisconnect, useBalance } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet } from 'wagmi/chains';

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"


const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http("https://eth-sepolia.g.alchemy.com/v2/moo1kSKljvytnlZewNBllrNgfLMszFsZ")
  }
});
const queryClient = new QueryClient();

export default function Navbar() {
  return (
    <header className="flex bg-zinc-100 h-20 w-full shrink-0 items-center px-4 md:px-6 shadow-sm">
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="Deposit"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Account
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="Bridge"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Bridge
              </Link>
            </NavigationMenuLink>
            
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
     
    <div className='inline-block float-right mr-12'>
     <WagmiProvider config = {config}>
        <QueryClientProvider client={queryClient}>
            <WalletConnect/>
        </QueryClientProvider>
     </WagmiProvider> 
    </div>

    </header>
  )
}

function WalletConnect(){
     const { connectors, connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState(false);

  const { data: balance, isLoading } = useBalance({
    address,
  });

  const toggleDropdown = () => setOpen(!open);

  if (isConnected) {
    return (
      <div className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
        <div className="text-sm text-right">
          <p className="text-gray-200">{balance?.formatted.slice(0, 6)} {balance?.symbol}</p>
          <p className="text-xs text-gray-400">{address?.slice(0, 6)}...{address?.slice(-4)}</p>
        </div>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2 text-sm font-semibold text-white bg-red-600/80 rounded hover:bg-red-700 transition"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        onClick={toggleDropdown}
        className="connect-wallet-btn cursor-pointer"
      >
        Connect Wallet
      </Button>

      {open && (
        <div className="absolute left-0 right-0 mt-2 w-full rounded-lg shadow-lg bg-gray-900/95 z-10 overflow-hidden">
          <div className="py-1">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => {
                  connect({ connector });
                  setOpen(false);
                }}
                className="w-full cursor-pointer px-4 py-3 text-sm text-gray-200 text-left flex items-center gap-2 bg-black hover:bg-gray-800 transition"

              >
                <span className="w-2 h-2 "></span>
                {connector.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

