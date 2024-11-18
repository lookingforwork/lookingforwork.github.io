"use client";
import React, { useState, useRef, useEffect } from "react";
import { CtaButton } from "./CtaButton";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
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
    <div className="border-b border-transparent">
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

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const Faq: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What does BlueSide do?",
      answer: (
        <>
          BlueSide analyses the{" "}
          <a
            href="https://support.microsoft.com/en-gb/office/track-changes-in-word-197ba630-0f5f-4a8e-9a77-3712475e806a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Tracked Changes
          </a>{" "}
          in a Microsoft Word document. For each change it provides a
          significance rating, summary and suggested action to take.
        </>
      ),
    },
    {
      question: "Who is BlueSide for?",
      answer:
        "BlueSide is best utilized by agile law firms that are looking to streamline contract negotiations. This may include commercial, property, employment, regulatory, intellectual property agreements.",
    },
    {
      question: "Are my documents secure on BlueSide?",
      answer:
        "Security is paramount to BlueSide. We use industry standard encryption and security protocols to ensure your data is secure. We also never train our models on any of the data you upload.",
    },
    {
      question: "How does BlueSide integrate inside Microsoft Word?",
      answer: (
        <>
          Once you have signed up, all that&apos;s left is to download the
          BlueSide Add-in from the{" "}
          <a
            href="https://appsource.microsoft.com/en-us/product/office/WA200007651?tab=Overview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Microsoft Add-in Store
          </a>{" "}
          and it will be there next time you open Word.
        </>
      ),
    },
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
