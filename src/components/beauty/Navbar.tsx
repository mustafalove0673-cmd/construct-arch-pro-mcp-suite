'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Flower2, Phone, MapPin, Clock, Star, ChevronRight, X, Navigation, MessageCircle } from 'lucide-react';

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
            background: 'rgba(253, 246, 240, 0.95)',
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
              <span className="shimmer-text-rose font-bold text-lg tracking-wider leading-tight">
                İpek Özmel
              </span>
              <span className="text-rose-dark/60 text-[10px] tracking-[0.2em] uppercase">
                Güzellik Merkezi
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-[13px] font-medium text-plum/70 hover:text-rose-dark transition-colors duration-300 uppercase tracking-wider"
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

          {/* Desktop CTA + Info */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Rating */}
            <motion.div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-beauty/10 border border-gold-beauty/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3.5 h-3.5 text-gold-beauty fill-gold-beauty" />
              <span className="text-xs font-bold text-plum">4.7</span>
              <span className="text-[10px] text-plum/50">(1.172)</span>
            </motion.div>

            {/* Phone */}
            <motion.a
              href="tel:05326730668"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-rose to-rose-dark text-white font-semibold text-xs uppercase tracking-wider rounded-full group"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(232, 160, 191, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="relative z-10">0532 673 06 68</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button - Hexagonal flower style */}
          <motion.button
            className="lg:hidden relative w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-rose to-rose-dark"
              animate={isMobileOpen ? { scale: 1, rotate: 180 } : { scale: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
            />
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex flex-col items-center justify-center gap-[3px]"
                >
                  <motion.span
                    className="w-5 h-[1.5px] bg-plum rounded-full block"
                    animate={isMobileOpen ? {} : { width: ['100%', '60%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.span
                    className="w-4 h-[1.5px] bg-plum rounded-full block"
                    animate={isMobileOpen ? {} : { width: ['60%', '100%', '60%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.span
                    className="w-5 h-[1.5px] bg-plum rounded-full block"
                    animate={isMobileOpen ? {} : { width: ['100%', '80%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
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
              background: 'rgba(253, 246, 240, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
            initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              {/* Business name at top of mobile menu */}
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-2xl font-bold shimmer-text-rose">İpek Özmel</span>
                <p className="text-plum/50 text-xs tracking-[0.2em] uppercase mt-1">Güzellik Merkezi</p>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <Star className="w-3.5 h-3.5 text-gold-beauty fill-gold-beauty" />
                  <span className="text-sm font-bold text-plum">4.7</span>
                  <span className="text-xs text-plum/40">(1.172 yorum)</span>
                </div>
              </motion.div>

              {/* Nav links with stagger */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-3 border-b border-rose/5 text-xl font-medium text-plum/80 hover:text-rose-dark transition-colors"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  onClick={() => setIsMobileOpen(false)}
                  whileHover={{ x: 8 }}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-rose/30" />
                </motion.a>
              ))}

              {/* Contact buttons in mobile menu */}
              <motion.div
                className="mt-8 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="tel:05326730668"
                  className="flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-rose to-rose-dark text-white font-bold text-base uppercase tracking-wider rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  0532 673 06 68
                </motion.a>
                <motion.a
                  href="https://maps.google.com/?q=Taşpazar,+şehit+teğmen+yalçın+sokak+10/A+Aksaray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-3 border-2 border-rose/30 text-rose-dark font-bold text-base uppercase tracking-wider rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(232,160,191,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Navigation className="w-4 h-4" />
                  Yol Tarifi
                </motion.a>
                <motion.a
                  href="https://wa.me/905326730668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-3 border-2 border-green-400/40 text-green-600 font-bold text-base uppercase tracking-wider rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(74,222,128,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
