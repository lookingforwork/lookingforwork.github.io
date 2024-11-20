"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactPopup } from "./ContactPopup";
import { SecurityButton } from "./SecurityButton";
import { FeatureButton } from "./FeatureButton";
import { usePathname } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SignOutButton } from "./auth/SignOutButton";

export const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <header className="relative">
      <div className="animate-appear-500 flex max-w-7xl mx-auto px-6 sm:px-8 justify-between">
        <div className="flex items-center gap-4">
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
          {isHomePage && (
            <>
              <div className="hidden sm:block">
                <FeatureButton />
              </div>
              <div className="hidden sm:block">
                <SecurityButton />
              </div>
            </>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-x-2">
          {isLoggedIn ? (
            <>
              <Link
                href="/account"
                className="bg-transparent text-blueside-dark hover:text-gray-500 transition-colors duration-300 text-sm laptop:text-sm mt-5 mb-4 py-2 px-4"
              >
                Account
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              href="/login"
              className="bg-transparent text-blueside-dark hover:text-gray-500 transition-colors duration-300 text-sm laptop:text-sm mt-5 mb-4 py-2 px-4"
            >
              Sign In
            </Link>
          )}
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-transparent ease-in-out transition-[background-color,color,padding,border-radius] duration-300 flex text-blueside-dark rounded-lg text-sm text-center leading-normal hover:bg-blueside-navy outline outline-1 -outline-offset-1 hover:outline-none hover:text-white laptop:text-sm mt-5 mb-4 py-2 px-4"
          >
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          title="menu"
          className="sm:hidden flex items-center mt-5 mb-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50 sm:hidden">
            {isLoggedIn ? (
              <>
                <Link
                  href="/account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Account
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  title="signout"
                >
                  <SignOutButton />
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
            <button
              onClick={() => {
                setIsPopupOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Contact us
            </button>
          </div>
        )}
      </div>
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </header>
  );
};
