import type { Metadata } from "next";
import { Inter, Playfair_Display, Tinos } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LayoutHelper from "../components/common/LayoutHelper"; // Custom layout helper component

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const tinos = Tinos({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-inter" }); // Fixed variable name from inter to tinos
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
        {/* Layout helper manages Navbar, Footer and padding control */}
        <LayoutHelper>
          {children}
        </LayoutHelper>
      </body>
    </html>
  );
}