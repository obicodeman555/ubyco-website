import Image from "next/image";
import smilingToPhone from "@/assets/images/man-looking-at-his-phone.png";
import { CheckMarkIcon, CurvedDottedArrow } from "@/assets/svgs";

export const AboutUsHero = ({
  handleWhatsAppClick,
  handleTelegramClick,
}: {
  handleTelegramClick: () => void;
  handleWhatsAppClick: () => void;
}) => {
  return (
    <div className="aboutUs__hero">
      <div className="container">
        <div className="aboutUs__heroContent">
          <div className="aboutUs__heroText">
            <h2 className="heading-2">
              Ubycohub is a <strong>trusted</strong> chat-based crypto and gift
              card trading desk helping individuals and businesses{" "}
              <strong>trade securely</strong>, communicate clearly, and receive{" "}
              <strong>fast naira payouts</strong>.
            </h2>
            <div className="aboutUs__hero__cta">
              <button className="btn-primary" onClick={handleWhatsAppClick}>
                Trade on WhatsApp
              </button>
              <button className="btn-black" onClick={handleTelegramClick}>
                Trade on Telegram
              </button>
            </div>
          </div>
          <div className="aboutUs__heroImage">
            <Image
              src={smilingToPhone}
              alt="This represent a customer smiling due to his satisfaction with ubycohub trade"
              width={298}
              height={404}
            />
            <div className="nonInteractive__pill">
              <CheckMarkIcon color="#22C55E" />
              <span>Payout confirmed</span>
            </div>
            <div className="curvedDottedArrow">
              <CurvedDottedArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
