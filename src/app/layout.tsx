import type { Metadata } from "next";
import { Inter, Playfair_Display, Tinos } from "next/font/google"; // Font imports grouped together for better organization
import "./globals.css";
import Navbar from "../components/common/Navbar"; // Consider using @ alias to make import paths shorter

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

// SEO Metadata - Update this for "Yarl Lankan"
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
        {/* Navbar is fixed at the top of the page */}
        <Navbar />

        {/* Main content padding-top values for different screen sizes:
          - pt-[100px]: Mobile screens
          - md:pt-[130px]: Tablet screens  
          - lg:pt-[150px]: Desktop screens
          This padding prevents content from being hidden behind the fixed navbar.
        */}
        <main>
          {children}
        </main>

        {/* Footer will be added here later */}
      </body>
    </html>
  );
}