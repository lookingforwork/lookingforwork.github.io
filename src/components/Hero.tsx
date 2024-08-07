import Image from "next/image";
import { Video } from "./Video";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row max-w-7xl mx-auto py-8 lg:py-20 px-8 
    justify-center lg:justify-between lg:gap-x-10">
      <div className="flex flex-col justify-between lg:w-1/2 gap-y-4 lg:gap-y-8">
        <h1 className="flex flex-col font-bold text-4xl lg:text-5xl laptop:text-6xl 
        tracking-tight gap-1 items-center lg:items-start text-gray-800">
          <span className="leading-none">
            <span className="relative">
              <span className="font-extrabold">Securely&nbsp;</span>
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
            Discuss
          </span>
          <span>Legal Documents</span>
        </h1>
        <p className="flex flex-col  items-center text-sm text-center lg:text-start 
        leading-normal text-gray-500 laptop:text-lg lg:w-5/6">
          An improved commenting tool for legal teams. Securely collaborate on legal documents inside Microsoft Word.
        </p>
        <div className="flex justify-center lg:justify-between items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQTOjOiPgFbajD8vm9JU4vi-ez7uq4FmfIBiYRqkg67gfI6Q/viewform?usp=sf_link"
            target="_blank"
            rel="noopener"
            className="px-8 py-4 text-lg font-semibold text-center text-white bg-indigo-600 rounded-md
            hover:bg-indigo-700">
            Join the Waitlist
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2 mt-10 lg:mt-0">
        <Video videoId="Sx28sQc2wDw" />
      </div>
    </section>
  );
};
