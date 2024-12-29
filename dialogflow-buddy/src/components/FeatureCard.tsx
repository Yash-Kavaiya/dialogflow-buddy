'use client';

import { FC, ReactElement } from 'react';

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  className?: string;
  link?: string;  // Add the link prop as optional
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={`relative flex flex-col h-full bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl overflow-hidden ${className}`}>
      {/* Hover Effects Container */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute inset-0 border border-blue-500/20 group-hover:border-blue-500/30 rounded-xl transition-all duration-300" />
      </div>

      {/* Main Content Container */}
      <div className="relative flex flex-col h-full p-6 group">
        {/* Icon Section - Fixed Height */}
        <div className="flex items-center h-16">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-1 ring-blue-500/20 group-hover:ring-blue-500/30 transition-all duration-300">
            <div className="text-blue-400 dark:text-blue-300 group-hover:text-blue-300 transition-colors duration-300">
              {icon}
            </div>
          </span>
        </div>

        {/* Content Section - Flex Grow */}
        <div className="flex flex-col flex-grow mt-4">
          {/* Title - Fixed Height for Consistency */}
          <h3 className="text-lg font-medium text-gray-100 group-hover:text-white transition-colors duration-300 min-h-[28px] line-clamp-1">
            {title}
          </h3>
          
          {/* Description - Flex Grow */}
          <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Visual Enhancements */}
        <div className="absolute right-0 top-0 w-24 h-24 transform translate-x-12 -translate-y-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
export type { FeatureCardProps };  // Export the interface