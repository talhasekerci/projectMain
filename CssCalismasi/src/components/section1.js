import React from "react";

function Index(props) {
  return (
    <div
      className="px-20 max-lg:px-10 max-sm:px-5 pt-5 pb-20 "
      style={{
        background:
          "linear-gradient(163deg,  #F5F5DC 20%, #F5F5DC, #FFE4B5,#FFE4B5  50%)",
      }}
    >
      <div className="flex items-center justify-between text-amber-900 ">
        <div className="font-bold text-3xl cursor-pointer">Collers</div>
        <div className="flex font-semibold items-center max-lg:hidden">
          <div className="mx-5 cursor-pointer  hover:scale-110">Products</div>
          <div className="mx-5 cursor-pointer hover:scale-110">Solution</div>
          <div className="mx-5 cursor-pointer hover:scale-110">Pricing</div>
          <div className="mx-5 cursor-pointer hover:scale-110">Resources</div>
          <div className="mx-5 cursor-pointer hover:scale-110">Login</div>

          <div className=" border-2 py-3 px-5 border-amber-900 rounded-lg font-semibold cursor-pointer hover:bg-yellow-50 hover:shadow-lg hover:scale-105">
            Sign up now
          </div>
        </div>
        <div className="hidden max-lg:block cursor-pointer hover:scale-110">
          <img src="/menuNavbar.svg" alt="" />
        </div>
      </div>
      <div>
        <div className="flex max-lg:flex-col   items-center py-20">
          <div className="">
            <div className="text-[65px] leading-[70px] max-sm:text-5xl font-bold max-lg:text-center">
              Collectible Sneakers
            </div>
            <div className="mt-8 max-lg:text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
              quos est, ea soluta recusandae eligendi sit nemo ex numquam sint
              itaque tempora in cupiditate totam autem earum suscipit
              perferendis magni .
            </div>
            <div className="flex max-lg:justify-center mt-8 text-amber-900  items-center  font-semibold">
              <div className="mr-5 border-2 py-3 px-5 hover:scale-105 border-amber-900 rounded-lg font-semibold cursor-pointer hover:bg-yellow-50 hover:shadow-lg">
                Sign up now
              </div>
              <div className="flex cursor-pointer  hover:scale-105">
                <img src="/play.svg" alt="" className="mr-2" /> Watch Demo
              </div>
            </div>
          </div>
          <img src="/shoes.svg" alt="" className=" p-5 max-lg:p-0" />
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
          <div className="flex flex-col max-lg:items-center">
            <img src="/trophy.svg" alt="" className="w-10" />
            <div className="mt-2 font-semibold">Lorem, ipsum.</div>
            <div className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aliquid mollitia eaque voluptate. Eius minus ut autem, amet
              architecto soluta!
            </div>
          </div>
          <div className="flex flex-col max-lg:items-center">
            <img src="/tunnel.svg" alt="" className="w-10" />
            <div className="mt-2 font-semibold">Lorem, ipsum.</div>
            <div className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aliquid mollitia eaque voluptate. Eius minus ut autem, amet
              architecto soluta!
            </div>
          </div>
          <div className="flex flex-col max-lg:items-center">
            <img src="/tv.svg" alt="" className="w-10" />
            <div className="mt-2 font-semibold">Lorem, ipsum.</div>
            <div className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aliquid mollitia eaque voluptate. Eius minus ut autem, amet
              architecto soluta!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
