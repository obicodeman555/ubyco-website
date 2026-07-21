import Image from "next/image";
import { LinkedInIcon, XIcon, InstagramIcon, TikTok } from "@/assets/svgs";
import heroFooterImage1 from "@/assets/images/circled-frame-man-illustrator.png";
import heroFooterImage2 from "@/assets/images/circled-frame-woman-illustration.png";
import heroFooterImage3 from "@/assets/images/circled-frame-dreadlocked-man.png";
import footerBottomImage from "@/assets/images/hand-holding-device-to-trade.png";
import Link from "next/link";
import footerDottedBg from "@/assets/images/footer-bg-patern.png";
import { Logo, LogoV2 } from "./Logo";

export const Footer = () => {
  return (
    <footer className="ubycohubFooter">
      <div className="ubycohubFooter__dottedBg">
        <Image src={footerDottedBg} alt="" width={1440} height={1328} />
      </div>
      <div className="ubycohubFooter__contentBlock">
        <div className="container">
          <div className="ubycohubFooter__cta">
            <ul className="footerIllustration stackReviewIllustration">
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
            <div className="ubycohubFooter__cta__text">
              <h1>Ready to Trade with Ubycohub?</h1>
              <p>
                Start a secure chat with our trading desk and get assisted by a
                real team member.
              </p>
            </div>
            <div className="ubycohubFooter__cta__buttons">
              <button type="button" className="btn-white">
                Trade on WhatsApp
              </button>
              <button type="button" className="btn-black">
                Trade on Telegram
              </button>
            </div>
          </div>
        </div>
        {/***White background with border radius containing the entire nav and other illustrations */}
        <nav className="ubycohubFooter__navigationBlock">
          <div className="ubycohubFooter__navigationItems">
            <div>
              <div className="ubycohub__logoVariants">
                <Logo />
                <LogoV2 />
              </div>
              <span>
                Ubycohub is a trusted chat-based crypto and gift card trading
                desk helping individuals and businesses trade securely with fast
                naira payouts and real human support.
              </span>
              <span>&copy; Ubycohub 2026 | Alrights Reserved.</span>
            </div>
            <div className="ubycohubFooter__navigationItems__siteMap">
              <div className="ubycohubFooter__navigationItem__label">
                quick link
              </div>
              <div>
                <Link href={"/"}>Home</Link>

                <Link href={"/crypto-trading"}>Crypto Trading</Link>

                <Link href={"/gift-card-exchange"}>Gift Card Exchange</Link>

                <Link href={""}>For Business</Link>

                <Link href={""}>FAQs</Link>
              </div>
            </div>
            <div className="ubycohubFooter__navigationItems__siteMap">
              <div className="ubycohubFooter__navigationItem__label">
                company
              </div>
              <div>
                <Link href={"/about-us"}>About Us</Link>

                <Link href={""}>Privacy Policy</Link>

                <Link href={""}>Terms & Conditions</Link>

                <Link href={""}>Contact Us</Link>
              </div>
            </div>

            <div className="ubycohubFooter__navigationItems__social">
              <div className="ubycohubFooter__navigationItem__label">
                connect with us
              </div>
              <div>
                <Link href={""}>
                  <LinkedInIcon />
                </Link>
                <Link href={""}>
                  <XIcon />
                </Link>

                <Link href={""}>
                  <InstagramIcon />
                </Link>

                <Link href={""}>
                  <TikTok />
                </Link>
              </div>
            </div>
          </div>
          <div className="ubycohubFooter__extras">
            <div>Ubycohub</div>
            <div className="ubycohubFooter__extras_imgBlock">
              <Image
                src={footerBottomImage}
                alt="Illustration of a person managing multiple cryptocurrencies on a mobile app"
              />
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};
