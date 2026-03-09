import type { Metadata } from "next";
import { Inter, Playfair_Display, Tinos } from "next/font/google"; // Imports ටික එක පේළියට ගත්තා ලේසි වෙන්න
import "./globals.css";
import Navbar from "../components/common/Navbar"; // @ alias එක පාවිච්චි කරමු path එක කෙටි වෙන්න

// Fonts Setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tinos = Tinos({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-tinos",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// SEO Metadata - මේක "Yarl Lankan" වලට අප්ඩේට් කරමු
export const metadata: Metadata = {
  title: "Yarl Lankan | Authentic Sri Lankan Hub",
  description: "Experience the true flavors of Sri Lanka with Yarl Lankan Spices, Bakery, and Restaurant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${tinos.variable}`}>
      <body className="antialiased bg-white">
        {/* Navbar එක හැම තිස්සෙම top එකේ fixed වෙලා තියෙන්නේ */}
        <Navbar />

        {/* පහළ තියෙන main එකේ Padding-Top එක (pt-) බලපන්:
          - pt-[100px]: Mobile ස්ක්‍රීන් වලදී
          - md:pt-[130px]: ටැබ්ලට් වලදී
          - lg:pt-[150px]: ලොකු ඩෙස්ක්ටොප් වලදී
          මේ Padding එක නිසා තමයි Content එක Navbar එකට යට නොවී පේන්නේ.
        */}
        <main>
          {children}
        </main>

        {/* පස්සේ අපි Footer එකත් මෙතනටම එකතු කරනවා */}
      </body>
    </html>
  );
}