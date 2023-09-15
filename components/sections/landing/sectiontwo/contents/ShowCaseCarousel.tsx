import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tw from "tailwind-styled-components";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import Image from "next/image";
import { o5 } from "@/assets";
import { WH, WHSpace } from "@/utils/screensize";
import { useState, useEffect } from "react";

const ShowCaseCarousel = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const ShowCaseCarouselStyles = {
    Flex: tw.div`flex items-center justify-center`,
    ImageLayout: tw.div`z-[99]`,
    ContentLayout: tw.div`max-w-[270px] w-full border border-gray-100 rounded-lg p-[20px_15px_20px_110px] ml-[-90px] relative z-10`,
  };
  const { ContentLayout, ImageLayout, Flex } = ShowCaseCarouselStyles;

  return (
    <div className="">
      <Swiper
        direction="horizontal"
        speed={5000}
        loop
        slidesPerView={4}
        spaceBetween={WHSpace(screenWidth)}
        centeredSlides={false}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        scrollbar={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          enabled: false,
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[
          Keyboard,
          Scrollbar,
          Navigation,
          Pagination,
          Autoplay,
          Mousewheel,
        ]}
        className="mySwiper"
      >
        {Array(7)
          .fill("")
          .map((index) => (
            <SwiperSlide key={index} style={{ width: "100%" }}>
              <Flex>
                <ImageLayout>
                  <Image
                    src={o5}
                    alt=""
                    width={200}
                    height={200}
                    className="w-[16vh] md:w-full h-auto"
                  />
                </ImageLayout>
                <ContentLayout>
                  <h1 className="text-lg font-medium">Vegeterian</h1>
                  <p className="leading-5">
                    Lorem ipsum dolor sit amet 
                  </p>
                </ContentLayout>
              </Flex>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ShowCaseCarousel;
