'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Testimonials />
      <WhyUs />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
