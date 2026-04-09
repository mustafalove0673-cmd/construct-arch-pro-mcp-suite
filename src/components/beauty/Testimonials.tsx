'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Gem } from 'lucide-react';

const testimonials = [
  { name: 'Ayşe Yılmaz', role: 'Buz Epilasyon', text: 'Buz epilasyon deneyimim inanılmazdı! Neredeyse ağrısız ve çok etkili. Kesinlikle herkese tavsiye ederim.', rating: 5, initial: 'A' },
  { name: 'Fatma Demir', role: 'Cilt Bakımı', text: 'Hydrafacial tedavisi hayatımın en iyi kararıydı. Cildim inanılmaz bir parlaklık kazandı. Teşekkürler!', rating: 5, initial: 'F' },
  { name: 'Zeynep Kara', role: 'Kalıcı Makyaj', text: 'Kalıcı makyaj uygulaması çok doğal görünüyor. Her sabah makyaj yapma derdinden kurtuldum.', rating: 5, initial: 'Z' },
  { name: 'Elif Çelik', role: 'Bölgesel İncelme', text: 'Bölgesel incelme seanslarımdan çok memnunum. Sonuçları gerçekten görmeye başladım, harika bir ekip.', rating: 5, initial: 'E' },
  { name: 'Merve Şahin', role: 'Protez Tırnak', text: 'Protez tırnak uygulamaları gerçekten sanat eseri! Her seferinde farklı ve yaratıcı tasarımlarla çıkıyorum.', rating: 5, initial: 'M' },
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => { const nextPage = (prevPage + newDirection + testimonials.length) % testimonials.length; return [nextPage, newDirection]; });
  }, []);

  useEffect(() => { const timer = setInterval(() => paginate(1), 5000); return () => clearInterval(timer); }, [paginate]);
  const current = testimonials[page];

  return (
    <section id="yorumlar" className="relative py-20 md:py-32 overflow-hidden animated-gradient-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            <Gem className="w-5 h-5 text-coral" />
            <span className="text-sm uppercase tracking-[0.3em] text-coral font-medium">Müşteri Yorumları</span>
            <Gem className="w-5 h-5 text-coral" />
          </motion.div>
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
            Mutlu <span className="shimmer-text-gold">Müşterilerimiz</span>
          </motion.h2>
          <motion.div className="ornament-divider max-w-xs mx-auto" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
            <Gem className="w-4 h-4 text-coral/40" />
          </motion.div>
        </div>

        <motion.div className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <div className="relative bg-navy-mid/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/5 min-h-[300px] flex flex-col items-center justify-center">
            <motion.div className="absolute top-8 left-8 text-coral/10" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }}><Quote className="w-20 h-20" /></motion.div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={page} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} className="w-full text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.08, type: 'spring' }}>
                      <Star className={`w-5 h-5 ${i < current.rating ? 'text-gold fill-gold' : 'text-white/10'}`} />
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-[#8BA3C4] leading-relaxed mb-8 italic font-light">&ldquo;{current.text}&rdquo;</p>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center text-white font-bold text-lg">{current.initial}</div>
                  <div>
                    <p className="font-bold text-white">{current.name}</p>
                    <p className="text-sm text-[#5A7599]">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#8BA3C4] hover:bg-coral hover:text-white hover:border-coral transition-colors" onClick={() => paginate(-1)} whileHover={{ rotate: -15, scale: 1.1 }} whileTap={{ scale: 0.9 }}><ChevronLeft className="w-5 h-5" /></motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button key={i} className="h-2 rounded-full overflow-hidden" onClick={() => setPage([i, i > page ? 1 : -1])} whileHover={{ scale: 1.3 }} animate={{ width: i === page ? 32 : 8, backgroundColor: i === page ? '#FF6B6B' : 'rgba(255,107,107,0.2)' }} transition={{ duration: 0.3 }} />
              ))}
            </div>
            <motion.button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#8BA3C4] hover:bg-coral hover:text-white hover:border-coral transition-colors" onClick={() => paginate(1)} whileHover={{ rotate: 15, scale: 1.1 }} whileTap={{ scale: 0.9 }}><ChevronRight className="w-5 h-5" /></motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
