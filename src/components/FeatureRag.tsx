import Image from "next/image";

export const FeatureRag = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-24 py-6 lg:py-14">
      <div className="rounded-2xl min-w-[400px] h-[300px] max-w-[400px] overflow-hidden flex flex-row items-center justify-center">
        <div className="min-w-[130px] h-44 bg-gray-100 shadow-xl drop-shadow-xl animate-moveLeft mx-[10px] p-3 font-light">
          ------------------------------------------------------------------------------------------------------------
        </div>
        <div className="min-w-[130px] h-44 bg-gray-100 shadow-xl drop-shadow-xl animate-moveLeft mx-[10px] p-3 font-light">
          ------------------------------------------------------------------------------------------------------------
        </div>
        <div className="min-w-[130px] h-44 bg-gray-100 shadow-xl drop-shadow-xl animate-moveLeft mx-[10px] p-3 font-light">
          ------------------------------------------------------------------------------------------------------------
        </div>
        <div className="min-w-[130px] h-44 bg-gray-100 shadow-xl drop-shadow-xl animate-moveLeft mx-[10px] p-3 font-light">
          ------------------------------------------------------------------------------------------------------------
        </div>
      </div>
      <div className="flex flex-col mx-12 py-12 pl-0 lg:pl-24 lg:mx-0 lg:py-8">
        <div className="text-4xl lg:text-5xl text-blueside-dark mb-6">
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

/*alternative summary

AI model, fine-tuned with real lawyers, summarizes key document changes accurately and effectively.

animation-delay-900
style={{ left: "50%" }}*/
