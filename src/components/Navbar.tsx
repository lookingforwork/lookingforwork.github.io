import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="relative">
      <div className="animate-appear-500 flex max-w-7xl mx-auto p px-6 sm:px-8 justify-between">
        <div className="flex items-center text-2xl text-gray-800">
          <span>
            <Image
              src="/img/BlueSide.svg"
              alt="BlueSide"
              width="32"
              height="32"
              className="min-w-48 max-w-48 pr-6"
            />
          </span>
          {/* <button className="transition-all duration-200 bg-transparent rounded-lg text-sm text-center leading-normal text-blueside-dark hover:bg-slate-300 hidden lg:flex laptop:text-sm lg:w-5/6 mt-5 mb-4 py-2 px-4">
            Product
          </button>
          <button className="transition-all duration-200 bg-transparent rounded-lg text-sm text-center leading-normal text-blueside-dark hover:bg-slate-300 hidden lg:flex  laptop:text-sm lg:w-5/6 mt-5 mb-4 py-2 px-4">
            Pricing
          </button>
          <button className="transition-all duration-200 bg-transparent rounded-lg text-sm text-center leading-normal text-blueside-dark hover:bg-slate-300 hidden lg:flex laptop:text-sm lg:w-5/6 mt-5 mb-4 py-2 px-4">
            Support
          </button> */}
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/jaketennet"
            className="bg-transparent ease-in-out transition-[background-color,color,padding,border-radius] duration-300 flex text-blueside-dark rounded-lg text-sm text-center leading-normal  hover:bg-blueside-navy outline outline-1 -outline-offset-1 hover:outline-none hover:text-white laptop:text-sm mt-5 mb-4 py-2 px-4"
          >
            Contact us
          </a>
        </div>
      </div>
    </header>
  );
};
