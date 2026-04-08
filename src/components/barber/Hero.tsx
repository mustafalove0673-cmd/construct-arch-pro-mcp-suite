'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="anasayfa" ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/barber/hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal/60 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/80 via-transparent to-charcoal-dark/80" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 border border-gold/10 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 border border-gold/10 rounded-full"
        animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        style={{ opacity, y: textY }}
      >
        {/* Top decorative line */}
        <motion.div
          className="w-24 h-[1px] bg-gold mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-gold-light/70 text-sm md:text-base uppercase tracking-[0.5em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Premium Erkek Kuaförü
        </motion.p>

        {/* Main Title */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white uppercase tracking-wider leading-none"
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            Klasik
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold shimmer-text uppercase tracking-wider leading-none"
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            Berber
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          className="mt-8 text-gold-light/60 text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          1998&apos;den beri geleneksel ustalığı modern tekniklerle buluşturuyoruz.
          Her ziyaretinizde kendinizi özel hissedeceksiniz.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.a
            href="#randevu"
            className="relative overflow-hidden px-10 py-4 bg-gold text-charcoal-dark font-bold text-base uppercase tracking-widest rounded-sm group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-charcoal-dark">
              Hemen Randevu Al
            </span>
            <motion.div
              className="absolute inset-0 bg-gold-light"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>
          <motion.a
            href="#hizmetler"
            className="px-10 py-4 border-2 border-gold text-gold font-semibold text-base uppercase tracking-widest rounded-sm hover:bg-gold hover:text-charcoal-dark transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hizmetlerimiz
          </motion.a>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="w-24 h-[1px] bg-gold mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gold/50 text-xs uppercase tracking-widest">Keşfet</span>
        <ChevronDown className="w-5 h-5 text-gold/50" />
      </motion.div>
    </section>
  );
}
