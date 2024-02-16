import React from "react";

function Index(props) {
  return (
    <div className=" bg-[#0F172A] text-white ">
      <div className="flex max-md:flex-col justify-between items-center pt-20 max-lg:pt-10 px-20 max-lg:px-10 max-sm:px-5">
        <div className="text-5xl max-sm:text-3xl font-bold max-sm:text-center">
          The best of the best
        </div>
        <div className="border-2 hover:scale-105 py-3 px-8 rounded-lg font-semibold max-md:mt-5 cursor-pointer hover:bg-blue-950 hover:shadow-lg">
          Sign up now
        </div>
      </div>
      <div className="relative mx-10 max-lg:mx-5 max-sm:mx-2.5 pb-20 max-lg:pb-10">
        <img
          src={`/backLights.svg`}
          alt="Background"
          className="absolute top-0 left-0 w-full -translate-y-[10%]"
        />

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-20 max-xl:gap-10   mt-20 max-lg:mt-10  relative z-10 px-10 max-lg:px-5 max-sm:px-2.5 ">
          <div
            className="flex flex-col rounded-lg relative z-10 bg-[#0F172A] overflow-hidden"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
            }}
          >
            <img src="/shoe1.svg" alt="" className="" />
            <div className="flex flex-col p-5">
              <div>
                <div className="font-bold">Title</div>
                <div className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni, possimus.
                </div>
              </div>
              <div className="p-2 border-2 hover:scale-105 border-white mt-8 rounded text-center font-semibold cursor-pointer hover:bg-blue-950 hover:shadow-lg">
                Buy Now
              </div>
            </div>
          </div>
          <div
            className="flex flex-col rounded-lg bg-[#0F172A] overflow-hidden"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
            }}
          >
            <img src="/shoes3.svg" alt="" className="" />
            <div className="flex flex-col p-5">
              <div>
                <div className="font-bold">Title</div>
                <div className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni, possimus.
                </div>
              </div>
              <div className="p-2 border-2 hover:scale-105 border-white mt-8 rounded text-center font-semibold cursor-pointer hover:bg-blue-950 hover:shadow-lg">
                Buy Now
              </div>
            </div>
          </div>
          <div
            className="flex flex-col rounded-lg bg-[#0F172A] overflow-hidden"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
            }}
          >
            <img src="/shoes2.svg" alt="" className="" />
            <div className="flex flex-col p-5 opacity-100">
              <div>
                <div className="font-bold">Title</div>
                <div className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni, possimus.
                </div>
              </div>
              <div className="p-2 border-2 hover:scale-105 border-white mt-8 rounded text-center font-semibold cursor-pointer hover:bg-blue-950 hover:shadow-lg">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
