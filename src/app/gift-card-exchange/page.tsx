"use client";

import { CryptoTradingHowToSell } from "@/components";
import {
  GcexHero,
  GcexTransparentBanner,
  GiftCardWeSupport,
  WhyUseUbycohubForGiftCards,
} from "@/components/gift-card-exchange";
import { trackViewContent } from "@/utils/analytics";

import { useEffect } from "react";

const GiftCardExchange = () => {
  useEffect(() => {
    trackViewContent("Gift Card Exchange");
  }, []);
  return (
    <div className="gcex__mainBlock">
      <GcexHero />
      <GcexTransparentBanner />
      <GiftCardWeSupport />
      <CryptoTradingHowToSell
        avatar="/svgs/verified-certified-giftcard.svg"
        title="How to Sell Gift Cards"
        stepTitle="Verification"
        stepDescription="The gift card is checked and verified"
      />
      <WhyUseUbycohubForGiftCards />
    </div>
  );
};

export default GiftCardExchange;
