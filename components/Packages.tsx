import React from "react";
import { PACKAGE } from "./Data";
import Link from "next/link";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import { RiTimerLine } from "react-icons/ri";

type PackageItems = {
  URL: string;
  title: string;
  location: string;
  price: string;
  des: string;
  duration: string;
};
const Packages = () => {
  return (
    <section
      className=" max_padd_container py-16 xl:py-20 bg-slate-10"
      id="listing"
    >
      <div className="mx-4 ">
        <h4 className="bold-18 text-secondary">TAKE A LOOK AT THESE OFFERS</h4>
        <h3 className="h3 max-w-lg">We Provide Top Destinations</h3>
        <p className="max-w-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          dolorem consequatur ex veritatis sint quasi non magni blanditiis
          asperiores velit ducimus porro, ab officiis, vero labore, dolor quas
          delectus natus!
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-12 ">
        {PACKAGE.map((elem) => (
          <PackageItems
            key={elem.URL}
            URL={elem.URL}
            title={elem.title}
            price={elem.price}
            des={elem.des}
            location={elem.location}
            duration={elem.duration}
          />
        ))}
      </div>
    </section>
  );
};

const PackageItems = ({
  URL,
  title,
  duration,
  price,
  location,
  des,
}: PackageItems) => {
  return (
    <div className="overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-200 group">
      <Link href={"/"} className="overflow-hidden ">
        <Image
          src={URL}
          height={366}
          width={640}
          alt="img"
          className="h-[200px]"
        />
        <div className="flex justify-center  items-center mt-[-20px]">
          <span className="border py-[10px] px-10 bg-black text-white rounded-full text-center group hover:bg-secondary ">
            $ {price}
          </span>
        </div>
      </Link>
      <div className="p-4 bg-white">
        <div className="capitalize medium-22 ">
          <span className="text-[20px] font-semibold">{title}</span>
          <div className="flex items-center gap-x-2 my-1">
            <MdLocationPin className="text-gray-500" />{" "}
            <span className="regular-16 text-gray-500">{location}</span>
          </div>
        </div>
        <hr className="mt-3" />
        <p className="my-3">{des}</p>
        <hr className="mt-3" />
        <div className="flex justify-between  items-center">
          <div className=" flex  flexCenter items-center gap-x-4">
            <div className="flex flexCenter gap-x-2 text-secondary">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarHalfFilled />
            </div>
            <span>(22)</span>
          </div>

          <div className="flex flex-start items-center  gap-2 text-gray-500">
            <RiTimerLine className="text-lg" />
            <span className="medium-16">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Packages;
