"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const BusinessHub = () => {
  const services = [
    { title: "Spices & Blends", description: "Exotic spices and blends", image: "/spices-card.png", link: "/spices", comingSoon: false },
    { title: "Restaurants", description: "Delicious dining experiences.", image: "/restaurant-card.png", link: "/restaurants", comingSoon: false },
    { title: "Bakery & Cakes", description: "Custom cakes and pastries", image: "/bakery-card.png", link: "/bakery", comingSoon: false },
    { title: "Grocery Store", description: "Daily essentials and fresh produce", image: "/grocery-card.png", link: "/grocery", comingSoon: true },
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/bg-supermarket.jpg')" }}>
      
      {/* 1. LOGO SECTION */}
      <div className="relative flex justify-center items-center 
          -mt-5 -mb-14 
          md:-mt-5 md:-mb-18 
          lg:-mt-5 lg:-mb-18"> 
        <Image 
          src="/logo.png" 
          alt="Yarl Lankan Logo" 
          width={220} 
          height={220} 
          className="object-contain drop-shadow-2xl transform 
                     scale-130 w-40 h-40 
                     md:scale-140 md:w-[220px] md:h-[220px]" 
          priority
        />
      </div>

      {/* 2. HEADING SECTION */}
      <div className="text-center px-2 mb-8 md:mb-12">
        <h1 className="text-white font-bold font-playfair tracking-tight -mb-1.5
                       text-[28px] md:text-5xl lg:text-6xl whitespace-nowrap md:whitespace-normal">
          Welcome to <span className="text-[#aaa]">Our Business Hub</span>
        </h1>
        <p className="text-white font-medium tracking-wide opacity-90 font-serif text-sm md:text-xl">
          Explore Our Diverse Services
        </p>
      </div>

      {/* 3. SERVICES GRID */}
      <div className="max-w-[950px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 pb-12">
        {services.map((service, index) => (
          <div key={index} className="group relative bg-white rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            
            {/* Image Area */}
            <div className="relative h-36 sm:h-40 md:h-56 w-full rounded-t-2xl overflow-hidden border-b-4 border-white">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className={`object-cover transition-all duration-500 group-hover:scale-110 ${service.comingSoon ? 'blur-[2px]' : ''}`}
              />
              {service.comingSoon && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className={`${greatVibes.className} text-white text-4xl md:text-6xl font-light tracking-wider drop-shadow-2xl`}>
                    Coming soon!
                  </span>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="relative pt-6 md:pt-8 pb-6 px-4 text-center flex flex-col items-center">
              
              {/* Explore Button */}
              <div className="absolute -top-5">
                <Link href={service.link}>
                  <button className="bg-yarl-green hover:bg-green-700 text-white px-8 py-2 rounded-lg font-bold text-[11px] md:text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 border border-white/20">
                    Explore
                  </button>
                </Link>
              </div>

              {/* Text Details - Topics now use Playfair Display & Sizes increased for Mobile */}
              <h2 className="text-yarl-maroon text-2xl md:text-3xl font-bold font-playfair leading-tight mb-1">
                {service.title}
              </h2>
              <p className="text-gray-500 text-[13px] md:text-base font-medium tracking-tight">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BusinessHub;