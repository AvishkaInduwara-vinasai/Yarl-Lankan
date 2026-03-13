"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Caveat, Great_Vibes } from 'next/font/google';
import { Search, ArrowLeft, X, CheckCircle } from 'lucide-react';
import ContactInquirySection from '../../components/forms/ContactInquirySection';

const handwrittenFont = Caveat({ subsets: ['latin'], weight: '400' });
const greatVibesFont = Great_Vibes({ subsets: ['latin'], weight: '400' });

const GroceryPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNotified, setIsNotified] = useState(false);

  useEffect(() => {
    const notifiedStatus = localStorage.getItem('grocery_notified');
    if (notifiedStatus === 'true') {
      setIsNotified(true);
      setIsPopupOpen(false);
    } else {
      setIsPopupOpen(true);
    }
  }, []);

  const handleNotifyMe = () => {
    localStorage.setItem('grocery_notified', 'true');
    setIsPopupOpen(false);
    setIsNotified(true);
  };

  return (
    <main className="min-h-screen w-full bg-[#f3eee7] scroll-smooth relative"
          style={{ animation: "fadeIn 0.6s ease-out" }}>
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative w-full h-[45vh] flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-grocery.png" alt="Grocery Store" fill className="object-cover brightness-[0.4]" priority />
        </div>
        <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-xs font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-black/40 transition-all">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <div className="relative z-10 text-center px-6 mt-10">
          <span className="bg-gradient-to-r from-[#b8860b] via-[#E1BE00] to-[#ffd700] text-white font-serif text-[9px] font-bold uppercase px-5 py-1.5 rounded-full tracking-[2px] mb-5 inline-block shadow-lg">Premium Quality</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-2">Grocery Store</h1>
          <p className={`${handwrittenFont.className} text-2xl md:text-4xl text-gray-200 opacity-95 tracking-wide`}>Fresh essentials for you</p>
        </div>
      </section>

      {/* --- SECTION 2: INFO BAR --- */}
      <div className="bg-yarl-brown py-5 px-6">
        <p className="max-w-6xl mx-auto text-white text-[10px] md:text-[12px] leading-relaxed text-center tracking-[1.5px] opacity-90 ">
          Bringing the freshest essentials and traditional Sri Lankan grocery items straight to your doorstep in Singapore.
        </p>
      </div>

      {/* --- SECTION 3: CONTENT AREA --- */}
      <section className="py-9 px-6 max-w-[1300px] mx-auto text-center">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-normal font-playfair text-yarl-brown">Our Grocery Collection</h2>
          <div className="w-16 h-0.5 bg-yarl-brown mt-2 rounded-full opacity-70"></div>
        </div>

        {isNotified ? (
          <div className="py-16 bg-white border border-green-100 rounded-[40px] shadow-sm flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <CheckCircle size={48} className="text-green-500 mb-4" />
            <h3 className="text-2xl font-playfair text-gray-800 mb-2">You're on the list!</h3>
            <p className="text-gray-500 italic font-serif px-6">Got it! We'll notify you as soon as we launch our fresh collection.</p>
          </div>
        ) : (
          <div className="py-20 bg-white/30 border-2 border-dashed border-yarl-brown/20 rounded-[40px]">
             <p className="text-2xl font-playfair text-yarl-brown/40 italic">Coming soon! We are curating something special for you.</p>
          </div>
        )}
      </section>

      {/* --- SECTION 4: CONTACT FORMS --- */}
      <div id="grocery-contact">
        <ContactInquirySection />
      </div>

      {/* --- COMING SOON POPUP MODAL --- */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-500" onClick={() => setIsPopupOpen(false)}></div>
          
          <div className="relative w-full max-w-lg bg-white rounded-[15px] overflow-hidden shadow-2xl transform transition-all"
               style={{ animation: "slideUp 0.5s ease-out forwards" }}>
            
            <button onClick={() => setIsPopupOpen(false)} className="absolute top-4 right-4 z-[110] p-2 bg-white/70 hover:bg-black/20 rounded-full text-yarl-gray transition-all">
              <X size={18} />
            </button>

            <div className="relative w-full h-64">
              <Image src="/grocery-popup.png" alt="Grocery Store Coming Soon" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-8">
                <h3 className="text-white text-4xl font-playfair font-bold">Grocery Store</h3>
              </div>
            </div>

            <div className="p-6 text-center bg-white">
              <h4 className={`${greatVibesFont.className} text-5xl text-[#4d0000] mb-4`}>Coming Soon...</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6 px-4 italic">
                We are curating the freshest essentials for you. Stay tuned!
              </p>

              <button onClick={handleNotifyMe} className="bg-[#4d0000] text-white px-10 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[2px] hover:bg-[#721c24] transition-all shadow-lg active:scale-95">
                Notify Me
              </button>

              <p className="mt-6 text-[9px] text-gray-400 uppercase tracking-widest font-serif">
                Get an exclusive invitation on launch day
              </p>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `
      }} />

    </main>
  );
};

export default GroceryPage;