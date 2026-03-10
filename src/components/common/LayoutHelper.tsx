"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutHelper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Navbar is hidden only on the home page */}
      {!isHomePage && <Navbar />}

      <main className={
        isHomePage 
          ? "pt-0" // Zero padding on home page for full-screen layout
          : "pt-[100px] md:pt-[130px] lg:pt-[150px]" // Standard padding for other pages to account for fixed navbar
      }>
        {children}
      </main>

      <Footer />
    </>
  );
}