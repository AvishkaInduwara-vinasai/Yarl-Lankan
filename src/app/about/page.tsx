"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const segments = [
    { title: "Yarl Lankan Restaurant", desc: "Serving Authentic Sri Lankan And Jaffna Cuisine, Prepared With Traditional Recipes And Fresh Ingredients To Give You The True Taste Of Home.", img: "/restaurant-segment.jpg" },
    { title: "Yarl Lankan Spices & Blends", desc: "We Specialize In High-Quality, Freshly Imported Sri Lankan Spices. From Aromatic Curry Powders To Fragrant Cinnamon And Traditional Spice Blends.", img: "/spices-card.png" },
    { title: "Yarl Lankan Cakes", desc: "Delicious Homemade Cakes Inspired By Sri Lankan Flavors, Crafted With Care For Every Celebration And Special Moment.", img: "/bakery-card.png" },
    { title: "Yarl Lankan Catering & Specialty Foods", desc: "Bringing The Complete Sri Lankan Food Experience To Events, Gatherings, And Homes Across Singapore.", img: "/catering-segment.jpg" },
  ];

  return (
    <main className="min-h-screen w-full bg-[#fdfaf5]">
      
      {/* --- SECTION 1: ABOUT US TOP (උඹේ කෝඩ් එක එලෙසම තියාගත්තා) --- */}
      <section className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center justify-center py-0 lg:py-10 px-6 overflow-hidden">
        
        {/* Background Blur Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/bg-restaurant-blur.png" 
            alt="Background" 
            fill 
            className="object-cover blur-[1px]"
            priority
          />
        </div>

        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[90vh]">
          
          {/* Left Side: Content Area */}
          <div className="flex flex-col justify-center items-center py-12 lg:py-16 px-4 md:px-12">
            
            <div className="max-w-[850px] w-full flex flex-col gap-6">
              
              {/* Box 1: About Us */}
              <div className="bg-white/50 backdrop-blur-md p-8 rounded-[20px] shadow-2xl border border-white/30">
                <h2 className="text-black text-3xl md:text-4xl font-bold font-playfair mb-2 text-center">About <span className="font-light font-bold text-white">Us</span></h2>
                <p className="text-black text-[15px] md:text-[16px] leading-relaxed text-center font-serif">
                  Yarl Lankan was established in 2025 with a vision to provide the finest quality products and build trust among people in Sri Lanka and beyond. 
                  Our name is inspired by Yarlpanam (යාපනය) – "Yarl" combined with "Lankan", creating a unique identity.
                </p>
              </div>

              {/* Box 2: Our Promise */}
              <div className="bg-white/50 backdrop-blur-md p-8 rounded-[20px] shadow-2xl border border-white/30">
                <h2 className="text-black text-3xl md:text-4xl font-bold font-playfair mb-2 text-center">Our <span className="font-light font-bold text-white">Promise</span></h2>
                <p className="text-black text-[15px] md:text-[16px] leading-relaxed text-center font-serif">
                  At Yarl Lankan, we are committed to quality and authenticity. We carefully source our ingredients to ensure 
                  every product reflects Sri Lanka's rich culinary heritage straight to you.
                </p>
              </div>

              {/* Box 3: Our Vision */}
              <div className="bg-white/50 backdrop-blur-md p-6 rounded-[15px] shadow-2xl border border-white/30">
                <h2 className="text-black text-4xl font-bold font-playfair mb-2 text-center">Our <span className="font-light font-bold text-white">Vision</span></h2>
                <p className="text-black text-[15px] md:text-[16px] leading-relaxed text-center font-serif">
                  To connect Sri Lanka and Singapore through food by sharing the true taste of Jaffna and Sri Lankan culinary traditions.
                </p>
              </div>

            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden lg:block relative w-full h-full">
            <div className="absolute inset-0">
              <Image 
                src="/about-plate.png" 
                alt="Sri Lankan Food Platter" 
                fill 
                className="object-cover rounded-[30px]" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: FOUR SEGMENTS (පින්තූරේ විදිහටම අප්ඩේට් කළා) --- */}
      <section className="py-20 px-6 bg-[#f3eee7] w-full relative z-10">
        <div className="max-w-[1300px] mx-auto text-center">
          
          {/* Header Colors (පින්තූරේ විදිහට රතු සහ දුඹුරු) */}
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-16">
            <span className="text-[#8b2d2d]">Our</span> <span className="text-[#b59b7d] font-normal">Four Segments</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {segments.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center p-1.5 transition-all hover:shadow-md">
                
                {/* Image Box */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                {/* Content Area */}
                <div className="px-3 pb-6 flex flex-col items-center flex-grow">
                  {/* Title (Dark Maroon) */}
                  <h3 className="text-[#8b2d2d] text-lg font-bold font-playfair mb-3 leading-tight text-center h-12 flex items-center">
                    {item.title}
                  </h3>
                  
                  {/* Description (Light Gray & Small) */}
                  <p className="text-gray-400 text-[11px] leading-relaxed text-center font-medium mb-6">
                    {item.desc}
                  </p>
                  
                  {/* Explore Button (Pill Shape) */}
                  <div className="mt-auto">
                    <button className="bg-[#d3454a] hover:bg-[#b53a3f] text-white px-9 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;