"use client";
import { FAQsHero } from "@/components";
import { FAQItem } from "@/components/homepage/FAQs";
import { useCallback, useState } from "react";
import whatsAppIllustration from "@/assets/images/3d-whatsapp-img.png";
import telegramIllustration from "@/assets/images/3d-telegram-icon.png";
import Image from "next/image";

const faqTabs = [
  {
    id: "general",
    label: "General",
    faqs: [
      {
        id: 1,
        question: "Do I need to download an app?",
        answer:
          "Payout is processed after your transaction or gift card has been confirmed and approved.",
      },
      {
        id: 2,
        question: "How fast do I get paid?",
        answer:
          "Payout is processed after your transaction or gift card has been confirmed and approved.",
      },
      {
        id: 3,
        question: "Can I sell both crypto and gift cards?",
        answer:
          "Payout is processed after your transaction or gift card has been confirmed and approved.",
      },
      {
        id: 4,
        question: "Can businesses trade with Ubycohub?",
        answer:
          "Payout is processed after your transaction or gift card has been confirmed and approved.",
      },
    ],
  },
  {
    id: "crypto",
    label: "Crypto Trading",
    faqs: [
      {
        id: 3,
        question: "Which cryptocurrencies do you support?",
        answer: "We support BTC, ETH, USDT...",
      },
      {
        id: 4,
        question: "How long do withdrawals take?",
        answer: "Instantly",
      },
    ],
  },
  {
    id: "gift-card",
    label: "Gift Card",
    faqs: [
      {
        id: 5,
        question: "Which gift cards do you buy?",
        answer: "Amazon, Steam, Apple...",
      },
    ],
  },
  {
    id: "payment",
    label: "Payment, Safety and Business",
    faqs: [
      {
        id: 6,
        question: "Is my money safe?",
        answer: "Yes. We use bank-level encryption...",
      },
    ],
  },
];

const FAQs = () => {
  const [activeTab, setActiveTab] = useState(faqTabs[0]);
  const [opened, setOpened] = useState<number[]>([]);

  const handleFAQToggle = useCallback((id: number) => {
    setOpened((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  return (
    <article className="actionBlock__main">
      <FAQsHero />
      <div className="faqContent__container">
        <div className="faq__tabs__mainBlock">
          <div className="tabButtons__container">
            <div className="tabButtons">
              {faqTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${activeTab.id === tab.id ? "activeTab" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="faqsTab__contentBlock">
            <div className="faqContent__innerBlock">
              <ul className="faqList">
                {activeTab?.faqs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    item={faq}
                    isOpen={opened.includes(faq.id)}
                    onToggle={() => handleFAQToggle(faq.id)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="faqsBlock__cta articleBlock__cta">
          <p>
            Still Have Questions? Speak with our trading desk and get direct
            help before starting your trade.
          </p>
          <div className="articleBlock__cta__items">
            <button type="button" className="btn-primary">
              Sell Crypto on WhatsApp
            </button>
            <button type="button" className="btn-black">
              Sell Crypto on Telegram
            </button>
          </div>
        </div>

        <div className="whatsAppBlurred">
          <Image src={whatsAppIllustration} alt="" width={80} height={80} />
        </div>
        <div className="telegramBlurred">
          <Image src={telegramIllustration} alt="" width={80} height={80} />
        </div>
      </div>
    </article>
  );
};

export default FAQs;
