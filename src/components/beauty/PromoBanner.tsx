'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Gift, Percent, Star, Clock, ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  variant?: 'coral' | 'gold' | 'navy' | 'gradient';
  title: string;
  subtitle: string;
  cta?: string;
  icon?: 'sparkle' | 'gift' | 'percent' | 'star' | 'clock';
}

const iconMap = { sparkle: Sparkles, gift: Gift, percent: Percent, star: Star, clock: Clock };

const variantStyles = {
  coral: { bg: 'bg-gradient-to-r from-coral-dark via-coral to-coral-light', border: 'border-coral/20', iconBg: 'bg-white/20' },
  gold: { bg: 'bg-gradient-to-r from-[#a68a3a] via-[#FFD43B] to-[#FFE066]', border: 'border-gold/20', iconBg: 'bg-white/20' },
  navy: { bg: 'bg-gradient-to-r from-navy-mid via-navy-surface to-navy-mid border border-white/5', border: 'border-navy-surface', iconBg: 'bg-white/10' },
  gradient: { bg: 'bg-gradient-to-r from-coral via-[#FFD43B] to-navy-elevated', border: 'border-coral/20', iconBg: 'bg-white/20' },
};

export default function PromoBanner({ variant = 'coral', title, subtitle, cta, icon = 'sparkle' }: PromoBannerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const styles = variantStyles[variant];
  const Icon = iconMap[icon];
  const isLight = variant === 'gold';

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-12">
      <motion.div className={`relative overflow-hidden rounded-2xl p-5 sm:p-6 ${styles.bg} ${styles.border} border`} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, type: 'spring', stiffness: 100 }} whileHover={{ scale: 1.01, y: -2 }}>
        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" animate={{ x: ['-100%', '200%'] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }} />
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <motion.div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center flex-shrink-0`} animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}>
              <Icon className={`w-6 h-6 ${isLight ? 'text-navy' : variant === 'navy' ? 'text-coral' : 'text-white'}`} />
            </motion.div>
            <div className="min-w-0">
              <motion.h3 className={`text-lg sm:text-xl font-bold ${isLight ? 'text-navy' : 'text-white'} truncate`} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>{title}</motion.h3>
              <motion.p className={`text-sm ${isLight ? 'text-navy/70' : 'text-white/70'} truncate`} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>{subtitle}</motion.p>
            </div>
          </div>
          {cta && (
            <motion.a href="#randevu" className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wider flex-shrink-0 transition-colors ${isLight || variant === 'navy' ? 'bg-white text-navy hover:bg-white/90' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/20'}`} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {cta} <ArrowRight className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
