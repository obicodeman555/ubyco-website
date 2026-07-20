import { CustomShape } from "@/assets/svgs";

export const CryptoTradingBanner = () => {
  return (
    <div className="cryptoTradingBanner">
      <div className="cryptoTradingBanner__content">
        <p>
          Ubycohub makes it easy to sell crypto and receive naira without
          dealing with confusing exchange dashboards or slow support.
        </p>
        <p>
          Start a chat with our trading desk, confirm the current rate, follow
          the trade instructions, and receive your naira payout after
          confirmation.
        </p>
        <div className="cryptoTradingBanner__art">
          <CustomShape />
        </div>
      </div>
    </div>
  );
};
