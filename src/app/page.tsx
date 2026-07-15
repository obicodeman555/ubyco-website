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

export default function Home() {
  return (
    <main className="ubycohub__landingContents">
      <LandingHero />
      <TradeWithConfidence />
      <WhyChooseUbycohub />
      <HowTradingWorks />
      <SupportedCryptoAssets />
      <PopularGCSupport />
      <BuiltOnTrust />
      <FAQs />
    </main>
  );
}
