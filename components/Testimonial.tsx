"use client";
import React from "react";
import Slider from "react-slick";
import { TESTIMONIAL } from "./Data";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import Accordion from "./Accordion";

type TestimonialsItem = {
  desc: string;
  title: string;
  URL: string;
  profession: string;
};

const Testimonial = () => {

    const settings = {
        arrows: false,
        infinity: true,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }
  return (
    <section
      className="max_padd_container py-16 bg-white relative flex max-lg:flex-wrap"
      id="testimonial"
    >
      <div className=" ">
        <div className="bold-18 text-secondary">
          <h4>HAPPY CUSTOMER</h4>
          <h3>Testimonials</h3>
        </div>
        <div className="w-[800px] max-xl:w-[500px] max-sm:w-[300px] ">
          <Slider {...settings}>
            {TESTIMONIAL.map((testimonial) => (
              <TestimonialItem
                key={testimonial.title}
                URL={testimonial.URL}
                title={testimonial.title}
                profession={testimonial.profession}
                desc={testimonial.desc}
              />
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <Accordion />
      </div>
    </section>
  );
};

const TestimonialItem = ({
  title,
  URL,
  profession,
  desc,
}: TestimonialsItem) => {
  return (
    <div className="my-8 rounded-md z-10">
      <div className="pb-6">
        <Image
          src={URL}
          alt={title}
          height={77}
          width={77}
          className="rounded-full mb-4 object-cove h-[77px] w-[77px]"
        />
        <div className="">
          <div className="medium-20 text-secondary">{title}</div>
          <div className="text-gray-200 regular-14">{profession}</div>
        </div>
      </div>
      <span className="text-3xl-z-10">
        <FaQuoteLeft />
      </span>
      <p className="max-w-lg pt-3 text-gray-500">{desc}</p>
    </div>
  );
};
export default Testimonial;
