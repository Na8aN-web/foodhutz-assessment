"use client";

import { o8 } from "@/assets";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionFive = () => {
  React.useEffect(() => {
    AOS.init();
  });
  const SectionFiveStyles = {
    Layout: tw.section`w-full py-32 px-2 md:px-24`,
    Center: tw.div`flex flex-col text-white items-center justify-center gap-y-3 md:gap-y-0`,
    Grid: tw.div`grid grid-cols-6 gap-4 mt-10`,
    Card: tw.div`col-span-6 md:col-span-2`,
  };
  const { Layout, Center, Card, Grid } = SectionFiveStyles;
  return (
    <>
      <PageWrapper classNames="bg-white">
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
              <p className="text-[#bf9444]">Gallery Store</p>
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-5xl md:text-6xl text-center md:text-start text-black">
            Our Special Gallery
            </h1>
          </Center>
          <Grid>
            {Array(3)
              .fill("")
              .map((_) => (
                <>
                  <Card  key={_}>
                    <Image
                      src={o8}
                      alt=""
                      width={1000}
                      height={1000}
                      className="transition-transform transform hover:scale-105 cursor-pointer overflow-hidden z-20"
                    />
                  </Card>
                </>
              ))}
          </Grid>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default SectionFive;
