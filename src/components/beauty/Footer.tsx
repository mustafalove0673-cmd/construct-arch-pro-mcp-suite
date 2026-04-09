'use client';

import { motion } from 'framer-motion';
import { Gem, Heart, ArrowUp, Instagram, Phone, MapPin, Clock, Navigation, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Fiyatlar', href: '#fiyatlar' },
];
const serviceLinks = ['Buz Epilasyon', 'Cilt Bakımı', 'Bölgesel İncelme', 'Kalıcı Makyaj', 'Protez Tırnak', 'Saç Bakım'];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#080f1a] text-white overflow-hidden">
      {/* Animated gradient top border */}
      <motion.div className="h-0.5 gradient-border-flow" animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {/* Logo */}
          <div>
            <motion.a href="#anasayfa" className="flex items-center gap-2.5 mb-3 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <motion.div className="w-9 h-9 rounded-xl border-2 border-coral/40 flex items-center justify-center bg-coral/10" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}><Gem className="w-4 h-4 text-coral" /></motion.div>
              <div>
                <span className="text-white font-bold text-base block leading-tight">Ayşe Nur Karcı</span>
                <span className="text-coral text-[9px] tracking-[0.2em] uppercase">Beauty Vip</span>
              </div>
            </motion.a>
            <p className="text-[#5A7599] text-xs leading-relaxed mb-3">Pursaklar/Ankara&apos;nın VIP güzellik merkezi.</p>
            <div className="flex gap-2">
              <motion.a href="tel:05335701208" className="w-8 h-8 rounded-lg bg-coral/15 border border-coral/15 flex items-center justify-center text-coral hover:bg-coral/25 transition-all" whileHover={{ scale: 1.1, y: -2 }} aria-label="Ara"><Phone className="w-3.5 h-3.5" /></motion.a>
              <motion.a href="https://wa.me/905335701208" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/15 flex items-center justify-center text-green-400 hover:bg-green-500/25 transition-all" whileHover={{ scale: 1.1, y: -2 }} aria-label="WhatsApp"><MessageCircle className="w-3.5 h-3.5" /></motion.a>
              <motion.a href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#5A7599] hover:text-coral hover:border-coral/20 transition-all" whileHover={{ scale: 1.1, y: -2 }} aria-label="Harita"><Navigation className="w-3.5 h-3.5" /></motion.a>
              <motion.a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#5A7599] hover:text-coral hover:border-coral/20 transition-all" whileHover={{ scale: 1.1, y: -2 }} aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></motion.a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2"><div className="w-5 h-px bg-coral" /> Linkler</h4>
            <ul className="space-y-2">{quickLinks.map((link) => (<li key={link.label}><motion.a href={link.href} className="text-[#5A7599] hover:text-coral text-xs transition-colors inline-block" whileHover={{ x: 3 }}>{link.label}</motion.a></li>))}</ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2"><div className="w-5 h-px bg-coral" /> Hizmetler</h4>
            <ul className="space-y-2">{serviceLinks.map((link) => (<li key={link}><motion.a href="#hizmetler" className="text-[#5A7599] hover:text-coral text-xs transition-colors inline-block" whileHover={{ x: 3 }}>{link}</motion.a></li>))}</ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2"><div className="w-5 h-px bg-coral" /> İletişim</h4>
            <ul className="space-y-2.5 text-xs text-[#5A7599]">
              <li className="flex items-start gap-1.5"><MapPin className="w-3 h-3 text-coral/60 flex-shrink-0 mt-0.5" /> Saray Cumhuriyet, Edebali Sk. No:6/C, Pursaklar/Ankara</li>
              <li className="flex items-start gap-1.5"><Phone className="w-3 h-3 text-coral/60 flex-shrink-0 mt-0.5" /><motion.a href="tel:05335701208" className="hover:text-coral transition-colors">0533 570 12 08</motion.a></li>
              <li className="flex items-start gap-1.5"><Clock className="w-3 h-3 text-coral/60 flex-shrink-0 mt-0.5" /> Her gün 09:00 – 21:00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <p className="text-[#5A7599] text-[10px] flex items-center gap-1">© 2025 Ayşe Nur Karcı Beauty Vip. <Heart className="w-2 h-2 text-coral/40 inline" /></p>
          <motion.button className="w-7 h-7 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[#5A7599] hover:text-coral hover:border-coral/20 transition-all" onClick={scrollToTop} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} aria-label="Yukarı"><ArrowUp className="w-3 h-3" /></motion.button>
        </div>
      </div>
    </footer>
  );
}
