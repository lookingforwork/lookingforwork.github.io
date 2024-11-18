import { Video } from "./Video";

export const DemoVideo = () => {
  return (
    <div id="demo-video" className="flex flex-col justify-center w-full mt-16 sm:mt-32">
      <div className="sm:mx-12 px-0 lg:px-12 lg:w-2/3 text-blueside-dark">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
          Watch the Demo
        </h1>
        <p className="text-sm sm:text-lg font-[350] mb-4">
          See how BlueSide helps you instantly identify the most important
          clause changes right inside MS Word.
        </p>
      </div>
      <div className="w-full p-0 sm:p-12 rounded-xl">
        <Video videoId="YBVI3Ob74xE" />
      </div>
    </div>
  );
};
