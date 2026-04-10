'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Architectural dark with gold accents */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0D0D0D]" />

        {/* Geometric grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,169,81,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,169,81,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gold accent lines */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C8A951]/30 to-transparent origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C8A951]/20 to-transparent origin-top"
        />

        {/* Abstract building silhouettes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-[40%] opacity-[0.03]"
          style={{
            background: `
              linear-gradient(to top, #C8A951 0%, transparent 100%),
              repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(200,169,81,0.1) 120px, rgba(200,169,81,0.1) 122px)
            `,
          }}
        />

        {/* Gold corner frames */}
        <div className="absolute top-20 left-6 w-24 h-24 border-l-2 border-t-2 border-[#C8A951]/30 rounded-tl-lg" />
        <div className="absolute bottom-10 right-6 w-24 h-24 border-r-2 border-b-2 border-[#C8A951]/30 rounded-br-lg" />

        {/* Floating gold particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-[#C8A951] rounded-full"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}

        {/* Radial gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A951]/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-[#C8A951]/10 border border-[#C8A951]/30 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-[#C8A951] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-[#C8A951] tracking-wider">20+ YILLIK TECRÜBE &bull; 500+ PROJE</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
        >
          <span className="text-[#F5F0E8]">Hayallerinizi</span>
          <br />
          <span className="bg-gradient-to-r from-[#C8A951] via-[#E8D5A3] to-[#C8A951] bg-clip-text text-transparent">
            Başarıyla İnşa Ediyoruz
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[#F5F0E8]/50 leading-relaxed mb-10"
        >
          Konuttan ticari yapılara, villadan mimari projelere — her projede
          mükemmelliği hedefleyen, güvenilir ve yenilikçi inşaat çözümleri sunuyoruz.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#C8A951] to-[#A88832] text-[#0A0A0A] font-bold rounded-xl overflow-hidden shadow-2xl shadow-[#C8A951]/20 hover:shadow-[#C8A951]/40 transition-all duration-500 text-lg"
          >
            <span className="relative z-10">PROJELERİMİZ</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] to-[#C8A951] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 border-2 border-[#C8A951]/40 text-[#C8A951] font-bold rounded-xl hover:bg-[#C8A951]/10 hover:border-[#C8A951] transition-all duration-500 text-lg"
          >
            <span>ÜCRETSİZ TEKLİF</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { num: '500+', label: 'Tamamlanan Proje' },
            { num: '20+', label: 'Yıllık Tecrübe' },
            { num: '%98', label: 'Müşteri Memnuniyeti' },
            { num: '50+', label: 'Profesyonel Ekip' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#C8A951]">{stat.num}</div>
              <div className="text-xs sm:text-sm text-[#F5F0E8]/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#C8A951]/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#C8A951] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
