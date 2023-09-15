
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import SectionThreeCarousel from "./contents/SectionThreeCarousel";

const SectionThree = () => {
  const SectionThreeStyles = {
    Layout: tw.div`w-full`,
    Center: tw.div`flex flex-col text-white items-center justify-center w-full gap-y-5 pb-20`,
  };
  const { Layout, Center } = SectionThreeStyles;
  return (
    <>
      <PageWrapper classNames="regular-item ">
        <Layout>
          <Center>
            <div className="flex gap-x-2">
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
              <p className="text-[#bf9444]">Online Reserve</p>
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-5xl md:text-6xl text-center md:text-start">
              Restho New Item List
            </h1>
            <p>
              Various versions have evolved over the years, sometimes on
              purpose.
            </p>
          </Center>
          {/* CAROUSEL */}
          <SectionThreeCarousel />
        </Layout>
      </PageWrapper>
    </>
  );
};

export default SectionThree;
