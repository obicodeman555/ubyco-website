"use client";

import {
  CryptoTradingHero,
  CryptoTradingBanner,
  CryptoTradingSupportedAssets,
  CryptoTradingHowToSell,
  WhySellWithUbycohub,
} from "@/components";

import { trackViewContent } from "@/utils/analytics";

import { useEffect } from "react";

const CryptoTrading = () => {
  useEffect(() => {
    trackViewContent("Crypto Trading");
  }, []);

  return (
    <div className="cryptoTrading__mainBlock">
      <CryptoTradingHero />
      <CryptoTradingBanner />
      <CryptoTradingSupportedAssets />
      <CryptoTradingHowToSell />
      <WhySellWithUbycohub />
    </div>
  );
};

export default CryptoTrading;
