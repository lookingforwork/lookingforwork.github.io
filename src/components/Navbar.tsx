"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ContactPopup } from "./ContactPopup";
import { SecurityButton } from "./SecurityButton";

export const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <header className="relative">
      <div className="animate-appear-500 flex max-w-7xl mx-auto p px-6 sm:px-8 justify-between">
        <div className="flex items-center text-2xl text-gray-800">
          <Link href="/">
            <span>
              <Image
                src="/img/BlueSide.svg"
                alt="BlueSide"
                width="32"
                height="32"
                className="min-w-48 max-w-48 pr-6"
              />
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SecurityButton />
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-transparent ease-in-out transition-[background-color,color,padding,border-radius] duration-300 flex text-blueside-dark rounded-lg text-sm text-center leading-normal hover:bg-blueside-navy outline outline-1 -outline-offset-1 hover:outline-none hover:text-white laptop:text-sm mt-5 mb-4 py-2 px-4"
          >
            Contact us
          </button>
        </div>
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </header>
  );
};
