import Image from "next/image";

export const LogoBanner = () => {
  return (
    <div className="flex flex-col items-center gap-y-2 mt-8 mb-10 lg:mb-16">
      <p className="text-base text-center font-[375] leading-normal text-blueside-dark lg:text-lg mb-6">
        Powered by Frontier Models
      </p>
      <Image
        src="/img/models_blue.png"
        alt="OpenAI, Claude, Gemini"
        width={400}
        height={400}
      />
    </div>
  );
};
