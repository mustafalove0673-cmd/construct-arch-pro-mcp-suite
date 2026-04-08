'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/barber/Navbar';
import Hero from '@/components/barber/Hero';
import About from '@/components/barber/About';
import Services from '@/components/barber/Services';
import Gallery from '@/components/barber/Gallery';
import Pricing from '@/components/barber/Pricing';
import Testimonials from '@/components/barber/Testimonials';
import Booking from '@/components/barber/Booking';
import Contact from '@/components/barber/Contact';
import Footer from '@/components/barber/Footer';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      
      {/* Animated Section Divider */}
      <div className="relative py-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
      
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </motion.div>
  );
}
