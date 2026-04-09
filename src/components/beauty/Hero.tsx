'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Phone, Navigation, Clock, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.85]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  const goldSparkles = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    x: `${20 + i * 30}%`,
    y: `${25 + i * 20}%`,
    size: 4 + i,
    delay: i * 1.5,
  }));

  return (
    <section id="anasayfa" className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/beauty/hero.jpg)' }}
        />
        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: overlayOpacity,
            background: 'linear-gradient(160deg, rgba(10,10,10,0.8) 0%, rgba(20,20,20,0.6) 40%, rgba(10,10,10,0.85) 100%)',
          }}
        />
        {/* Bottom fade to dark */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </motion.div>

      {/* Gold Sparkles - subtle */}
      {goldSparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute twinkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <Sparkles
            className="text-[#c9a84c]"
            style={{ width: sparkle.size, height: sparkle.size }}
          />
        </div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        style={{ scale: contentScale }}
      >
        {/* Open badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white text-xs tracking-wider">
            <span className="text-green-400 text-[10px] font-medium">● Açık</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">VIP Güzellik Deneyimi</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Ayşe Nur Karcı
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] uppercase"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="shimmer-text-gold">Beauty Vip</span>
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mb-8 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Pursaklar/Ankara&apos;da {' '}
          <motion.span
            className="text-[#c9a84c] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            VIP
          </motion.span>
          {' '}güzellik deneyimi
        </motion.p>

        {/* CTA Buttons Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, type: 'spring' }}
        >
          {/* Randevu Al - Rose gold gradient */}
          <motion.a
            href="#randevu"
            className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-[#b76e79] to-[#8f4a55] text-white font-semibold text-sm uppercase tracking-wider rounded-full group shadow-lg shadow-[#b76e79]/20"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(183, 110, 121, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Randevu Al
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          {/* Ara - outline */}
          <motion.a
            href="tel:05335701208"
            className="flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white/[0.08] hover:border-white/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" />
            Hemen Ara
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/905335701208"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-green-500/90 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-green-500 transition-colors shadow-lg shadow-green-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Quick Info Pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-sm text-white/50 text-[11px]"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <MapPin className="w-3 h-3 text-[#b76e79]" />
            Saray Cumhuriyet, Pursaklar/Ankara
          </motion.div>
          <motion.div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-sm text-white/50 text-[11px]"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <Clock className="w-3 h-3 text-[#c9a84c]" />
            09:00 – 21:00 (Her Gün)
          </motion.div>
          <motion.a
            href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-sm text-white/50 text-[11px] hover:bg-white/[0.1] transition-colors"
          >
            <Navigation className="w-3 h-3 text-green-400" />
            Yol Tarifi
            <ExternalLink className="w-2.5 h-2.5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom Strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8, type: 'spring' }}
      >
        <div className="bg-[#1a1a1a]/95 backdrop-blur-sm border-t border-white/[0.06] shadow-lg shadow-black/20">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3 sm:gap-4">
            {/* Map Mini */}
            <motion.a
              href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/[0.08] bg-gradient-to-br from-[#b76e79]/10 to-[#c9a84c]/10 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
            >
              <Navigation className="w-6 h-6 text-[#b76e79] group-hover:text-[#d4a088] transition-colors" />
            </motion.a>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-[#f5f5f5] truncate">Ayşe Nur Karcı Beauty Vip</h4>
              <p className="text-[11px] text-[#a0a0a0] truncate">Saray Cumhuriyet, Edebali Sk. No:6/C, Pursaklar/Ankara</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-[10px] text-[#666]">
                  <Clock className="w-2.5 h-2.5" />
                  09:00 – 21:00
                </span>
                <span className="flex items-center gap-1 text-[10px] text-green-400">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  Açık
                </span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <motion.a
                href="tel:05335701208"
                className="w-10 h-10 rounded-full bg-[#b76e79] text-white flex items-center justify-center shadow-md shadow-[#b76e79]/20"
                whileHover={{ scale: 1.1, boxShadow: '0 8px 20px rgba(183,110,121,0.4)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/905335701208"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md shadow-green-500/20"
                whileHover={{ scale: 1.1, boxShadow: '0 8px 20px rgba(34,197,94,0.4)' }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-10 h-10 rounded-full bg-[#252525] text-[#a0a0a0] items-center justify-center shadow-md shadow-black/20 border border-white/[0.06]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Navigation className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
