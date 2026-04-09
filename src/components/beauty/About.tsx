'use client';

import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Flower2, Award, Users, Heart, Star } from 'lucide-react';

function AnimatedCounter({ target, duration = 2, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = motionValue;
      let startTime: number | null = null;
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        controls.set(eased * target);
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
  { icon: Award, value: 25, suffix: '+', label: 'Yıl Deneyim' },
  { icon: Users, value: 15000, suffix: '+', label: 'Mutlu Müşteri' },
  { icon: Heart, value: 50, suffix: '+', label: 'Uzman Personel' },
  { icon: Star, value: 98, suffix: '%', label: 'Müşteri Memnuniyeti' },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="hakkimizda" className="relative py-20 md:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <motion.div
        className="absolute -right-32 -top-32 w-96 h-96 bg-rose/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-20 -bottom-20 w-80 h-80 bg-gold-beauty/5 rounded-full blur-3xl"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Morphing border shape */}
            <motion.div
              className="absolute -inset-3 bg-gradient-to-br from-rose via-gold-beauty to-rose-dark opacity-30"
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
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
              <motion.img
                src="/images/beauty/about.jpg"
                alt="Lumière Beauty Merkez"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum/30 to-transparent" />
            </div>

            {/* Falling petals near image */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute petal"
                style={{
                  left: `${10 + i * 18}%`,
                  top: '-5%',
                }}
                animate={{
                  y: [0, 500],
                  x: [0, 30 * (i % 2 === 0 ? 1 : -1), -20, 10],
                  rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
                  opacity: [0, 0.7, 0.5, 0],
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: 'linear',
                }}
              />
            ))}

            {/* Experience Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 bg-gradient-to-br from-rose to-rose-dark text-white px-6 py-4 rounded-2xl shadow-xl"
              initial={{ scale: 0, rotate: -15 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="text-center">
                <span className="text-3xl font-bold block">25+</span>
                <span className="text-xs uppercase tracking-wider opacity-90">Yıl Deneyim</span>
              </div>
            </motion.div>

            {/* Corner ornaments */}
            <svg className="absolute -top-4 -left-4 w-12 h-12 text-rose/40" viewBox="0 0 48 48" fill="none">
              <motion.path
                d="M2 20 C2 2 20 2 20 2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.path
                d="M2 20 C2 30 2 30 2 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              <motion.circle cx="2" cy="2" r="3" fill="currentColor"
                initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 1.5, type: 'spring' }}
              />
            </svg>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Section header */}
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Flower2 className="w-5 h-5 text-rose" />
              <span className="text-sm uppercase tracking-[0.3em] text-rose-dark font-medium">Biz Kimiz</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Güzelliğiniz İçin{' '}
              <span className="shimmer-text-rose">Tutkulu</span>
            </motion.h2>

            <motion.p
              className="text-plum/60 text-base sm:text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              25 yılı aşkın deneyimimizle, her kadın için eşsiz güzellik deneyimleri sunuyoruz.
              Son teknoloji ürünler ve uzman ekibimizle kendinizi özel hissedin.
            </motion.p>

            {/* Ornament divider */}
            <motion.div
              className="ornament-divider mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Flower2 className="w-4 h-4 text-rose/50" />
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-rose/10 hover:border-rose/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.15 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(232, 160, 191, 0.15)' }}
                >
                  <stat.icon className="w-5 h-5 text-rose mx-auto mb-2" />
                  <span className="text-2xl sm:text-3xl font-bold text-plum block">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs sm:text-sm text-plum/50 uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
