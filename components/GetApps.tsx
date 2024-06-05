import React from "react";

import { FaApple } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
const GetApps = () => {
  return (
    <section
      className="flex items-center w-full flex-col bg-[#fbfafa]"
      id="download"
    >
      <div className="max_padd_container max-container relation flex w-full flex-col justify-between gap-32 overflow-hidden px-6 py-12 sm:flex-row sm-gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="z-20 flex w-full flex-1  flex-col items-start justify-center gap-4 xl:max-[555px]">
          <h2 className="bold-40 lg:bold-64">Get Our App Now!</h2>
          <h4 className="uppercase medium-16 text-secondary">
            AVAILABLE FOR IOS AND ANDROID
          </h4>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur fuga dolor excepturi, sunt unde ipsam provident nihil
            laudantium dolorem vero, sed labore distinctio eos culpa quis. Optio
            fuga sed dicta!
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App store"
              icon={<FaApple />}
              variant="bg-black rounded-full text-white !px-12 !py-4"
            />

            <Button
              type="button"
              title="Play store"
              icon={<FaApple />}
              variant="bg-secondary rounded-full !px-12 !py-4"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/image/photo1.png"
            alt="phones"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApps;
