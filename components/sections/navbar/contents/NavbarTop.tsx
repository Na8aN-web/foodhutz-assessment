
import PageWrapper from "@/components/layout/PageWrapper";
import React from "react";
import tw from "tailwind-styled-components";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
const NavbarTop = () => {
  const NavbarTopStyles = {
    Layout: tw.div`flex justify-between px-20 w-full py-5`,
    Flex: tw.div`md:flex items-center justify-between text-xl font-medium gap-x-2 text-[#f8f9fa]`,
  };
  const { Layout, Flex } = NavbarTopStyles;
  return (
    <>
      <PageWrapper>
        <Layout>
          <Flex>
            <p className="text-[#ffc107] text-[13px] whitespace-nowrap">
              {" "}
              Opening Hour:
            </p>
            <p className="whitespace-nowrap text-[13px]">
              9:00 am to 10:00 pm
            </p>
          </Flex>
          <Flex className="gap-x-12 hidden text-[13px]">
            <Flex>
              <HiOutlineMail color="#ffc107" />
              <p className="text-[13px]">info@example</p>
            </Flex>
            <Flex>
              <HiOutlineLocationMarker className="text-[#ffc107] " />
              <p className="text-[13px]">Road-01, Block-B, West London City</p>
            </Flex>
          </Flex>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default NavbarTop;
