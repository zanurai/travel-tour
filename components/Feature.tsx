"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FEATURE } from "./Data";
import Image from "next/image";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

type FeatureItems = {
  URL: string;
  title: string;
  des: string;
};


const Feature = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0  lg:top-[-60px] max-lg:top-[100px] lg:right-0 z-10 ring-1 ring-slate-900/5 hover:bg-white"
      >
        <GrFormNext />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div onClick={onClick } className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 lg:top-[-60px] max-lg:top-[100px] lg:right-20 z-10 max-lg:right-50 ring-1 ring-slate-900/5 hover:bg-white">
        <GrFormPrevious />
      </div>
    );
  };
 const settings: Settings = {
   arrows: true,
   infinite: true,
   speed: 500,
   autoplay: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow />,
   responsive: [
     {
       breakpoint: 1400,
       settings: {
         slidesToShow: 4,
       },
     },

     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 2,
       },
     },

     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 2,
       },
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2,
       },
     },
     {
       breakpoint: 640,
       settings: {
         slidesToShow: 2,
       },
     },
   ],
 };

  return (
    <section
      className="max_padd_container py-20 xl:py-32 bg-white"
      id="feature"
    >
      <div className="w-[100%] m-auto">
        <div className="mx-4">
          <h4 className="bold-18 text-secondary">What we serve</h4>
          <h3 className="h3 max-w-lg">We Provide Top Destinations</h3>
          <p className="max-w-lg mb-[40px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, eaque laboriosam et aut beatae consequatur cupiditate,
            non at unde expedita tempore ad culpa commodi quia? Dolore expedita
            ab commodi reiciendis.
          </p>
        </div>

        <div className="xl:w-[100%]  ">
          <Slider {...settings}>
            {FEATURE.map((features) => (
              <FeatureItems
                key={features.URL}
                URL={features.URL}
                title={features.title}
                des={features.des}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const FeatureItems = ({ title, URL, des }: FeatureItems) => {
  return (
    <div className="mx-4 overflow-hidden group">
      <Link href="/" className="overflow-hidden relative">
        <div>
          <Image
            src={URL}
            alt=""
            height={600}
            width={810}
            className="hover:scale-1/5 h-[250px] sm:w-[400px]  object-cover transition-all duration-700 overflow-hidden"
          />
        </div>
        <h4 className="capitalize regular-22 absolute top-6  text-[36px] text-white px-2 ">
          {title}
        </h4>
        <p className="regular-18 absolute bottom-6 right-0   bg-black text-white px-4 py-2 rounded-l-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300">
          {des}
        </p>
      </Link>
    </div>
  );
};

export default Feature;
