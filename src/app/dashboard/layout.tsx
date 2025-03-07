"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
      {/* Admin Navbar - Simplified for dashboard */}
      <nav className="py-4 px-6 bg-[rgba(20,20,20,0.9)] backdrop-blur-md text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/pendant-logo.webp" alt="Forever Fragrance Logo" className="h-8 w-8" />
            <span className="text-white font-bold">Admin Dashboard</span>
          </div>
          
          <div className="flex items-center space-x-4">    
            <Button 
              variant="outline" 
              className="border-white text-black hover:bg-white hover:text-black"
              onClick={() => {
                // In a real app, perform logout logic here
                router.push("/");
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Dashboard Content */}
      <main className="flex-grow container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
