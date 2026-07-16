"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowDownIcon, TelegramIcon, WhatsAppIcon } from "@/assets/svgs";
import { NavLink } from "./NavLink";

export const Header = () => {
  const [isToggleTradeNow, setIsToggleTradeNow] = useState(false);

  const navList = [
    {
      // url: "/about-us",
      url: "",
      linkName: "about us",
    },
    {
      // url: "/crypto-trading",
      url: "",
      linkName: "crypto trading",
    },
    {
      // url: "/gift-card-exchange",
      url: "",
      linkName: "gift card exchange",
    },
    {
      // url: "/business",
      url: "",
      linkName: "for business",
    },
    {
      // url: "/faqs",
      url: "",
      linkName: "FAQs",
    },
  ];
  return (
    <header className="ubycoHeader">
      <div className="ubycoHeader__innerContainer container">
        <nav className="ubycoHeader__navs">
          <Link href="/" className="ubycoHeader__homeLink">
            <Logo />
          </Link>
          <ul className="ubycoHeader__navList">
            {navList.map((item, index) => (
              <li key={index}>
                <NavLink href={item.url}>{item.linkName}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ubycoHeader__navRightItems">
          {/* <NavLink href="/contact-us">contact us</NavLink> */}
          <Link href="">contact us</Link>
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
                  <button>
                    <WhatsAppIcon />
                    <span>Trade on WhatsApp</span>
                  </button>
                </li>
                <li>
                  <button>
                    <TelegramIcon />
                    <span>Trade on Telegram</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
