"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-yarl-gray text-gray-300 pt-10 font-roboto border-t border-white/5">
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-col { opacity: 0; animation: fadeUp 0.5s ease forwards; }
      `}</style>

      {/* Main Grid: Responsive 2x2 for Tablet, 4 columns for Desktop */}
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
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <Link key={index} href="#" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <Icon size={20} />
              </Link>
            ))}
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

        {/* 3. Contact Details */}
        <div className="fade-col [animation-delay:0.25s] flex flex-col space-y-4 col-span-1">
          <h3 className="text-white text-base font-semibold tracking-wide border-b border-white/10 pb-2 w-fit uppercase">Contact Details</h3>
          <ul className="flex flex-col gap-3.5">
            <li>
              <Link href="tel:+6588195910" className="flex items-center gap-3 text-gray-400 hover:text-white group transition-colors">
                <div className="p-1.5 bg-white/5 rounded group-hover:bg-white transition-colors duration-300">
                  <Phone size={14} className="group-hover:text-yarl-gray group-hover:scale-110 transition-all" />
                </div>
                <span className="text-[13px] sm:text-[13.5px] font-medium">+65 8819 5910</span>
              </Link>
            </li>
            <li>
              <Link href="mailto:yarllankan@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-white group transition-colors">
                <div className="mt-0.5 p-1.5 bg-white/5 rounded group-hover:bg-white transition-colors duration-300">
                  <Mail size={14} className="group-hover:text-yarl-gray group-hover:scale-110 transition-all" />
                </div>
                <span className="text-[13px] sm:text-[13.5px] font-medium break-all">yarllankan@gmail.com</span>
              </Link>
            </li>
            {/* Address with Hover Effect */}
            <li className="flex items-start gap-3 text-gray-400 group cursor-pointer hover:text-white transition-colors duration-300">
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
            onClick={() => window.open('https://maps.google.com')}
          >
            <iframe title="Location" src="https://www.google.com/maps/embed" width="100%" height="100%" className="border-none pointer-events-none grayscale-[0.2]"></iframe>
          </div>
        </div>
      </div>

      {/* Divider & Copyright - Fixed Text */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-8">
        <hr className="border-t border-white/5" />
        <div className="text-center py-5 text-gray-400 text-[12px] tracking-widest uppercase font-medium opacity-0 animate-[fadeUp_0.5s_ease_0.4s_forwards]">
          © {currentYear} <span className="text-yarl-green font-bold">Yarl Lankan</span> | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;