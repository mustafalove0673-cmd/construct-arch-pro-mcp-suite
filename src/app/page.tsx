'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/beauty/Navbar';
import Hero from '@/components/beauty/Hero';
import Marquee from '@/components/beauty/Marquee';
import About from '@/components/beauty/About';
import Services from '@/components/beauty/Services';
import Gallery from '@/components/beauty/Gallery';
import Pricing from '@/components/beauty/Pricing';
import Testimonials from '@/components/beauty/Testimonials';
import Booking from '@/components/beauty/Booking';
import Contact from '@/components/beauty/Contact';
import Footer from '@/components/beauty/Footer';
import FloatingDecorations from '@/components/beauty/FloatingDecorations';

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <FloatingDecorations />
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
