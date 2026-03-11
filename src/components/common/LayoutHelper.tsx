"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutHelper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Only true for Home Page
  const isHomePage = pathname === "/";

  return (
    <>
      {/* 1. Hide Navbar on Home Page */}
      {!isHomePage && <Navbar />}

      {/* 2. Padding Logic:
          - Home Page uses pt-0 (page goes to top)
          - Other pages get proper pt value matching navbar height
      */}
      <main className={
        isHomePage 
          ? "pt-0" 
          : "pt-[90px] md:pt-[105px]" // Using this value because navbar height is 105px
      }>
        {children}
      </main>

      <Footer />
    </>
  );
}