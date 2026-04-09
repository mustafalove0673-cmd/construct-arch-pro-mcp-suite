'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Flower2, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Temel',
    price: 250,
    popular: false,
    features: [
      'Saç Kesimi',
      'Fön Çekim',
      'Temel Cilt Bakımı',
      'Manikür',
      'Danışmanlık',
    ],
  },
  {
    name: 'Premium',
    price: 550,
    popular: true,
    features: [
      'Saç Kesimi & Bakım',
      'Profesyonel Fön',
      'Hydrafacial Cilt Bakımı',
      'Jel Manikür & Pedikür',
      'Makyaj Uygulama',
      'Saç Boyama',
      'Spa Masaj (1 saat)',
    ],
  },
  {
    name: 'Lüks VIP',
    price: 850,
    popular: false,
    features: [
      'Tüm Premium Hizmetler',
      'Gelin Makyajı',
      'Nail Art Tasarım',
      'Full Spa Paketi',
      'VIP Oda Hizmeti',
      'Aromaterapi',
      'Çay & İkram',
      'Ücretsiz Otopark',
    ],
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  return (
    <motion.div
      className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 overflow-hidden ${
        plan.popular ? 'sm:-my-2 sm:shadow-xl' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }}
      whileHover={{
        y: -6,
        boxShadow: plan.popular
          ? '0 30px 60px rgba(232, 160, 191, 0.3)'
          : '0 20px 40px rgba(232, 160, 191, 0.15)',
      }}
    >
      {/* Popular card gradient border */}
      {plan.popular && (
        <motion.div
          className="absolute inset-0 rounded-2xl p-[2px]"
          style={{
            background: 'linear-gradient(135deg, #e8a0bf, #c8a96e, #e8a0bf, #c8a96e)',
            backgroundSize: '300% 300%',
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full rounded-3xl bg-white" />
        </motion.div>
      )}

      <div className={`relative z-10 ${plan.popular ? 'p-2' : ''}`}>
        {/* Popular badge */}
        {plan.popular && (
          <motion.div
            className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-rose to-rose-dark text-white text-xs font-bold uppercase tracking-wider rounded-full"
            initial={{ scale: 0, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <span className="flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-white" />
              En Popüler
            </span>
          </motion.div>
        )}

        {/* Plan Name */}
        <h3 className="text-base sm:text-lg font-bold text-plum text-center mb-1 mt-1">
          {plan.name}
        </h3>

        {/* Price */}
        <div className="text-center mb-4">
          <span className="text-2xl sm:text-3xl font-bold shimmer-text-rose">
            {plan.price}
          </span>
          <span className="text-plum/40 text-lg">₺</span>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {plan.features.map((feat, i) => (
            <motion.div
              key={feat}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.08 }}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-rose/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.4 }}
              >
                <Check className="w-3 h-3 text-rose" />
              </motion.div>
              <span className="text-sm text-plum/60">{feat}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#randevu"
          className={`block w-full py-2.5 rounded-full text-center font-semibold text-xs uppercase tracking-wider transition-colors {
            plan.popular
              ? 'bg-gradient-to-r from-rose to-rose-dark text-white'
              : 'border-2 border-rose/30 text-rose-dark hover:bg-rose hover:text-white'
          }`}
          whileHover={{
            scale: 1.03,
            boxShadow: '0 10px 30px rgba(232, 160, 191, 0.3)',
          }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Randevu Al
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="fiyatlar" className="relative py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #e8a0bf 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/5 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Flower2 className="w-5 h-5 text-rose" />
            <span className="text-sm uppercase tracking-[0.3em] text-rose-dark font-medium">Fiyatlandırma</span>
            <Flower2 className="w-5 h-5 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="shimmer-text-rose">Paket</span> Seçenekleri
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-[200px] mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Flower2 className="w-4 h-4 text-rose/40" />
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-3 gap-3 lg:gap-4 items-stretch max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
