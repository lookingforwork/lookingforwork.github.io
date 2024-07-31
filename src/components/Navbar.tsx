"use client";
import Image from "next/image"

export const Navbar = () => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between py-8 px-16 mx-auto lg:justify-between">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          {/* <Link href="/"> */}
            <span className="flex items-center space-x-2 text-2xl font-semibold text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/vc-logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
              </span>
              <span>DocuCheck</span>
            </span>
          {/* </Link> */}
        </div>
      </nav>
    </div>
  );
}

