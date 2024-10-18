import { Video } from "./Video";

export const DemoVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-16 sm:mt-32">
      <div className="mx-8 sm:mx-0 sm:w-2/3 text-blueside-dark lg:px-12">
        <h1 className="text-4xl sm:text-5xl mb-4 sm:mb-6">Watch the Demo</h1>
        <p className="text-sm sm:text-lg font-[350] mb-6 sm:mb-12">
          See how BlueSide helps you instantly identify the most important
          clause changes right inside MS Word.
        </p>
      </div>
      <div className="w-full p-0 sm:p-12 border rounded-xl">
        <Video videoId="YBVI3Ob74xE" />
      </div>
    </div>
  );
};
