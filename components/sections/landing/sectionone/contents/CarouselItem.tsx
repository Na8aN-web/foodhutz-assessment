import React from "react";
import Image from "next/image";
import KiteLayout from "@/components/layout/KiteLayout";
import { BsArrowUpRightCircle } from "react-icons/bs";

const CarouselItem = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 justify-center items-center z-[99] px-2 md:px-24">
      <div className="col-span-2 md:col-span-1 text-white flex flex-col gap-y-6 md:gap-y-12">
        <div className="flex gap-x-2">
          <Image
            src={
              "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
            }
            alt=""
            width={20}
            height={20}
          />
          <p className="text-[#bf9444]">Welcome to Restho</p>
          <Image
            src={
              "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
            }
            alt=""
            width={20}
            height={20}
          />
        </div>
        <h1 className="text-xl md:text-7xl leading-10 ">
          Find Your Best Health and Tasty Food
        </h1>
        <p className="text-base md:text-xl">
          It is a long-established fact that a reader will be distracted by the
          readable content of the page.
        </p>
        <button className="flex items-center text-[#bf9444] px-6 py-4 gap-x-3 border border-[#bf9444] rounded-full max-w-xs justify-center">
          <BsArrowUpRightCircle />
          <p>Discover More</p>
        </button>
      </div>
      <div className="col-span-2 md:col-span-1">
        <KiteLayout />
      </div>
    </div>
  );
};

export default CarouselItem;
