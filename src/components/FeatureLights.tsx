import Image from "next/image";

export const FeatureLights = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-0 sm:px-8 md:px-12 lg:px-24 py-6 lg:py-14">
      <div className="rounded-2xl w-full max-w-[400px] lg:min-w-[400px] h-[300px] overflow-hidden">
        <div className="relative p-4 sm:p-8">
          <div className="transition-all duration-500 absolute -left-12 hover:-left-4 top-4 flex h-80 w-full max-w-[384px] items-start justify-between rounded-xl bg-gray-100 p-4 sm:p-8 shadow-lg drop-shadow-2xl">
            <span className="absolute text-blueside-dark right-16 sm:right-24 text-lg sm:text-xl mt-1 font-light">
              Critical
            </span>
            <span className="absolute right-0 mx-4 sm:mx-8 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-red-500"></span>
          </div>
          <div className="transition-all duration-500 absolute -left-16 hover:-left-8 top-28 flex h-60 w-full max-w-[384px] items-start justify-between rounded-xl bg-gray-100 p-4 sm:p-8 shadow-lg drop-shadow-2xl">
            <span className="absolute text-blueside-dark right-16 sm:right-24 text-lg sm:text-xl mt-1 font-light">
              Significant
            </span>
            <span className="absolute right-0 mx-4 sm:mx-8 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-yellow-400"></span>
          </div>
          <div className="transition-all duration-500 absolute -left-20 hover:-left-12 top-52 flex h-60 w-full max-w-[384px] items-start justify-between rounded-xl bg-gray-100 p-4 sm:p-8 shadow-lg drop-shadow-2xl">
            <span className="absolute text-blueside-dark right-16 sm:right-24 text-lg sm:text-xl mt-1 font-light">
              Minimal
            </span>
            <span className="absolute right-0 mx-4 sm:mx-8 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-500"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-0 sm:mx-12 py-12 pl-0 lg:pl-24 lg:mx-0 lg:py-8 lg:w-1/2 xl:w-3/5 lg:shrink-0">
        <div className="text-3xl sm:text-4xl lg:text-5xl text-blueside-dark mb-6">
          Never Miss a Crucial Change
        </div>
        <div className="sm:text-base lg:text-lg font-subtitle text-blueside-dark">
          Instantly identify significant changes made to a contract using our
          traffic light system.
        </div>
      </div>
    </div>
  );
};
