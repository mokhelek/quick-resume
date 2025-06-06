"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/outline';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-gray-200/10 border-b
      ${scrolled 
        ? 'bg-gray-900/50 backdrop-blur-md  py-3 ' 
        : 'bg-transparent py-3'
      }
    `}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <SparklesIcon className={`h-7 w-7 transition-colors text-indigo-400 `} />
          <span className={`
            text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r 
            from-indigo-400 to-purple-500
            font-['Space_Grotesk'] transition-colors
          `}>
            ResuAI
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="#features" 
            className={`transition-colors ${scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className={`transition-colors ${scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}
          >
            How It Works
          </Link>
          <Link 
            href="#testimonials" 
            className={`transition-colors ${scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}
          >
            Testimonials
          </Link>
          <Link 
            href="#pricing" 
            className={`transition-colors ${scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}
          >
            Pricing
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className={`px-4 py-2 rounded-md transition-colors ${scrolled ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/10'}`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`px-4 py-2 rounded-md transition-colors bg-indigo-600 hover:bg-indigo-700 `}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}