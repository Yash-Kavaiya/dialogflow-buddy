'use client';

import { FaGithub, FaPaypal, FaCoffee, FaHeart, FaStar } from 'react-icons/fa';
import { Coffee, Wallet } from 'lucide-react';
import { useState } from 'react';

export default function SponsorPage() {
  const sponsorOptions = [
    {
      title: "Buy Me a Coffee",
      icon: <FaCoffee className="w-6 h-6" />,
      link: "https://buymeacoffee.com/yashkavaiye",
      description: "Support my work with a coffee!",
      buttonText: "Buy me a coffee",
      bgGradient: "from-yellow-600 to-yellow-700"
    },
    {
      title: "Ko-fi Support",
      icon: <Coffee className="w-6 h-6" />,
      link: "https://ko-fi.com/yashkavaiya",
      description: "Support me on Ko-fi",
      buttonText: "Support on Ko-fi",
      bgGradient: "from-blue-600 to-blue-700"
    },
    {
      title: "PayPal",
      icon: <FaPaypal className="w-6 h-6" />,
      link: "mailto:arkavaiya@gmail.com",
      description: "Send support via PayPal",
      buttonText: "Support via PayPal",
      bgGradient: "from-indigo-600 to-indigo-700"
    },
    {
      title: "UPI Payment",
      icon: <Wallet className="w-6 h-6" />,
      description: "Direct UPI Transfer",
      upiId: "9586551131@ybl",
      buttonText: "Copy UPI ID",
      bgGradient: "from-green-600 to-green-700"
    }
  ];

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("9586551131@ybl");
    alert("UPI ID copied to clipboard!");
  };

  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      // You might want to save this to a database in a real application
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <FaHeart className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Support the Project
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Your support helps me maintain and improve the Dialogflow Test Suite and create more awesome tools!
          </p>
          
          {/* GitHub Profile */}
          <a 
            href="https://github.com/Yash-Kavaiya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-gray-200 
                     hover:bg-gray-700 transition-colors duration-300 mb-12"
          >
            <FaGithub className="w-5 h-5" />
            <span>Yash Kavaiya on GitHub</span>
          </a>
        </div>

        {/* Sponsor Likes Section */}
        <div className="mb-12 text-center">
          <div className="inline-block p-6 rounded-xl bg-gray-800/80 border border-gray-700/50">
            <div className="flex items-center gap-4 justify-center mb-4">
              <FaStar className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-gray-200">{likes}</span>
            </div>
            <button
              onClick={handleLike}
              disabled={hasLiked}
              className={`px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600
                         text-white font-medium transition-all duration-300
                         ${hasLiked ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 hover:scale-105'}
                         shadow-lg`}
            >
              {hasLiked ? 'Thank You! ⭐' : 'Show Your Support ⭐'}
            </button>
          </div>
        </div>

        {/* Sponsor Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sponsorOptions.map((option, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-gray-800/80 p-6 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${option.bgGradient}`}>
                    {option.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-200">{option.title}</h2>
                </div>
                <p className="text-gray-300 mb-6">{option.description}</p>
                {option.upiId ? (
                  <div className="flex flex-col gap-2">
                    <code className="block p-3 bg-gray-900 rounded-lg text-gray-300 font-mono">
                      {option.upiId}
                    </code>
                    <button
                      onClick={handleCopyUPI}
                      className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r ${option.bgGradient}
                                text-white font-medium transition-all duration-300
                                hover:opacity-90 transform hover:scale-105
                                shadow-lg`}
                    >
                      {option.buttonText}
                    </button>
                  </div>
                ) : (
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full px-6 py-3 rounded-lg bg-gradient-to-r ${option.bgGradient}
                              text-white font-medium text-center transition-all duration-300
                              hover:opacity-90 transform hover:scale-105
                              shadow-lg`}
                  >
                    {option.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-400">
          <p>Thank you for considering supporting our work! ❤️</p>
        </div>
      </div>
    </div>
  );
}