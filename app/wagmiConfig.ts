
import { WagmiProvider, createConfig, http ,useConnect, useAccount, useDisconnect, useBalance } from 'wagmi';

import { mainnet } from 'wagmi/chains';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http("https://eth-sepolia.g.alchemy.com/v2/moo1kSKljvytnlZewNBllrNgfLMszFsZ")
  }
});

export default config;