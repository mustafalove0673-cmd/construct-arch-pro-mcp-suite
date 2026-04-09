'use client';

import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

const words = [
  'Güzellik',
  'Bakım',
  'Şıklık',
  'Lüks',
  'Elegance',
  'Spa',
  'Makyaj',
  'Saç Bakımı',
  'Cilt Bakımı',
  'Manikür',
  'Masaj',
  'Rahatlama',
  'Premium',
  'Pürüzsüz',
  'Işıltılı',
  'Zarafet',
];

export default function Marquee() {
  return (
    <section className="relative py-6 bg-gradient-to-r from-rose/5 via-gold-beauty/5 to-rose/5 overflow-hidden">
      {/* Decorative top & bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent" />

      <div className="flex whitespace-nowrap hover:[animation-play-state:paused]">
        <motion.div
          className="flex items-center gap-8 marquee-scroll"
          animate={{ x: [0, -2400] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {[...words, ...words].map((word, i) => (
            <span key={i} className="inline-flex items-center gap-4">
              <span className="text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase text-plum/30 hover:text-rose-dark transition-colors duration-300 cursor-default">
                {word}
              </span>
              <Flower2 className="w-3 h-3 text-rose/30 rotate-45" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
