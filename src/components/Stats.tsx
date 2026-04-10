'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { num: 500, suffix: '+', label: 'Tamamlanan Proje', icon: '🏗️' },
  { num: 20, suffix: '+', label: 'Yıllık Tecrübe', icon: '📅' },
  { num: 98, suffix: '%', label: 'Müşteri Memnuniyeti', icon: '⭐' },
  { num: 50, suffix: '+', label: 'Profesyonel Ekip', icon: '👥' },
  { num: 120, suffix: 'M', label: 'm² İnşaat Alanı', icon: '📐' },
  { num: 15, suffix: '+', label: 'Şehirde Faaliyet', icon: '🏙️' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B08] via-[#121010] to-[#0D0B08]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, #C8A951, #C8A951 1px, transparent 1px, transparent 80px)`,
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            Rakamlarla <span className="text-[#C8A951]">ÜREKOL GÜ</span>
          </h2>
          <p className="text-[#F5F0E8]/40">Sektördeki gücümüzü rakamlarla gösteriyoruz</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-5 bg-[#111111]/40 border border-[#C8A951]/10 rounded-xl hover:border-[#C8A951]/30 transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black text-[#C8A951]">
                <Counter target={stat.num} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[#F5F0E8]/40 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
