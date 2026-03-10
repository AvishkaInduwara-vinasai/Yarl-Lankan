"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Plus, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // if (pathname === "/") {
  //  return null;
  // }

  // Only the Logo source changes based on the path
  let logoSrc = "/logo.png"; 

  if (pathname.includes("/spices")) {
    logoSrc = "/logo-spices.png";
  } else if (pathname.includes("/bakery")) {
    logoSrc = "/logo-bakery.png";
  } else if (pathname.includes("/restaurant")) {
    logoSrc = "/logo-restaurant.png";
  } else if (pathname.includes("/grocery")) {
    logoSrc = "/logo-grocery.png";
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'INQUIRY FORM', href: '/inquiry' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 z-50 flex flex-col shadow-md">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-yarl-gray w-full flex items-center justify-center h-[30px] overflow-hidden">
        <p className="text-white text-[7px] sm:text-[9px] md:text-[11px] tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] font-tinos uppercase px-2 whitespace-nowrap">
          For Order, Wholesale and Reselling related queries contact +65 8819 5910
        </p>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="bg-white w-full h-[60px] md:h-[75px] px-5 lg:px-12 flex items-center border-b border-gray-100 relative">
        
        {/* === LEFT: LOGO SECTION === */}
        <div className="flex-1 flex justify-start items-center h-full">
          <Link href="/" className="flex items-center h-full gap-3">
            
            <div className="relative w-[50px] lg:w-[65px] h-full flex items-center">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] z-20 transition-all pointer-events-none">
                <Image 
                  src={logoSrc} 
                  alt="Yarl Logo" 
                  fill 
                  className="object-contain ml-[-20px] lg:ml-[-30px]" 
                  priority 
                />
              </div>
            </div>
            
            {/* Hardcoded Name: YARL LANKAN (Fixed) */}
            <h1 className="font-playfair font-bold text-[18px] md:text-[22px] lg:text-[26px] tracking-tight leading-none z-10 mt-1 whitespace-nowrap ml-[-10px] lg:ml-[-15px]">
              <span className="text-yarl-green">YARL</span>{" "}
              <span className="text-yarl-maroon uppercase">LANKAN</span>
            </h1>
          </Link>
        </div>

        {/* === CENTER: NAVIGATION LINKS === */}
        <nav className="hidden md:flex flex-none justify-center items-center gap-4 lg:gap-8 xl:gap-12 h-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`text-[10px] lg:text-[12px] xl:text-[13px] font-bold uppercase tracking-widest font-tinos whitespace-nowrap transition-colors
                ${pathname === link.href ? 'text-yarl-gold' : 'text-yarl-maroon hover:text-yarl-gold'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* === RIGHT: ACTION BUTTON & MOBILE MENU === */}
        <div className="flex-1 flex justify-end items-center h-full">
          <div className="hidden md:flex items-center">
            <button className="bg-yarl-maroon text-white px-4 lg:px-6 py-2 rounded-md flex items-center gap-1.5 lg:gap-2 transition-all duration-300 hover:bg-yarl-dark shadow-sm group">
              <span className="text-[10px] lg:text-[10px] xl:text-[10px] font-tinos font-bold tracking-widest uppercase whitespace-nowrap">Order Now</span>
              <Plus size={16} className="transition-transform duration-500 group-hover:rotate-180" />
            </button>
          </div>

          <div className="flex md:hidden items-center justify-end">
            <button 
              onClick={toggleMobileMenu}
              className="text-yarl-maroon hover:text-yarl-gold transition-colors flex items-center justify-end"
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

      </div>

      {/* === MOBILE MENU OVERLAY === */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col px-6 py-8 space-y-6 text-center bg-yarl-cream/20">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`text-base font-bold uppercase tracking-widest font-playfair
                  ${pathname === link.href ? 'text-yarl-gold' : 'text-yarl-maroon'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <button className="w-full bg-yarl-maroon text-white px-6 py-3.5 rounded-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-yarl-dark group mt-4">
              <span className="text-[14px] font-bold tracking-widest uppercase font-tinos">Order Now</span>
              <Plus size={18} className="transition-transform duration-500 group-hover:rotate-180" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;