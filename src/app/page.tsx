"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const BusinessHub = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { title: "Spices & Blends", description: "Exotic spices and blends", image: "/spices-card.png", link: "/spices", comingSoon: false },
    { title: "Restaurants", description: "Delicious dining experiences.", image: "/restaurant-card.png", link: "/restaurants", comingSoon: false },
    { title: "Bakery & Cakes", description: "Custom cakes and pastries", image: "/bakery-card.png", link: "/bakery", comingSoon: false },
    { title: "Grocery Store", description: "Daily essentials and fresh produce", image: "/grocery-card.png", link: "/grocery", comingSoon: true },
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-playfair mb-4">
            <span className="text-green-600">YARL</span>{" "}
            <span className="text-red-800">LANKAN</span>
          </h1>
          
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-amber-800 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-yellow-700 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-orange-700 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden pt-2 md:pt-10 pb-12 px-6"
          style={{ animation: "fadeIn 0.6s ease-out" }}>
      
      {/* ---------------------------------------------------------
          1. NEW BRIGHT & BLURRED BACKGROUND LAYER
          (මෙතනින් බැක්ග්‍රවුන්ඩ් එක optimize කරලා ලස්සනට පෙන්වනවා)
      --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/bg-supermarket.jpg"
          alt="Background"
          fill
          className="object-cover blur-[2px] scale-110 opacity-80"
          priority
        />
        {/* අකුරු වල contrast එක තියාගන්න හරිම ලා කළු ලේයර් එකක් */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. LOGO SECTION */}
      <div className="relative flex justify-center items-center 
          -mt-6 -mb-14 
          md:-mt-15 md:-mb-18 
          lg:-mt-15 lg:-mb-18"
          style={{
            opacity: 0,
            animation: "slideDown 0.6s ease-out 0.2s forwards"
          }}> 
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

      {/* 3. HEADING SECTION */}
      <div className="text-center px-2 mb-8 md:mb-12"
           style={{
             opacity: 0,
             animation: "slideUp 0.6s ease-out 0.4s forwards"
           }}>
        <h1 className="text-white font-bold font-playfair tracking-tight -mb-1.5
                       text-[28px] md:text-5xl lg:text-6xl whitespace-nowrap md:whitespace-normal drop-shadow-lg">
          Welcome to <span className="text-yarl-gray">Our Business Hub</span>
        </h1>
        <p className="text-white font-medium tracking-wide opacity-90 font-serif text-sm md:text-xl drop-shadow-md">
          Explore Our Diverse Services
        </p>
      </div>

      {/* 4. SERVICES GRID */}
      <div className="max-w-[950px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 pb-12">
        {services.map((service, index) => (
          <div key={index} 
               className="group relative bg-white rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02]"
               style={{
                 opacity: 0,
                 animation: `slideUp 0.6s ease-out ${0.6 + index * 0.1}s forwards`
               }}>
            
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

              {/* Text Details */}
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
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      }} />
    </main>
  );
};

export default BusinessHub;