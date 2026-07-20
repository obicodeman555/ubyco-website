import {
  CheckMarkIcon,
  HandShakeEmoji,
  NairaSignIllustration,
  PointerCursorIcon,
  TelegramIcon,
  TelegramTradePlatformShot,
  WhatsAppIcon,
} from "@/assets/svgs";

import { type CSSProperties } from "react";

export const HowTradingWorks = () => {
  return (
    <section className="howTradingWorks">
      <div className="container">
        <div className="section-intro">
          <h2 className="heading-2">How Trading Works</h2>
          <p
            className="text-muted"
            style={{ "--section-intro-p-maxWidth": "420px" } as CSSProperties}
          >
            Ubycohub keeps the process simple. Start a chat, confirm your trade,
            and receive your payout.
          </p>
        </div>
        <div className="howTradingWorks__stepsBlock">
          <ul className="howTradingWorks__stepList">
            <li className="howTradingWorks__stepItem">
              <div className="howTradingWorks__stepItem__avatarBg">
                <div className="tradeActions__nonInteractive">
                  <div>
                    <WhatsAppIcon />
                    <span>Trade on Whatsapp</span>
                  </div>
                  <div>
                    <TelegramIcon />
                    <span>Trade on Telegram</span>
                  </div>

                  <div>
                    <PointerCursorIcon />
                  </div>
                </div>
              </div>
              <div className="howTradingWorks__stepItem__writeUp">
                <p className="textColor__red uppercase fw-500">step 01</p>
                <div>
                  <p>Start a Chat</p>
                  <p>
                    Click Trade on WhatsApp or Trade on Telegram to speak
                    directly with the Ubycohub trading desk.
                  </p>
                </div>
              </div>
            </li>
            <li className="howTradingWorks__stepItem">
              <div className="howTradingWorks__stepItem__avatarBg">
                <div className="howTradingWorks__telegramShot">
                  <TelegramTradePlatformShot />
                </div>
              </div>
              <div className="howTradingWorks__stepItem__writeUp">
                <p className="textColor__red uppercase fw-500">step 02</p>
                <div>
                  <p>Send Trade Details</p>
                  <p>
                    Tell us what you want to sell, the amount, and any required
                    transaction or gift card details.
                  </p>
                </div>
              </div>
            </li>
            <li className="howTradingWorks__stepItem">
              <div className="howTradingWorks__stepItem__avatarBg">
                <div className="rateConfirmed__illustration">
                  <div className="successCheck__redBg">
                    <CheckMarkIcon color="#FFFFFF" />
                  </div>
                  <div>
                    <div>
                      <span>Rate confirmed</span>
                      <HandShakeEmoji />
                    </div>
                    <span>You will receive ₦1,375 per 1 USDT</span>
                  </div>
                </div>
              </div>
              <div className="howTradingWorks__stepItem__writeUp">
                <p className="textColor__red uppercase fw-500">step 03</p>
                <div>
                  <p>Confirm Rate and Instructions</p>
                  <p>
                    Our team confirms the current rate, gives you clear
                    instructions, and guides you through the trade.
                  </p>
                </div>
              </div>
            </li>
            <li className="howTradingWorks__stepItem">
              <div className="howTradingWorks__stepItem__avatarBg">
                <div className="payout__illustration">
                  <NairaSignIllustration />
                  <div>
                    <CheckMarkIcon color="#FF3155" />
                    <span>Payout confirmed</span>
                  </div>

                  <PointerCursorIcon />
                </div>
              </div>
              <div className="howTradingWorks__stepItem__writeUp">
                <p className="textColor__red uppercase fw-500">step 04</p>
                <div>
                  <p>Receive Naira Payout</p>
                  <p>
                    After confirmation and approval, your naira payout is
                    processed to your provided bank account.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
