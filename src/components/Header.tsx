"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  ArrowDownIcon,
  CloseIcon,
  MenuLine,
  TelegramIcon,
  WhatsAppIcon,
} from "@/assets/svgs";
import { NavLink } from "./NavLink";
import {
  trackLead,
  trackTelegramClick,
  trackWhatsappClick,
} from "@/utils/analytics";

export const Header = () => {
  const [isToggleTradeNow, setIsToggleTradeNow] = useState(false);
  const [isToggleMobileNav, setIsToggleMobileNav] = useState(false);

  const navList = [
    {
      url: "/about-us",
      linkName: "about us",
    },
    {
      url: "/crypto-trading",
      linkName: "crypto trading",
    },
    {
      url: "/gift-card-exchange",
      linkName: "gift card exchange",
    },
    {
      url: "/business",
      linkName: "for business",
    },
    {
      url: "/faqs",
      linkName: "FAQs",
    },
  ];

  const handleShowMobileNav = () => {
    setIsToggleMobileNav((prev) => !prev);
  };

  const handleCloseMobileMenu = () => {
    setIsToggleMobileNav(false);
  };

  const handleTrade = (platform: "whatsapp" | "telegram") => {
    trackLead();

    if (platform === "whatsapp") {
      trackWhatsappClick("Ubycohub Header");

      window.open("", "_blank", "noopener,noreferrer");
    } else {
      trackTelegramClick("Ubycohub Header");

      window.open("", "_blank", "noopener,noreferrer");
    }

    setIsToggleMobileNav(false);
  };

  return (
    <header className="ubycoHeader">
      <Link href="/" className="ubycoHeader__homeLink">
        <Logo />
      </Link>
      <nav className="ubycoHeader__navs">
        <ul className="ubycoHeader__navList">
          {navList.map((item, index) => (
            <li key={index}>
              <NavLink href={item.url}>{item.linkName}</NavLink>
            </li>
          ))}
        </ul>

        <div className="ubycoHeader__navRightItems">
          <NavLink href="">contact us</NavLink>

          <div className="ubycoHeader__dropDownBlock">
            <button
              className="toggleButton__tradeOptions btn-primary"
              onClick={() => setIsToggleTradeNow((prev) => !prev)}
            >
              <span>Trade Now</span>
              <ArrowDownIcon
                className={`${isToggleTradeNow ? "rotate" : ""}`}
              />
            </button>
            <div
              className={`tradeOptions ${isToggleTradeNow ? "show" : "hide"}`}
            >
              <ul className="tradeOptions__list">
                <li>
                  <button type="button" onClick={() => handleTrade("whatsapp")}>
                    <WhatsAppIcon />
                    <span>Trade on WhatsApp</span>
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleTrade("telegram")}>
                    <TelegramIcon />
                    <span>Trade on Telegram</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="ubycoHeader__mobileMenu">
        <button type="button" onClick={handleShowMobileNav}>
          {isToggleMobileNav ? <CloseIcon /> : <MenuLine />}
        </button>
        <nav
          className={`ubycoHeader__mobileNav ${isToggleMobileNav ? "isOpen" : ""}`}
        >
          <ul className="ubycoHeader__mobile__navList">
            <li>
              <NavLink href={"/"} onClick={handleCloseMobileMenu}>
                Home
              </NavLink>
            </li>
            {navList.map((item, index) => (
              <li key={index}>
                <NavLink href={item.url} onClick={handleCloseMobileMenu}>
                  {item.linkName}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="ubycoHeader__mobileNav__ctas">
            <button
              type="button"
              className="btn-primary"
              onClick={() => handleTrade("whatsapp")}
            >
              Trade on WhatsApp
            </button>
            <button
              type="button"
              className="btn-black"
              onClick={() => handleTrade("telegram")}
            >
              Trade on Telegram
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
