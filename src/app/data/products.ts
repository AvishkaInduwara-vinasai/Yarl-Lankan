// src/data/spiceProducts.ts

export type ProductVariation = {
  weight: string;
  price: string;
};

export type ProductDetails = {
  type: string;
  origin: string;
  packaging: string;
  shipping: string;
};

export type SpiceProduct = {
  id: string;
  name: string;
  price: string;
  mainImg: string;
  heroImg: string;
  galleryImages: string[];
  category: string;
  details: ProductDetails;
  variations: ProductVariation[];
  description: string;
  longDesc: string;
  features: string[];
};

export const spiceProducts: SpiceProduct[] = [
  { 
    id: "1", 
    name: "Jaffna Curry Powder", 
    price: "30.23", 
    mainImg: "/jaffna-curry-item.png",
    heroImg: "/jaffna-curry-hero.png",
    galleryImages: ["/jaffna-curry-item.png", "/jaffna-curry-item-2.png", "/jaffna-curry-item-3.png", "/jaffna-curry-item-4.png"],
    category: "Spices",
    details: {
      type: "Spice/ Jaffna Roasted Blend",
      origin: "Sri Lanka (Northern)",
      packaging: "Packet (Polythene)",
      shipping: "Worldwide Economy (10-35 Days) / Express (5-10 Days)"
    },
    variations: [
      { weight: "100 g", price: "350.00" },
      { weight: "250 g", price: "825.00" },
      { weight: "500 g", price: "1600.00" },
      { weight: "1 kg", price: "3100.00" }
    ],
    description: "Discover the rich essence of Sri Lankan Jaffna Curry Powder...",
    longDesc: "Our Jaffna Curry Powder is 100% authentic...",
    features: ["100% Authentic Sri Lankan Spice", "Natural Fine Powder", "Free from Additives", "Ideal for Meat"]
  },
  { 
    id: "2", 
    name: "Ceylon Cinnamon", 
    price: "25.80", 
    mainImg: "/cinnamon-item.png",
    heroImg: "/cinnamon-hero.jpg",
    galleryImages: ["/cinnamon-item.png", "/cinnamon-item-2.jpg", "/cinnamon-item-3.jpg", "/cinnamon-item-4.jpg"],
    category: "Spices",
    details: { type: "Spice/ True Cinnamon", origin: "Sri Lanka (Southern)", packaging: "Bundle", shipping: "Standard" },
    variations: [{ weight: "100 g", price: "450.00" }, { weight: "500 g", price: "2100.00" }],
    description: "Premium 'True Cinnamon' from the hills of Sri Lanka...",
    longDesc: "Unlike Cassia, Ceylon Cinnamon is thinner...",
    features: ["True Ceylon Cinnamon", "Delicate Sweet Flavor", "Hand Processed", "Perfect for Baking & Tea"]
  },
  { 
    id: "3", 
    name: "Black Pepper Whole", 
    price: "30.23", 
    mainImg: "/pepper-item.png",
    heroImg: "/black-pepper-hero.png",
    galleryImages: ["/pepper-item.png", "/pepper-item-2.jpg", "/pepper-item-3.jpg", "/pepper-item-4.jpg"],
    category: "Spices",
    details: { type: "Spice/ Black Pepper", origin: "Sri Lanka (Central)", packaging: "Packet", shipping: "Standard" },
    variations: [{ weight: "100 g", price: "350.00" }, { weight: "500 g", price: "1650.00" }],
    description: "Premium Ceylon Black Pepper...",
    longDesc: "Grown in the central hills of Sri Lanka...",
    features: ["High Piperine Content", "Verified Authentic Quality", "Sustainably Harvested", "No Preservatives"]
  },
  { 
    id: "4", 
    name: "Red Chili Flakes", 
    price: "18.50", 
    mainImg: "/chili-item.jpg",
    heroImg: "/chili-hero.jpg",
    galleryImages: ["/chili-item.jpg", "/chili-item-2.jpg", "/chili-item-3.jpg", "/chili-item-4.jpg"],
    category: "Spices",
    details: { type: "Spice", origin: "Sri Lanka", packaging: "Packet", shipping: "Standard" },
    variations: [{ weight: "100 g", price: "250.00" }],
    description: "Perfectly dried and crushed Sri Lankan red chilies...",
    longDesc: "Our red chili flakes are made from premium Sri Lankan red chilies...",
    features: ["Premium Sri Lankan Chilies", "Maximum Heat Retention", "Perfect Crush Size", "Versatile Usage"]
  },
  { 
    id: "5", 
    name: "Roasted Curry Powder", 
    price: "22.00", 
    mainImg: "/roasted-curry-item.png",
    heroImg: "/roasted-curry-hero.jpg",
    galleryImages: ["/roasted-curry-item.png", "/roasted-curry-item-2.jpg", "/roasted-curry-item-3.jpg", "/roasted-curry-item-4.jpg"],
    category: "Spices",
    details: { type: "Spice", origin: "Sri Lanka", packaging: "Packet", shipping: "Standard" },
    variations: [{ weight: "100 g", price: "300.00" }],
    description: "Traditional Sri Lankan roasted curry powder...",
    longDesc: "This traditional roasted curry powder is made using an age-old Sri Lankan recipe...",
    features: ["Traditional Recipe", "Perfectly Roasted", "Rich Deep Flavor", "Authentic Sri Lankan Taste"]
  },
  { 
    id: "6", 
    name: "Cardamom Pods", 
    price: "45.00", 
    mainImg: "/cardamom-item.jpg",
    heroImg: "/hero-cardamom.jpg",
    galleryImages: ["/cardamom-item.jpg", "/cardamom-item-2.jpg", "/cardamom-item-3.jpg", "/cardamom-item-4.jpg"],
    category: "Spices",
    details: { type: "Spice", origin: "Sri Lanka", packaging: "Packet", shipping: "Standard" },
    variations: [{ weight: "50 g", price: "600.00" }],
    description: "Aromatic green cardamom pods from Sri Lankan highlands...",
    longDesc: "Our premium cardamom pods are sourced from the misty highlands of Sri Lanka...",
    features: ["Highland Grown", "Intense Aroma", "Hand Selected", "Premium Quality"]
  }
];