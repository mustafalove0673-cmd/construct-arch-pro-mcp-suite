'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Gem, Phone, MapPin, Clock, Star, ChevronRight, X, Navigation, MessageCircle } from 'lucide-react';

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

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const paddingY = useTransform(scrollY, [0, 100], [20, 10]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ paddingTop: paddingY, paddingBottom: paddingY }}
      >
        <motion.div
          className="absolute inset-0 border-b border-white/5"
          style={{
            opacity: bgOpacity,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'rgba(15, 27, 45, 0.92)',
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
              className="w-11 h-11 rounded-xl border-2 border-coral/40 flex items-center justify-center bg-coral/10 relative overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Gem className="w-5 h-5 text-coral" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wider leading-tight">
                Ayşe Nur Karcı
              </span>
              <span className="text-coral text-[10px] tracking-[0.2em] uppercase font-medium">
                Beauty Vip
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-[13px] font-medium text-[#8BA3C4] hover:text-coral transition-colors duration-300 uppercase tracking-wider"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-coral to-gold -translate-x-1/2 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="tel:05335701208"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-coral to-coral-dark text-white font-semibold text-xs uppercase tracking-wider rounded-full group"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(255, 107, 107, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="relative z-10">0533 570 12 08</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative flex items-center justify-center"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.85 }}
            aria-label="Menü"
          >
            <motion.div
              className="absolute w-12 h-12 rounded-full border-2 border-coral/30 bg-navy-light/70 backdrop-blur-md"
              animate={isMobileOpen
                ? { rotate: 90, borderColor: 'rgba(255,107,107,0.8)', scale: 1.1 }
                : { rotate: 0, borderColor: 'rgba(255,107,107,0.3)', scale: 1 }
              }
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center gap-[5px] py-3 px-3">
              <motion.span
                className="block w-[7px] h-[7px] rounded-full bg-coral"
                animate={isMobileOpen ? { y: 4, scale: 0.8, opacity: 0.5 } : { y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: isMobileOpen ? 0 : 0.05 }}
              />
              <motion.span
                className="block w-[7px] h-[7px] rounded-full bg-coral"
                animate={isMobileOpen ? { scale: 1.3 } : { scale: 1 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-[7px] h-[7px] rounded-full bg-coral"
                animate={isMobileOpen ? { y: -4, scale: 0.8, opacity: 0.5 } : { y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: isMobileOpen ? 0 : 0.05 }}
              />
            </div>
            <AnimatePresence>
              {isMobileOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-20"
                >
                  <X className="w-5 h-5 text-coral" />
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
            className="fixed inset-0 z-40 flex flex-col"
            style={{
              background: 'rgba(15, 27, 45, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
            initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              <motion.div className="text-center mb-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <span className="text-2xl font-bold text-white">Ayşe Nur Karcı</span>
                <p className="text-coral text-xs tracking-[0.2em] uppercase mt-1">Beauty Vip</p>
              </motion.div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-3 border-b border-white/5 text-xl font-medium text-[#8BA3C4] hover:text-coral transition-colors"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  onClick={() => setIsMobileOpen(false)}
                  whileHover={{ x: 8 }}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-coral/30" />
                </motion.a>
              ))}
              <motion.div className="mt-8 space-y-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <motion.a
                  href="tel:05335701208"
                  className="flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-coral to-coral-dark text-white font-bold text-base uppercase tracking-wider rounded-xl"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" /> 0533 570 12 08
                </motion.a>
                <motion.a
                  href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-3 border-2 border-coral/30 text-coral font-bold text-base uppercase tracking-wider rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,107,107,0.1)' }} whileTap={{ scale: 0.98 }} onClick={() => setIsMobileOpen(false)}
                >
                  <Navigation className="w-4 h-4" /> Yol Tarifi
                </motion.a>
                <motion.a
                  href="https://wa.me/905335701208"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-3 border-2 border-green-400/40 text-green-400 font-bold text-base uppercase tracking-wider rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(74,222,128,0.1)' }} whileTap={{ scale: 0.98 }} onClick={() => setIsMobileOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
