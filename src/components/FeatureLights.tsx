import Image from "next/image";

export const FeatureLights = () => {
  return (
    <div className="flex flex-row items-center justify-center px-24 py-14">
      <Image
        className="rounded-2xl"
        src="/img/placeholder_2.jpg"
        alt="trafficlights"
        width={400}
        height={400}
      />
      <div className="flex flex-col py-8 pl-24">
        <div className="text-5xl text-blueside-dark mb-6">
          Never Miss a Crucial Change
        </div>
        <div className="sm:text-base lg:text-lg font-subtitle text-blueside-dark">
          Instantly identify significant changes made to a contract using our
          traffic light system.
        </div>
      </div>
    </div>
  );
};
