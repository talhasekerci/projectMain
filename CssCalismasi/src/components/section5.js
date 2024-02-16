import React from "react";

function Index(props) {
  return (
    <div className="p-20  max-lg:px-10 max-sm:px-5  bg-[#0F172A] text-white  relative">
      <div className="flex max-sm:flex-col pb-20">
        <div className="flex max-sm:flex-col max-sm:items-center w-2/3 max-sm:w-full justify-between mr-16">
          <div>
            <div className="mt-8 font-bold max-sm:text-center">Product</div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Pricing
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Overview
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Browse
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Accessibility
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Five
            </div>
          </div>
          <div>
            <div className="mt-8 font-bold max-sm:text-center max-sm:mt-20">
              Solutions
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Brainstorming
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Ideation
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Wireframing
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Research
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Design
            </div>
          </div>
          <div>
            <div className="mt-8 font-bold max-sm:text-center max-sm:mt-20">
              Support
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Contact Us
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Developers
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Documentation
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Integration
            </div>
            <div className="mt-8 max-sm:text-center cursor-pointer hover:scale-110">
              Report
            </div>
          </div>
        </div>
        <div className="w-1/3  flex flex-col items-center justify-between max-sm:w-full max-sm:mt-20">
          <div className="flex flex-col items-center">
            {" "}
            <div className="mt-8 font-bold max-sm:text-center">Get the app</div>
            <img
              src="/AppStore.svg"
              alt=""
              className="mt-5 cursor-pointer hover:scale-110"
            />
            <img
              src="/GooglePlay.svg"
              alt=""
              className="mt-5 cursor-pointer hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-center">
            {" "}
            <div className="mt-8 font-bold max-sm:text-center">Follow us</div>
            <div className="flex mt-5">
              <img
                src="/youtube.svg"
                alt=""
                className="mr-4 cursor-pointer hover:scale-110"
              />
              <img
                src="/facebook.svg"
                alt=""
                className="mr-4 cursor-pointer hover:scale-110"
              />
              <img
                src="/twitter.svg"
                alt=""
                className="mr-4 cursor-pointer hover:scale-110"
              />
              <img
                src="/instagram.svg"
                alt=""
                className="mr-4 cursor-pointer hover:scale-110"
              />
              <img
                src="/linkedin.svg"
                alt=""
                className="mr-4 cursor-pointer hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-20 border-t max-sm:flex-col max-sm:items-center ">
        <div className=" max-sm:text-center">
          {" "}
          Collers @2024. ALl rights reserved.
        </div>
        <div className="flex max-sm:mt-5 ">
          <div className="ml-10 max-sm:ml-0 max-sm:text-center cursor-pointer hover:scale-110">
            Terms
          </div>
          <div className="ml-10 max-sm:text-center cursor-pointer hover:scale-110">
            Privacy
          </div>
          <div className="ml-10 max-sm:text-center cursor-pointer hover:scale-110">
            Contact
          </div>
          <div className="ml-10 max-sm:text-center cursor-pointer hover:scale-110">
            EN
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
