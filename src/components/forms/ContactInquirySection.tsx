"use client";

import React from 'react';
import { MapPin, Phone, Mail, Send, Paperclip, MessageSquare } from 'lucide-react';

const ContactInquirySection = () => {
  return (
    <div className="w-full">
      {/* Main Grid Split */}
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
        
        {/* --- LEFT SIDE: INQUIRY FORM --- */}
        {/* Flexbox column layout - items stack vertically */}
        <div id="inquiry" className="flex flex-col">
          {/* Header section */}
          <div className="bg-[#262626] text-white py-12 px-6 md:px-12 xl:px-20 lg:h-[240px] flex items-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/floral-pattern.png')] bg-cover"></div>
            
            <div className="w-full grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] gap-6 lg:gap-10 items-center relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold leading-tight text-center lg:text-left">
                  Have a Specific <br className="hidden lg:block"/> Inquiry?
                </h2>
              </div>
              <div className="hidden lg:block h-20 w-[1px] bg-white/20"></div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed text-center lg:text-left lg:max-w-md">
                From tailored catering menus to bespoke spice blends and custom cake designs tell us what you need. Share your details below, and our team will get back to you within 24 hours.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="py-12 px-6 md:px-12 xl:px-20 2xl:px-32 bg-gray-50 flex-grow border-r border-gray-100">
            <div className="max-w-2xl mx-auto xl:mx-0 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-sm font-serif focus:ring-1 focus:ring-gray-400 outline-none shadow-sm" 
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-sm font-serif focus:ring-1 focus:ring-gray-400 outline-none shadow-sm" 
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="email"
                  placeholder="Email Address" 
                  className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-sm font-serif focus:ring-1 focus:ring-gray-400 outline-none shadow-sm" 
                />
                <input 
                  type="tel"
                  placeholder="Phone Number" 
                  className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-sm font-serif focus:ring-1 focus:ring-gray-400 outline-none shadow-sm" 
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject / Topic of Inquiry" 
                className="w-full bg-white border border-gray-200 rounded-lg px-5 py-3.5 text-sm font-serif focus:ring-1 focus:ring-gray-400 outline-none shadow-sm" 
              />
              <textarea 
                placeholder="Please provide details about your inquiry..." 
                rows={4} 
                className="w-full bg-white border border-gray-200 rounded-lg px-5 py-4 text-sm font-serif focus:ring-1 focus:ring-gray-400 outline-none resize-none shadow-sm"
              ></textarea>
              
              {/* File Upload Section */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif text-gray-600 font-medium">
                  Upload supporting documents (optional):
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <label className="cursor-pointer bg-gray-500 hover:bg-gray-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors shadow-sm flex items-center gap-2">
                    <Paperclip size={14} /> Choose File
                    <input type="file" className="hidden" />
                  </label>
                  <span className="text-[11px] text-gray-400 italic font-serif">
                    Maximum file size: 5MB
                  </span>
                </div>
                
                <button className="w-full bg-[#262626] hover:bg-black text-white py-4.5 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-md active:scale-95">
                  <Send size={14} /> Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTACT --- */}
        <div id="contact" className="flex flex-col border-t xl:border-t-0 xl:border-l border-gray-200">
          {/* Brown Header */}
          <div className="bg-[#723e1b] text-white py-12 px-6 md:px-12 xl:px-20 lg:h-[240px] flex items-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none "></div>
             
            <div className="w-full grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] gap-6 lg:gap-10 items-center relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold leading-tight text-center lg:text-left whitespace-nowrap">
                Get in <br className="hidden lg:block"/> Touch
              </h2>
              <div className="hidden lg:block h-20 w-[1px] bg-white/20"></div>
              
              {/* Contact Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="bg-white/10 p-3 rounded-full mb-3">
                    <MapPin size={20}/>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-70 mb-1">Visit</p>
                  <p className="text-xs leading-tight f">Paya Lebar,<br/>Singapore</p>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="bg-white/10 p-3 rounded-full mb-3">
                    <Phone size={20}/>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-70 mb-1">Call</p>
                  <p className="text-[10px] ">+65 8819 5910</p>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="bg-white/10 p-3 rounded-full mb-3">
                    <Mail size={20}/>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-70 mb-1">Email</p>
                  <p className="text-[11px] break-all ">hello@yarl.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="py-12 px-6 md:px-12 xl:px-20 2xl:px-32 bg-[#faf8f6] flex-grow">
            <div className="max-w-2xl mx-auto xl:mx-0 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-white border border-yarl-brown/20 rounded-lg px-5 py-3.5 text-sm font-serif focus:ring-1 focus:ring-yarl-brown outline-none shadow-sm" 
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-white border border-yarl-brown/20 rounded-lg px-5 py-3.5 text-sm font-serif focus:ring-1 focus:ring-yarl-brown outline-none shadow-sm" 
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white border border-yarl-brown/20 rounded-lg px-5 py-3.5 text-sm font-serif focus:ring-1 focus:ring-yarl-brown outline-none shadow-sm" 
              />
              <textarea 
                placeholder="How can we assist you today?" 
                rows={6}
                className="w-full bg-white border border-yarl-brown/20 rounded-lg px-5 py-4 text-sm font-serif focus:ring-1 focus:ring-yarl-brown outline-none resize-none shadow-sm"
              ></textarea>
              
              <div className="pt-2">
                <button className="w-full bg-[#723e1b] hover:bg-[#5a3115] text-white py-4.5 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95">
                  <Send size={14} /> Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInquirySection;