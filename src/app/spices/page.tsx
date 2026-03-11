"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import { Search, ArrowLeft, Send } from 'lucide-react';
import ContactInquirySection from '../../components/forms/ContactInquirySection';

// Initialize handwritten font
const handwrittenFont = Caveat({ subsets: ['latin'], weight: '400' });

const SpicesPage = () => {
  // Product data
  const products = [
    { 
      id: 1, 
      name: "Jaffna Curry Powder", 
      desc: "Jaffna Curry Powder Is A Bold, Dark-Roasted Spice Mix From Northern Sri Lanka, Known For Its Strong Aroma And Fiery Heat.", price: "30.23", 
      img: "/spices/jaffna-curry.png" },
    { 
      id: 2, 
      name: "Ceylon Cinnamon", 
      desc: "Heat Ceylon Cinnamon, Also Known As 'True Cinnamon,' Is The Most Premium Among All Cinnamon Types.", 
      price: "30.23", 
      img: "/spices/cinnamon.png" },
    { 
      id: 3, 
      name: "Black Pepper", 
      desc: "Jaffna Curry Powder Is A Bold, Dark-Roasted Spice Mix From Northern Sri Lanka, Known For Its Strong Aroma And Fiery Heat.", price: "30.23", 
      img: "/spices/pepper.png" },
    { 
      id: 4, 
      name: "Jaffna Curry Powder", 
      desc: "Jaffna Curry Powder Is A Bold, Dark-Roasted Spice Mix From Northern Sri Lanka, Known For Its Strong Aroma And Fiery Heat.", price: "30.23", img: "/spices/jaffna-curry.png" },
    { 
      id: 5, 
      name: "Black Pepper", 
      desc: "Jaffna Curry Powder Is A Bold, Dark-Roasted Spice Mix From Northern Sri Lanka, Known For Its Strong Aroma And Fiery Heat.", price: "30.23", img: "/spices/pepper.png" }
  ];

  return (
    <main className="min-h-screen w-full bg-[#f3eee7] scroll-smooth">
      
      {/* --- SECTION 1: HERO SECTION --- */}
      <section className="relative w-full h-[45vh] flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-spices1.png" 
            alt="Spices and Blends" 
            fill 
            className="object-cover brightness-[0.4]" 
            priority 
          />
        </div>

        {/* Back to Home Button */}
        <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-xs font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-black/40 transition-all">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="relative z-10 text-center px-6 mt-10">
          {/* Gold Gradient Badge */}
          <span className="bg-gradient-to-r from-[#b8860b] via-[#E1BE00] to-[#ffd700] text-white font-serif text-[9px] font-bold uppercase px-5 py-1.5 rounded-full tracking-[2px] mb-5 inline-block shadow-lg">
            Premium Quality
          </span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-2 drop-shadow-lg">Spices & Blends</h1>
          
          {/* Handwritten Subtitle */}
          <p className={`${handwrittenFont.className} text-2xl md:text-4xl text-gray-200 opacity-95 tracking-wide`}>
            Exotic spices and blends
          </p>
        </div>
      </section>

      {/* --- SECTION 2: INFO BAR --- */}
      <div className="bg-[#8b6b4d] py-5 px-6">
        <p className="max-w-6xl mx-auto text-white text-[10px] md:text-[12px] leading-relaxed text-center font-serif tracking-[1.5px] opacity-90 uppercase">
          We Specialize In High-Quality, Freshly Imported Sri Lankan Spices. From Aromatic Curry Powders To Fragrant Cinnamon And Traditional Spice Blends. Our Products Are Carefully Selected To Enhance Your Cooking.
        </p>
      </div>

      {/* --- SECTION 3: PRODUCT GRID --- */}
      <section className="py-16 px-6 max-w-[1300px] mx-auto">
        {/* Collection Title */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#5d4037]">Our Spice Collection</h2>
          <div className="w-16 h-1 bg-[#b59b7d] mt-3 rounded-full opacity-60"></div>
          
          {/* Search Bar */}
          <div className="relative max-w-sm w-full mt-10">
            <input 
              type="text" 
              placeholder="Search for item" 
              className="w-full bg-white rounded-full px-6 py-2.5 text-sm border border-gray-100 shadow-sm focus:ring-1 focus:ring-[#b59b7d] outline-none" 
            />
            <Search className="absolute right-4 top-3 text-gray-400" size={16} />
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-[25px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-50">
              {/* Product Image */}
              <div className="relative w-full h-52 mb-6 transform transition-transform group-hover:scale-105">
                <Image src={product.img} alt={product.name} fill className="object-contain" />
              </div>

              {/* Product Content */}
              <div className="flex flex-col flex-grow text-left">
                <h3 className="text-xl font-bold font-playfair text-gray-900 mb-2">{product.name}</h3>
                <p className="text-[13px] text-gray-500 font-serif leading-relaxed mb-6">{product.desc}</p>
                
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="text-2xl font-bold text-[#b59b7d] font-serif">
                    <span className="text-sm mr-0.5">$</span>{product.price}
                  </span>
                  
                  {/* WhatsApp PNG Icon Button */}
                  <a 
                    href={`https://wa.me/6588195910?text=I'm interested in ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] p-2 rounded-full hover:bg-[#128C7E] transition-all shadow-md active:scale-90 flex items-center justify-center"
                  >
                    <Image 
                      src="/whatsapp-icon.png"
                      alt="WhatsApp"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* See More Card */}
          <div className="group bg-white/40 border-2 border-dashed border-[#b59b7d]/40 rounded-[25px] flex flex-col items-center justify-center p-8 h-full min-h-[400px] cursor-pointer hover:bg-white hover:border-solid transition-all">
            <div className="w-12 h-12 rounded-full border border-[#b59b7d] flex items-center justify-center mb-4 group-hover:bg-[#b59b7d] group-hover:text-white transition-all text-[#b59b7d]">
              <Search size={20} />
            </div>
            <span className="text-[#b59b7d] font-playfair text-2xl">See more</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CONTACT FORMS --- */}
      <div id="spices-contact">
        <ContactInquirySection />
      </div>

    </main>
  );
};

export default SpicesPage;