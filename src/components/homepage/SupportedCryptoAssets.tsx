"use client";
import Image from "next/image";
import { type CSSProperties } from "react";
import { ApexIcon, DottedBackground } from "@/assets/svgs";
import Link from "next/link";

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
      </div>
      <div className="container">
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

      <div className="container">
        <div className="sca__bottomContent">
          <div className="sca__bottomContent__imgContainer">
            <Image
              src={"/svgs/satisfied-ubycohub-with-thumbs-up.svg"}
              alt="This reprsents a happy customer"
              width={507}
              height={584}
            />
          </div>
          <div className="sca__bottomContent__leftItem">
            <div className="dotBg__container">
              <DottedBackground />
            </div>
            <div className="sca__bottomContent__writeUp">
              <div className="sca__bottomContent__writeUp__heading">
                <h2 className="heading-2">
                  Built for Individuals and Businesses
                </h2>
                <p>
                  Businesses, vendors, merchants, and high-volume traders can
                  use Ubycohub for dedicated trading support, bulk crypto
                  liquidation, and reliable naira settlement.
                </p>
              </div>
              <ul className="sca__bottomContent__list">
                <li>
                  <ApexIcon />
                  <span>Dedicated trading support</span>
                </li>
                <li>
                  <ApexIcon />
                  <span>Bulk crypto liquidation</span>
                </li>
                <li>
                  <ApexIcon />
                  <span>Fast naira settlement</span>
                </li>
                <li>
                  <ApexIcon />
                  <span>Reliable communication</span>
                </li>
                <li>
                  <ApexIcon />
                  <span>Human-led transaction handling</span>
                </li>
                <li>
                  <ApexIcon />
                  <span>Suitable for merchants and vendors</span>
                </li>
              </ul>
              <Link href={""} className="btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
