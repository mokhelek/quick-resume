"use client";
import React, { useEffect, useRef } from 'react';
import { TemplatesCarousel } from './components/TemplateCarousel';
import Link from 'next/link';
import {
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BoltIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';

export default function LandingPage() {
  // Animation triggers
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  // Animation for floating button
  const floatingAnim = {
    y: [-7, 7],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative overflow-x-hidden">

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">

        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-170" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/60 to-transparent z-0"></div>


        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10 mt-15">
          <h1 className="text-3xl md:text-5xl font-regular mb-6 leading-tight font-['Space_Grotesk']">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              AI-Powered
            </span>{' '}
            Resumes That Get You Hired
          </h1>
          <p className="text-md md:text-xl text-gray-300/90 max-w-3xl mx-auto mb-12 font-thin">
            Create professional, tailored resumes in minutes with our intelligent builder. Let AI optimize your content for the jobs you want.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={floatingAnim}
                className="shadow-2xl shadow-indigo-500/30"
              >
                <Link
                  href="/register"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-lg transition-colors block"
                >
                  Build Your Resume - It's Free
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#demo"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium text-lg transition-colors hover:shadow-lg border border-gray-700 block"
              >
                See How It Works
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient transition - More visible */}

        <div style={{ marginBottom: '-190px'}} className="absolute bottom-0 left-0 right-0 h-25 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent z-10"></div>

      </section>


      {/* Template Carousel Section */}
      <section className="relative z-20 mt-5 pb-32">
        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
          <TemplatesCarousel />
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        id="features"
        ref={featuresRef}
        className="relative py-20 overflow-hidden"
      >
        {/* Section top gradient - More visible */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4 font-['Space_Grotesk']">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                Powerful Features
              </span>{' '}
              For Your Career Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analyzes thousands of successful resumes to help you create the perfect one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-indigo-400 transition-all hover:-translate-y-1 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={featuresInView ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }
                  } : {}}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)"
                  }}
                >
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Section bottom gradient - More visible */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-0"></div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        ref={stepsRef}
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-900/80"
      >
        {/* Section top gradient - More visible */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent z-0"></div>

        {/* Subtle SVG texture - More visible */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4 font-['Space_Grotesk']">
              Create Your Perfect Resume in{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                3 Easy Steps
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes resume building effortless.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={stepsInView ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }
                  } : {}}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-medium z-10">
                    {index + 1}
                  </div>
                  <motion.div
                    className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 h-full backdrop-blur-sm hover:border-indigo-400 transition-all"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)"
                    }}
                  >
                    <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    {step.image && (
                      <div className="mt-4 bg-gray-900 rounded-lg overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Section bottom gradient - More visible */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-0"></div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        ref={testimonialsRef}
        className="relative py-20 overflow-hidden"
      >
        {/* Section top gradient - More visible */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4 font-['Space_Grotesk']">
              Trusted by{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                Job Seekers Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands who landed their dream jobs with ResuAI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-400 transition-all"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={testimonialsInView ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }
                  } : {}}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)"
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Section bottom gradient - More visible */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-0"></div>
      </motion.section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Subtle gradient background - More visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90">
          {/* SVG texture - More visible */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circle-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circle-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-medium mb-6 font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Ready to Transform Your Career?
          </motion.h2>
          <motion.p
            className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Join thousands of professionals who boosted their job search with AI-optimized resumes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/register"
              className="inline-block px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started For Free
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 font-['Space_Grotesk']">
                  ResuAI
                </span>
              </div>
              <p className="text-gray-400">
                The modern resume builder powered by AI to help you land your dream job.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#demo" className="text-gray-400 hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} ResuAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <GitHubIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Mock data
const features = [
  {
    icon: LightBulbIcon,
    title: 'AI Optimization',
    description: 'Our AI analyzes job descriptions and optimizes your resume content to match what employers are looking for.',
  },
  {
    icon: ChartBarIcon,
    title: 'ATS Friendly',
    description: 'Designed to pass through Applicant Tracking Systems with flying colors, increasing your interview chances.',
  },
  {
    icon: UserGroupIcon,
    title: 'Multiple Templates',
    description: 'Choose from professionally designed templates tailored to different industries and career levels.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Privacy Focused',
    description: 'Your data stays yours. We never sell your information or share it without your permission.',
  },
  {
    icon: SparklesIcon,
    title: 'Smart Suggestions',
    description: 'Get real-time suggestions to improve your resume as you type, from wording to formatting.',
  },
  {
    icon: BoltIcon,
    title: 'One-Click Apply',
    description: 'Export your resume in multiple formats or apply directly to jobs with one click.',
  },
];

const steps = [
  {
    title: 'Input Your Information',
    description: 'Simply fill in your work history, education, and skills. Our smart forms make it easy with auto-suggestions.',
    image: '/step1.png',
  },
  {
    title: 'AI Analysis & Optimization',
    description: 'Our AI reviews your content and suggests improvements to make your resume stand out to employers.',
    image: '/step2.png',
  },
  {
    title: 'Download & Apply',
    description: 'Download your polished resume in PDF, Word, or plain text format, ready to send to employers.',
    image: '/step3.png',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    initials: 'SJ',
    role: 'Marketing Manager',
    quote: 'I went from no interviews to 5 callbacks in two weeks after using ResuAI. The optimization suggestions were spot on!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    initials: 'MC',
    role: 'Software Engineer',
    quote: 'The ATS optimization helped me get past the initial screening at top tech companies. Landed my dream job at Google!',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    initials: 'DR',
    role: 'Financial Analyst',
    quote: 'As someone who hates writing about myself, the AI suggestions were a lifesaver. My resume looks professional without the stress.',
    rating: 4,
  },
];

// Simple icons for demo purposes
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}