'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Users, Star } from 'lucide-react';

const stats = [
  { icon: Clock, value: '25+', label: 'Yıl Deneyim' },
  { icon: Users, value: '15K+', label: 'Mutlu Müşteri' },
  { icon: Star, value: '4.9', label: 'Ortalama Puan' },
  { icon: Award, value: '12', label: 'Ödül' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hakkimizda" className="relative py-24 md:py-32 bg-charcoal overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="relative z-10 overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/images/barber/about.jpg"
                  alt="Usta Berber"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/50 to-transparent" />
              </motion.div>

              {/* Decorative frame */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              />

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 z-20 bg-gold text-charcoal-dark p-6 rounded-sm shadow-2xl"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <p className="text-4xl font-bold">25+</p>
                <p className="text-sm font-medium uppercase tracking-wider">Yıl Deneyim</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Section label */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Hakkımızda</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Geleneksel Ustalık,{" "}
              <span className="shimmer-text">Modern Tarz</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gold-light/60 text-base md:text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              1998 yılından bu yana İstanbul&apos;un kalbinde, erkek bakımının en önemi 
              adresi olarak hizmet veriyoruz. Ustalarımızın yılların getirdiği tecrübesiyle, 
              her müşterimize özel bir deneyim sunuyoruz. Modern teknikleri geleneksel 
              yöntemlerle harmanlayarak, size en kaliteli hizmeti sağlıyoruz.
            </motion.p>
            <motion.p
              className="text-gold-light/60 text-base md:text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Sadece bir saç kesimi değil, kendinize ayırdığınız özel zamanı en iyi 
              şekilde değerlendirmek için buradayız. Her detay, sizin konforunuz için 
              düşünülmüştür.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-4 bg-charcoal-light/50 rounded-sm border border-gold/10 group hover:border-gold/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(200, 169, 110, 0.5)' }}
                >
                  <stat.icon className="w-6 h-6 text-gold mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gold-light/50 text-sm uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
