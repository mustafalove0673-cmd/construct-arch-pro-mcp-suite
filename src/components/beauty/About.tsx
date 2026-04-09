'use client';

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Sparkles, Award, Users, Heart, Star, Gem } from 'lucide-react';

function AnimatedCounter({ target, duration = 2, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        motionValue.set(eased * target);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { icon: Award, value: 10, suffix: '+', label: 'Yıl Deneyim' },
  { icon: Users, value: 5000, suffix: '+', label: 'Mutlu Müşteri' },
  { icon: Gem, value: 5, suffix: '+', label: 'Uzman Hizmet' },
  { icon: Star, value: 98, suffix: '%', label: 'Memnuniyet' },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="hakkimizda" className="relative py-16 md:py-24 overflow-hidden bg-[#111]" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#b76e79]/[0.03] rounded-full blur-3xl" />
      <div className="absolute -left-16 -bottom-16 w-60 h-60 bg-[#c9a84c]/[0.03] rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Morphing border */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-br from-[#b76e79] via-[#c9a84c] to-[#8f4a55] opacity-20"
              animate={{
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '50% 60% 30% 70% / 40% 70% 60% 30%',
                  '60% 40% 60% 30% / 70% 30% 50% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <motion.img
                src="/images/beauty/interior-reception.jpg"
                alt="Ayşe Nur Karcı Beauty Vip Merkezimiz"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
            </div>

            {/* VIP Badge */}
            <motion.div
              className="absolute -bottom-3 -right-3 bg-gradient-to-br from-[#b76e79] to-[#8f4a55] text-white px-4 py-2.5 rounded-xl shadow-lg shadow-[#b76e79]/20"
              initial={{ scale: 0, rotate: -15 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <span className="text-lg font-bold block leading-none">VIP</span>
              <span className="text-[10px] uppercase tracking-wider opacity-90">Beauty</span>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-3"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-[#b76e79]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#b76e79] font-medium">Biz Kimiz</span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-[#f5f5f5]"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Güzelliğiniz İçin{' '}
              <span className="shimmer-text-gold">Tutkulu</span>
            </motion.h2>

            <motion.p
              className="text-[#a0a0a0] text-sm sm:text-base leading-relaxed mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              Ayşe Nur Karcı Beauty Vip olarak Pursaklar/Ankara&apos;da VIP güzellik deneyimi sunuyoruz. Buz epilasyon, cilt bakımı, bölgesel incelme, kalıcı makyaj ve protez tırnak hizmetlerimizle kendinizi özel hissedin.
            </motion.p>

            <motion.div
              className="ornament-divider mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Sparkles className="w-3 h-3 text-[#c9a84c]/50" />
            </motion.div>

            {/* Stats Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-[#1a1a1a]/80 border border-[#b76e79]/10 hover:border-[#b76e79]/25 transition-colors"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(183, 110, 121, 0.1)' }}
                >
                  <stat.icon className="w-4 h-4 text-[#b76e79] mx-auto mb-1" />
                  <span className="text-xl font-bold text-[#f5f5f5] block leading-tight">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#666] uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
