'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const navigation = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
    ],
    solutions: [
      { name: 'Intent Generation', href: '/intents' },
      { name: 'Entity Detection', href: '/entities' },
      { name: 'Route Creation', href: '/routes' },
      { name: 'Webhooks', href: '/webhooks' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/Yash-Kavaiya',
        icon: FaGithub
      },
      {
        name: 'Twitter',
        href: 'https://x.com/Yash_Kavaiya_',
        icon: FaTwitter
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/yashkavaiya',
        icon: FaLinkedin
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/QfRd4S9A',
        icon: FaDiscord
      },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" aria-labelledby="footer-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="relative z-10">
                <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  DDB
                </span>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  Making Dialogflow development easier and more efficient
                </p>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative"
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="transform transition-all duration-300 group-hover:scale-110">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-400 relative z-10 transition-colors" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Product Links */}
              <div>
                <h3 className="text-sm font-semibold leading-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="group relative text-sm leading-6 text-gray-400 transition-colors duration-300"
                      >
                        <span className="relative z-10 hover:text-blue-400">{item.name}</span>
                        <div className="absolute -inset-2 scale-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Solutions Links */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="group relative text-sm leading-6 text-gray-400 transition-colors duration-300"
                      >
                        <span className="relative z-10 hover:text-blue-400">{item.name}</span>
                        <div className="absolute -inset-2 scale-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Company and Legal Links */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="group relative text-sm leading-6 text-gray-400 transition-colors duration-300"
                      >
                        <span className="relative z-10 hover:text-blue-400">{item.name}</span>
                        <div className="absolute -inset-2 scale-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="group relative text-sm leading-6 text-gray-400 transition-colors duration-300"
                      >
                        <span className="relative z-10 hover:text-blue-400">{item.name}</span>
                        <div className="absolute -inset-2 scale-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 sm:mt-20 lg:mt-24">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
            </div>
          </div>
          <div className="relative z-10 mt-8">
            <p className="text-center">
              <span className="text-sm leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} Dialogflow Developer Buddy. All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;