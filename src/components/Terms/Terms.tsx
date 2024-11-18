"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Terms = () => {
  const [terms, setTerms] = useState("");

  useEffect(() => {
    fetch("/txt/terms.md")
      .then((response) => response.text())
      .then((text) => setTerms(text))
      .catch((error) => console.error("Error loading terms:", error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        BLUESIDE TERMS OF SERVICE
      </h1>

      <div className="text-sm text-gray-600 mb-8">
        Version 1.0.0 - Last updated: November 18, 2024
      </div>

      <div className="prose prose-sm max-w-none [&>p]:mb-4 [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:mt-8 [&>h2]:mb-4">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mb-4">{children}</p>,
            h1: ({ children }) => <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-xl font-bold mt-6 mb-3">{children}</h2>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
            li: ({ children }) => <li className="mb-2">{children}</li>,
          }}
        >
          {terms}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Terms;
