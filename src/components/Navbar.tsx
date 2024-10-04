import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="bg-transparent relative z-50">
      <div className="flex max-w-6xl mx-auto py-4 px-8 justify-center lg:justify-between">
        <div className="flex items-center space-x-2 text-2xl text-gray-800">
          <span>
            <Image
              src="/img/blueside.svg"
              alt="BlueSide"
              width="32"
              height="32"
              className="w-52"
            />
          </span>
          <p className="text-sm text-center leading-normal text-blueside-dark laptop:text-lg sm:text-base lg:w-5/6 mt-5 mb-4 px-12">
            Product
          </p>
        </div>
      </div>
    </header>
  );
};
