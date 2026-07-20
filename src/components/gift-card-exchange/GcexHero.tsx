import Image from "next/image";

export const GcexHero = () => {
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
          <button type="button" className="btn-primary">
            Sell Gift Card on WhatsApp
          </button>
          <button type="button" className="btn-black">
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
