"use client";

import {
  BuiltOnTrust,
  FAQs,
  HowTradingWorks,
  LandingHero,
  PopularGCSupport,
  SupportedCryptoAssets,
  TradeWithConfidence,
  WhyChooseUbycohub,
} from "@/components";
import {
  trackLead,
  trackTelegramClick,
  trackViewContent,
  trackWhatsappClick,
} from "@/utils/analytics";
import { useEffect } from "react";

export default function Home() {
  const handleWhatsAppClick = () => {
    trackWhatsappClick();
    trackLead();
  };
  const handleTelegramClick = () => {
    trackTelegramClick("Home page");
    trackLead();
  };

  useEffect(() => {
    trackViewContent("Home page");
  }, []);
  return (
    <main className="ubycohub__landingContents">
      <LandingHero />
      <TradeWithConfidence />
      <WhyChooseUbycohub />
      <HowTradingWorks />
      <SupportedCryptoAssets />
      <PopularGCSupport />
      <BuiltOnTrust
        handleTelegramClick={handleTelegramClick}
        handleWhatsAppClick={handleWhatsAppClick}
      />
      <FAQs />
    </main>
  );
}
