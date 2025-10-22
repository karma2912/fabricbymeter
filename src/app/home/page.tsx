// You can place this in 'app/page.tsx' or 'app/home.tsx'
"use client"; // Required for the menu toggle (useState)

import { useState } from "react"; // Import useState
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

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-[#e4dfc7] border-b border-gray-200 ">
        <div className="flex items-center justify-between h-20 px-6 lg:px-10">
          <div className="flex-1 text-left">
            <Search className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
          </div>
          <div className="flex-[2] text-center">
            <a
              href="#"
              className="text-4xl font-serif font-medium text-gray-800"
            >
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
                <Facebook
                  className="w-4 h-4 text-gray-700"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram
                  className="w-4 h-4 text-gray-700"
                  strokeWidth={1.5}
                />
              </a>
              <a href="#" aria-label="Pinterest"></a>
              <a href="#" aria-label="Twitter">
                <Twitter
                  className="w-4 h-4 text-gray-700"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </a>
            </div>
            <a
              href="#"
              className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex"
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
              <span>Log in</span>
            </a>
            <a
              href="#"
              className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex"
            >
              <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
              <span>Cart (2)</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        <nav
          className="hidden items-center justify-center h-14 space-x-10 font-sans bg-white md:flex" // Hidden on mobile
        >
          <a href="#" className="text-sm tracking-wide text-gray-700">
            Shop All
          </a>
          <a href="#" className="text-sm tracking-wide text-gray-700">
            Our Story
          </a>
          <a href="#" className="text-sm tracking-wide text-gray-700">
            Our Craft
          </a>
          <a href="#" className="text-sm tracking-wide text-gray-700">
            Gift Card
          </a>
          <a href="#" className="text-sm tracking-wide text-gray-700">
            Contact
          </a>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col items-center space-y-5 p-6">
              <a href="#" className="text-lg tracking-wide text-gray-700">
                Shop All
              </a>
              <a href="#" className="text-lg tracking-wide text-gray-700">
                Our Story
              </a>
              <a href="#" className="text-lg tracking-wide text-gray-700">
                Our Craft
              </a>
              <a href="#" className="text-lg tracking-wide text-gray-700">
                Gift Card
              </a>
              <a href="#" className="text-lg tracking-wide text-gray-700">
                Contact
              </a>

              <div className="border-t border-gray-200 w-3/4 my-2"></div>

              <a
                href="#"
                className="flex items-center space-x-1 text-lg text-gray-700 font-sans"
              >
                <User className="w-5 h-5" strokeWidth={1.5} />
                <span>Log in</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 text-lg text-gray-700 font-sans"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                <span>Cart (2)</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="relative flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] md:h-[calc(100vh-136px)] bg-stone-100 overflow-hidden">
      
      <Image
        src="/fabric-world-02.jpg"   
        alt="Background"
        fill                  
        className="object-cover object-center" 
        priority               
      />

      {/* Overlay content */}
      <div className="relative flex flex-col items-center text-center px-4 z-10">
        <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase text-white drop-shadow-lg">
          CUE THE FABRICS
        </h1>
        <a
          href="#"
          className="px-10 py-6 mt-12 text-sm tracking-wider text-white uppercase transition-colors duration-300 bg-transparent hover:bg-[#2d3915] font-sans border-[0.05rem] border-white"
        >
          Shop the collection
        </a>
      </div>
    </main>
    </div>
  );
}
