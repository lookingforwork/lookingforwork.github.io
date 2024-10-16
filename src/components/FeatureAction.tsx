import Image from "next/image";

export const FeatureAction = () => {
  return (
    <div className="flex flex-row items-center justify-center px-24 py-14">
      <div className="flex flex-col py-8 pr-24">
        <div className="text-5xl text-blueside-dark mb-6">
          Get Recommended Actions
        </div>
        <div className="sm:text-base lg:text-lg font-subtitle text-blueside-dark">
          Move faster through drafts using our AI suggested changes which can be
          added in with one click.
        </div>
      </div>
      <Image
        className="rounded-2xl"
        src="/img/placeholder_2.jpg"
        alt="recommended actions"
        width={400}
        height={400}
      />
    </div>
  );
};
