import React from 'react';
import HeroSection from '../components/homeSection/HeroSection';
import HowWeWork from '../components/homeSection/HowWeWork';
import TrustSection from '../components/homeSection/TrustSection';
import BlogSection from '../components/homeSection/BlogSection';
export default function Hero() {
  return (
   <>
   <HeroSection/>
   <HowWeWork/>
   <TrustSection/>
   <BlogSection/>
   </>
  );
}
