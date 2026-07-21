import { type CSSProperties } from "react";
import {
  CheckMarkIcon,
  PointerCursorIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/assets/svgs";
import Image from "next/image";

import ubycohubTelegramTradeImgSrc from "@/assets/images/ubycohub-telegram-chat-shot.png";
import { NairaPayoutConfirmedAvatar } from "../NairaPayoutConfirmedAvatar";

export const CryptoTradingHowToSell = ({
  avatar = "/svgs/crypto-trade-verfication-ubycohub.svg",
  title = "How to Sell Crypto",
  stepTitle = "Send Crypto",
  stepDescription = "Send crypto only to the official wallet details provided by the trading desk.",
}) => {
  return (
    <div className="cryptoTrading__howToSell">
      <div className="container">
        <div className="section-intro">
          <h2 className="heading-2">{title}</h2>
          <p
            className="cryptoTrading__howToSell__p"
            style={{ "--section-intro-p-maxWidth": "420px" } as CSSProperties}
          >
            Ubycohub keeps the process simple. Start a chat, confirm your trade,
            and receive your payout.
          </p>
        </div>
        <div className="cryptoTrading__howToSell__stepsBlock">
          <ul className="cryptoTrading__howToSell__stepList">
            <li className="cryptoTrading__howToSell__stepItem stepCard">
              <div className="stepCard__avatarBg">
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
              <div className="stepCard__writeUp">
                <p className="textColor__red uppercase fw-500">step 01</p>
                <div>
                  <p>Start a Chat</p>
                  <p>Click WhatsApp or Telegram to speak with Ubycohub.</p>
                </div>
              </div>
            </li>

            <li className="cryptoTrading__howToSell__stepItem stepCard">
              <div className="stepCard__avatarBg">
                <div className="stepCard__avatarBg__imgBlock">
                  <Image src={ubycohubTelegramTradeImgSrc} alt="" />
                </div>
              </div>
              <div className="stepCard__writeUp">
                <p className="textColor__red uppercase fw-500">step 02</p>
                <div>
                  <p>Send Trade Details</p>
                  <p>
                    Tell us the crypto asset, amount, and preferred payout bank.
                  </p>
                </div>
              </div>
            </li>

            <li className="cryptoTrading__howToSell__stepItem stepCard">
              <div className="stepCard__avatarBg">
                <div className="rateConfirmed__illustration">
                  <div className="successCheck__redBg">
                    <CheckMarkIcon color="#FFFFFF" />
                  </div>
                  <div>
                    <div>
                      <span>Rate confirmed</span>
                      <Image
                        src="/svgs/handshake-emoji.svg"
                        alt=""
                        width={13}
                        height={13}
                      />
                    </div>
                    <span>You will receive ₦1,375 per 1 USDT</span>
                  </div>
                </div>
              </div>
              <div className="stepCard__writeUp">
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

            <li className="cryptoTrading__howToSell__stepItem stepCard">
              <div className="stepCard__avatarBg">
                <div className="stepCard__avatar__wallet">
                  <Image src={avatar} alt="" width={119} height={88} />
                </div>
              </div>
              <div className="stepCard__writeUp">
                <p className="textColor__red uppercase fw-500">step 04</p>
                <div>
                  <p>{stepTitle}</p>
                  <p>{stepDescription}</p>
                </div>
              </div>
            </li>
            <li className="cryptoTrading__howToSell__stepItem stepCard">
              <div className="stepCard__avatarBg">
                <NairaPayoutConfirmedAvatar />
              </div>
              <div className="howTradingWorks__stepItem__writeUp">
                <p className="textColor__red uppercase fw-500">step 05</p>
                <div>
                  <p>Receive Naira Payout</p>
                  <p>
                    Once confirmed and approved, your naira payout is processed.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
