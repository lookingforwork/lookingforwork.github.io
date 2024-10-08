import Image from "next/image";

export const FeatureOne = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 py-20">
      <div className="flex flex-col space-y-3 w-56 mr-10">
        <div className="text-4xl text-blueside-dark">Supercharge Your Contract Reviews</div>
        <div className="text-s text-blueside-dark">Instantly see AI-powered change analysis inside your tracked-changes documents</div>
      </div>
      <div className="transition-all duration-300 ease-in-out w-72 min-w-72 h-[22.5rem] text-left bg-slate-50 border border-slate-200 shadow-md rounded-2xl ml-5 hover:shadow-2xl  hover:h-[26rem]">
        <div className="text-xxs rounded-t-2xl">
          <div className="flex align-start items-center space-x-2 px-5 py-2">
            <div>Modified - Clause 4.1</div>
            <div className="flex-grow"></div>
            <div className="pr-2">1 / 10</div>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 animate-pulse"></span>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-2">
          <div className="relative px-4 text-xxs h-28 overflow-hidden fade-out">
            <div className="fade-out">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis
              eu sem quis pretium. Suspendisse vitae lectus facilisis, mollis ipsum
              eget, volutpat leo. Suspendisse dignissim tortor sit amet nisl
              sagittis, vel dignissim velit faucibus. Nulla finibus eget magna
              pharetra congue. Maecenas fringilla, nisi tincidunt sagittis suscipit,
              neque urna gravida tortor, a ullamcorper nulla ante in ligula. Nulla
              finibus eget orci vitae luctus.
            </div>
          </div>
          <div className="relative px-4 text-xxs h-28 overflow-hidden fade-out">
            <div className="fade-out">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis
              eu sem quis pretium. Suspendisse vitae lectus facilisis, mollis ipsum
              eget, volutpat leo. Suspendisse dignissim tortor sit amet nisl
              sagittis, vel dignissim velit faucibus. Nulla finibus eget magna
              pharetra congue. Maecenas fringilla, nisi tincidunt sagittis suscipit,
              neque urna gravida tortor, a ullamcorper nulla ante in ligula. Nulla
              finibus eget orci vitae luctus.
            </div>
          </div>
        </div>
        <div className="py-4 px-4 text-xxs bg-slate-700 rounded-b-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis eu
          sem quis pretium. Suspendisse vitae lectus facilisis, mollis ipsum eget,
          volutpat leo. Suspendisse dignissim tortor sit amet nisl sagittis, vel
          dignissim velit faucibus. Nulla finibus eget magna pharetra congue.
          Maecenas fringilla, nisi tincidunt sagittis suscipit, neque urna gravida
          tortor, a ullamcorper nulla ante in ligula. Nulla finibus eget orci vitae
          luctus.
        </div>
        <div className="transition-all duration-300 ease-in-out text-xxs px-4 py-2 text-left rounded-2xl align-middle hover:outline hover:outline-1">
          Recommended action</div>
      </div>
    </div>
  );
};

//1F2937
