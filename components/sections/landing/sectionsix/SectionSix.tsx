

import { o9 } from "@/assets";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionSix = () => {
  const SectionFiveStyles = {
    Layout: tw.section`w-full py-32`,
    Center: tw.div`flex flex-col text-white items-center justify-center gap-y-3 md:gap-y-0`,
    Grid: tw.div`grid grid-cols-6 gap-4 pt-12`,
    GridLayout: tw.div`col-span-6 md:col-span-2 group`,
    Content: tw.div`px-4 py-6 flex flex-col gap-y-3 items-center justify-center`,
  };
  const { Layout, Center, Grid, GridLayout, Content } = SectionFiveStyles;
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
              <p className="text-[#bf9444]">Our Experties</p>
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-5xl md:text-6xl text-black text-center md:text-start">
              Resthos Best Chefs
            </h1>
          </Center>
          {/*  */}
          <Grid>
            {Array(3)
              .fill("")
              .map((index) => (
                <>
                  {/* data-aos="flip-right" data-aos-duration="1000" */}
                  <GridLayout key={index}>
                    <div className="w-full border border-slate-200 rounded-2xl" >
                      <Image
                        src={o9}
                        className="w-full h-full align-middle rounded-t-2xl"
                        alt=""
                        width={1000}
                        height={1000}
                      />
                      <Content>
                        <h1 className="text-lg md:text-2xl font-medium">
                          Mile Whoatson
                        </h1>
                        <p>Chief of Head</p>
                        <div className="flex gap-x-5 items-center justify-center text-[#5e5e5e] mt-2 cursor-pointer">
                          <FaFacebookF size={19} />
                          <div className="flex gap-x-2 items-center justify-center cursor-pointer">
                            <BsDot />
                            <AiOutlineInstagram size={19} />
                          </div>
                          <div className="flex gap-x-2 items-center justify-center cursor-pointer">
                            <BsDot />
                            <AiOutlineTwitter size={19} />
                          </div>
                          <div className="flex gap-x-2 items-center justify-center cursor-pointer">
                            <BsDot />
                            <BiLogoLinkedin size={19} />
                          </div>
                        </div>
                      </Content>
                    </div>
                  </GridLayout>
                </>
              ))}
          </Grid>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default SectionSix;
