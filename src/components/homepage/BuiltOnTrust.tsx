import { TradePlatformScreenShotV3 } from "@/assets/svgs";

export const BuiltOnTrust = () => {
  return (
    <section className="sectionBlock">
      <div className="container">
        <article className="bot__innerContent">
          <div className="bot__definitionContent">
            <div>
              <h2 className="heading-2">Trade with a Desk Built on Trust</h2>
              <ul className="bot__guideNumbering__list">
                <li>
                  <div>01</div>
                  <div>
                    <span>Clear Instructions</span>
                    <span>
                      Every customer receives proper guidance before sending
                      crypto or gift card information.
                    </span>
                  </div>
                </li>
                <li>
                  <div>02</div>
                  <div>
                    <span>Transaction Confirmation</span>
                    <span>
                      Trades are checked and confirmed before payout is
                      processed.
                    </span>
                  </div>
                </li>
                <li>
                  <div>03</div>
                  <div>
                    <span>Human Accountability</span>
                    <span>
                      You speak directly with a real support team, making it
                      easier to ask questions and resolve issues.
                    </span>
                  </div>
                </li>
                <li>
                  <div>04</div>
                  <div>
                    <span>Secure Communication</span>
                    <span>
                      We use official communication channels to help customers
                      avoid impersonation and confusion.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bot__tradePlatfrom__imgBlock">
              <div>
                <TradePlatformScreenShotV3 />
              </div>
            </div>
          </div>
          <div className="safetyNote__contentBlock">
            <div className="safetyNote__text">
              <span className="textColor__red">Safety Note:</span> Always
              confirm you are speaking with Ubycohub through our official
              WhatsApp, Telegram, and social media channels listed on this
              website.
            </div>
            <div className="safetyNote__ctas">
              <button type="button" className="btn-primary">
                Trade on WhatsApp
              </button>
              <button type="button" className="btn-black">
                Trade on Telegram
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
