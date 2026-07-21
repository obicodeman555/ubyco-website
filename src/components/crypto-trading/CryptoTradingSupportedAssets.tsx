import { type CSSProperties } from "react";
import Image from "next/image";

export const CryptoTradingSupportedAssets = () => {
  return (
    <div className="cryptoTrading__supportedAssests">
      <div className="container">
        <div className="section-intro">
          <h2 className="heading-2">Supported Crypto Assets</h2>
          <p
            className="text-muted"
            style={{ "--section-intro-p-maxWidth": "360px" } as CSSProperties}
          >
            Sell popular crypto assets for naira through our trusted trading
            desk.
          </p>
        </div>
        <article className="sca__contentBlock">
          <div className="sca__contentAvatar">
            <Image
              src="/svgs/ubycohub-supported-crypto-assets.svg"
              alt=""
              width={1240}
              height={360}
            />
          </div>
          <div className="sca__contentWriteUp">
            <span>
              <span className="textColor__red">Note:</span> Contact the trading
              desk to confirm available assets and current rates before sending
              funds.
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};
