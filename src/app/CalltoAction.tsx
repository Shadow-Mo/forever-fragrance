import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CalltoAction = () => {
    return (
        <div 
            className="relative min-h-screen bg-[#FAF3E0] flex flex-col justify-center items-center text-center px-6"
        >
            {/* Background Image Overlay (Fragrance Swirl Effect) */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/fragrance-swirl.png')" }}></div>

            <div className="relative z-10 max-w-2xl">
                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                    Cherish Their Presence Forever
                </h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                    Preserve the scent of your loved ones in a timeless pendant—crafted to hold memories, emotions, and love.
                </p>

                {/* CTA Button */}
                <Link href="/order">
                    <Button 
                        size="lg"
                        className="px-8 py-4 text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Create Your Pendant
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CalltoAction
