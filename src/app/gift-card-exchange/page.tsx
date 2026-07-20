import { CryptoTradingHowToSell } from "@/components";
import {
  GcexHero,
  GcexTransparentBanner,
  GiftCardWeSupport,
  WhyUseUbycohubForGiftCards,
} from "@/components/gift-card-exchange";

const GiftCardExchange = () => {
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
