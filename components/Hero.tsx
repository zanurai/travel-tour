import React from "react";
import { DiAtlassian } from "react-icons/di";
import { MdDateRange, MdLocationPin } from "react-icons/md";

const Hero = () => {
  return (
    <section className="w-full relative flexCenter" id="home">
      <div className="absolute h-full w-full bg-[#b2afaf] top-0 bottom-0 z-100"></div>
      <video
        className="absolute h-full w-full top-0 bottom-0 object-cover"
        autoPlay
        muted
        loop
      >
        <source src={"/image/video-bg.webm"} type="video/webm" />
      </video>
      <div className="w-full h-max max_padd_container pt-64 pb-64 flex gap-y-3 relative flex-col justify-center m-auto z-10   lg:pt-64 lg:pb-24">
        <div className="py-0 px-0 text-white">
          <span className="uppercase regular-18">
            TRAVEL TO ANY CORNER OF THE WORLD
          </span>

          <h2 className="h2 max-w-[777px]">
            Make Your Tour Amazing With Us
          </h2>
        </div>
      </div>

      <div className="relative  max_padd_container pb-10">
        <div className="text-center">
          <span className="bg-white medium-16 py-4 px-12 rounded-lg font-semibold">
            Search for Your Trip
          </span>
        </div>
        <div className="flex flex-col justify-between md:flex-row gap-6 px-8 py-10 md:px-12  bg-white rounded-xl">
          <div>
            <label htmlFor="city" className="block text-gray-500 pb-2">
              Search your destination
            </label>
            <div className="flex items-center border  bg-[#f7f7f7] px-6 rounded-full py-4 ">
              <div className="flex flex-col w-full ">
                <input
                  type="text"
                  placeholder="Enter name here...."
                  className="bg-transparent border-none outline-none w-full regular-24"
                />
              </div>
              <MdLocationPin className="text-lg" />
            </div>
          </div>

          <div>
            <div className="f">
              <label htmlFor="date" className="block text-gray-500 pb-2">
                Search your date:{" "}
              </label>
              <div className="flex items-center border text-[#aeadad] bg-[#f7f7f7] px-6 rounded-full py-4">
                <input
                  type="date"
                  className="bg-transparent border-none  outline-none w-full regular-24"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <label htmlFor="city" className="block text-gray-500 pb-2">
              Max price:
            </label>
            <h1>$50000</h1>
          </div>
          <div className="">
            <input
              type="range"
              className="cursor-pointer bg-transparent border-none outline-none w-full regular-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
