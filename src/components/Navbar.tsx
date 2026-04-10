'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Projeler', href: '#projects' },
  { label: 'Referanslar', href: '#testimonials' },
  { label: 'İletişim', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-[#C8A951]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#C8A951] to-[#E8D5A3] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4v18" />
                  <path d="M19 21V11l-6-4" />
                  <path d="M9 9h1" />
                  <path d="M9 13h1" />
                  <path d="M9 17h1" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-[#C8A951]">ÜREKOL GÜ</span>
                <span className="text-[10px] tracking-[0.25em] text-[#8B7D3C] uppercase">İnşaat & Mimari</span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-[#F5F0E8]/70 hover:text-[#C8A951] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#C8A951] to-[#E8D5A3] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#C8A951] to-[#A88832] text-[#0A0A0A] text-sm font-bold rounded-lg hover:from-[#E8D5A3] hover:to-[#C8A951] transition-all duration-300 shadow-lg shadow-[#C8A951]/20 hover:shadow-[#C8A951]/40"
              >
                TEKLİF AL
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menü"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#C8A951] block"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[#C8A951] block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#C8A951] block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 px-4 text-xl font-semibold text-[#F5F0E8] hover:text-[#C8A951] border-b border-[#C8A951]/10 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 py-4 text-center bg-gradient-to-r from-[#C8A951] to-[#A88832] text-[#0A0A0A] font-bold rounded-xl text-lg"
              >
                TEKLİF AL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
