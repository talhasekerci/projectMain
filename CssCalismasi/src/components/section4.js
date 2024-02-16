import React, { useEffect, useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";

function Index(props) {
  const [slidesToShow, setSlidesToShow] = useState(null); // Default number of slides

  useEffect(() => {
    function handleResize() {
      // Adjust the number of slides based on the screen width
      setSlidesToShow(() => {
        return window.innerWidth / 300.0;
      });
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once on initial render to set the initial number of slides
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="p-20 max-lg:pt-10 max-lg:px-10 max-sm:px-5 bg-[#F5F5DC] relative">
        <div className="relative z-10 max-lg:flex max-lg:flex-col max-lg:items-center">
          <div className="text-5xl font-bold max-sm:text-4xl max-lg:text-center">
            Grow your collection
          </div>
          <div className="mt-8 max-lg:text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            optio temporibus dolores vel autem facilis officiis consequatur
            totam hic ducimus architecto quam, aspernatur necessitatibus natus
            debitis at, rem a minima voluptates alias delectus nostrum corrupti?
            Mollitia autem soluta debitis dolorum!
          </div>
        </div>
        <div className="mt-20 max-lg:mt-10 flex max-lg:flex-col justify-between relative z-10">
          <div className="flex flex-col max-lg:hidden font-semibold mr-5">
            <div className="flex items-center py-2 px-5 max-xl:pr-10 bg-white shadow-lg rounded w-fit cursor-pointer">
              <img src="/icon1.svg" alt="" className="mr-4" /> Bibendum tellus{" "}
              <img
                src="/rightArrow2.svg"
                alt=""
                className="w-5 ml-3 max-xl:ml-2 max-lg:hidden"
              />
            </div>
            <div className="flex py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer hover:scale-110">
              <img src="/icon2.svg" alt="" className="mr-4" /> Cras eget
            </div>
            <div className="flex py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer hover:scale-110">
              <img src="/icon3.svg" alt="" className="mr-4" /> Dolor pharetra
            </div>
            <div className="flex py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer hover:scale-110">
              <img src="/icon4.svg" alt="" className="mr-4" /> Amet, fringilla
            </div>
            <div className="flex py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer hover:scale-110">
              <img src="/icon5.svg" alt="" className="mr-4" /> sed velit
            </div>
            <div className="flex py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer hover:scale-110">
              <img src="/icon6.svg" alt="" className="mr-4" /> Lorem, ipsum.
            </div>
          </div>
          <div className="hidden max-lg:flex">
            {slidesToShow && (
              <Carousel swiping swipeOn={0.3} show={slidesToShow} slide={1}>
                <div className="flex items-center py-2 px-5 max-xl:pr-10 bg-white shadow-lg rounded cursor-pointer ">
                  <img src="/icon1.svg" alt="" className="mr-4" /> Bibendum
                  tellus{" "}
                  <img
                    src="/rightArrow2.svg"
                    alt=""
                    className="w-5 ml-3 max-xl:ml-2 max-lg:hidden"
                  />
                </div>
                <div className="flex  items-center py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer -translate-y-2">
                  <img src="/icon2.svg" alt="" className="mr-4" /> Cras eget
                </div>
                <div className="flex items-center  py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer -translate-y-2">
                  <img src="/icon3.svg" alt="" className="mr-4" /> Dolor
                  pharetra
                </div>
                <div className="flex items-center  py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer -translate-y-2">
                  <img src="/icon4.svg" alt="" className="mr-4" /> Amet,
                  fringilla
                </div>
                <div className="flex items-center  py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer -translate-y-2">
                  <img src="/icon5.svg" alt="" className="mr-4" /> sed velit
                </div>
                <div className="flex py-2 px-5 mt-5 max-xl:mt-2 cursor-pointer -translate-y-2">
                  <img src="/icon6.svg" alt="" className="mr-4" /> Lorem, ipsum.
                </div>
              </Carousel>
            )}
          </div>
          <div>
            <img src="/mainShoes.svg" alt="" />
          </div>
        </div>

        <img
          src="/Waves.svg"
          alt=""
          className="absolute bottom-0 left-0 w-full z-0"
        />
      </div>
      <img src="/fullGlobeImage.svg" alt="" className="w-full " />
    </div>
  );
}

export default Index;
