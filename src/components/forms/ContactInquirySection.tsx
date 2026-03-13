"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Paperclip, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

const ContactInquirySection = () => {
  const [inquiryStatus, setInquiryStatus] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  };

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    });
    if (!res.ok) throw new Error("Cloudinary Upload Failed");
    const data = await res.json();
    return data.secure_url; 
  };

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>, type: 'inquiry' | 'contact') => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    if (type === 'inquiry') {
      setInquiryStatus("Processing...");
      setContactStatus(""); 
    } else {
      setContactStatus("Sending...");
      setInquiryStatus(""); 
    }

    try {
      let image_link = "";
      if (type === 'inquiry' && selectedFile) {
        setIsUploading(true);
        setInquiryStatus("Uploading Image...");
        image_link = await uploadToCloudinary(selectedFile);
        setIsUploading(false);
        setInquiryStatus("Sending Inquiry..."); 
      }

      const rawData = Object.fromEntries(formData);
      const dataToSend = { ...rawData, image_link, type };

      const response = await fetch('/api/send', {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        if (type === 'inquiry') {
          setInquiryStatus("Success! Your inquiry sent. 🚀");
          setFileName("");
          setSelectedFile(null);
        } else {
          setContactStatus("Success! Message sent. ✅");
        }
        form.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      setIsUploading(false);
      if (type === 'inquiry') setInquiryStatus("Error! Please try again.");
      else setContactStatus("Error! Please try again.");
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
        
        {/* --- LEFT SIDE: INQUIRY FORM --- */}
        <div id="inquiry" className="flex flex-col">
          <div className="bg-[#262626] text-white py-12 px-6 md:px-12 xl:px-20 lg:h-[240px] flex items-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/floral-pattern.png')] bg-cover"></div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] gap-6 lg:gap-10 items-center relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
                <div className="bg-white/10 p-3 rounded-full"><MessageSquare size={24} className="text-white" /></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold leading-tight text-center lg:text-left">
                  Have a Specific <br className="hidden lg:block"/> Inquiry?
                </h2>
              </div>
              <div className="hidden lg:block h-20 w-[2px] bg-white/20"></div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed text-center lg:text-left lg:max-w-md">
                From tailored catering menus to bespoke spice blends and custom cake designs tell us what you need. Share your details below, and our team will get back to you within 24 hours.
              </p>
            </div>
          </div>

          <div className="py-12 px-6 md:px-12 xl:px-20 2xl:px-32 bg-gray-50 flex-grow border-r border-gray-100">
            <form onSubmit={(e) => handleSubmission(e, 'inquiry')} className="max-w-2xl mx-auto xl:mx-0 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input name="firstName" type="text" placeholder="First Name" required className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-sm font-serif outline-none shadow-sm focus:ring-1 focus:ring-gray-400" />
                <input name="lastName" type="text" placeholder="Last Name" required className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-sm font-serif outline-none shadow-sm focus:ring-1 focus:ring-gray-400" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-sm font-serif outline-none shadow-sm focus:ring-1 focus:ring-gray-400" />
                <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-sm font-serif outline-none shadow-sm focus:ring-1 focus:ring-gray-400" />
              </div>
              <input name="subject" type="text" placeholder="Subject / Topic of Inquiry" className="w-full bg-white border border-gray-200 rounded-lg px-5 py-3.5 text-sm font-serif outline-none shadow-sm focus:ring-1 focus:ring-gray-400" />
              <textarea name="details" placeholder="Please provide details about your inquiry..." rows={4} className="w-full bg-white border border-gray-200 rounded-lg px-5 py-4 text-sm font-serif outline-none resize-none shadow-sm focus:ring-1 focus:ring-gray-400"></textarea>
              
              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-serif text-gray-600 font-medium">Upload supporting documents (optional):</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <label className="cursor-pointer bg-gray-500 hover:bg-gray-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-sm flex items-center gap-2">
                    {fileName ? <CheckCircle2 size={14} /> : <Paperclip size={14} />}
                    {fileName ? 'Change File' : 'Choose File'}
                    <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                  </label>
                  <span className="text-[11px] text-gray-500 italic font-serif truncate max-w-[200px]">
                    {fileName ? `Selected: ${fileName}` : 'Maximum file size: 5MB'}
                  </span>
                </div>
                
                <button type="submit" disabled={isUploading} className="w-full bg-[#262626] hover:bg-black disabled:bg-gray-400 text-white py-4.5 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-md active:scale-95">
                  {isUploading ? <Loader2 className="animate-spin" size={14} /> : <Send size={14} />}
                  {isUploading ? 'Processing...' : 'Send Inquiry'}
                </button>
                {inquiryStatus && <p className={`text-center text-sm font-bold mt-2 ${inquiryStatus.includes('Error') ? 'text-red-500' : 'text-[#b8860b] animate-pulse'}`}>{inquiryStatus}</p>}
              </div>
            </form>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTACT FORM --- */}
        <div id="contact" className="flex flex-col border-t xl:border-t-0 xl:border-l border-gray-200">
          <div className="bg-[#723e1b] text-white py-12 px-6 md:px-12 xl:px-20 lg:h-[240px] flex items-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none "></div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] gap-6 lg:gap-10 items-center relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold leading-tight text-center lg:text-left whitespace-nowrap">
                Get in <br className="hidden lg:block"/> Touch
              </h2>
              <div className="hidden lg:block h-20 w-[1px] bg-white/20"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="bg-white/10 p-3 rounded-full mb-3"><MapPin size={20}/></div>
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-70 mb-1">Visit</p>
                  <p className="text-xs leading-tight">Paya Lebar,<br/>Singapore</p>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="bg-white/10 p-3 rounded-full mb-3"><Phone size={20}/></div>
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-70 mb-1">Call</p>
                  <p className="text-[10px] ">+65 8819 5910</p>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="bg-white/10 p-3 rounded-full mb-3"><Mail size={20}/></div>
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-70 mb-1">Email</p>
                  <p className="text-[11px] break-all ">hello@yarl.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 px-6 md:px-12 xl:px-20 2xl:px-32 bg-[#faf8f6] flex-grow">
            <form onSubmit={(e) => handleSubmission(e, 'contact')} className="max-w-2xl mx-auto xl:mx-0 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input name="firstName" type="text" placeholder="First Name" required className="w-full bg-white border border-yarl-brown/20 rounded-lg px-5 py-3.5 text-sm font-serif outline-none shadow-sm focus:ring-1 focus:ring-yarl-brown" />
                <input name="lastName" type="text" placeholder="Last Name" required className="w-full bg-white border border-yarl-brown/20 rounded-lg px-5 py-3.5 text-sm font-serif outline-none shadow-sm focus:ring-1 focus:ring-yarl-brown" />
              </div>
              <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white border border-yarl-brown/20 rounded-lg px-5 py-3.5 text-sm font-serif outline-none shadow-sm focus:ring-1 focus:ring-yarl-brown" />
              <textarea name="message" placeholder="How can we assist you today?" rows={6} required className="w-full bg-white border border-yarl-brown/20 rounded-lg px-5 py-4 text-sm font-serif outline-none resize-none shadow-sm focus:ring-1 focus:ring-yarl-brown"></textarea>
              <div className="pt-2">
                <button type="submit" className="w-full bg-[#723e1b] hover:bg-[#5a3115] text-white py-4.5 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95">
                  <Send size={14} /> Send Message
                </button>
                {contactStatus && <p className={`text-center text-sm font-bold mt-4 animate-pulse ${contactStatus.includes('Error') ? 'text-red-500' : 'text-[#723e1b]'}`}>{contactStatus}</p>}
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInquirySection;