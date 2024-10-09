import { Video } from "./Video"


export const DemoVideo = () => {
  return (
    <div className="flex flex-col justify-start w-full mt-16 sm:mt-32">
      <div className="sm:w-1/2 text-blueside-dark">
        <h1 className="text-3xl sm:text-5xl font-medium mb-4 sm:mb-6">Supercharge your contract review process</h1>
        <p className="text-sm sm:text-lg font-[350] mb-6 sm:mb-12">Watch the demo to see how our secure AI helps you instantly identify the most 
          important clause changes right inside MS Word.</p>
      </div>
      <div className="w-full p-4 sm:p-12 border rounded-xl">
        <Video videoId="YBVI3Ob74xE" />
      </div>
    </div>
  )
}