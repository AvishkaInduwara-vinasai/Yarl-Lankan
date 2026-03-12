"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import { ArrowLeft, Navigation } from 'lucide-react';
import ContactInquirySection from '../../components/forms/ContactInquirySection';

const handwrittenFont = Caveat({ subsets: ['latin'], weight: '400' });

const RestaurantsPage = () => {
  return (
    <main className="min-h-screen w-full bg-[#fcfaf8] scroll-smooth"
          style={{ animation: "fadeIn 0.6s ease-out" }}>
      
      {/* --- SECTION 1: HERO SECTION --- */}
      <section className="relative w-full h-[45vh] flex flex-col items-center justify-center text-white overflow-hidden"
               style={{
                 opacity: 0,
                 animation: "slideDown 0.6s ease-out 0.2s forwards"
               }}>
        <div className="absolute inset-0 z-0">
          {/* Restaurant Hero Background */}
          <Image 
            src="/hero-restaurant.png" 
            alt="Yarl Restaurants" 
            fill 
            className="object-cover brightness-[0.4]" 
            priority 
          />
        </div>

        <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-xs font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-black/40 transition-all">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="relative z-10 text-center px-6 mt-10">
          <span className="bg-gradient-to-r from-[#b8860b] via-[#E1BE00] to-[#ffd700] text-white font-serif text-[9px] font-bold uppercase px-5 py-1.5 rounded-full tracking-[2px] mb-5 inline-block shadow-lg">
            ORDER WITH US.
          </span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-2 drop-shadow-lg">
            Restaurants
          </h1>
          <p className={`${handwrittenFont.className} text-2xl md:text-4xl text-gray-200 opacity-95 tracking-wide`}>
            Delicious dining experiences.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: INFO BAR --- */}
      <div className="bg-yarl-brown py-5 px-6"
           style={{
             opacity: 0,
             animation: "slideUp 0.6s ease-out 0.4s forwards"
           }}>
        <p className="max-w-6xl mx-auto text-white text-[10px] md:text-[12px] leading-relaxed text-center tracking-[1.5px] opacity-90">
          Serving Authentic Sri Lankan And Jaffna Cuisine, Prepared With Traditional Recipes And Fresh Ingredients To Give You The True Taste Of Home.
        </p>
      </div>

      {/* --- SECTION 3: MENU BUTTON SECTION (Replacing Cards) --- */}
      <section className="py-17 px-6 flex flex-col items-center justify-center"
               style={{
                 opacity: 0,
                 animation: "slideUp 0.6s ease-out 0.6s forwards"
               }}>
        
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-normal font-playfair text-yarl-brown text-center -mt-8">Our Food Recipes</h2>
          <div className="w-16 h-0.5 bg-yarl-brown mt-2 rounded-full opacity-70"></div>
        </div>

        {/* Click to See Menu Button */}
        <a 
          href="/yarl-menu.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 px-10 py-3 bg-[#1a1a1a] border border-[#b8860b]/30 text-white rounded-[5px] transition-all duration-300 hover:bg-[#b8860b] hover:border-[#b8860b] active:scale-95"
        >
          {/* Static Professional Icon */}
          <div className="flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-white group-hover:text-white transition-colors duration-300"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>

          {/* Text Section */}
          <span className="text-[11px] md:text-[11px] font-semi-bold uppercase tracking-[2px]">
            View Our Menu
          </span>
        </a>

        <p className="mt-6 -mb-4 text-gray-400 text-xs italic font-serif opacity-70">
          * Opens in a new tab for viewing
        </p>
      </section>

      {/* --- SECTION 4: CONTACT & INQUIRY FORMS --- */}
      <div id="restaurants-contact" style={{ opacity: 0, animation: "fadeIn 0.8s ease-out 0.8s forwards" }}>
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

export default RestaurantsPage;