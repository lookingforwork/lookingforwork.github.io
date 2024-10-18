import Image from "next/image";

export const PartnerBanner = () => {
  return (
    <div className="flex flex-col items-center gap-y-2 mt-8 mb-10 px-4 lg:mb-16">
      <p className="text-base text-center font-[350] leading-normal text-blueside-dark lg:text-lg mb-6">
        Partnered with
      </p>
      <Image
        src="/img/foundershub.png"
        alt="Microsoft Founders Hub for Startups"
        width={400}
        height={400}
        className="lg:w-[250px] w-[200px] md:w-[215px]"
      />
    </div>
  );
};
