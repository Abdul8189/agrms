'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset and show preloader on route change
    setIsVisible(true);
    setProgress(0);
    setKey(prev => prev + 1); // Force re-render on route change
  }, [pathname]);

  useEffect(() => {
    // Simulate progress loading with smoother animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hide preloader after progress completes
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
          return 100;
        }
        // Smooth progress increase
        const increment = prev < 70 ? 2 + Math.random() * 3 : 1 + Math.random() * 2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [key]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-12">
        <Image
          src="/images/AGRMS LOGO.png"
          alt="AGRMS Transport Logo"
          width={200}
          height={80}
          className="w-48 h-auto object-contain"
          priority
        />
      </div>

      {/* Progress Bar Container */}
      <div className="w-80 md:w-96 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        {/* Progress Bar */}
        <div
          className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 rounded-full transition-all duration-300 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Progress Percentage */}
      <p className="mt-4 text-base text-gray-700 font-semibold">
        Loading... {Math.round(progress)}%
      </p>
    </div>
  );
}
