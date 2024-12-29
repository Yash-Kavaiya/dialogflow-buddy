'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';

interface HeroProps {
  className?: string;
}

const Hero: FC<HeroProps> = ({ className }) => {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-16 ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-blue-500/5" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 lg:pr-8 relative z-10">
              <div className="relative">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block mb-2 relative">
                    <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Revolutionize Your
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg opacity-50" />
                  </span>
                  <span className="block text-gray-100 relative">
                    Dialogflow Chatbots
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-lg opacity-30" />
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-300 sm:text-xl md:text-2xl leading-relaxed">
                  Elevate your customer service and streamline operations with our powerful AI solutions, 
                  crafted to enhance every interaction with precision and ease.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-6">
                  <Link 
                    href="/dashboard" 
                    className="inline-flex items-center justify-center px-8 py-3 
                             text-base font-medium rounded-lg text-white 
                             bg-gradient-to-r from-blue-500 to-purple-600 
                             hover:from-blue-600 hover:to-purple-700
                             transition-all duration-300 transform hover:scale-105
                             md:py-4 md:text-lg md:px-10 
                             shadow-[0_0_20px_rgba(66,153,225,0.3)] 
                             hover:shadow-[0_0_25px_rgba(66,153,225,0.45)]">
                    Get Started
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-3 
                             text-base font-medium rounded-lg 
                             text-gray-100 bg-gray-800
                             hover:bg-gray-700 border border-gray-700
                             hover:border-gray-600
                             transition-all duration-300 transform hover:scale-105
                             md:py-4 md:text-lg md:px-10 
                             shadow-[0_0_20px_rgba(26,32,44,0.3)]
                             hover:shadow-[0_0_25px_rgba(26,32,44,0.45)]">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Animation */}
            <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative z-10">
              <div className="relative w-full max-w-lg">
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-xl opacity-20 group-hover:opacity-30 animate-pulse"></div>
                {/* Animation Container */}
                <div className="relative bg-gray-800/50 rounded-lg p-2 backdrop-blur-sm">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/7f485aba-d883-4b55-a8af-faaba59b4ca2/Ledz8ctCRL.lottie"
                    style={{ width: '600px', height: '600px' }}
                    className="transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
};

export default Hero;

/* Add these animations to your globals.css */
/*
@keyframes blob {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
*/