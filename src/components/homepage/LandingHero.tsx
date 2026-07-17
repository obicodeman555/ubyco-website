import Image from "next/image";
import {
  TelegramIconV2,
  TradePlatformScreenShot,
  WhatAppIconV2,
} from "@/assets/svgs";
import heroFooterImage1 from "@/assets/images/circled-frame-man-illustrator.png";
import heroFooterImage2 from "@/assets/images/circled-frame-woman-illustration.png";
import heroFooterImage3 from "@/assets/images/circled-frame-dreadlocked-man.png";
import coinGroup from "@/assets/images/coin-group-img.png";
export const LandingHero = () => {
  return (
    <div className="ubycohub__landingHero">
      <div className="ubycohub__landingHero__inner container">
        <TradePlatformScreenShot />
        <article className="ubycohub__landingHero__writeUp">
          <div className="ubycohub__landingHero__largeText">
            <div>Fast, Secure Crypto & Gift Card</div>
            <div>
              <span>Trading Through</span>

              <span>
                <WhatAppIconV2 />
                <TelegramIconV2 />
              </span>
              <span>WhatsApp</span>
            </div>
            <div>and Telegram</div>
          </div>
          <p>
            Ubycohub helps individuals and businesses sell crypto and gift cards
            securely, receive fast naira payouts, and trade directly with a real
            human support team through WhatsApp or Telegram.
          </p>

          <div className="ubycohub__landingHero__cta">
            <button className="btn-primary">Trade on WhatsApp</button>
            <button className="btn-black">Trade on Telegram</button>
          </div>
        </article>

        <ul className="stackReviewIllustration">
          <li>
            <span>
              <Image src={heroFooterImage1} alt="" />
            </span>
            <span>Trusted for fast crypto & gift card trades.</span>
          </li>
          <li>
            <span>
              <Image src={heroFooterImage2} alt="" />
            </span>
          </li>
          <li>
            <span>
              <Image src={heroFooterImage3} alt="" />
            </span>
          </li>
        </ul>
      </div>

      <div className="ubycohub__landingHero__extras bitcoinBlurred">
        <div className="bitcoinBlurred__img">
          <Image src={coinGroup} alt="" width={200} />
        </div>
      </div>
      <div className="ubycohub__landingHero__extras trionBlurred">
        <div className="trionBlurred__img">
          <Image src={coinGroup} alt="" width={200} />
        </div>
      </div>
    </div>
  );
};
