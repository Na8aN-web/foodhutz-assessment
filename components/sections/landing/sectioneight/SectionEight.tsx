"use client";

import { o10 } from "@/assets";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionEight = () => {
  React.useEffect(() => {
    AOS.init();
  });
  const SectionEightStyles = {
    Layout: tw.div`w-full py-10`,
    Center: tw.div`flex flex-col text-white items-center justify-center`,
    Grid: tw.div`grid grid-cols-6 gap-x-16 gap-y-4`,
    CardLayout: tw.div`w-full`,
    ImageLayout: tw.div`relative w-full px-4 md:px-12 z-40`,
  };
  const { Layout, Center, CardLayout, Grid, ImageLayout } =
    SectionEightStyles;
  return (
    <>
      <PageWrapper classNames="bg-white px-10">
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
              <p className="text-[#bf9444]">Our Blog</p>
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-5xl md:text-6xl text-center md:text-start py-8 text-black">
              Our Latest Blog
            </h1>
          </Center>
          {/*  */}
          <Grid>
            {Array(3)
              .fill("")
              .map((_) => (
                <>
                  <div className="col-span-6 md:col-span-2 group" key={_}>
                    <CardLayout>
                      <ImageLayout>
                        <div className="h-20 w-20 flex items-center justify-center bg-white rounded-lg absolute top-4 right-8 md:right-16 transition duration-300">
                          <a
                            href="#"
                            className="w-full flex flex-col justify-center items-center h-full rounded-lg"
                          >
                            <h1 className="text-[#bf9444] text-xl">
                              15
                            </h1>
                            <p>Sep</p>
                          </a>
                        </div>

                        <Image
                          src={o10}
                          alt=""
                          width={1000}
                          height={1000}
                          className="overflow-clip-margin-content overflow-clip max-w-full w-full h-auto rounded-md"
                        />
                      </ImageLayout>
                      <Center className="p-20 rounded-xl border border-slate-100 gap-y-6 relative -mt-16">
                        <p className="group flex items-center gap-x-3 transition duration-200 text-[#5e5e5e]">
                          <div className="w-10 h-[2px] bg-[#5e5e5e] hover:bg-[#bf9444]" />
                          <span className="hover:text-[#bf9444]">
                            By Clone Watson
                          </span>
                        </p>
                        <p className="text-lg md:text-3xl text-center text-black">
                          To Make Good Health Take Nutrition Food.
                        </p>
                        <button className="flex items-center text-[#bf9444] px-6 py-4 gap-x-3 border border-[#bf9444] rounded-full">
                          {/* <BsArrowUpRightCircle /> */}
                          <p>Read More</p>
                        </button>
                      </Center>
                    </CardLayout>
                  </div>
                </>
              ))}
          </Grid>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default SectionEight;
