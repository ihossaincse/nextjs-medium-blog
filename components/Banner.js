import Image from "next/image";
import React from "react";
import Button from "./Button";

const Banner = ({ title = "", text = "", btnText = "", btnUrl = "" }) => {
  return (
    <div className="border-b-2 border-black bg-amber-400">
      <div className="flex flex-col items-end justify-between px-5 mx-auto space-x-20 text-center md:pt-20 md:text-left max-w-7xl md:flex-row">
        <div className="w-full py-10 md:w-/6/12">
          <h2 className="pb-2 text-7xl">{title}</h2>
          <p className="pb-5 text-lg font-medium">{text}</p>
          <Button text={btnText} url={btnUrl} />
        </div>
        <div className="relative w-full md:text-right md:w-/6/12">
          <Image
            src="/images/banner_writting.png"
            width={500}
            height={350}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
