'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flower2, Sparkles, Camera } from 'lucide-react';

interface ImageShowcaseProps {
  images: string[];
  title: string;
  subtitle: string;
  reversed?: boolean;
}

export default function ImageShowcase({ images, title, subtitle, reversed = false }: ImageShowcaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-4 items-center ${reversed ? 'md:[direction:rtl]' : ''}`}>
          {/* Text Side */}
          <motion.div
            className={`text-center md:text-left ${reversed ? 'md:[direction:ltr]' : ''}`}
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mb-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Camera className="w-3.5 h-3.5 text-rose" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-dark font-medium">
                {title}
              </span>
            </motion.div>

            <motion.h3
              className="text-xl sm:text-2xl font-bold text-plum mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="shimmer-text-rose">{title}</span>
            </motion.h3>

            <motion.p
              className="text-plum/50 text-sm mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {subtitle}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-rose to-transparent" />
              <Flower2 className="w-3 h-3 text-rose/40" />
            </motion.div>
          </motion.div>

          {/* Images Side */}
          <div className="grid grid-cols-2 gap-3">
            {images.map((img, i) => (
              <motion.div
                key={img}
                className="relative group rounded-xl overflow-hidden aspect-[4/3]"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5, type: 'spring', stiffness: 100 }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 15px 35px rgba(232, 160, 191, 0.2)',
                }}
              >
                <motion.img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum/20 to-transparent" />
                {/* Shine sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.3, duration: 0.8 }}
                />
                {/* Sparkle corner */}
                <motion.div
                  className="absolute top-2 right-2 text-rose/0 group-hover:text-rose/30 transition-colors"
                  animate={{ rotate: [0, 180, 360], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 2 }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative shape */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-rose/3 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
