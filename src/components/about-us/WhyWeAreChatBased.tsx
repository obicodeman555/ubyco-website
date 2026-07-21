import Link from "next/link";
import Image from "next/image";
import telegramPlatformShot from "@/assets/images/ubycohub-telegram-chat-shot.png";

export const WhyWeAreChatBased = () => {
  return (
    <div className="aboutUs__chatBased">
      <div className="container">
        <div className="aboutUs__chatBased__content">
          <div className="aboutUs__chatBased__text">
            <div>
              <h2 className="heading-2">Why We Are Chat-Based</h2>
              <p>
                Many customers want <strong>speed</strong> and{" "}
                <strong>trust</strong>, not complicated dashboards.{" "}
              </p>
            </div>
            <p>
              Ubycohub is designed around direct communication because trading
              sensitive assets requires clarity, support, and accountability.
            </p>
            <p>
              Through WhatsApp and Telegram, customers can ask questions,
              confirm rates, receive instructions, and complete trades with real
              human assistance.
            </p>
            <Link href="" className="btn-primary">
              Contact Us
            </Link>
          </div>
          <div className="aboutUs__chatBased__imgShot">
            <Image src={telegramPlatformShot} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
