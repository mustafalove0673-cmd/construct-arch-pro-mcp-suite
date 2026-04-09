'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Gift, Percent, Star, Clock, ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  variant?: 'rose' | 'gold' | 'plum' | 'gradient';
  title: string;
  subtitle: string;
  cta?: string;
  icon?: 'sparkle' | 'gift' | 'percent' | 'star' | 'clock';
}

const iconMap = {
  sparkle: Sparkles,
  gift: Gift,
  percent: Percent,
  star: Star,
  clock: Clock,
};

const variantStyles = {
  rose: {
    bg: 'bg-gradient-to-r from-rose via-rose-dark to-rose',
    border: 'border-rose/20',
    iconBg: 'bg-white/20',
  },
  gold: {
    bg: 'bg-gradient-to-r from-gold-beauty via-champagne to-gold-beauty',
    border: 'border-gold-beauty/20',
    iconBg: 'bg-white/20',
  },
  plum: {
    bg: 'bg-gradient-to-r from-plum via-plum-light to-plum',
    border: 'border-plum/20',
    iconBg: 'bg-white/20',
  },
  gradient: {
    bg: 'bg-gradient-to-r from-rose via-gold-beauty to-plum-light',
    border: 'border-gold-beauty/20',
    iconBg: 'bg-white/20',
  },
};

export default function PromoBanner({ variant = 'rose', title, subtitle, cta, icon = 'sparkle' }: PromoBannerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const styles = variantStyles[variant];
  const Icon = iconMap[icon];
  const isLight = variant === 'gold';

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-12">
      <motion.div
        className={`relative overflow-hidden rounded-2xl p-5 sm:p-6 ${styles.bg} ${styles.border} border`}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        whileHover={{ scale: 1.01, y: -2 }}
      >
        {/* Shine sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <motion.div
              className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center flex-shrink-0`}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <Icon className={`w-6 h-6 ${isLight ? 'text-plum' : 'text-white'}`} />
            </motion.div>
            <div className="min-w-0">
              <motion.h3
                className={`text-lg sm:text-xl font-bold ${isLight ? 'text-plum' : 'text-white'} truncate`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h3>
              <motion.p
                className={`text-sm ${isLight ? 'text-plum/70' : 'text-white/70'} truncate`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
            </div>
          </div>

          {cta && (
            <motion.a
              href="#randevu"
              className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wider flex-shrink-0 transition-colors ${
                isLight
                  ? 'bg-plum text-white hover:bg-plum-dark'
                  : 'bg-white text-plum hover:bg-white/90'
              }`}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cta}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          )}
        </div>


      </motion.div>
    </div>
  );
}
