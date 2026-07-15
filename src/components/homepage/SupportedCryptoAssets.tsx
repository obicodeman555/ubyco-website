import { CryptoAssestsIllustration } from "@/assets/svgs/ubyco-custom/CryptoAssestsIllustration";
import { type CSSProperties } from "react";

export const SupportedCryptoAssets = () => {
  return (
    <section className="sca__mainBlock">
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
            <CryptoAssestsIllustration />
          </div>
          <div className="sca__contentWriteUp">
            <span>
              <span className="textColor__red">Note:</span> Supported assets may
              change based on availability. Contact the trading desk for the
              current supported list and rates.
            </span>
            <button type="button" className="btn-primary">
              Ask for Crypto Rate
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
