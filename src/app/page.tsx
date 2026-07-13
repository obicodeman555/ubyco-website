import {
  LandingHero,
  TradeWithConfidence,
  WhyChooseUbycohub,
} from "@/components";

export default function Home() {
  return (
    <main className="ubycohub__landingContents">
      <LandingHero />
      <TradeWithConfidence />
      <WhyChooseUbycohub />
    </main>
  );
}
