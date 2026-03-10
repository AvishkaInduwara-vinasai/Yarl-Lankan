"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Facebook, 
  Instagram, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight 
} from 'lucide-react';

// TikTok Icon 
const TikTokIcon = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-yarl-gray text-gray-300 pt-10 font-roboto border-t border-white/5">
      <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-col { opacity: 0; animation: fadeUp 0.5s ease forwards; }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_auto] gap-x-8 gap-y-12 items-start">
        
        {/* 1. Brand Section */}
        <div className="fade-col [animation-delay:0.05s] flex flex-col space-y-4 col-span-2 md:col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="text-yarl-green font-bold text-2xl tracking-wider font-playfair uppercase">YARL</span>
            <span className="text-white font-bold text-2xl tracking-wider font-playfair uppercase">LANKAN</span>
          </div>
          <p className="text-gray-400 text-[13.5px] leading-[1.6] max-w-sm">
            Yarl Lankan was established in 2025 with a vision to provide the
            finest quality products and build trust among people in Sri Lanka and beyond.
          </p>
          <div className="flex gap-4 pt-1">
            {/* Social Icons: FB, Insta, TikTok */}
            <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <Facebook size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <Instagram size={20} />
            </Link>
            <Link href="https://tiktok.com" target="_blank" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <TikTokIcon size={20} />
            </Link>
          </div>
        </div>

        {/* 2. Useful Links */}
        <div className="fade-col [animation-delay:0.15s] flex flex-col space-y-4 col-span-1">
          <h3 className="text-white text-base font-semibold tracking-wide border-b border-white/10 pb-2 w-fit uppercase">Useful Links</h3>
          <ul className="flex flex-col gap-2.5">
            {[
              { name: 'Home', href: '/' },
              { name: 'Inquiry form', href: '/inquiry' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact Us', href: '/contact' },
              { name: 'Terms of use', href: '/terms' },
              { name: 'Privacy policy', href: '/privacy' }
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="flex items-center gap-2.5 text-gray-400 hover:text-white group transition-all">
                  <div className="p-1 bg-white/5 rounded group-hover:bg-white transition-colors duration-300">
                    <ChevronRight size={13} className="group-hover:text-yarl-gray transition-colors" />
                  </div>
                  <span className="text-[13.5px] font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact Details (Non-clickable labels) */}
        <div className="fade-col [animation-delay:0.25s] flex flex-col space-y-4 col-span-1">
          <h3 className="text-white text-base font-semibold tracking-wide border-b border-white/10 pb-2 w-fit uppercase">Contact Details</h3>
          <ul className="flex flex-col gap-3.5">
            <li className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors duration-300">
              <div className="p-1.5 bg-white/5 rounded group-hover:bg-white transition-colors duration-300">
                <Phone size={14} className="group-hover:text-yarl-gray group-hover:scale-110 transition-all" />
              </div>
              <span className="text-[13px] sm:text-[13.5px] font-medium">+65 8819 5910</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors duration-300">
              <div className="mt-0.5 p-1.5 bg-white/5 rounded group-hover:bg-white transition-colors duration-300">
                <Mail size={14} className="group-hover:text-yarl-gray group-hover:scale-110 transition-all" />
              </div>
              <span className="text-[13px] sm:text-[13.5px] font-medium break-all">yarllankan@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors duration-300">
              <div className="mt-0.5 p-1.5 bg-white/5 rounded group-hover:bg-white transition-colors duration-300 shrink-0">
                <MapPin size={14} className="group-hover:text-yarl-gray group-hover:scale-110 transition-all" />
              </div>
              <span className="text-[12.5px] sm:text-[13.5px] font-medium leading-relaxed">
                60 Paya Lebar Road, #06-28 Paya Lebar Square, Singapore 409051
              </span>
            </li>
          </ul>
        </div>

        {/* 4. Map Section */}
        <div className="fade-col [animation-delay:0.35s] col-span-2 md:col-span-1 lg:col-span-1 flex justify-center lg:justify-end">
          <div 
            className="w-full h-[160px] md:h-[180px] lg:w-[260px] rounded-lg overflow-hidden border border-gray-600 hover:border-white hover:scale-[1.01] transition-all duration-300 cursor-pointer shadow-lg"
            onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Paya+Lebar+Square')}
          >
            <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.777322923595!2d103.88944517502447!3d1.3182305617066804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181845191c0f%3A0x54e386a9eea755d8!2sPaya%20Lebar%20Square!5e0!3m2!1sen!2ssg!4v1715456000000!5m2!1sen!2ssg" width="100%" height="100%" className="border-none pointer-events-none grayscale-[0.2]"></iframe>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-8">
        <hr className="border-t border-white/5" />
        <div className="text-center py-5 text-gray-400 text-[12px] tracking-widest uppercase font-medium animate-[fadeUp_0.5s_ease_0.4s_both]">
          © {currentYear} <span className="text-yarl-green font-bold">Yarl Lankan</span> | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;