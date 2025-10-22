"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  User,
  ShoppingCart,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  // Dummy fabric categories and names
  const fabricCategories = [
    { name: "Cotton", items: ["Organic Cotton", "Egyptian Cotton", "Canvas", "Denim"] },
    { name: "Silk", items: ["Charmeuse", "Chiffon", "Dupioni", "Habotai"] },
    { name: "Wool", items: ["Merino Wool", "Cashmere", "Tweed", "Flannel"] },
    { name: "Linen", items: ["Belgian Linen", "French Linen", "Blended Linen"] },
    { name: "Synthetic", items: ["Polyester", "Nylon", "Rayon", "Acetate"] },
  ];

  return (
    <header
      // The header is now relative and has a constant height.
      // onMouseLeave is here to close the dropdown when you mouse off the *entire* header.
      className="relative top-0 z-50 bg-[#e4dfc7] border-b border-gray-200"
    >
      {/* Top Section - Logo and Icons */}
      <div className="flex items-center justify-between h-20 px-6 lg:px-10">
        <div className="flex-1 text-left">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer" strokeWidth={1.5} />
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

      {/* Main Navigation */}
      <nav className="hidden items-center justify-center h-14 space-x-10 font-sans bg-[#e4dfc7] md:flex font-medium relative">
        <div
          className="relative"
          // We only need onMouseEnter here. onMouseLeave is now on the parent <header>.
          onMouseEnter={() => setIsShopDropdownOpen(true)} onMouseLeave={()=> setIsShopDropdownOpen(false)}
        >
          <button className="flex items-center space-x-1 text-sm tracking-wide text-black py-2">
            <span className="">SHOP ALL</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isShopDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <a href="#" className="text-sm tracking-wide text-black">OUR STORY</a>
        <a href="#" className="text-sm tracking-wide text-black">WHOLESALE</a>
        <a href="#" className="text-sm tracking-wide text-black">CONTACT</a>
        <a href="#" className="text-sm tracking-wide text-black">MY PROFILE</a>
      </nav>

      {/* Dropdown Content - Animated & Absolute */}
      <div
        // This is now positioned absolutely below the header
        // It transitions in and out with opacity and transform
        className={`hidden md:block absolute top-[136px] left-0 w-full bg-[#e4dfc7] shadow-lg 
                    transition-all duration-300 ease-in-out
                    ${
                      isShopDropdownOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-4 invisible"
                    }`}
        // The height is applied directly here
        style={{ height: "calc(65vh - 136px)" }}
        // Keep it open when the mouse is over it
        onMouseEnter={() => setIsShopDropdownOpen(true)} onMouseLeave={()=>setIsShopDropdownOpen(false)}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          {/* By Category Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-gray-800">BY CATEGORY</h3>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mt-2"></div>
          </div>

          {/* Fabric Categories Grid */}
          <div className="grid grid-cols-5 gap-8 flex-1">
            {fabricCategories.map((category, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-gray-800 mb-4 text-lg pb-2">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 w-full bg-[#e4dfc7] shadow-lg md:hidden">
          <nav className="flex flex-col items-center space-y-5 p-6">
            <div className="w-full">
              <button
                className="flex items-center justify-between w-full text-lg tracking-wide text-black py-2"
                onClick={() => {
                  // You could add mobile dropdown functionality here
                }}
              >
                <span>SHOP ALL</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-lg tracking-wide text-black">OUR STORY</a>
            <a href="#" className="text-lg tracking-wide text-black">WHOLESALE</a>
            <a href="#" className="text-lg tracking-wide text-black">CONTACT</a>
            <a href="#" className="text-lg tracking-wide text-black">MY PROFILE</a>
            <div className=" w-3/4 my-2"></div>
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
  );
}