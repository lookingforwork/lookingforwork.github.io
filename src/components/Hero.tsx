import Image from "next/image";
import { Video } from "./Video";
import { CtaButton } from "./CtaButton";

export const Hero = () => {
  return (
    <section
      className="flex flex-col lg:flex-row max-w-7xl mx-auto py-8 lg:py-20 px-8 
    justify-center lg:justify-between lg:gap-x-10"
    >
      <div className="flex flex-col justify-between lg:w-1/2 gap-y-4 lg:gap-y-8">
        <h1
          className="flex flex-col font-bold text-4xl lg:text-5xl laptop:text-6xl 
        tracking-tight gap-1 items-center lg:items-start text-gray-800"
        >
          <span className="leading-none">
            <span className="relative">
              <span className="font-extrabold">Effortlessly&nbsp;</span>
              <span className="absolute top-1.5 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={"/img/text-decoration.svg"}
                  alt="Icon"
                  width={20}
                  height={20}
                  className="w-4 h-4 lg:w-5 lg:h-5 laptop:w-6 laptop:h-6"
                />
              </span>
            </span>
            Review
          </span>
          <span>Legal Contracts</span>
        </h1>
        <p
          className="flex flex-col  items-center text-sm text-center lg:text-start 
        leading-normal text-gray-700 laptop:text-lg lg:w-5/6"
        >
          Supercharge your contract review process - our secure AI helps you instantly
          identify the most important clause changes right inside Microsoft Word.
        </p>
        <CtaButton />
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2 mt-10 lg:mt-0">
        <Video videoId="hylzkVQBGrg" />
      </div>
    </section>
  );
};
