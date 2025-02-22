import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/bg-pendant.webp')" }}
        >
            {/* Semi-transparent overlay for text visibility */}
            <div className="absolute w-full inset-0 bg-black opacity-50"></div>

            {/* Content wrapper with higher z-index to appear above the overlay */}
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                    Keep Them Close Forever
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl text-white">
                    We craft pendants that hold the unique fragrance of your loved ones,
                    made from their cherished belongings like a t-shirt.
                </p>
                <Link href="/order">
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-200 hover:shadow-lg transition duration-300"
                    >
                        Create Your Pendant
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero