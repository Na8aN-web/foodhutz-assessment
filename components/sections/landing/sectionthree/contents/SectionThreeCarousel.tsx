import React from "react";
import tw from "tailwind-styled-components";
import { o6 } from "@/assets";
import { WH } from "@/utils/screensize";
import Image from "next/image";

const SectionThreeCarousel = () => {
  const SectionThreeCarousel = {
    ImageFrame: tw.div`relative`,
    Content: tw.div`flex items-center justify-center pb-20 absolute bottom-[0px] left-1/2 -translate-x-1/2 z-[999]`,
    Dish: tw.div`my-4`,
  };
  const { ImageFrame, Content, Dish } = SectionThreeCarousel;

  return (
    <div className="flex flex-row justify-center items-center gap-10">
      {Array(3)
        .fill("")
        .map(( index) => (
          <Dish key={index}>
            <ImageFrame>
              <Image
                className="h-auto w-full rounded-sm align-middle"
                src={o6}
                alt=""
                width={350}
                height={350}
              />
              <Content className="">
                <p className=" rounded relative z-1 text-[#09161d] after:bg-white after:h-[60px] after:w-[60px] after:rounded-sm after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45 after:z-[-1] after:transition-[0.35s]">
                  $32
                </p>
              </Content>
            </ImageFrame>
            <div className="flex flex-col text-white items-center justify-center my-4">
              <h1 className="text-4xl font-medium">Prawn Fried</h1>
              <p>
                It&apos;s a long agreement that someone will be distracted
              </p>
            </div>
          </Dish>
        ))}
    </div>
  );
};

export default SectionThreeCarousel;
