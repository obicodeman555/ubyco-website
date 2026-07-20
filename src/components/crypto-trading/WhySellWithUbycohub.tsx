import Image from "next/image";
import happyTradingCustomerSrc from "@/assets/images/happy-customer-trading.png";

export const WhySellWithUbycohub = () => {
  return (
    <section className="sectionBlock">
      <div className="container">
        <article className="bot__innerContent">
          <div className="wswu__contentBlock">
            <div className="wswu__contentBlock__inner">
              <h2 className="heading-2">Why Sell Crypto with Ubycohub?</h2>
              <ul className="bot__guideNumbering__list">
                <li>
                  <div>01</div>
                  <div>
                    <span>Fast Payout</span>
                    <span>Receive Naira after confirmation and approval</span>
                  </div>
                </li>
                <li>
                  <div>02</div>
                  <div>
                    <span>Clear Communication</span>
                    <span>Get direct guidance from a real team member</span>
                  </div>
                </li>
                <li>
                  <div>03</div>
                  <div>
                    <span>Secure Instructions</span>
                    <span>
                      Receive official trade instructions before sending funds
                    </span>
                  </div>
                </li>
                <li>
                  <div>04</div>
                  <div>
                    <span>No App Required</span>
                    <span>Trade directly through WhatsApp and Telegram</span>
                  </div>
                </li>
                <li>
                  <div>05</div>
                  <div>
                    <span>Business Friendly</span>
                    <span>Suitable for both small and large-volume trades</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="wswu__tradePlatfrom__imgBlock">
              <Image
                src={happyTradingCustomerSrc}
                alt="Happy Customer Trading With Ubycohub"
              />
            </div>
          </div>
          <div className="safetyNote__contentBlock">
            <div className="safetyNote__text">
              <span className="textColor__red">Safety Note:</span> Only trade
              through Ubycohub official contact channels listed on this website.
              Do not send crypto to any wallet address unless it is provided
              through our official trading desk during an active trade
              conversation.
            </div>
            <div className="safetyNote__ctas">
              <button type="button" className="btn-primary">
                Confirm Official Contact
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
