'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Scissors, Menu, X, Phone } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const paddingY = useTransform(scrollY, [0, 100], [28, 16]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
        {/* Background overlay */}
        <motion.div
          className="absolute inset-0 bg-charcoal-dark/95 backdrop-blur-md border-b border-gold/20"
          style={{ opacity: bgOpacity }}
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
              className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center bg-gold/10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Scissors className="w-6 h-6 text-gold" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-gold font-bold text-xl tracking-wider uppercase">
                Klasik
              </span>
              <span className="text-gold-light/70 text-xs tracking-[0.3em] uppercase">
                Berber
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gold-light/80 hover:text-gold transition-colors duration-300 uppercase tracking-wider"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] bg-gold -translate-x-1/2"
                  initial={{ width: 0 }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+902121234567"
              className="flex items-center gap-2 text-gold-light/70 hover:text-gold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">0212 123 45 67</span>
            </motion.a>
            <motion.a
              href="#randevu"
              className="relative overflow-hidden px-6 py-2.5 bg-gold text-charcoal-dark font-semibold text-sm uppercase tracking-wider rounded-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Randevu Al</span>
              <motion.div
                className="absolute inset-0 bg-gold-light"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gold p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal-dark/98 backdrop-blur-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium text-gold-light/90 hover:text-gold transition-colors uppercase tracking-widest"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                  onClick={() => setIsMobileOpen(false)}
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#randevu"
                className="mt-8 px-10 py-3 bg-gold text-charcoal-dark font-bold text-lg uppercase tracking-wider rounded-sm pulse-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
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
