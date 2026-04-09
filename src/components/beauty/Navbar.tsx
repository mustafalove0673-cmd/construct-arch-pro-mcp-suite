'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Flower2, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#anasayfa', label: 'Ana Sayfa' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#fiyatlar', label: 'Fiyatlar' },
  { href: '#yorumlar', label: 'Yorumlar' },
  { href: '#randevu', label: 'Randevu' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.92]);
  const paddingY = useTransform(scrollY, [0, 100], [28, 14]);
  const blurAmount = useTransform(scrollY, [0, 100], [0, 20]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
        {/* Glassmorphism background */}
        <motion.div
          className="absolute inset-0 border-b border-rose/10"
          style={{
            opacity: bgOpacity,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'rgba(253, 246, 240, 0.92)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#anasayfa"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-11 h-11 rounded-full border-2 border-rose flex items-center justify-center bg-rose/10 relative overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Flower2 className="w-5 h-5 text-rose" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-beauty/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="shimmer-text-rose font-bold text-xl tracking-wider">
                Lumière
              </span>
              <span className="text-rose-dark/60 text-[10px] tracking-[0.3em] uppercase">
                Beauty Center
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-plum/70 hover:text-rose-dark transition-colors duration-300 uppercase tracking-wider"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-rose to-gold-beauty -translate-x-1/2 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#randevu"
              className="relative overflow-hidden px-7 py-2.5 bg-gradient-to-r from-rose to-rose-dark text-white font-semibold text-sm uppercase tracking-wider rounded-full group"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(232, 160, 191, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Randevu Al</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-plum p-2 rounded-full hover:bg-rose/10"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: 'rgba(253, 246, 240, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col items-center gap-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium text-plum/80 hover:text-rose-dark transition-colors uppercase tracking-widest"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 + 0.2 }}
                  onClick={() => setIsMobileOpen(false)}
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#randevu"
                className="mt-6 px-10 py-3 bg-gradient-to-r from-rose to-rose-dark text-white font-bold text-lg uppercase tracking-wider rounded-full pulse-glow-pink"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                onClick={() => setIsMobileOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Randevu Al
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
