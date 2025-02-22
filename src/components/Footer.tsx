import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[rgba(20,20,20,0.7)] text-white py-10 border-t border-gray-300">
            <div className="container mx-auto px-6">
                {/* Footer Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                    
                    {/* Brand & Copyright */}
                    <div>
                        <h2 className="text-xl font-bold tracking-wide">Forever Fragrance</h2>
                        <p className="text-white mt-2">&copy; 2025 Forever Fragrance Pendants. <br /> All rights reserved.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-2">
                        <Link href="/about" className="text-white hover:text-gray-400 transition">About</Link>
                        <Link href="/order" className="text-white hover:text-gray-400 transition">Order Now</Link>
                        <Link href="/contact" className="text-white hover:text-gray-400 transition">Contact</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-end space-x-6">
                        <a href="#" className="text-white hover:text-gray-400 transition">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400 transition">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400 transition">
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
