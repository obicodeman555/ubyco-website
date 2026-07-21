"use client";
import {
  trackLead,
  trackTelegramClick,
  trackWhatsappClick,
} from "@/utils/analytics";
import Image from "next/image";
import { useCallback } from "react";

export const GcexHero = () => {
  const WHATSAPP_URL = "";
  const TELEGRAM_URL = "";

  const handleTrade = useCallback((platform: "whatsapp" | "telegram") => {
    trackLead();

    if (platform === "whatsapp") {
      trackWhatsappClick("Gift Card Hero");

      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    } else {
      trackTelegramClick("Gift Card Hero");

      window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <div className="gcexHero">
      <div className="cryptoTrading__heroWriteUp">
        <h2>
          <span>Sell Gift Cards for Naira</span>
        </h2>
        <p>
          Exchange popular gift cards with Ubycohub and receive naira after
          verification and approval through our trusted chat-based trading desk.
        </p>
        <div className="cryptoTradingHero__ctas">
          <button
            type="button"
            className="btn-primary"
            onClick={() => handleTrade("whatsapp")}
          >
            Sell Gift Card on WhatsApp
          </button>
          <button
            type="button"
            className="btn-black"
            onClick={() => handleTrade("telegram")}
          >
            Sell Gift Card on Telegram
          </button>
        </div>
      </div>
      <div className="gcexHero__bottom">
        <span>popular gift cards we accept</span>
        <div className="gcexHero__cardLogo">
          <Image
            src={"/svgs/popular-gift-cards.svg"}
            alt="This represents group of gift cards"
            width={286}
            height={111}
          />
        </div>
      </div>
    </div>
  );
};
