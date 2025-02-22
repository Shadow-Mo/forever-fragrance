"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5 px-6 bg-[rgba(20,20,20,0.7)] backdrop-blur-md text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
          <img src="/pendant-logo.webp" alt="Forever Fragrance Logo" className="h-8 w-8" />
          <span className="text-white">Forever Fragrance</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* <Link href="/about" className="hover:text-gray-300 transition-all duration-300">
            About
          </Link> */}
          <Link href="/order">
            <Button className="bg-white text-gray-900 hover:bg-gray-200 shadow-md transition-all">
              Order Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[rgba(20,20,20,0.9)] backdrop-blur-md shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/about" className="hover:text-gray-300 transition-all duration-300">
              About
            </Link>
            <Link href="/order">
              <Button className="bg-white text-gray-900 hover:bg-gray-200 shadow-md transition-all">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
