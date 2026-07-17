"use client";

import { MinusIcon, PlusIcon } from "@/assets/svgs";
import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import whatsAppIllustration from "@/assets/images/3d-whatsapp-img.png";
import telegramIllustration from "@/assets/images/3d-telegram-icon.png";
export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}

interface IFAQItemProps {
  item: IFAQ;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ item, isOpen, onToggle }: IFAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <li className="faqItem" style={{ gap: isOpen ? "16px" : "0" }}>
      <button type="button" onClick={onToggle}>
        <span className={isOpen ? "activeText" : ""}>{item.question}</span>
        <span>{!isOpen ? <PlusIcon /> : <MinusIcon />}</span>
      </button>

      <div
        className="faqItem__answerBlock"
        ref={contentRef}
        style={{
          height: isOpen ? `${height}px` : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        {item.answer}
      </div>
    </li>
  );
};
export const FAQs = () => {
  const [opened, setOpened] = useState<number[]>([]);
  const faqList = [
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
  ];

  const handleFAQToggle = useCallback((id: number) => {
    setOpened((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  return (
    <section className="sectionBlock faqContent__mainBlock">
      <div className="container">
        <div className="faqContent__container">
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <div className="faqContent__innerBlock">
            <ul className="faqList">
              {faqList.map((faq) => (
                <FAQItem
                  key={faq.id}
                  item={faq}
                  isOpen={opened.includes(faq.id)}
                  onToggle={() => handleFAQToggle(faq.id)}
                />
              ))}
            </ul>
            <Link href="" className="btn-outline">
              See more FAQ
            </Link>
          </div>
        </div>
      </div>
      <div className="whatsAppBlurred">
        <Image src={whatsAppIllustration} alt="" width={80} height={80} />
      </div>
      <div className="telegramBlurred">
        <Image src={telegramIllustration} alt="" width={80} height={80} />
      </div>
    </section>
  );
};
