'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Phone, Navigation, Clock, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <section id="anasayfa" className="relative h-screen w-full overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(255,107,107,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,212,59,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(22,37,68,0.8) 0%, transparent 60%), linear-gradient(180deg, #0a1628 0%, #0f1b2d 30%, #162544 60%, #1a2d4a 100%)',
      }} />

      {/* Animated mesh lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      {/* Coral glow orb */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-coral/8 blur-[100px]"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Gold glow orb */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-gold/5 blur-[80px]"
        animate={{ x: [0, -25, 15, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Geometric accents */}
      <motion.div
        className="absolute top-24 right-8 sm:right-20 w-32 h-32 sm:w-52 sm:h-52 rounded-full border border-coral/10 spin-slow"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
      />
      <motion.div
        className="absolute top-36 right-16 sm:right-28 w-20 h-20 sm:w-32 sm:h-32 rounded-full border border-gold/8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-8 sm:left-16 w-16 h-16 rounded-full border border-white/5 spin-slow"
        style={{ animationDirection: 'reverse' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
      />
      {/* Small diamond */}
      <motion.div
        className="absolute top-1/3 left-[15%] w-3 h-3 rotate-45 bg-coral/20 rounded-sm"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[12%] w-2 h-2 rotate-45 bg-gold/30 rounded-sm"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f1b2d] to-transparent" />

      {/* Main Content */}
      <motion.div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4" style={{ scale: contentScale }}>
        {/* Open badge */}
        <motion.div initial={{ opacity: 0, y: -20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.2, duration: 0.6, type: 'spring' }} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-wider">
            <span className="text-green-400 text-[10px] font-medium">● Açık</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">VIP Güzellik Deneyimi</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl"
            initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Ayşe Nur Karcı
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] uppercase"
            initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="shimmer-text-gold">Beauty Vip</span>
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-[#8BA3C4] text-sm sm:text-base md:text-lg max-w-xl mb-8 font-light tracking-wide"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
        >
          Pursaklar/Ankara&apos;da{' '}
          <motion.span className="text-coral font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.6 }}>
            VIP
          </motion.span>{' '}
          güzellik deneyimi
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row items-center gap-3 mb-6" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7, type: 'spring' }}>
          <motion.a href="#randevu" className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-coral to-coral-dark text-white font-semibold text-sm uppercase tracking-wider rounded-full group shadow-lg shadow-coral/25" whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(255,107,107,0.4)' }} whileTap={{ scale: 0.95 }}>
            <span className="relative z-10 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Randevu Al</span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full" transition={{ duration: 0.5 }} />
          </motion.a>
          <motion.a href="tel:05335701208" className="flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 hover:border-white/30 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Phone className="w-4 h-4" /> Hemen Ara
          </motion.a>
          <motion.a href="https://wa.me/905335701208" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3.5 bg-green-500/90 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-green-500 transition-colors shadow-lg shadow-green-500/20" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </motion.a>
        </motion.div>

        {/* Quick Info Pills */}
        <motion.div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.6 }}>
          <motion.div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-[11px]" whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <MapPin className="w-3 h-3 text-coral" /> Saray Cumhuriyet, Pursaklar/Ankara
          </motion.div>
          <motion.div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-[11px]" whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Clock className="w-3 h-3 text-gold" /> 09:00 – 21:00 (Her Gün)
          </motion.div>
          <motion.a href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-[11px] hover:bg-white/10 transition-colors">
            <Navigation className="w-3 h-3 text-green-400" /> Yol Tarifi <ExternalLink className="w-2.5 h-2.5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom Maps Strip */}
      <motion.div className="absolute bottom-0 left-0 right-0 z-20" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5, duration: 0.8, type: 'spring' }}>
        <div className="bg-navy-mid/95 backdrop-blur-sm border-t border-white/5 shadow-lg">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3 sm:gap-4">
            <motion.a href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara" target="_blank" rel="noopener noreferrer" className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/5 bg-navy-surface flex items-center justify-center group" whileHover={{ scale: 1.05 }}>
              <Navigation className="w-6 h-6 text-coral group-hover:text-coral-light transition-colors" />
            </motion.a>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white truncate">Ayşe Nur Karcı Beauty Vip</h4>
              <p className="text-[11px] text-[#8BA3C4] truncate">Saray Cumhuriyet, Edebali Sk. No:6/C, Pursaklar/Ankara</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-[10px] text-[#5A7599]"><Clock className="w-2.5 h-2.5" /> 09:00 – 21:00</span>
                <span className="flex items-center gap-1 text-[10px] text-green-400"><span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Açık</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <motion.a href="tel:05335701208" className="w-10 h-10 rounded-full bg-coral text-white flex items-center justify-center shadow-md shadow-coral/25" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Phone className="w-4 h-4" /></motion.a>
              <motion.a href="https://wa.me/905335701208" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md shadow-green-500/20" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><MessageCircle className="w-4 h-4" /></motion.a>
              <motion.a href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara" target="_blank" rel="noopener noreferrer" className="hidden sm:flex w-10 h-10 rounded-full bg-navy-surface text-white items-center justify-center border border-white/5" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Navigation className="w-4 h-4" /></motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
