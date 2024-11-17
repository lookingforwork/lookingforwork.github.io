import { CtaButton } from "./CtaButton";
import { SecurityButton } from "./SecurityButton";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-y-4 mt-10">
      <h1
        className="animate-appear-1000 flex font-medium text-[44px] sm:text-5xl lg:mt-10 lg:text-title
        tracking-tight leading-none text-center text-blueside-dark"
      >
        AI Co-Pilot For Contract Negotiations
      </h1>
      <p
        className="animate-appear-1500 text-sm text-center font-subtitle leading-normal 
      text-blueside-dark sm:text-base lg:text-lg mt-4 mb-6"
      >
        Powerful legal AI integrated into Microsoft Word, allowing you to{" "}
        <span className="inline-block line-through text-red-500">stumble</span>{" "}
        <span className="inline-block underline text-blue-500">breeze</span>{" "}
        through contract negotiations.
      </p>
      <div className="animate-appear-1500 flex flex-col sm:flex-row gap-4">
        <CtaButton />
      </div>
    </div>
  );
};
