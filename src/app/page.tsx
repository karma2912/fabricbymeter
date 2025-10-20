// You can place this in 'app/page.tsx' or 'app/home.tsx'
"use client";

import { useState } from "react";
import {
  Search,
  User,
  ShoppingCart,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

// --- DUMMY DATA ---
const products = [
  {
    id: 1,
    name: "Natural Linen Fabric",
    price: "$25.00",
    image: "/fabricImage.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Cotton Floral Print",
    price: "$18.00",
    image: "/fabric-world-02.jpg",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Silk Charmeuse",
    price: "$45.00",
    image: "/fabricImage.jpg",
    tag: "Best Seller",
  },
  {
    id: 4,
    name: "Merino Wool Blend",
    price: "$32.00",
    image: "/fabric-world-02.jpg",
    tag: "Best Seller",
  },
];

const bannerProducts = [
  {
    id: 5,
    name: "Leather Wallet - Mauve",
    price: "$100.00",
    image: "/fabricImage.jpg",
  },
  {
    id: 6,
    name: "Suede Clutch - Dusty Pink",
    price: "$150.00",
    image: "/fabric-world-02.jpg",
  },
  {
    id: 7,
    name: "Compact Card Holder",
    price: "$75.00",
    image: "/fabricImage.jpg",
  },
  {
    id: 8,
    name: "Travel Pouch - Grey",
    price: "$120.00",
    image: "/fabric-world-02.jpg",
  },
];
const instagramImages = [
  { id: 1, src: "/fabricImage.jpg", alt: "Fabric on a textured surface" },
  { id: 2, src: "/fabric-world-02.jpg", alt: "Close-up of a woven fabric" },
  { id: 3, src: "/fabricImage.jpg", alt: "Colorful threads and yarns" },
  { id: 4, src: "/fabric-world-02.jpg", alt: "Sewing machine in action" },
  { id: 5, src: "/fabricImage.jpg", alt: "Stack of folded fabrics" },
  { id: 6, src: "/fabric-world-02.jpg", alt: "Person measuring fabric" },
];
// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#e4dfc7] border-b border-gray-200">
        <div className="flex items-center justify-between h-20 px-6 lg:px-10">
          <div className="flex-1 text-left">
            <Search className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
          </div>
          <div className="flex-[2] text-center">
            <a href="#" className="text-4xl font-serif font-medium text-gray-800">
              <Image
                src="/fabric-by-meter-logo.png"
                alt="Fabric By Meter Logo"
                width={200}
                height={80}
                className="mx-auto"
              />
            </a>
          </div>
          <div className="flex items-center justify-end flex-1 space-x-5">
            <div className="hidden space-x-4 md:flex">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-gray-700" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-gray-700" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
            <a href="#" className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex">
              <User className="w-5 h-5" strokeWidth={1.5} />
              <span>Log in</span>
            </a>
            <a href="#" className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex">
              <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
              <span>Cart (2)</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        <nav className="hidden items-center justify-center h-14 space-x-10 font-sans bg-white md:flex">
          <a href="#" className="text-sm tracking-wide text-gray-700">Shop All</a>
          <a href="#" className="text-sm tracking-wide text-gray-700">Our Story</a>
          <a href="#" className="text-sm tracking-wide text-gray-700">Wholesale</a>
          <a href="#" className="text-sm tracking-wide text-gray-700">Contact</a>
          <a href="#" className="text-sm tracking-wide text-gray-700">My Profile</a>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col items-center space-y-5 p-6">
              <a href="#" className="text-lg tracking-wide text-gray-700">Shop All</a>
              <a href="#" className="text-lg tracking-wide text-gray-700">Our Story</a>
              <a href="#" className="text-lg tracking-wide text-gray-700">Our Craft</a>
              <a href="#" className="text-lg tracking-wide text-gray-700">Gift Card</a>
              <a href="#" className="text-lg tracking-wide text-gray-700">Contact</a>
              <div className="border-t border-gray-200 w-3/4 my-2"></div>
              <a href="#" className="flex items-center space-x-1 text-lg text-gray-700 font-sans">
                <User className="w-5 h-5" strokeWidth={1.5} />
                <span>Log in</span>
              </a>
              <a href="#" className="flex items-center space-x-1 text-lg text-gray-700 font-sans">
                <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                <span>Cart (2)</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] md:h-[calc(100vh-136px)] overflow-hidden">
        <video
        autoPlay
        loop
        muted
        playsInline
        key={Date.now()} // This key forces React to re-render the element
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/my-video.mp4" // <-- ADD SRC HERE
      >
        {/* <source src="/my-video.mp4" type="video/mp4" /> <-- REMOVE THIS */}
        Your browser does not support the video tag.
      </video>
        <div className="relative flex flex-col items-center text-center px-4 z-10">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase text-white drop-shadow-lg">
            CUE THE FABRIC
          </h1>
          <a
            href="#"
            className="px-10 py-6 mt-12 text-sm tracking-wider text-white uppercase transition-colors duration-300 bg-transparent hover:bg-[#2d3915] font-sans border-[0.05rem] border-white"
          >
            Shop the collection
          </a>
        </div>
      </main>

      {/* Best Sellers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center uppercase tracking-[0.2em] text-stone-800">
            Best Sellers
          </h2>
          <div className="w-20 h-0.5 bg-stone-400 mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <a key={product.id} href="#" className="group relative text-center">
                <div className="relative w-full overflow-hidden bg-[#e4dfc7] pt-[125%]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-red-800 rounded-3xl text-white text-xs font-sans uppercase px-3 py-1.5">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-md text-stone-700 font-sans">{product.name}</h3>
                  <p className="text-md text-[#3d4d1d] font-sans font-medium mt-1">
                    {product.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="/shop" className="px-10 py-3 text-sm font-sans tracking-wider uppercase text-[#3d4d1d] border border-[#3d4d1d] hover:bg-[#3d4d1d] hover:text-white transition-colors duration-300">
              Shop All Products
            </a>
          </div>
        </div>
      </section>

<section className="bg-[#e4dfc7]">
        {/* Removed container, mx-auto, gap for a full-bleed look */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Card */}
          <div className="order-1 flex items-center justify-center py-10">
            <ProductBannerCard product={bannerProducts[0]} />
          </div>
          {/* Banner Image */}
          <div className="relative w-full aspect-[4/5] md:aspect-auto order-2">
            <Image
              src="/fabric-world-02.jpg"
              alt="Mini Leather Goods Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-70 p-4">
                <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-stone-800 text-center">
                  Mini Leather Goods
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Banner Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Card (Order is swapped) */}
          <div className="order-1 md:order-2 flex items-center justify-center py-10">
            <ProductBannerCard product={bannerProducts[2]} />
          </div>
          {/* Banner Image (Order is swapped) */}
          <div className="relative w-full aspect-[4/5] md:aspect-auto order-2 md:order-1">
            <Image
              src="/fabric-world-02.jpg"
              alt="New Arrivals Banner"
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-70 p-4">
                <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-stone-800 text-center">
                  New Arrivals
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="py-16 md:py-24 bg-[#e4dfc7]">
      <div className="container mx-auto px-6 text-center">
        {/* --- Titles --- */}
        <h2 className="text-3xl font-serif uppercase tracking-[0.2em] text-black">
          Follow
        </h2>
        <p className="text-2xl font-serif uppercase tracking-widest text-black mt-2">
          FABRIC BY METER ON INSTAGRAM
        </p>
        <a
          href="#"
          // CHANGED: Added 'font-serif' and 'italic'
          className="font-serif italic text-3xl text-red-800 mt-5 mb-10 inline-block"
        >
          @fabricbymeter
        </a>

        {/* --- Image Gallery --- */}
        <div className="mt-12">
          <div className="flex overflow-x-auto md:grid md:grid-cols-6 gap-2 md:gap-4 pb-4 md:pb-0">
            {instagramImages.map((image) => (
              <a
                href="#"
                key={image.id}
                className="flex-shrink-0 w-2/3 md:w-full"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- Features Section --- */}
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-stone-500"></div>
            {/* CHANGED: Added 'font-serif' and 'italic' */}
            <p className="mt-4 font-serif italic text-3xl text-red-800">Worldwide shipping</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-stone-500"></div>
            {/* CHANGED: Added 'font-serif' and 'italic' */}
            <p className="mt-4 font-serif italic text-3xl text-red-800">Easy 30 day returns</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-stone-500"></div>
            {/* CHANGED: Added 'font-serif' and 'italic' */}
            <p className="mt-4 font-serif italic text-3xl text-red-800">12 month warranty</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

// Product Banner Card Component (kept as separate component due to hover state)
function ProductBannerCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      className="group relative text-center flex flex-col items-center p-6 md:p-10 w-full max-w-md" // Added max-width to keep it from getting too large
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* This container now scales and has a set aspect ratio */}
      <div className="relative w-full aspect-[4/5] bg-white p-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105" // Use object-contain to show the full product
        />
      </div>
      <div className="mt-6">
        <h3 className="text-md text-stone-700 font-sans">{product.name}</h3>
        <div className="mt-2 h-8 flex items-center justify-center">
          {isHovered ? (
            <button className="text-sm font-sans uppercase tracking-wide text-[#3d4d1d] border border-[#3d4d1d] px-4 py-1.5 hover:bg-[#3d4d1d] hover:text-white transition-colors duration-200">
              View Details
            </button>
          ) : (
            <p className="text-md text-[#3d4d1d] font-sans font-medium">
              {product.price}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}