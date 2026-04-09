'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.7]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const floatingPetals = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: `${15 + Math.random() * 70}%`,
    y: `${10 + Math.random() * 80}%`,
    size: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    color: i % 2 === 0 ? 'bg-rose/20' : 'bg-rose-light/25',
  }));

  const sparkles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: `${5 + Math.random() * 90}%`,
    y: `${5 + Math.random() * 90}%`,
    size: 4 + Math.random() * 8,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
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
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: overlayOpacity,
            background: 'linear-gradient(135deg, rgba(45,27,46,0.6) 0%, rgba(232,160,191,0.3) 50%, rgba(200,169,110,0.2) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent" />
      </motion.div>

      {/* Floating Petals */}
      {floatingPetals.map((petal) => (
        <motion.div
          key={petal.id}
          className={`absolute ${petal.color} rounded-[50%_50%_50%_50%/_60%_60%_40%_40%]`}
          style={{
            left: petal.x,
            top: petal.y,
            width: petal.size,
            height: petal.size * 1.4,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.3, 0.7, 0.5, 0.8, 0.3],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{ left: sparkle.x, top: sparkle.y }}
        >
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: 'easeInOut',
            }}
          >
            <Sparkles
              className="text-gold-beauty/50"
              style={{ width: sparkle.size, height: sparkle.size }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Decorative SVG Border */}
      <svg className="absolute top-8 left-8 w-20 h-20 text-rose/20" viewBox="0 0 80 80" fill="none">
        <motion.path
          d="M10 10 Q40 0 70 10 Q80 40 70 70 Q40 80 10 70 Q0 40 10 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
      </svg>
      <svg className="absolute bottom-20 right-8 w-24 h-24 text-gold-beauty/20" viewBox="0 0 96 96" fill="none">
        <motion.path
          d="M15 15 Q48 5 81 15 Q91 48 81 81 Q48 91 15 81 Q5 48 15 15Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
      </svg>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        style={{ scale: contentScale }}
      >
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-beauty/30 text-gold-beauty text-sm tracking-widest uppercase glass">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Güzellik Merkezi
            <Sparkles className="w-3.5 h-3.5" />
          </span>
        </motion.div>

        {/* Main Heading with clip-path reveal */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            Lumière
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="shimmer-text-rose">Beauty</span>
          </motion.h1>
        </div>

        {/* Subtitle with typewriter effect */}
        <motion.p
          className="text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mb-10 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Güzelliğinize dokunuyoruz, {' '}
          <motion.span
            className="text-gold-beauty font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            kendinizi özel hissedin
          </motion.span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, type: 'spring' }}
        >
          {/* Randevu Al - Filled with shine */}
          <motion.a
            href="#randevu"
            className="relative overflow-hidden px-10 py-4 bg-gradient-to-r from-rose to-rose-dark text-white font-semibold text-lg uppercase tracking-wider rounded-full group"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(232, 160, 191, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Randevu Al
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.a>

          {/* Keşfet - Outlined */}
          <motion.a
            href="#hizmetler"
            className="relative overflow-hidden px-10 py-4 border-2 border-white/40 text-white font-semibold text-lg uppercase tracking-wider rounded-full group"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Keşfet</span>
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Keşfet</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
