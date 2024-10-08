import Image from "next/image";
import { CtaButton } from "./CtaButton";

export const Navbar = () => {
  return (
    <header className="bg-transparent relative z-50">
      <div className="animate-appear-500 flex max-w-7xl mx-auto py-1 px-8 justify-between lg:justify-between">
        <div className="flex items-center text-2xl text-gray-800">
          <span>
            <Image
              src="/img/blueside.svg"
              alt="BlueSide"
              width="32"
              height="32"
              className="min-w-52 max-w-60 px-6 lg:mt-0"
            />
          </span>
          <button className="transition-all duration-200 bg-transparent rounded-lg text-sm text-center leading-normal text-blueside-dark hover:bg-slate-300 hidden lg:flex laptop:text-sm lg:w-5/6 mt-5 mb-4 py-2 px-4">
            Product
          </button>
          <button className="transition-all duration-200 bg-transparent rounded-lg text-sm text-center leading-normal text-blueside-dark hover:bg-slate-300 hidden lg:flex  laptop:text-sm lg:w-5/6 mt-5 mb-4 py-2 px-4">
            Pricing
          </button>
          <button className="transition-all duration-200 bg-transparent rounded-lg text-sm text-center leading-normal text-blueside-dark hover:bg-slate-300 hidden lg:flex laptop:text-sm lg:w-5/6 mt-5 mb-4 py-2 px-4">
            Support
          </button>
        </div>
        <div>
          <button className="bg-transparent ease-in-out transition-[background-color,color,padding,border-radius] duration-300 flex text-blueside-dark rounded-lg text-sm text-center leading-normal  hover:bg-blueside-navy outline outline-1 -outline-offset-1 hover:outline-none hover:text-white laptop:text-sm mt-5 mb-4 py-2 px-4">
            Get a demo
          </button>
        </div>
      </div>
    </header>
  );
};
