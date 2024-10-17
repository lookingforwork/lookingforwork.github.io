"use client";
import React, { useState, useRef, useEffect } from "react";
import { CtaButton } from "./CtaButton";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-700">
      <button className="text-left w-full" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center max-w-[535px] py-4">
          <span className="text-blueside-dark font-subtitle">{question}</span>
          <span className="text-blueside-dark text-xl transition-transform duration-300 ease-in-out">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: "0px" }}
      >
        <div className="pb-4 max-w-[535px] text-blueside-dark text-sm font-light">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What does BlueSide do?",
      answer:
        "We've built integrations with Discord, WhatsApp and Slack to automate the movement of members in and out of your private community and chat spaces. Once a user subscribes to your Subbb they'll be automatically invited or added to your community. If they stop paying, they'll be removed.",
    },
    {
      question: "Who is BlueSide for?",
      answer:
        "If a user stops paying, they will be automatically removed from your community spaces.",
    },
    {
      question: "Are my documents secure on BlueSide?",
      answer:
        "Our setup process is designed to be quick and user-friendly. Most users can get started within minutes.",
    },
    {
      question: "How does BlueSide integrate inside Mircosoft Word?",
      answer:
        "Yes, our platform supports various membership options including free trials, lifetime access, and tiered subscriptions. You can also set up form submissions for custom requirements.",
    },
    // ... (other FAQ items)
  ];

  return (
    <div className="flex flex-col shrink text-blueside-dark p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 mt-16">FAQs answered</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="flex justify-center my-16">
        <CtaButton />
      </div>
    </div>
  );
};

export default Faq;
