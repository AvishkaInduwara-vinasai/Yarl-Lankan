"use client";

import React from 'react';
import Image from 'next/image';
import ContactInquirySection from '../../components/forms/ContactInquirySection'; // Import from correct path

const AboutPage = () => {
  const segments = [
    { title: "Yarl Lankan Restaurant", desc: "Serving Authentic Sri Lankan And Jaffna Cuisine, Prepared With Traditional Recipes And Fresh Ingredients To Give You The True Taste Of Home.", img: "/restaurant-card.png" },
    { title: "Yarl Lankan Spices & Blends", desc: "We Specialize In High-Quality, Freshly Imported Sri Lankan Spices. From Aromatic Curry Powders To Fragrant Cinnamon And Traditional Spice Blends.", img: "/spices-card.png" },
    { title: "Yarl Lankan Cakes", desc: "Delicious Homemade Cakes Inspired By Sri Lankan Flavors, Crafted With Care For Every Celebration And Special Moment.", img: "/bakery-card.png" },
    { title: "Yarl Lankan Catering & Specialty Foods", desc: "Bringing The Complete Sri Lankan Food Experience To Events, Gatherings, And Homes Across Singapore.", img: "/grocery-card.png" },
  ];

  return (
    <main className="min-h-screen w-full bg-[#fdfaf5]"
          style={{ animation: "fadeIn 0.6s ease-out" }}>
      
      {/* --- SECTION 1: ABOUT US TOP --- */}
      <section className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center justify-center py-0 lg:py-10 px-6 overflow-hidden"
               style={{
                 opacity: 0,
                 animation: "slideDown 0.6s ease-out 0.2s forwards"
               }}>
        <div className="absolute inset-0 z-0">
          <Image src="/about-side2.jpg" alt="Background" fill className="object-cover blur-[5px] scale-110" priority />
        </div>
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[90vh]">
          <div className="flex flex-col justify-center items-center py-12 lg:py-16 px-4 md:px-12">
            <div className="max-w-[850px] w-full flex flex-col gap-6 relative z-10">
              <div className="bg-white/50 backdrop-blur-md p-8 rounded-[10px] shadow-2xl border border-white/30">
                <h2 className="text-black text-3xl md:text-4xl font-bold font-playfair mb-2 -mt-2 text-center">About <span className="font-light font-bold text-white">Us</span></h2>
                <p className="text-black text-[15px] md:text-[16px] leading-relaxed text-center font-serif">
                  Yarl Lankan was established in 2025 with a vision to provide the finest quality products and build trust among people in Sri Lanka and beyond. Our name is inspired by Yarlpanam – "Yarl" combined with "Lankan", creating a unique identity.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-md p-8 rounded-[10px] shadow-2xl border border-white/30">
                <h2 className="text-black text-3xl md:text-4xl font-bold font-playfair mb-2 -mt-2 text-center">Our <span className="font-light font-bold text-white">Promise</span></h2>
                <p className="text-black text-[15px] md:text-[16px] leading-relaxed text-center font-serif">
                  At Yarl Lankan, we are committed to quality and authenticity. We carefully source our ingredients to ensure every product reflects Sri Lanka's rich culinary heritage straight to you.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-md p-6 rounded-[9px] shadow-2xl border border-white/30">
                <h2 className="text-black text-4xl font-bold font-playfair mb-2 -mt-2 text-center">Our <span className="font-light font-bold text-white">Vision</span></h2>
                <p className="text-black text-[15px] md:text-[16px] leading-relaxed text-center font-serif">
                  To connect Sri Lanka and Singapore through food by sharing the true taste of Jaffna and Sri Lankan culinary traditions.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative w-full h-full">
            <div className="absolute inset-0">
              <Image src="/about-side2.jpg" alt="Sri Lankan Food Platter" fill className="object-cover rounded-[30px]" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: FOUR SEGMENTS --- */}
      <section className="py-10 md:py-10 px-9 bg-[#f3eee7] w-full relative z-10"
               style={{
                 opacity: 0,
                 animation: "slideUp 0.6s ease-out 0.4s forwards"
               }}>
        <div className="max-w-[1300px] mx-auto text-center">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair">
              <span className="text-yarl-brown font-normal">Our Four Segments</span>
            </h2>
            <div className="w-16 h-0.5 bg-yarl-brown mt-2 rounded-full opacity-70"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {segments.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="px-4 py-5 flex flex-col items-center flex-grow">
                  <h3 className="text-yarl-maroon text-[17px] font-bold font-playfair mb-2 leading-tight text-center min-h-[40px] flex items-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[12px] leading-relaxed text-center font-medium mb-4">
                    {item.desc}
                  </p>
                  <div className="mt-auto">
                    <button className="bg-yarl-red hover:bg-yarl-maroon text-white px-8 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: COMMON CONTACT & INQUIRY SECTION --- */}
      {/* Reusable contact component included here */}
      <div style={{ opacity: 0, animation: "fadeIn 0.8s ease-out 0.6s forwards" }}>
        <ContactInquirySection />
      </div>

      {/* --- KEYFRAME ANIMATIONS --- */}
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

export default AboutPage;