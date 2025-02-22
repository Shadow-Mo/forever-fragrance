import React from 'react';
import { Package, Brush, CheckCircle, Gift } from 'lucide-react';

const steps = [
    { icon: <Package className="w-12 h-12 text-gray-800" />, title: "Step 1", description: "Send us your cherished item." },
    { icon: <Brush className="w-12 h-12 text-gray-800" />, title: "Step 2", description: "We extract its unique fragrance." },
    { icon: <CheckCircle className="w-12 h-12 text-gray-800" />, title: "Step 3", description: "Crafting your custom pendant." },
    { icon: <Gift className="w-12 h-12 text-gray-800" />, title: "Step 4", description: "Delivered to your doorstep." }
];

const HowItWorks = () => {
    return (
        <div className="relative min-h-screen bg-[#FAF3E0] flex flex-col justify-center items-center text-center px-6">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/subtle-pattern.png')" }}></div>

            <div className="relative z-10 max-w-6xl">
                {/* Section Heading */}
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                    How It Works
                </h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    A simple and heartfelt process to create a pendant that holds memories, love, and emotions.
                </p>

                {/* Step Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="relative p-6 bg-white rounded-xl shadow-lg transition transform hover:scale-105 text-center"
                        >
                            

                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className="bg-gray-200 rounded-full p-4">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Step Content */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
