import {
  HowTradingWorks,
  LandingHero,
  SupportedCryptoAssets,
  TradeWithConfidence,
  WhyChooseUbycohub,
} from "@/components";

export default function Home() {
  return (
    <main className="ubycohub__landingContents">
      <LandingHero />
      <TradeWithConfidence />
      <WhyChooseUbycohub />
      <HowTradingWorks />
      <SupportedCryptoAssets />
    </main>
  );
}
