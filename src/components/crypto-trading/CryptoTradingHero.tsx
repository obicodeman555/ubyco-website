import { CryptoCoinGroup } from "@/assets/svgs";
import Image from "next/image";
import cryptoTradingHeroImgSrc from "@/assets/images/hands-with-a-phone.png";

export const CryptoTradingHero = () => {
  return (
    <div className="cryptoTrading__hero">
      <div className="cryptoTrading__heroContainer">
        <div className="cryptoTrading__heroWriteUp">
          <h2>
            <span>Sell Crypto for Naira with</span>
            <span>Ubycohub</span>
          </h2>
          <p>
            Ubycohub helps individuals and businesses sell crypto and gift cards
            securely, receive fast naira payouts, and trade directly with a real
            human support team through WhatsApp or Telegram.
          </p>
          <div className="cryptoTradingHero__ctas">
            <button type="button" className="btn-primary">
              Sell Crypto on WhatsApp
            </button>
            <button type="button" className="btn-black">
              Sell Crypto on Telegram
            </button>
          </div>
        </div>
        <div className="cryptoTrading__hero__coinGroup">
          <CryptoCoinGroup />
        </div>
        <div className="cryptoHero__imgBlock">
          <Image src={cryptoTradingHeroImgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};
