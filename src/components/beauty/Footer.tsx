'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowUp, Instagram, Phone, MapPin, Clock, Navigation, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Fiyatlar', href: '#fiyatlar' },
];

const serviceLinks = [
  'Buz Epilasyon', 'Cilt Bakımı', 'Bölgesel İncelme', 'Kalıcı Makyaj', 'Protez Tırnak', 'Saç Bakım',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden">
      {/* Animated gradient top border */}
      <motion.div
        className="h-0.5"
        style={{
          background: 'linear-gradient(90deg, #b76e79, #c9a84c, #b76e79, #c9a84c)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {/* Logo & Info */}
          <div>
            <motion.a
              href="#anasayfa"
              className="flex items-center gap-2.5 mb-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-9 h-9 rounded-full border-2 border-[#b76e79] flex items-center justify-center bg-[#b76e79]/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Sparkles className="w-4 h-4 text-[#b76e79]" />
              </motion.div>
              <div>
                <span className="shimmer-text-gold font-bold text-base block leading-tight">Ayşe Nur Karcı</span>
                <span className="text-[#b76e79]/40 text-[9px] tracking-[0.2em] uppercase">Beauty Vip</span>
              </div>
            </motion.a>

            <p className="text-white/30 text-xs leading-relaxed mb-3">
              Pursaklar/Ankara&apos;nın VIP güzellik merkezi.
            </p>

            {/* Quick action buttons */}
            <div className="flex gap-2">
              <motion.a
                href="tel:05335701208"
                className="w-8 h-8 rounded-lg bg-[#b76e79]/15 border border-[#b76e79]/15 flex items-center justify-center text-[#b76e79] hover:bg-[#b76e79]/25 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ara"
              >
                <Phone className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="https://wa.me/905335701208"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/15 flex items-center justify-center text-green-400 hover:bg-green-500/25 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-[#b76e79] hover:border-[#b76e79]/20 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Harita"
              >
                <Navigation className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-[#b76e79] hover:border-[#b76e79]/20 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white/60 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2">
              <div className="w-5 h-px bg-[#b76e79]" />
              Linkler
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-white/30 hover:text-[#b76e79] text-xs transition-colors inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white/60 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2">
              <div className="w-5 h-px bg-[#b76e79]" />
              Hizmetler
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#hizmetler"
                    className="text-white/30 hover:text-[#b76e79] text-xs transition-colors inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white/60 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2">
              <div className="w-5 h-px bg-[#b76e79]" />
              İletişim
            </h4>
            <ul className="space-y-2.5 text-xs text-white/30">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3 h-3 text-[#b76e79]/50 flex-shrink-0 mt-0.5" />
                Saray Cumhuriyet, Edebali Sk. No:6/C, Pursaklar/Ankara
              </li>
              <li className="flex items-start gap-1.5">
                <Phone className="w-3 h-3 text-[#b76e79]/50 flex-shrink-0 mt-0.5" />
                <motion.a href="tel:05335701208" className="hover:text-[#b76e79] transition-colors">
                  0533 570 12 08
                </motion.a>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="w-3 h-3 text-[#b76e79]/50 flex-shrink-0 mt-0.5" />
                Her gün 09:00 – 21:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <p className="text-white/15 text-[10px] flex items-center gap-1">
            © 2025 Ayşe Nur Karcı Beauty Vip. <Heart className="w-2 h-2 text-[#b76e79]/30 inline" />
          </p>
          <motion.button
            className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-[#b76e79] hover:border-[#b76e79]/20 transition-all"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Yukarı"
          >
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
