import type { Metadata } from "next";
import { Inter, Playfair_Display, Tinos } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LayoutHelper from "../components/common/LayoutHelper"; // අපි මේක අලුතින් හදමු

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const tinos = Tinos({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-inter" }); // font name එක inter දාලා තිබ්බේ ඒක හදන්න
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
        {/* Navbar, Footer සහ Padding පාලනය කරන්න මේ Helper එක පාවිච්චි කරනවා */}
        <LayoutHelper>
          {children}
        </LayoutHelper>
      </body>
    </html>
  );
}