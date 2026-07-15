import {
  AmazonIcon,
  AppleIcon,
  EbayIcon,
  NikeIcon,
  PlayStoreIcon,
  RaizerCode,
  SephoraIcon,
  SteamIcon,
  Vanilla,
  WalmartPayIcon,
} from "@/assets/svgs";
import { type CSSProperties } from "react";

export const PopularGCSupport = () => {
  return (
    <section className="contentBlock__main">
      <div className="container">
        <div className="gcSupport__innerContainer">
          <div className="section-intro">
            <h2 className="heading-2">Popular Gift Cards We Support</h2>
            <p
              className="text-muted"
              style={{ "--section-intro-p-maxWidth": "360px" } as CSSProperties}
            >
              Exchange popular gift cards for naira with a simple verification
              and payout process.
            </p>
          </div>
          <div className="gcSupport__contentBlock">
            <ul className="gcSupport__list">
              <li>
                <AppleIcon />
                <span>Apple/iTunes</span>
              </li>
              <li>
                <AmazonIcon />
                <span>Amazon</span>
              </li>
              <li>
                <SteamIcon />
                <span>Steam</span>
              </li>
              <li>
                <PlayStoreIcon />
                <span>Google Play</span>
              </li>
              <li>
                <SephoraIcon />
                <span>Sephora</span>
              </li>
              <li>
                <RaizerCode />
                <span>Razer Gold</span>
              </li>
              <li>
                <NikeIcon />
                <span>Nike</span>
              </li>
              <li>
                <WalmartPayIcon />
                <span>Walmart</span>
              </li>
              <li>
                <EbayIcon />
                <span>eBay</span>
              </li>
              <li>
                <Vanilla />
                <span>Vanilla</span>
              </li>
            </ul>
            <div className="sca__contentWriteUp">
              <span>
                <span className="textColor__red">Note:</span> Note: Gift card
                availability and rates may vary. Contact the trading desk to
                confirm the current rate before trading.
              </span>
              <button type="button" className="btn-primary">
                Ask for Crypto Rate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
