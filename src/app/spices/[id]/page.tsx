"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, MessageCircle, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ContactInquirySection from '../../../components/forms/ContactInquirySection';

// --- SHARED DATA ---
const spiceProducts = [
  { 
    id: "1", 
    name: "Jaffna Curry Powder", 
    price: "30.23", 
    mainImg: "/jaffna-curry.png",
    heroImg: "/hero-jaffna-curry.png",
    galleryImages: ["/jaffna-curry.png", "/jaffna-curry-2.png", "/jaffna-curry-3.jpg", "/jaffna-curry-4.jpg"],
    category: "Spices",
    description: "Discover the rich essence of Sri Lankan Jaffna Curry Powder. Crafted from a traditional family recipe, this bold blend is known for its dark-roasted aroma and authentic fiery heat.",
    longDesc: "Our Jaffna Curry Powder is 100% authentic, sourced directly from the northern spice gardens of Sri Lanka. It is a more refined flavor than ordinary curry powders, preserving its natural oils and potent fragrance. Perfect for home chefs and spice lovers seeking a genuine taste of Jaffna.",
    features: ["100% Authentic Sri Lankan Spice", "Natural Fine Powder", "Free from Additives or Fillers", "Ideal for Meat & Seafood Curries"]
  },
  { 
    id: "2", 
    name: "Ceylon Cinnamon", 
    price: "25.80", 
    mainImg: "/cinnamon.png",
    heroImg: "/hero-cinnamon.jpg",
    galleryImages: ["/cinnamon.png", "/cinnamon-2.jpg", "/cinnamon-3.jpg", "/cinnamon-4.jpg"],
    category: "Spices",
    description: "Premium 'True Cinnamon' from the hills of Sri Lanka, offering a delicate sweetness and subtle spice.",
    longDesc: "Unlike Cassia, Ceylon Cinnamon is thinner, multi-layered, and carries a unique sweet-spicy flavor. It is perfect for baking, tea, and savory meat dishes. Harvested sustainably and processed by hand to ensure the highest quality quills.",
    features: ["True Ceylon Cinnamon", "Delicate Sweet Flavor", "Hand Processed", "Perfect for Baking & Tea"]
  },
  { 
    id: "3", 
    name: "Black Pepper Whole", 
    price: "30.23", 
    mainImg: "/pepper.png",
    heroImg: "/hero-black-pepper.jpg",
    galleryImages: ["/pepper.png", "/pepper-2.jpg", "/pepper-3.jpg", "/pepper-4.jpg"],
    category: "Spices",
    description: "Premium Ceylon Black Pepper, also known as the 'King of Spices', is famous for its strong aroma and bold flavor.",
    longDesc: "Grown in the central hills of Sri Lanka, our black pepper offers a sophisticated heat with light citrus notes. It is carefully sun-dried to preserve its natural piperine content, ensuring you get the maximum health benefits and pungent flavor.",
    features: ["High Piperine Content", "Verified Authentic Quality", "Sustainably Harvested", "No Preservatives"]
  },
  { 
    id: "4", 
    name: "Red Chili Flakes", 
    price: "18.50", 
    mainImg: "/chili.jpg",
    heroImg: "/hero-chili.jpg",
    galleryImages: ["/chili.jpg", "/chili-2.jpg", "/chili-3.jpg", "/chili-4.jpg"],
    category: "Spices",
    description: "Perfectly dried and crushed Sri Lankan red chilies to add that extra kick to your dishes.",
    longDesc: "Our red chili flakes are made from premium Sri Lankan red chilies, carefully dried and crushed to retain maximum heat and flavor. These flakes are perfect for adding spice to pizzas, pasta, curries, and any dish that needs a fiery touch.",
    features: ["Premium Sri Lankan Chilies", "Maximum Heat Retention", "Perfect Crush Size", "Versatile Usage"]
  },
  { 
    id: "5", 
    name: "Roasted Curry Powder", 
    price: "22.00", 
    mainImg: "/roasted-curry.png",
    heroImg: "/hero-roasted-curry.jpg",
    galleryImages: ["/roasted-curry.png", "/roasted-curry-2.jpg", "/roasted-curry-3.jpg", "/roasted-curry-4.jpg"],
    category: "Spices",
    description: "Traditional Sri Lankan roasted curry powder for authentic curries with rich, deep flavors.",
    longDesc: "This traditional roasted curry powder is made using an age-old Sri Lankan recipe. The spices are carefully roasted to perfection, creating a deep, rich flavor that's essential for authentic Sri Lankan curries. Perfect for vegetable, meat, and fish curries.",
    features: ["Traditional Recipe", "Perfectly Roasted", "Rich Deep Flavor", "Authentic Sri Lankan Taste"]
  },
  { 
    id: "6", 
    name: "Cardamom Pods", 
    price: "45.00", 
    mainImg: "/cardamom.jpg",
    heroImg: "/hero-cardamom.jpg",
    galleryImages: ["/cardamom.jpg", "/cardamom-2.jpg", "/cardamom-3.jpg", "/cardamom-4.jpg"],
    category: "Spices",
    description: "Aromatic green cardamom pods from Sri Lankan highlands, perfect for both sweet and savory dishes.",
    longDesc: "Our premium cardamom pods are sourced from the misty highlands of Sri Lanka. Known for their intense aroma and complex flavor, these pods are perfect for biryanis, desserts, tea, and traditional curries. Each pod is hand-selected for quality.",
    features: ["Highland Grown", "Intense Aroma", "Hand Selected", "Premium Quality"]
  }
];

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Price Details');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const product = spiceProducts.find((p) => p.id === String(id));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  if (!product) return <div className="p-20 text-center font-sans text-gray-400">Loading Product...</div>;

  return (
    <main className="min-h-screen w-full bg-white text-[#1a1a1a] font-sans overflow-x-hidden">

      {/* --- HERO BANNER --- */}
      <section className="relative w-full h-[30vh] flex items-center justify-center overflow-hidden">
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

      {/* --- MAIN SECTION --- */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* --- LEFT: GALLERY --- */}
        <div className="flex flex-col gap-6 w-full items-center lg:items-start">
          
          {/* 🛠️ RESPONSIVE IMAGE BOX (USA ADU KARA) */}
          <div className="relative w-full max-w-[380px] bg-white rounded-2xl overflow-hidden">
            
            {/* 💡 85% නිසා පළලට වඩා උස පොඩ්ඩක් අඩු වෙලා Classy look එකක් එනවා */}
            <div style={{ paddingBottom: '60%' }}></div>

            <div 
              className="absolute inset-0 flex items-center justify-center p-6 cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image 
                src={product.galleryImages[selectedImage]} 
                alt={product.name} 
                fill
                sizes="(max-width: 768px) 100vw, 380px" 
                className="object-contain p-6 transition-opacity duration-300"
                style={{ opacity: isZoomed ? 0 : 1 }}
                priority
              />
              
              {/* Zoomed Image Overlay */}
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
                 className={`w-14 h-14 sm:w-16 sm:h-16 border-2 rounded-lg flex items-center justify-center p-2 cursor-pointer transition-all ${
                    selectedImage === index 
                      ? 'border-[#b8860b] bg-[#b8860b]/10' 
                      : 'border-gray-200 hover:border-[#b8860b]'
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

          {/* Gray Horizontal Divider */}
          <div className="w-full my-8">
            <hr className="border-gray-300" />
          </div>

          {/* Featured Products Section */}
          <div className="w-full max-w-[380px]">
            <h3 className="text-lg font-playfair font-bold text-[#222] mb-6 text-center lg:text-left">Featured Products</h3>
            
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {spiceProducts.filter(item => item.id !== product.id).slice(0, 3).map((item) => (
                <Link 
                  key={item.id} 
                  href={`/spices/${item.id}`}
                  className="group cursor-pointer block flex-shrink-0"
                >
                  {/* Product Title */}
                  <h4 className="text-[15px] font-semibold text-gray-800 text-left mb-2 group-hover:text-[#b8860b] transition-colors line-clamp-2 w-30">
                    {item.name}
                  </h4>
                  
                  {/* Square Image Box - Fixed Size */}
                  <div className="relative w-40 h-30 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <Image 
                      src={item.mainImg} 
                      alt={item.name} 
                      width={450}
                      height={450}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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
            {['Price Details', 'Description', 'Additional Information'].map((tab) => (
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
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-[#222]">
                  {product.name}
                </h1>
                
                <div className="text-2xl font-bold text-[#b8860b] font-serif">
                  ${product.price}
                </div>

                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {product.description}
                </p>

                <div className="flex flex-col gap-3">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-[11px] sm:text-xs font-bold text-gray-700 tracking-wide uppercase italic">
                      <div className="w-1 h-1 flex-shrink-0 bg-[#b8860b] rounded-full" /> 
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Inquiry Button */}
                <a 
                  href={`https://wa.me/6588195910?text=I'm interested in ${product.name}`}
                  target="_blank"
                  className="w-full lg:w-max flex items-center justify-center gap-3 bg-[#1a1a1a] text-white px-8 sm:px-12 py-4 rounded-full font-bold uppercase text-[10px] sm:text-[11px] tracking-[2px] hover:bg-[#b8860b] transition-all shadow-lg active:scale-95 mt-8"
                >
                  <MessageCircle size={16} />
                  Inquiry on WhatsApp
                </a>
              </div>
            )}

            {activeTab === 'Description' && (
              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-bold text-[#222] mb-4">Product Description</h3>
                <p className="text-gray-600 leading-loose text-[15px] font-serif">
                  {product.longDesc}
                </p>
              </div>
            )}

            {activeTab === 'Additional Information' && (
              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-bold text-[#222] mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Weight</span>
                    <span className="text-gray-600">250g / 500g</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Origin</span>
                    <span className="text-gray-600">Sri Lanka</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Category</span>
                    <span className="text-gray-600">{product.category}</span>
                  </div>
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
      
      {/* Footer Form */}
      <div className="mt-10 bg-[#fcfcfc]">
        <ContactInquirySection />
      </div>

    </main>
  );
};

export default ProductDetailPage;