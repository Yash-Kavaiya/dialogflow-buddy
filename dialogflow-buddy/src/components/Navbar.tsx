'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { 
  Home,
  MessageSquare,
  Database,
  Route,
  Webhook,
  Share2,
  Bug,
  BarChart2,
  TestTube2,
  Menu
} from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Intents', path: '/intents', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'Entities', path: '/entities', icon: <Database className="w-4 h-4" /> },
    { name: 'Routes', path: '/routes', icon: <Route className="w-4 h-4" /> },
    { name: 'Webhooks', path: '/webhooks', icon: <Webhook className="w-4 h-4" /> },
    { name: 'Flow Generator', path: '/flowmaker', icon: <Share2 className="w-4 h-4" /> },
    { name: 'Debugddy', path: '/debugdddy', icon: <Bug className="w-4 h-4" /> },
    { name: 'Analytics', path: '/analytics', icon: <BarChart2 className="w-4 h-4" /> },
    { name: 'Test Suite', path: '/testsuite', icon: <TestTube2 className="w-4 h-4" /> }
  ];

  return (
    <nav className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-3 border-b border-gray-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3 text-white no-underline min-w-fit">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
              <img
                src="/Dialogflow.png"
                alt="Dialogflow Buddy"
                className="relative w-8 h-8 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-lg font-semibold whitespace-nowrap">
              Dialogflow{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Buddy
              </span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.path} className="whitespace-nowrap">
                  <Link
                    href={item.path}
                    className={`group flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-200 text-sm
                      ${pathname === item.path 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400' 
                        : 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10'}`}
                  >
                    <span className="transform group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-blue-400 focus:outline-none transition-colors duration-200"
              type="button"
              aria-label="Toggle navigation"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link
              href="/login"
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg 
                bg-gradient-to-r from-blue-500 to-purple-600 
                text-white font-medium transition-all duration-300 text-sm
                hover:from-blue-600 hover:to-purple-700
                transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200
                    ${pathname === item.path
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                href="/login"
                className="flex items-center justify-center mt-4 px-6 py-2 rounded-lg
                  bg-gradient-to-r from-blue-500 to-purple-600 
                  text-white font-medium transition-all duration-300
                  hover:from-blue-600 hover:to-purple-700
                  transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;