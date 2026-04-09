'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Sparkles, Palette, Heart, Flower2, Droplets, Check } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Saç Bakım & Kesim',
    desc: 'Profesyonel saç kesimi ve bakım hizmetleri.',
    price: '₺150',
    features: ['Kadın Kesim', 'Saç Bakımı', 'Fön Çekim', 'Örgü Modelleri'],
  },
  {
    icon: Droplets,
    title: 'Cilt Bakımı',
    desc: 'Cildinize uygun özel bakım protokolleri.',
    price: '₺250',
    features: ['Hydrafacial', 'Anti-aging', 'Akne Tedavisi', 'Peeling'],
  },
  {
    icon: Palette,
    title: 'Profesyonel Makyaj',
    desc: 'Her özel gününüz için mükemmel makyaj.',
    price: '₺300',
    features: ['Gelin Makyajı', 'Davet Makyajı', 'Günlük Makyaj', 'Kalıcı Makyaj'],
  },
  {
    icon: Heart,
    title: 'Nail Art & Manikür',
    desc: 'Sanatsal tasarım ve profesyonel bakım.',
    price: '₺120',
    features: ['Jel Manikür', 'Nail Art', 'Pedikür', 'Tırnak Bakımı'],
  },
  {
    icon: Flower2,
    title: 'Spa & Masaj',
    desc: 'Vücut ve zihin için derin rahatlama.',
    price: '₺350',
    features: ['Aromaterapi', 'Hot Stone', 'Derin Doku Masajı', 'Detoks'],
  },
  {
    icon: Sparkles,
    title: 'Saç Boyama',
    desc: 'Canlı ve kalıcı renk uygulamaları.',
    price: '₺200',
    features: ['Sıfır Boyama', 'Ombre', 'Balyaj', 'Saç Bakımı'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-rose/10 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: '0 25px 60px rgba(232, 160, 191, 0.2)',
      }}
    >
      {/* Shine sweep on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose/20 to-gold-beauty/20 flex items-center justify-center mb-5 group-hover:from-rose group-hover:to-rose-dark transition-colors duration-300"
        whileHover={{ rotate: 15, scale: 1.1 }}
      >
        <service.icon className="w-6 h-6 text-rose-dark group-hover:text-white transition-colors duration-300" />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold text-plum mb-2 group-hover:text-rose-dark transition-colors">
        {service.title}
      </h3>
      <p className="text-plum/50 text-sm mb-4 leading-relaxed">{service.desc}</p>

      {/* Price */}
      <div className="mb-5">
        <span className="text-2xl font-bold shimmer-text-rose">{service.price}</span>
        <span className="text-plum/30 text-sm ml-1">başlangıç</span>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {service.features.map((feat) => (
          <span
            key={feat}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose/5 text-xs text-plum/60 border border-rose/10"
          >
            <Check className="w-3 h-3 text-rose" />
            {feat}
          </span>
        ))}
      </div>

      {/* Decorative corner */}
      <motion.div
        className="absolute -bottom-2 -right-2 w-16 h-16 bg-rose/5 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
      />
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="hizmetler" className="relative py-20 md:py-32 overflow-hidden animated-gradient-bg" ref={sectionRef}>
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-rose/10 morph-shape"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gold-beauty/10 morph-shape"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-12 h-12 bg-blush/40 morph-shape"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Flower2 className="w-5 h-5 text-rose" />
            <span className="text-sm uppercase tracking-[0.3em] text-rose-dark font-medium">Hizmetlerimiz</span>
            <Flower2 className="w-5 h-5 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="shimmer-text-rose">Premium</span> Hizmetler
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Sparkles className="w-4 h-4 text-rose/40" />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
