'use client';

import React from 'react';

type LoadingVariant = 'pulse' | 'spin' | 'dots' | 'gradient' | 'glow';

interface LoadingSpinnerProps {
  variant?: LoadingVariant;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  variant = 'spin',
  size = 'md',
  color = 'text-blue-400 dark:text-blue-300',
  text = 'Loading...',
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const SpinningCircle = () => (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 animate-pulse" />
      <div className={`relative ${sizeClasses[size]} ${color} animate-spin`}>
        <svg
          className="w-full h-full drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    </div>
  );

  const PulsingCircle = () => (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 animate-pulse" />
      <div 
        className={`${sizeClasses[size]} ${color} animate-pulse rounded-full bg-current shadow-lg 
                    relative shadow-blue-500/50 dark:shadow-blue-400/50`}
      />
    </div>
  );

  const BouncingDots = () => (
    <div className="flex space-x-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="relative">
          <div 
            className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
          <div
            className={`${sizeClasses['sm']} ${color} rounded-full animate-bounce shadow-lg relative
                       shadow-blue-500/50 dark:shadow-blue-400/50`}
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: '0.6s'
            }}
          />
        </div>
      ))}
    </div>
  );

  const GradientSpinner = () => (
    <div className={`${sizeClasses[size]} relative animate-spin`}>
      <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-75 animate-pulse" />
      <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      <div className="absolute inset-1 rounded-full bg-gray-900 dark:bg-gray-800" />
    </div>
  );

  const GlowSpinner = () => (
    <div className={`${sizeClasses[size]} relative`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin blur-md" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-spin" />
      <div className="absolute inset-1 rounded-full bg-gray-900 dark:bg-gray-800" />
      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur animate-pulse" />
    </div>
  );

  const LoadingAnimation = () => {
    switch (variant) {
      case 'pulse':
        return <PulsingCircle />;
      case 'dots':
        return <BouncingDots />;
      case 'gradient':
        return <GradientSpinner />;
      case 'glow':
        return <GlowSpinner />;
      default:
        return <SpinningCircle />;
    }
  };

  const Backdrop = ({ children }: { children: React.ReactNode }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      {children}
    </div>
  );

  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg animate-pulse" />
      <div className="relative flex flex-col items-center space-y-4 p-6 rounded-lg 
                    bg-gray-800/80 backdrop-blur-sm border border-gray-700/50">
        {children}
      </div>
    </div>
  );

  const LoadingText = () => (
    text && (
      <p className={`${color} text-sm font-medium animate-pulse bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
        {text}
      </p>
    )
  );

  if (fullScreen) {
    return (
      <Backdrop>
        <Container>
          <LoadingAnimation />
          <LoadingText />
        </Container>
      </Backdrop>
    );
  }

  return (
    <Container>
      <LoadingAnimation />
      <LoadingText />
    </Container>
  );
};

export default LoadingSpinner;

// Example usage:
/*
import LoadingSpinner from './LoadingSpinner';

// Basic usage
<LoadingSpinner />

// New gradient variant
<LoadingSpinner variant="gradient" />

// Glow variant
<LoadingSpinner variant="glow" size="lg" />

// Full screen with blur backdrop
<LoadingSpinner fullScreen size="lg" text="Processing..." variant="gradient" />

// Different variants with dark mode support
<LoadingSpinner variant="spin" />
<LoadingSpinner variant="pulse" />
<LoadingSpinner variant="dots" />
*/