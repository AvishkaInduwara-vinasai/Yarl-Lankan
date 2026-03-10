"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutHelper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Home page එකේදී විතරක් Navbar එක පෙන්වන්නේ නැහැ */}
      {!isHomePage && <Navbar />}

      <main className={
        isHomePage 
          ? "pt-0" // Home page එකේදී padding සීරෝ කරනවා, එතකොට උඩටම යනවා
          : "pt-[100px] md:pt-[130px] lg:pt-[150px]" // අනිත් පේජ් වලට Navbar එකට ඉඩ තියනවා
      }>
        {children}
      </main>

      <Footer />
    </>
  );
}