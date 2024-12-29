import React from 'react';

type LoadingVariant = 'pulse' | 'spin' | 'dots' | 'gradient';

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
  color = 'text-blue-600 dark:text-blue-400',
  text = 'Loading...',
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const SpinningCircle = () => (
    <div className={`${sizeClasses[size]} ${color} animate-spin`}>
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
  );

  const PulsingCircle = () => (
    <div className={`${sizeClasses[size]} ${color} animate-pulse rounded-full bg-current shadow-lg`} />
  );

  const BouncingDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses['sm']} ${color} rounded-full animate-bounce shadow-lg`}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: '0.6s'
          }}
        />
      ))}
    </div>
  );

  const GradientSpinner = () => (
    <div className={`${sizeClasses[size]} relative animate-spin`}>
      <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-75" />
      <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      <div className="absolute inset-1 rounded-full bg-gray-900 dark:bg-gray-800" />
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
      default:
        return <SpinningCircle />;
    }
  };

  const Backdrop = ({ children }: { children: React.ReactNode }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 dark:bg-gray-900/75 backdrop-blur-sm">
      {children}
    </div>
  );

  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg shadow-xl">
      {children}
    </div>
  );

  const LoadingText = () => (
    text && (
      <p className={`${color} text-sm font-medium animate-pulse`}>
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
<LoadingSpinner variant="gradient" color="text-purple-600" />

// Full screen with blur backdrop
<LoadingSpinner fullScreen size="lg" text="Processing..." />

// Different variants with dark mode support
<LoadingSpinner variant="spin" color="text-blue-600 dark:text-blue-400" />
<LoadingSpinner variant="pulse" color="text-purple-600 dark:text-purple-400" />
<LoadingSpinner variant="dots" color="text-green-600 dark:text-green-400" />
*/