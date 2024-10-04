import Image from "next/image";

import { CtaButton } from "./CtaButton";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-y-4 mt-10">
      <h1
        className="flex flex-col font-medium text-5xl sm:text-6xl lg:mt-10 lg:text-title
        tracking-tight gap-1 text-center text-blueside-dark px-4"
      >
        <span className="leading-none">Speed through contracts</span>
      </h1>
      <p className="text-sm text-center font-[350] leading-normal text-blueside-dark laptop:text-lg sm:text-base lg:w-5/6 mt-4 mb-6 px-12">
        Powerful legal AI integrated into Microsoft Word, allowing you to{" "}
        <span className="inline-block line-through text-red-500">stumble</span>{" "}
        <span className="inline-block underline text-blue-500">breeze</span>{" "}
        through contracts.
      </p>

      <CtaButton />
    </div>
  );
};

//1F2937
