'use client';

import { useRouter } from 'next/navigation';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTools, FaHeart } from 'react-icons/fa';

const PricingPage = () => {
  const router = useRouter();

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/Yash-Kavaiya",
      label: "GitHub",
      bgClass: "hover:bg-gray-700"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/yash-kavaiya",
      label: "LinkedIn",
      bgClass: "hover:bg-blue-700"
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: "https://twitter.com/yash_kavaiya",
      label: "Twitter",
      bgClass: "hover:bg-sky-600"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:arkavaiya@gmail.com",
      label: "Email",
      bgClass: "hover:bg-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Under Development Icon */}
        <div className="mb-8 relative">
          <FaTools className="w-24 h-24 mx-auto text-blue-400 animate-bounce" />
          <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full"></div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          404 | Under Development
        </h1>
        
        <p className="text-gray-300 text-lg mb-8">
          This feature is currently under construction. Help us build it faster by becoming a sponsor!
        </p>

        {/* Sponsor Button */}
        <div className="mb-12">
          <button
            onClick={() => router.push('/sponsor')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium
                     transform transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-600
                     shadow-lg hover:shadow-purple-500/25"
          >
            <span className="flex items-center gap-2 text-white">
              <FaHeart className="w-5 h-5 text-red-300 group-hover:animate-ping" />
              Become a Sponsor
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-gray-800 ${link.bgClass} transition-colors duration-300`}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
