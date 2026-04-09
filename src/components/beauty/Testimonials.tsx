'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Flower2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Gelin Makyajı',
    text: 'Düğün günümde mükemmel hissettirdiniz! Makyajım tüm gün kusursuz kaldı. Kesinlikle herkese tavsiye ederim.',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Fatma Demir',
    role: 'Saç Boyama',
    text: 'Saç boyama deneyimim inanılmazdı. Tam istediğim tonu yakaladınız ve saçlarım çok sağlıklı görünüyor.',
    rating: 5,
    initial: 'F',
  },
  {
    name: 'Zeynep Kara',
    role: 'Cilt Bakımı',
    text: 'Hydrafacial tedavisi hayatımın en iyi kararıydı. Cildim inanılmaz bir parlaklık kazandı. Teşekkürler!',
    rating: 5,
    initial: 'Z',
  },
  {
    name: 'Elif Çelik',
    role: 'Spa & Masaj',
    text: 'Spa deneyimi tam bir rahatlama. Masaj terapistimiz çok profesyonel ve mekan harika bir atmosfere sahip.',
    rating: 4,
    initial: 'E',
  },
  {
    name: 'Merve Şahin',
    role: 'Nail Art',
    text: 'Nail art tasarımları gerçekten sanat eseri! Her seferinde farklı ve yaratıcı tasarımlarla çıkıyorum.',
    rating: 5,
    initial: 'M',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => {
      const nextPage = (prevPage + newDirection + testimonials.length) % testimonials.length;
      return [nextPage, newDirection];
    });
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const current = testimonials[page];

  return (
    <section id="yorumlar" className="relative py-20 md:py-32 overflow-hidden animated-gradient-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Flower2 className="w-5 h-5 text-rose" />
            <span className="text-sm uppercase tracking-[0.3em] text-rose-dark font-medium">Müşteri Yorumları</span>
            <Flower2 className="w-5 h-5 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Mutlu <span className="shimmer-text-rose">Müşterilerimiz</span>
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Flower2 className="w-4 h-4 text-rose/40" />
          </motion.div>
        </div>

        {/* Testimonial Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-rose/10 min-h-[300px] flex flex-col items-center justify-center">
            {/* Background quote icon */}
            <motion.div
              className="absolute top-8 left-8 text-rose/5"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Quote className="w-20 h-20" />
            </motion.div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="w-full text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          i < current.rating
                            ? 'text-gold-beauty fill-gold-beauty'
                            : 'text-plum/10'
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-lg sm:text-xl text-plum/70 leading-relaxed mb-8 italic font-light">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose to-rose-dark flex items-center justify-center text-white font-bold text-lg">
                    {current.initial}
                  </div>
                  <div>
                    <p className="font-bold text-plum">{current.name}</p>
                    <p className="text-sm text-plum/40">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev button */}
            <motion.button
              className="w-12 h-12 rounded-full border border-rose/20 flex items-center justify-center text-rose-dark hover:bg-rose hover:text-white hover:border-rose transition-colors"
              onClick={() => paginate(-1)}
              whileHover={{ rotate: -15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  className="h-2 rounded-full bg-rose/20 overflow-hidden"
                  onClick={() => setPage([i, i > page ? 1 : -1])}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    width: i === page ? 32 : 8,
                    backgroundColor: i === page ? '#e8a0bf' : 'rgba(232,160,191,0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Next button */}
            <motion.button
              className="w-12 h-12 rounded-full border border-rose/20 flex items-center justify-center text-rose-dark hover:bg-rose hover:text-white hover:border-rose transition-colors"
              onClick={() => paginate(1)}
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
