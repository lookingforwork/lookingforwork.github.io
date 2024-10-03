import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="bg-transparent relative z-50">
      <div className="flex max-w-6xl mx-auto py-6 px-8 justify-center lg:justify-between">
        <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <span>
            <Image
              src="/img/blueside.svg"
              alt="BlueSide"
              width="32"
              height="32"
              className="w-36"
            />
          </span>
        </div>
      </div>
    </header>
  );
};
