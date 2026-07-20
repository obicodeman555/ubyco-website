import {
  CryptoTradingHero,
  CryptoTradingBanner,
  CryptoTradingSupportedAssets,
  CryptoTradingHowToSell,
  WhySellWithUbycohub,
} from "@/components";

const CryptoTrading = () => {
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
