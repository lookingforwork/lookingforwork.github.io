"use client";
import React from "react";
import { FaqItem } from '../Faq';

const SupportFaq: React.FC = () => {
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
        "BlueSide is a tool for legal contracts, so if you deal with contracts frequently, BlueSide is a tool for you.",
    },
    {
      question: "Are my documents secure on BlueSide?",
      answer:
        "Yes, the privacy of your data is guaranteed by all the model providers we use, ensuring all your data is kept secure.",
    },
    {
      question: "How does BlueSide integrate inside Microsoft Word?",
      answer: (
        <>
          Once you have signed up, all that&apos;s left is to download the
          BlueSide Add-in from the{" "}
          <a
            href="https://appsource.microsoft.com/en-us/marketplace/apps?product=office&page=1&src=office&corrid=a7c69a7e-5f24-4398-95a3-3ee3f62a54db"
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
      <h2 className="text-3xl font-bold mb-6 mt-8">FAQs answered</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default SupportFaq;
