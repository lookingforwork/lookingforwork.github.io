import Image from "next/image";

export const FeatureRag = () => {
  return (
    <div className="flex flex-row items-center justify-center px-24 py-14">
      <Image
        className="rounded-2xl"
        src="/img/placeholder_2.jpg"
        alt="legalrag"
        width={400}
        height={400}
      />
      <div className="flex flex-col py-8 pl-24">
        <div className="text-5xl text-blueside-dark mb-6">Built For Legal</div>
        <div className="sm:text-base lg:text-lg font-subtitle text-blueside-dark">
          Using RAG (Retrieval Augmented Generation) our system scans the entire
          document when analysing changes.
        </div>
      </div>
    </div>
  );
};
