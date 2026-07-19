import { ApexIcon } from "@/assets/svgs";
import footerDottedBg from "@/assets/images/footer-bg-patern.png";
import Image from "next/image";

export const AboutUsBanner = () => {
  return (
    <div className="aboutUs__banner">
      <div className="container">
        <div className="aboutUs__bannerContent">
          <div className="aboutUs__dottedBg">
            <Image src={footerDottedBg} alt="" />
          </div>
          <div className="about__bannerContent__writeUp">
            <div>
              <div>
                <h2 className="heading-2">Who We Serve</h2>
                <p>
                  Ubycohub serves individuals, vendors, merchants, gift card
                  sellers, crypto traders, and businesses that need a reliable
                  way to convert crypto or gift cards to naira.
                </p>
              </div>
              <button type="button" className="btn-primary">
                Speak to Our Trading Desk
              </button>
            </div>
            <ul>
              <li>
                <ApexIcon />
                <span>Individual crypto sellers</span>
              </li>
              <li>
                <ApexIcon />
                <span>Gift card sellers</span>
              </li>
              <li>
                <ApexIcon />
                <span>Vendors</span>
              </li>
              <li>
                <ApexIcon />
                <span>Online merchants</span>
              </li>
              <li>
                <ApexIcon />
                <span>High-volume traders</span>
              </li>
              <li>
                <ApexIcon />
                <span>Businesses needing crypto liquidation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
