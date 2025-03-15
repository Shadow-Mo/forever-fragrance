import React from 'react'

const PendantGallery = () => {

    const pendants = [
        { id: 1, name: "Timeless Keepsake", image: "/pendant1.webp", description: "A classic locket for your most cherished memories." },
        { id: 2, name: "Eternal Essence", image: "/pendant2.webp", description: "A fragrance-infused diffuser pendant." },
        { id: 3, name: "Whispered Words", image: "/pendant3.webp", description: "Engrave a name, date, or special message." },
        { id: 4, name: "Endless Love", image: "/pendant4.webp", description: "A heart-shaped pendant that symbolizes love and warmth." },
        { id: 5, name: "Celestial Charm", image: "/gold-pendant.png", description: "Gemstone-inset pendant representing birth months." },
        { id: 6, name: "Everlasting Bloom", image: "/silver-pendant.png", description: "A delicate floral or nature-inspired design." }
    ];


    return (
        <div className="relative min-h-screen bg-[#FAF3E0] flex flex-col justify-center items-center text-center px-6 py-32">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/subtle-pattern.png')" }}></div>

            <div className="relative z-10 w-full max-w-6xl">
                {/* Heading */}
                <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                    Our Pendants
                </h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-xl mx-auto">
                    Beautifully designed pendants to cherish your most precious memories.
                </p>

                {/* Pendant Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {pendants.map((pendant) => (
                        <div
                            key={pendant.id}
                            className="relative bg-white p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={pendant.image}
                                    alt={pendant.name}
                                    className="w-full h-72 object-cover rounded-lg"
                                />
                            </div>
                            <p className="text-center text-gray-700 text-lg font-semibold mt-4">
                                {pendant.name}
                            </p>
                            <p className="text-center text-gray-600 text-sm mt-2">
                                {pendant.description}
                            </p>
                            {/* View Details Button */}
                            <div className="mt-4 flex justify-center">
                                <button className="px-6 py-3 bg-gray-800 text-white rounded-lg text-md font-medium hover:bg-gray-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PendantGallery
