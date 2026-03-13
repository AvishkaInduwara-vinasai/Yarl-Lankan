"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import ContactInquirySection from '../../../components/forms/ContactInquirySection';
import { spiceProducts, type ProductVariation } from '../../data/products';


const DETAIL_TABS = ['Price Details', 'Description', 'Additional Information'] as const;
const SHIPPING_NOTE = 'Shipped Within Takes 2-5 Days After Payment, Delivery Will Take 30-45 Days.';
const DEFAULT_VARIATION: ProductVariation = { weight: '', price: '' };

const ProductDetailPage = () => {
  const { id } = useParams();

  // Local UI state for tabs, gallery zoom, and selected variation.
  const [activeTab, setActiveTab] = useState<(typeof DETAIL_TABS)[number]>('Price Details');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [selectedVariation, setSelectedVariation] = useState<ProductVariation>(DEFAULT_VARIATION);

  
  const product = spiceProducts.find((p) => p.id === String(id));
  const featuredProducts = spiceProducts.filter((item) => item.id !== product?.id).slice(0, 5);

  // Reset the selected variation when the product changes.
  useEffect(() => {
    if (product && product.variations) {
      setSelectedVariation(product.variations[0]);
    }
  }, [product, id]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  const handleVariationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const foundVariation = product?.variations.find((variation) => variation.weight === event.target.value);

    if (foundVariation) {
      setSelectedVariation(foundVariation);
    }
  };

  if (!product) return <div className="p-20 text-center font-sans text-gray-400">Loading Product...</div>;

  return (
    <main className="min-h-screen w-full bg-white text-[#1a1a1a] font-sans overflow-x-hidden" style={{ animation: "fadeIn 0.6s ease-out" }}>

      {/* --- HERO BANNER --- */}
      <section
        className="relative w-full h-[30vh] flex items-center justify-center overflow-hidden"
        style={{ opacity: 0, animation: "slideDown 0.6s ease-out 0.2s forwards" }}
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src={product.heroImg || product.mainImg} 
            alt={product.name} 
            fill 
            className="object-cover brightness-[0.6]" 
            priority 
          />
        </div>
        
        <Link 
          href="/spices" 
          className="absolute top-12 left-8 z-20 flex items-center gap-2 text-xs font-medium bg-black/50 px-4 py-2 rounded-lg hover:bg-black/40 transition-all text-white"
        >
          <ArrowLeft size={14} /> Back to Spices
        </Link>

        <div className="relative z-10 text-center px-6 ">
          <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-10 mt-10 drop-shadow-lg">
            {product.name}
          </h1>
        </div>
      </section>

      <section
        className="max-w-[1200px] mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        style={{ opacity: 0, animation: "slideUp 0.6s ease-out 0.4s forwards" }}
      >
        
        {/* --- LEFT: GALLERY & FEATURED --- */}
        <div className="flex flex-col gap-6 w-full items-center lg:items-start">
          
          {/* Main Image Box */}
          <div className="relative w-full max-w-[380px] bg-white rounded-2xl overflow-hidden">
            <div style={{ paddingBottom: '100%' }}></div>
            <div 
              className="absolute inset-0 flex items-center justify-center p-6 cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image 
                src={product.galleryImages[selectedImage]} 
                alt= {product.name}
                fill
                sizes="(max-width: 768px) 100vw, 380px" 
                className="object-cover p-6 transition-opacity duration-300"
                style={{ opacity: isZoomed ? 0 : 1 }}
                priority
              />
              
              {isZoomed && (
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `url(${product.galleryImages[selectedImage]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '200%',
                    backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                    backgroundColor: 'white'
                  }}
                />
              )}
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start w-full max-w-[380px]"> 
             {product.galleryImages.map((image, index) => (
               <div 
                 key={index} 
                 onClick={() => setSelectedImage(index)}
                 className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center p-2 cursor-pointer transition-all ${
                    selectedImage === index ? 'bg-gray-100' : ''
                 }`}
               >
                  <Image 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    width={50} height={50} 
                    className={`object-contain transition-opacity ${
                      selectedImage === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    }`} 
                  />
               </div>
             ))}
          </div>

          <div className="w-full my-16 mb-2">
            <hr className="border-gray-300" />
          </div>

          {/* Featured Products */}
          <div className="w-full max-w-[580px]">
            <h3 className="text-lg font-playfair font-bold text-[#222] mb-6 text-center lg:text-left md:text-left">Featured Products</h3>
            
            <div className="flex gap-1 pb-2 scrollbar-hidden overflow-x-auto lg:overflow-x-visible">
              {featuredProducts.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/spices/${item.id}`}
                  className="group cursor-pointer block flex-shrink-0"
                >
                  <h4 className="text-[15px] font-semibold text-gray-800 text-left mb-2 group-hover:text-[#b8860b] transition-colors line-clamp-2 w-50">
                    {item.name}
                  </h4>
                  
                  <div className="relative w-40 h-30 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all ">
                    <Image 
                      src={item.mainImg} 
                      alt={item.name} 
                      width={450}
                      height={450}
                      className="object-cover scale-120 group-hover:scale-130 transition-transform duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT: TABBED PRODUCT INFO --- */}
        <div className="flex flex-col w-full">
          {/* Tab Headers */}
          <div className="flex gap-4 sm:gap-6 mb-8 border-b border-gray-100 overflow-x-auto whitespace-nowrap pb-1">
            {DETAIL_TABS.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-widest pb-3 transition-all ${
                  activeTab === tab ? 'text-[#b8860b] border-b-2 border-[#b8860b]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'Price Details' && (
              <div className="space-y-6">
                <div className="space-y-1 mb-10 text-[15px] text-gray-800">
                  <p className='mb-2 '><span className="font-bold">Product Type:</span> {product.details?.type}</p>
                  <p className='mb-2'><span className="font-bold">Origin:</span> {product.details?.origin}</p>
                  <p><span className="font-bold">Packaging:</span> {product.details?.packaging}</p>
                  <p className="mb-2 italic">Naturally Dried Under Sunlight.</p>
                  <p className="pt-0"><span className="font-bold">Shipping:</span> {product.details?.shipping}</p>
                  <p className="text-sm leading-relaxed pt-1 text-gray-500">
                    {SHIPPING_NOTE}
                  </p>
                </div>

                <div className="grid max-w-[560px] grid-cols-2 gap-x-8 sm:gap-x-14 gap-y-3 border-t border-gray-100 pt-8 items-start">
                  <label className="text-xl font-bold text-gray-400 tracking-tighter">Weight</label>
                  <label className="text-xl font-bold text-gray-400 tracking-tighter">Price</label>

                  <select 
                    value={selectedVariation.weight}
                    onChange={handleVariationChange}
                    className="w-full max-w-48 h-12 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 outline-none focus:ring-1 focus:ring-[#b8860b] transition-all cursor-pointer"
                  >
                    {product.variations?.map((variation, index) => (
                      <option key={index} value={variation.weight}>{variation.weight}</option>
                    ))}
                  </select>

                  <div className="flex h-12 items-center text-3xl sm:text-4xl font-bold text-gray-700 font-serif">
                    Rs. {selectedVariation.price}
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6588195910?text=I'm interested in ${product.name} (${selectedVariation.weight})`}
                  target="_blank"
                  className="w-full lg:w-max flex items-center justify-center gap-3 bg-[#1a1a1a] text-white px-8 sm:px-12 py-4 rounded-full font-bold uppercase text-[10px] sm:text-[11px] tracking-[2px] hover:bg-[#b8860b] transition-all shadow-lg active:scale-95 mt-12"
                >
                  <MessageCircle size={16} />
                  Inquiry on WhatsApp
                </a>
              </div>
            )}

            {activeTab === 'Description' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#222] mb-4">Product Description</h3>
                <p className="text-gray-600 leading-loose text-[15px] ">
                  {product.longDesc}
                </p>
              </div>
            )}

            {activeTab === 'Additional Information' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#222] mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Storage</span>
                    <span className="text-gray-600">Store in a cool, dry place</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Shelf Life</span>
                    <span className="text-gray-600">24 months from manufacturing</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <div className="mt-10 bg-[#fcfcfc]" style={{ opacity: 0, animation: "fadeIn 0.8s ease-out 0.6s forwards" }}>
        <ContactInquirySection />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          `
        }}
      />
    </main>
  );
};

export default ProductDetailPage;