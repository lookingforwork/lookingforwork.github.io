import Image from "next/image";

export const FeatureRag = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-0 sm:px-8 md:px-12 lg:px-24 py-6 lg:py-14">
      <div className="rounded-2xl w-full max-w-[300px] sm:max-w-[400px] lg:min-w-[400px] h-[300px] overflow-hidden flex flex-row items-center justify-center">
        <div className="min-w-[130px] h-44 bg-gray-100 shadow-xl drop-shadow-xl animate-moveLeft mx-[10px] p-3 font-light text-blueside-dark">
          <div className="bg-gray-400 h-[2px] mb-6 mt-2 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] w-full rounded-full"></div>
        </div>
        <div className="min-w-[130px] h-44 bg-gray-100 shadow-xl drop-shadow-xl animate-moveLeft mx-[10px] p-3 font-light text-blueside-dark">
          <div className="bg-gray-400 h-[2px] mb-6 mt-2 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] w-full rounded-full"></div>
        </div>
        <div className="min-w-[130px] h-44 bg-gray-100 shadow-xl drop-shadow-xl animate-moveLeft mx-[10px] p-3 font-light text-blueside-dark">
          <div className="bg-gray-400 h-[2px] mb-6 mt-2 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] w-full rounded-full"></div>
        </div>
        <div className="min-w-[130px] h-44 bg-gray-100 shadow-xl drop-shadow-xl animate-moveLeft mx-[10px] p-3 font-light text-blueside-dark">
          <div className="bg-gray-400 h-[2px] mb-6 mt-2 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] mb-6 w-full rounded-full"></div>
          <div className="bg-gray-400 h-[2px] w-full rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col mx-0 sm:mx-12 py-12 pl-0 lg:pl-24 lg:mx-0 lg:py-8 lg:w-1/2 xl:w-3/5 lg:shrink-0">
        <div className="text-3xl sm:text-4xl lg:text-5xl text-blueside-dark mb-6">
          Built For Legal
        </div>
        <div className="sm:text-base lg:text-lg font-subtitle text-blueside-dark">
          Using RAG (Retrieval Augmented Generation) our system scans the entire
          document when analysing changes.
        </div>
      </div>
    </div>
  );
};

/*
alternative summary

AI model, fine-tuned with real lawyers, summarizes key document changes accurately and effectively.
*/
