import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import userEvent from "@testing-library/user-event";

function Index(props) {
  const [slidesToShow, setSlidesToShow] = useState(null); // Default number of slides

  useEffect(() => {
    function handleResize() {
      // Adjust the number of slides based on the screen width
      setSlidesToShow(() => {
        return window.innerWidth / 340.0;
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

  const data = [
    {
      title: "Slide 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "John Doe",
      role: "Developer",
    },
    {
      title: "Slide 2",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    {
      title: "Slide 3",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    {
      title: "Slide 4",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    {
      title: "Slide 5",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    {
      title: "Slide 6",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    {
      title: "Slide 7",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    {
      title: "Slide 8",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    {
      title: "Slide 9",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    {
      title: "Slide 10",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      role: "Designer",
    },
    // Add more data as needed
  ];

  //
  let leftArrowRef = useRef(null);
  let rightArrowRef = useRef(null);

  const triggerLeftArrowPress = () => {
    // Check if the left arrow ref is available
    if (leftArrowRef.current) {
      leftArrowRef.current.click(); // Programmatically click the left arrow div
    }
  };
  const triggerRightArrowPress = () => {
    // Check if the left arrow ref is available
    if (rightArrowRef.current) {
      rightArrowRef.current.click(); // Programmatically click the left arrow div
    }
  };

  return (
    <div className="bg-[#F5F5DC] pt-40 max-lg:pt-10 pb-20  max-lg:pb-10">
      <div className="px-20 max-lg:px-10 max-sm:px-5">
        <div className="bg-white shadow-2xl px-12 max-sm:px-6 py-28 max-xl:pt-16  max-xl:pb-10 max-sm:py-6  rounded-xl flex max-lg:flex-col justify-between items-center relative">
          <div className="w-1/2 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:z-10">
            <div className="text-5xl font-bold max-sm:text-4xl ">
              Why join us
            </div>
            <div className="flex flex-col mt-8 text-xl">
              <div className="flex items-center">
                <img src="/tick.svg" alt="" className="mr-2 w-5" /> Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Delectus,
                excepturi!
              </div>
              <div className="flex items-center">
                <img src="/tick.svg" alt="" className="mr-2 w-5" /> Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="flex items-center">
                <img src="/tick.svg" alt="" className="mr-2 w-5" /> Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Iure!
              </div>
            </div>
            <div className=" border-2 hover:scale-105 py-3 px-5 mt-8 border-amber-900 text-amber-900 rounded-lg w-fit font-semibold text-xl cursor-pointer  hover:bg-gray-100 hover:shadow-lg">
              Sign up now
            </div>
          </div>
          <div className="w-1/2 relative max-lg:w-full max-lg:z-0">
            <img
              src="/backElements.svg"
              alt=""
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%]  w-full max-lg:relative max-lg:translate-x-0 max-lg:-translate-y-[10%]"
            />
            <img
              src="/video.svg"
              alt=""
              className="absolute right-0 top-1/2 -translate-y-[55%]  translate-x-[10%] w-screen max-lg:translate-x-0 cursor-pointer"
            />
          </div>{" "}
        </div>
      </div>

      <div className="pt-40  pb-20 max-lg:pb-10 max-lg:pt-20">
        <div className="flex justify-between items-center px-20 max-lg:px-10 max-sm:px-5">
          <div className="text-5xl font-bold max-sm:text-4xl">
            Because they love us
          </div>
          <div className="font-bold flex  max-lg:hidden">
            <div
              className="mr-5 cursor-pointer hover:scale-110"
              onClick={triggerLeftArrowPress}
            >
              <img src="/leftArrow.svg" alt="" />
            </div>
            <div className="cursor-pointer" onClick={triggerRightArrowPress}>
              <img
                src="/rightArrow.svg"
                alt=""
                className="cursor-pointer hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className=" bg-yellow-300 mt-10 ">
          <div className="translate-y-10 " id="carousal1">
            {slidesToShow && (
              <Carousel
                swiping={true}
                swipeOn={0.3}
                show={slidesToShow}
                slide={1}
                useArrowKeys
                leftArrow={<div ref={leftArrowRef}></div>}
                rightArrow={<div ref={rightArrowRef}></div>}
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className=" p-10 bg-white rounded  w-80 h-[400px] shadow flex flex-col justify-between"
                  >
                    <div>
                      <img src="/logo1.svg" alt="" />
                    </div>
                    <div className="mt-5 text-2xl">{item.content}</div>
                    <div className="flex items-center mt-5">
                      <img
                        src="/profileImage.svg"
                        alt=""
                        className="w-14 h-14 mr-2"
                      />
                      <div>
                        <div className="text-lg">{item.author}</div>
                        <div className="text-[#475569] ">{item.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
