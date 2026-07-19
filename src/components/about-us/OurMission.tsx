import Image from "next/image";
import trionCoin from "@/assets/images/trion.png";
import tetherCoin from "@/assets/images/tether.png";

export const OurMission = () => {
  return (
    <div className="aboutUs__mission">
      <div className="container">
        <div className="aboutUs__missionContent">
          <div className="aboutUs__missionContent__innerContainer">
            <div className="aboutUs__mission__text">
              <h2 className="heading-2">Our Mission</h2>
              <p>
                Our mission is to make crypto and gift card trading easier,
                safer, and more accessible for individuals and businesses in
                Nigeria. We want every customer to feel supported, informed, and
                confident from the beginning of a trade to final payout.
              </p>
            </div>
            <div className="aboutUs__whoWeAre__text">
              <h2 className="heading-2">Who We Are</h2>
              <p>
                Ubycohub is a human-led trading desk built for people who want a
                simpler and more reliable way to sell crypto and gift cards for
                naira. Instead of forcing users through a complicated app or
                confusing exchange dashboard, Ubycohub gives customers direct
                access to a real trading team through WhatsApp and Telegram
              </p>
              <p>
                <span>Our approach is simple:</span>{" "}
                <strong>clear communication</strong>,{" "}
                <strong>secure transaction handling</strong>, and{" "}
                <strong>fast payout</strong> after confirmation.
              </p>
            </div>
          </div>

          <div className="tetherBlurred__img">
            <Image src={tetherCoin} alt="" />
          </div>

          <div className="tetherV2Blurred__img">
            <Image src={trionCoin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
