// import "../styles/globals.css";
// import toast, { Toaster } from "react-hot-toast";
// import merge from "lodash.merge";
// import "@rainbow-me/rainbowkit/styles.css";
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   darkTheme,
//   midnightTheme,
// } from "@rainbow-me/rainbowkit";
// import {
//   chain,
//   configureChains,
//   createClient,
//   WagmiConfig,
// } from "wagmi";
// import { http } from "viem";

// import { useEffect, useState } from "react";

// // NETWORK SETUP
// const HOLESKY = process.env.NEXT_PUBLIC_HOLESKY_RPC_URL;
// const EXPLORER = process.env.NEXT_PUBLIC_EXPLORER;
// const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
// const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
// const DECIMALS = process.env.NEXT_PUBLIC_NETWORK_DECIMALS;
// const NAME = process.env.NEXT_PUBLIC_NETWORK_NAME;
// const NETWORK = process.env.NEXT_PUBLIC_NETWORK;
// const WC_PROJECT_ID = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

// const { chains, provider } = configureChains(
//   [
//     {
//       id: Number(CHAIN_ID),
//       name: NAME,
//       network: NETWORK,
//       nativeCurrency: {
//         name: NAME,
//         symbol: CURRENCY,
//         decimals: Number(DECIMALS),
//       },
//       rpcUrls: {
//         default: { http: [`${HOLESKY}`] },
//         public: { http: [`${HOLESKY}`] },
//       },
//       blockExplorers: {
//         default: {
//           name: "Holescan",
//           url: EXPLORER,
//         },
//       },
//       testnet: true,
//     },
//   ],
// +  [http(`${HOLESKY}`)]
// );

// const { connectors } = getDefaultWallets({
//   appName: "StakingDapp",
//   projectId: WC_PROJECT_ID,
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

// const myTheme = merge(midnightTheme(), {
//   colors: {
//     accentColor: "#562C7B",
//     accentColorForeground: "#fff",
//   },
// });

// export default function App({ Component, pageProps }) {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true); // ✅ Delay hydration to client
//   }, []);

//   if (!isMounted) return null; // ❗️Avoid rendering until client mount

//   return (
//     <>
//       <WagmiConfig client={wagmiClient}>
//         <RainbowKitProvider chains={chains} theme={myTheme}>
//           <Component {...pageProps} />
//           <Toaster />
//         </RainbowKitProvider>
//       </WagmiConfig>

//     </>
//   );
// }

import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import merge from "lodash.merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { WagmiConfig, createConfig } from "wagmi";
import { http } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// ENV variables
const HOLESKY = process.env.NEXT_PUBLIC_HOLESKY_RPC_URL;
const EXPLORER = process.env.NEXT_PUBLIC_EXPLORER;
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
const DECIMALS = process.env.NEXT_PUBLIC_NETWORK_DECIMALS;
const NAME = process.env.NEXT_PUBLIC_NETWORK_NAME;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;
const WC_PROJECT_ID = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

// ✅ Define Holesky custom chain
const customChain = {
  id: Number(CHAIN_ID),
  name: NAME,
  network: NETWORK,
  nativeCurrency: {
    name: NAME,
    symbol: CURRENCY,
    decimals: Number(DECIMALS),
  },
  rpcUrls: {
    default: { http: [HOLESKY] },
    public: { http: [HOLESKY] },
  },
  blockExplorers: {
    default: {
      name: "Holescan",
      url: EXPLORER,
    },
  },
  testnet: true,
};

// ✅ Wallet connectors
const { connectors } = getDefaultWallets({
  appName: "StakingDapp",
  projectId: WC_PROJECT_ID,
  chains: [customChain],
});

// ✅ wagmi v2 config
const config = createConfig({
  autoConnect: true,
  connectors,
  chains: [customChain],
  transports: {
    [customChain.id]: http(HOLESKY),
  },
});

// React Query client (needed for wagmi v2)
const queryClient = new QueryClient();

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#562C7B",
    accentColorForeground: "#fff",
  },
});

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={[customChain]} theme={myTheme}>
            <Component {...pageProps} />
            <Toaster />
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>

      {/* Optional JS scripts */}
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/smooth-scrollbar.js"></script>
      <script src="js/splide.min.js"></script>
      <script src="js/three.min.js"></script>
      <script src="js/vanta.fog.min.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}
