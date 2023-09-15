"use client";

import { v1, v2, v3 } from "@/assets";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import CarouselItem from "./contents/CarouselItem";

const SectionOne = () => {
  return (
    <>
      <PageWrapper classNames="banner-section2">
        <div>
          <Image
            src={v1}
            alt=""
            width={200}
            height={200}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%)",
              left: "0",
            }}
          />
          <Image
            src={v2}
            alt=""
            width={200}
            height={200}
            style={{
              position: "absolute",
              top: "45%",
              right: "25%",
              animation: "animate-up-down 1s infinite",
            }}
          />
          <Image
            src={v3}
            alt=""
            width={200}
            height={200}
            style={{
              position: "absolute",
              bottom: "20%",
              left: "35%",
              animation: "animate-up-down 1s infinite",
            }}
          />
          <Image
            src={v2}
            alt=""
            width={200}
            height={200}
            style={{
              position: "absolute",
              top: "20%",
              right: "10%",
              animation: "animate-up-down-xx 1s infinite",
            }}
          />
        </div>
        <section className="py-20" style={{ width: "100%" }}>
          <CarouselItem />
        </section>
      </PageWrapper>
    </>
  );
};

export default SectionOne;
