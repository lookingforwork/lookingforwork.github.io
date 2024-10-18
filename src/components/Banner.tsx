import Image from "next/image";
import { PartnerBanner } from "@/components/PartnerBanner";
import { LogoBanner } from "@/components/LogoBanner";

export const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-x-16 lg:gap-x-36 justify-center mt-8 mb-10 px-4 lg:mb-16">
      <LogoBanner />
      <PartnerBanner />
    </div>
  );
};
