"use client";
import { ForBusinessHero } from "@/components/for-business";
import { SecurePaymentIcon } from "@/assets/svgs";
import Image from "next/image";
import {
  trackLead,
  trackTelegramClick,
  trackWhatsappClick,
} from "@/utils/analytics";

const Business = () => {
  const handleWhatsAppClick = () => {
    trackWhatsappClick("For Business Page");
    trackLead();
  };
  const handleTelegramClick = () => {
    trackTelegramClick("For Business Page");
    trackLead();
  };
  return (
    <article className="articleBlock__main">
      <ForBusinessHero />
      <div className="articleBlock__container">
        <section className="articleBlock__introText">
          <div className="articleBlock__content">
            <div className="articleBlock__writeUp">
              <h2>Reliable Trading Desk for Business Needs</h2>
              <p>
                Businesses need speed, clarity, and accountability when
                converting digital assets to naira. Ubycohub gives business
                customers access to a dedicated chat-based trading desk that
                supports larger trade conversations, clear settlement
                communication, and reliable payout handling.
              </p>
            </div>
          </div>
        </section>
        <section className="wgyChooseUs__giftCardSection__modifier">
          <article className="articleBlock__contentContainer">
            <div className="whyChooseUs__intro section-intro">
              <h2 className="heading-2">Who We Support</h2>
            </div>

            <ul className="articleBlock__grid whyChooseUs__list">
              <li className="whyChooseUs__listItem">
                <div className="whyChooseUs__listItem__icon">
                  <SecurePaymentIcon color="#FF3155" />
                </div>
                <div>
                  <h4 className="heading-4">Merchant</h4>
                  <p className="text-muted-v2">
                    Businesses receiving crypto from customers and needing naira
                    settlement
                  </p>
                </div>
              </li>
              <li className="whyChooseUs__listItem">
                <div className="whyChooseUs__listItem__icon">
                  <SecurePaymentIcon color="#F97316" />
                </div>
                <div>
                  <h4 className="heading-4">Vendors</h4>
                  <p className="text-muted-v2">
                    Sellers and service providers who needs fast conversion
                  </p>
                </div>
              </li>
              <li className="whyChooseUs__listItem">
                <div className="whyChooseUs__listItem__icon">
                  <SecurePaymentIcon />
                </div>
                <div>
                  <h4 className="heading-4">High-Volume Traders</h4>
                  <p className="text-muted-v2">
                    Traders handling larger crypto or gift card volume
                  </p>
                </div>
              </li>
              <li className="whyChooseUs__listItem">
                <div className="whyChooseUs__listItem__icon">
                  <SecurePaymentIcon color="#84CC16" />
                </div>
                <div>
                  <h4 className="heading-4">Online Businesses</h4>
                  <p className="text-muted-v2">
                    Digital businesses that require flexible assets conversion
                  </p>
                </div>
              </li>
              <li className="whyChooseUs__listItem">
                <div className="whyChooseUs__listItem__icon">
                  <SecurePaymentIcon color="#0EA5E9" />
                </div>
                <div>
                  <h4 className="heading-4">Corporate Clients</h4>
                  <p className="text-muted-v2">
                    <span>
                      Organisations that need structured communication and
                      reliable trading support
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </section>
        <section className="">
          <div className="articleBlock__contentContainer articleBlock__contentContainer__col">
            <div className="wswu__contentBlock__inner">
              <h2 className="heading-2">Why Businesses Choose Ubycohub</h2>
              <ul className="bot__guideNumbering__list">
                <li>
                  <div>01</div>
                  <div>
                    <span>Dedicated Support</span>
                    <span>
                      Business customers can speak directly with the trading
                      desk for smoother execution.
                    </span>
                  </div>
                </li>
                <li>
                  <div>02</div>
                  <div>
                    <span>Bulk Trade Handling</span>
                    <span>
                      Suitable for larger crypto and gift card trades.
                    </span>
                  </div>
                </li>
                <li>
                  <div>03</div>
                  <div>
                    <span>Fast Settlement</span>
                    <span>
                      Receive naira payout after confirmation and approval.
                    </span>
                  </div>
                </li>
                <li>
                  <div>04</div>
                  <div>
                    <span>Clear Communication</span>
                    <span>Get direct updates from a human team.</span>
                  </div>
                </li>
                <li>
                  <div>05</div>
                  <div>
                    <span>Trusted Process</span>
                    <span>
                      Each trade follows a clear and accountable process.
                    </span>
                  </div>
                </li>
                <li>
                  <div>06</div>
                  <div>
                    <span>Flexible Trading Channels</span>
                    <span>
                      Trade through WhatsApp or Telegram using official
                      channels.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="articleBlock__main__modifier">
              <Image
                src={"/svgs/business-handshake-ubycohub.svg"}
                alt="Happy Customer Trading With Ubycohub"
                width={468}
                height={546}
              />
            </div>
          </div>
        </section>
        <section className="">
          <div className="articleBlock__contentContainer articleBlock__contentContainer__stack">
            <h2 className="heading-2">How Business Trading Works</h2>
            <div className="articleBlock__contentGrid">
              <div className="articleBlock__contentGrid__item">
                <div>
                  <span>step 01</span>
                  <span>Contact the Business Desk</span>
                  <span>Reach out through WhatsApp or Telegram.</span>
                </div>
              </div>

              <div className="articleBlock__contentGrid__item">
                <div>
                  <span>step 02</span>
                  <span>Share Trade Requirement</span>
                  <span>
                    Tell us the asset, volume, and settlement preference.
                  </span>
                </div>
              </div>
              <div className="articleBlock__contentGrid__item">
                <div>
                  <span>step 03</span>
                  <span>Confirm Rate and Terms</span>
                  <span>
                    Our team confirms current rate, process, and required
                    details.
                  </span>
                </div>
              </div>
              <div className="articleBlock__contentGrid__item">
                <div>
                  <span>step 04</span>
                  <span>Execute Trade</span>
                  <span>
                    Follow official instructions from the trading desk.
                  </span>
                </div>
              </div>
              <div className="articleBlock__contentGrid__item">
                <div>
                  <span>step 05</span>
                  <span>Receive Settlement</span>
                  <span>
                    After confirmation and approval, payout is processed.
                  </span>
                </div>
              </div>
            </div>
            <div className="articleBlock__cta">
              <p>
                Need a Reliable Trading Desk for Your Business? Speak to
                Ubycohub and get direct support for your business trading needs.
              </p>
              <div className="articleBlock__cta__items">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleWhatsAppClick}
                >
                  Contact us on WhatsApp
                </button>
                <button
                  type="button"
                  className="btn-black"
                  onClick={handleTelegramClick}
                >
                  Contact us on Telegram
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Business;
