"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import { Search, ArrowLeft } from 'lucide-react';
import ContactInquirySection from '../../components/forms/ContactInquirySection';

const handwrittenFont = Caveat({ subsets: ['latin'], weight: '400' });

const BakeryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayLimit, setDisplayLimit] = useState(5);

  // Bakery & Cake Product Data
  const products = [
    { 
      id: 1, 
      name: "Custom Celebration Cakes", 
      desc: "Exquisite handcrafted cakes for weddings, birthdays, and special events. Personalized designs with premium flavors.", 
      price: "45.00", 
      img: "/celebration-cake.png" 
    },
    { 
      id: 2, 
      name: "Carrot vaulnut cake", 
      desc: "Moist and soft carrot cake blended with crunchy walnuts, lightly spiced and topped with smooth cream cheese frosting.", 
      price: "12.50", 
      img: "/Carrot-vaulnut.png" 
    },
    { 
      id: 3, 
      name: "Sri Lankan Ribbon Cake", 
      desc: "The classic island favorite. Multi-colored moist layers with rich vanilla buttercream frosting.", 
      price: "28.00", 
      img: "/ribbon-cake.png" 
    },
    { 
      id: 4, 
      name: "Chocolate Cake", 
      desc: "A rich, aromatic Sri Lankan delicacy made with semolina, honey, cashews, and exotic spices.", 
      price: "32.00", 
      img: "/chocklate-cake.png" 
    },
   {
      id: 5,
      name: "Icing Cake",
      desc: "Soft and fluffy sponge cake layered with smooth vanilla icing and decorated beautifully - perfect for celebrations and sweet moments.",
      price: "25.00",
      img: "/icing-cake.jpg"
    },

    { 
      id: 6, 
      name: "Fresh Fruit Tarts", 
      desc: "Buttery shortcrust pastry filled with smooth custard and topped with seasonal fresh fruits.", 
      price: "18.00", 
      img: "/tarts.jpg" 
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleProducts = filteredProducts.slice(0, displayLimit);
  const showSeeMore = filteredProducts.length > displayLimit;

  return (
    <main className="min-h-screen w-full bg-[#fcfaf8] scroll-smooth"
          style={{ animation: "fadeIn 0.6s ease-out" }}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[45vh] flex flex-col items-center justify-center text-white overflow-hidden"
               style={{
                 opacity: 0,
                 animation: "slideDown 0.6s ease-out 0.2s forwards"
               }}>
        <div className="absolute inset-0 z-0">
          
          <Image src="/hero-bakery1.png" alt="Cakes and Bakery" fill className="object-cover brightness-[0.6]" priority />
        </div>
        <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-xs font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-black/40 transition-all">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <div className="relative z-10 text-center px-6 mt-10">
          <span className="bg-gradient-to-r from-[#b8860b] via-[#E1BE00] to-[#ffd700] text-white font-serif text-[9px] font-bold uppercase px-5 py-1.5 rounded-full tracking-[2px] mb-5 inline-block shadow-lg">Baked Fresh Daily</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-2 drop-shadow-lg">Cakes & Bakery</h1>
          <p className={`${handwrittenFont.className} text-2xl md:text-4xl text-gray-200 opacity-95 tracking-wide`}>Sweet treats and fresh bakes</p>
        </div>
      </section>

      {/* --- INFO BAR --- */}
      <div className="bg-yarl-brown py-5 px-6"
           style={{
             opacity: 0,
             animation: "slideUp 0.6s ease-out 0.4s forwards"
           }}>
        <p className="max-w-6xl mx-auto text-white text-[10px] md:text-[12px] leading-relaxed text-center tracking-[1.5px] opacity-90">
          We specialize in handcrafted cakes, artisan breads, and traditional Sri Lankan sweets. Every item is baked fresh using premium ingredients to ensure the perfect taste for your special occasions.
        </p>
      </div>

      {/* --- PRODUCT GRID --- */}
      <section className="py-16 px-6 max-w-[1300px] mx-auto"
               style={{
                 opacity: 0,
                 animation: "slideUp 0.6s ease-out 0.6s forwards"
               }}>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal font-playfair text-yarl-brown text-center -mt-8">Our Bakery Collection</h2>
          <div className="w-16 h-0.5 bg-yarl-brown mt-2 rounded-full opacity-70"></div>
          
          <div className="relative max-w-sm  mt-6 -mb-3">
            <input 
              type="text" 
              placeholder="Search for cakes or treats..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayLimit(5);
              }}
              className="w-full bg-white rounded-full px-6 py-2.5 text-sm border border-gray-100 shadow-sm focus:ring-1 focus:ring-yarl-brown outline-none" 
            />
            <Search className="absolute right-4 top-3 text-gray-400" size={16} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProducts.length > 0 ? (
            <>
              {visibleProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-[25px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-50 overflow-hidden">
                  
                  {/* Image Section - Edge-to-Edge */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image 
                      src={product.img} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h3 className="text-xl font-bold font-playfair text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-4 line-clamp-3 font-serif">{product.desc}</p>
                    
                    <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-3xl font-bold text-yarl-brown font-serif">
                        <span className="text-[25px] mr-0.5">$</span>{product.price}
                      </span>
                      <a href={`https://wa.me/6588195910?text=I'm interested in ordering the ${product.name}`} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <Image src="/whatsapp-icon.png" alt="WhatsApp" width={50} height={50} className="object-contain" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              
              {showSeeMore && (
                <div 
                  onClick={() => setDisplayLimit(products.length)}
                  className="group bg-white/40 border-2 border-dashed border-yarl-brown/40 rounded-[25px] flex flex-col items-center justify-center p-8 h-full min-h-[400px] cursor-pointer hover:bg-white hover:border-solid transition-all"
                >
                  <div className="w-12 h-12 rounded-full border border-yarl-brown flex items-center justify-center mb-4 group-hover:bg-yarl-brown group-hover:text-white transition-all text-yarl-brown">
                    <Search size={20} />
                  </div>
                  <span className="text-yarl-brown font-playfair text-2xl">See more</span>
                </div>
              )}
            </>
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-2xl font-playfair text-gray-400 italic">No delicious treats found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <div id="bakery-contact" style={{ opacity: 0, animation: "fadeIn 0.8s ease-out 0.8s forwards" }}>
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

export default BakeryPage;