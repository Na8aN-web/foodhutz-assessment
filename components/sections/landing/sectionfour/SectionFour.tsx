
import { o7 } from "@/assets";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import tw from "tailwind-styled-components";

const SectionFour = () => {
  const SectionFourStyles = {
    Layout: tw.section`w-full py-10 px-2 md:px-24 `,
    Justify: tw.div`flex flex-col md:flex-row items-center justify-center gap-y-4 md:justify-between`,
    Grid: tw.ul`grid grid-cols-6 gap-8 mt-10`,
    Card: tw.li`col-span-6 md:col-span-2 group`,
    CardLayout: tw.div`w-full border border-slate-100 rounded-2xl relative`,
    Content: tw.div`p-12 flex flex-col items-center justify-center gap-y-2 relative`,
  };
  const { Layout, Justify, Card, CardLayout, Grid, Content } =
    SectionFourStyles;
  return (
    <PageWrapper classNames="bg-white">
      <Layout>
        <Justify>
          <div className="flex flex-col items-center relative justify-start text-left gap-y-3">
            <div className="flex absolute left-0">
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
              <p className="text-[#bf9444] text-left">Menu List</p>
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-medium md:text-start pt-12">
              Find Your Food Item
            </h1>
          </div>

          <button className="flex items-center text-[#bf9444] px-6 py-4 gap-x-3 border border-[#bf9444] rounded-full">
            <BsArrowUpRightCircle/>
            <p className="text-black">View More</p>
          </button>
        </Justify>
        {/*  */}
        <Grid>
          {Array(6)
            .fill("")
            .map((_) => (
              <>
                <Card  key={_}>
                  <CardLayout>
                    <Image
                      className="w-full h-auto object-cover align-middle rounded-t-2xl"
                      src={o7}
                      alt=""
                      width={500}
                      height={500}
                    />
                    <Content>
                      <h1 className="text-xl md:text-4xl font-medium text-center">
                        Prawn with Noodles
                      </h1>
                      <p className="text-sm md:text-xl leading-loose text-center">
                        It is a long established fact that a reader will be
                        distracted.
                      </p>
                      <div className="px-12 py-2 translate-x-[-50%] bg-white absolute top-[-10px] left-1/2 flex justify-center items-center shadow-sm border border-slate-100 rounded-full text-[#bf9444]">
                        <p>$45</p>
                      </div>
                    </Content>
                    {/*  */}
                    <div className="absolute top-5 right-0 bg-[#ffffffcc] border px-5 py-3 rounded-tl-full rounded-bl-full flex items-center justify-center shadow-lg">
                      <p>Lanch</p>
                    </div>
                  </CardLayout>
                </Card>
              </>
            ))}
        </Grid>
      </Layout>
    </PageWrapper>
  );
};

export default SectionFour;