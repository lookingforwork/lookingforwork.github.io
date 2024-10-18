import Image from "next/image";

export const LogoBanner = () => {
  return (
    <div className="flex flex-col items-center gap-y-2 mt-16 mb-4 px-4">
      <p className="text-base text-center font-[350] leading-normal text-blueside-dark lg:text-lg mb-6">
        Powered by Frontier Models
      </p>
      <Image
        src="/img/models_blue.png"
        alt="OpenAI, Claude, Gemini"
        width={400}
        height={400}
        className="lg:w-[400px] w-[300px] md:w-[350px]"
      />
    </div>
  );
};
