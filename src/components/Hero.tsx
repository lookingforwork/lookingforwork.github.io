import Image from "next/image";

import { CtaButton } from "./CtaButton";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-y-4 mt-24">
      <h1
        className="flex flex-col font-medium text-title
        tracking-tight gap-1 lg:items-start text-blueside-dark"
      >
        <span className="leading-none">Speed through contracts</span>
      </h1>
      <p
        className="flex flex-col text-sm text-center
        leading-normal text-blueside-dark laptop:text-base lg:w-5/6 mt-4"
      >
        Powerful legal AI integrated into Microsoft Word, allowing you to
        stumble breeze through contracts.
      </p>

      <CtaButton />
    </div>
  );
};

//1F2937
