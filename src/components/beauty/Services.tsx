'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Sparkles, Palette, Heart, Flower2, Droplets, Check } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Saç Bakım & Kesim',
    desc: 'Profesyonel kesim ve bakım.',
    price: '₺150',
    features: ['Kesim', 'Fön', 'Örgü'],
  },
  {
    icon: Droplets,
    title: 'Cilt Bakımı',
    desc: 'Cildinize özel protokol.',
    price: '₺250',
    features: ['Hydrafacial', 'Peeling'],
  },
  {
    icon: Palette,
    title: 'Profesyonel Makyaj',
    desc: 'Özel gün makyajı.',
    price: '₺300',
    features: ['Gelin', 'Davet', 'Günlük'],
  },
  {
    icon: Heart,
    title: 'Nail Art & Manikür',
    desc: 'Sanatsal tasarım.',
    price: '₺120',
    features: ['Jel', 'Nail Art', 'Pedikür'],
  },
  {
    icon: Flower2,
    title: 'Spa & Masaj',
    desc: 'Derin rahatlama.',
    price: '₺350',
    features: ['Aromaterapi', 'Hot Stone'],
  },
  {
    icon: Sparkles,
    title: 'Saç Boyama',
    desc: 'Kalıcı renk uygulamaları.',
    price: '₺200',
    features: ['Sıfır', 'Ombre', 'Balyaj'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-rose/10 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.5, type: 'spring', stiffness: 100 }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(232, 160, 191, 0.2)',
      }}
    >
      {/* Shine sweep on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      <div className="flex items-start gap-4">
        {/* Icon */}
        <motion.div
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose/20 to-gold-beauty/20 flex items-center justify-center flex-shrink-0 group-hover:from-rose group-hover:to-rose-dark transition-colors duration-300"
          whileHover={{ rotate: 15, scale: 1.1 }}
        >
          <service.icon className="w-5 h-5 text-rose-dark group-hover:text-white transition-colors duration-300" />
        </motion.div>

        <div className="flex-1 min-w-0">
          {/* Content */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-bold text-plum group-hover:text-rose-dark transition-colors truncate">
              {service.title}
            </h3>
            <span className="text-lg font-bold shimmer-text-rose flex-shrink-0 ml-2">{service.price}</span>
          </div>
          <p className="text-plum/50 text-xs mb-3 leading-relaxed">{service.desc}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5">
            {service.features.map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose/5 text-[11px] text-plum/60 border border-rose/10"
              >
                <Check className="w-2.5 h-2.5 text-rose" />
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>


    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="hizmetler" className="relative py-16 md:py-24 overflow-hidden animated-gradient-bg" ref={sectionRef}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center gap-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Flower2 className="w-4 h-4 text-rose" />
            <span className="text-xs uppercase tracking-[0.3em] text-rose-dark font-medium">Hizmetlerimiz</span>
            <Flower2 className="w-4 h-4 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="shimmer-text-rose">Premium</span> Hizmetler
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-[200px] mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Sparkles className="w-3 h-3 text-rose/40" />
          </motion.div>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
