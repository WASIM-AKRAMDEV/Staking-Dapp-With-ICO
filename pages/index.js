import React from "react";
import { useAccount } from "wagmi";

// INTERNAL IMPORT
import {
  Header,
  HeroSection,
  Footer,
  Pools,
  PoolsModel,
  WithdrawModal,
  Withdraw,
  Partners,
  Statistics,
  Token,
  Loader,
  Notification,
  ICOSale,
  Contact,
  Ask,
} from "../Components/index";

import {
  CONTRACT_DATA,
  deposit,
  withdraw,
  claimReward,
  addTokenMetaMask,
} from "../Context/index";
const Index = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Index;
