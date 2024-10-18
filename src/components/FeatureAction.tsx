import Image from "next/image";

export const FeatureAction = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-6 lg:py-14">
      <div className="flex flex-col mx-6 sm:mx-12 py-12 pr-0 lg:pr-24 lg:mx-0 lg:py-8 lg:w-1/2 xl:w-3/5 lg:shrink-0">
        <div className="text-4xl lg:text-5xl text-blueside-dark mb-6">
          Get Suggested Actions
        </div>
        <div className="sm:text-base lg:text-lg font-subtitle text-blueside-dark">
          Move faster through drafts using our AI suggested changes which can be
          added in with one click.
        </div>
      </div>
      <div className="group rounded-2xl w-full max-w-[400px] lg:min-w-[400px] h-[300px] overflow-hidden flex flex-col items-center">
        <div className="transition-all duration-500 bg-gray-100 h-20 w-10/12 max-w-80 group-hover:max-w-[22rem] group-hover:w-11/12 -top-4 -mb-4 relative z-10 rounded-xl shadow-md"></div>
        <div className="transition-all duration-500 bg-gray-200 h-48 w-10/12 max-w-80 -top-2 group-hover:max-w-[22rem] group-hover:w-11/12 group-hover:h-[12.5rem] p-4 pt-6 rounded-md relative z-0 shadow-lg drop-shadow-2xl">
          <div className="flex items-center mt-1">
            <span className="text-green-500 font-bold text-xl ml-1 mr-3">
              +
            </span>
            <span className="font-light text-lg text-blueside-dark">
              Recommended action
            </span>
          </div>
          <div className="transition-all duration-500 mt-5 space-y-5 group-hover:mt-7">
            <div className="bg-gray-400 h-[2px] mb-2 w-full rounded-full"></div>
            <div className="bg-gray-400 h-[2px] mb-2 w-full rounded-full"></div>
            <div className="bg-gray-400 h-[2px] mb-2 w-full rounded-full"></div>
            <div className="bg-gray-400 h-[2px] mb-2 w-full rounded-full"></div>
            <div className="bg-gray-400 h-[2px] w-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
