"use client";

import { Footer, Navbar } from "../sections";

interface PagesLayoutProps {
  children: React.ReactNode;
}
const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
  );
};

export default PagesLayout;
