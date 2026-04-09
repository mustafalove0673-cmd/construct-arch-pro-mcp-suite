'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Flower2, Sparkles, Crown, Gem, Heart, ArrowRight, Gift } from 'lucide-react';

const packages = [
  {
    name: 'Temel Bakım',
    subtitle: 'Temel ihtiyaçlarınız için',
    price: 250,
    period: '/seans',
    popular: false,
    icon: Heart,
    color: 'rose',
    gradient: 'from-rose/10 via-rose/5 to-transparent',
    borderColor: 'border-rose/20 hover:border-rose/40',
    image: '/images/beauty/gallery-spa.jpg',
    features: [
      'Saç Kesimi & Fön',
      'Temel Cilt Bakımı',
      'Klasik Manikür',
      'Danışmanlık',
      'Çay & İkram',
    ],
  },
  {
    name: 'Premium Paket',
    subtitle: 'En çok tercih edilen',
    price: 550,
    period: '/seans',
    popular: true,
    icon: Crown,
    color: 'gold',
    gradient: 'from-gold-beauty/15 via-rose/10 to-transparent',
    borderColor: 'border-gold-beauty/30',
    image: '/images/beauty/gallery-makeup.jpg',
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
    subtitle: 'Tam kapsamlı deneyim',
    price: 850,
    period: '/seans',
    popular: false,
    icon: Gem,
    color: 'plum',
    gradient: 'from-plum/10 via-rose/5 to-transparent',
    borderColor: 'border-plum/20 hover:border-plum/40',
    image: '/images/beauty/gallery-hair.jpg',
    features: [
      'Tüm Premium Hizmetler',
      'Gelin Makyajı',
      'Nail Art Tasarım',
      'Full Spa Paketi',
      'VIP Oda Hizmeti',
      'Aromaterapi & Masaj',
      'Özel Çay Seremonisi',
      'Ücretsiz Otopark',
    ],
  },
];

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const Icon = pkg.icon;
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      className={`relative group ${pkg.popular ? 'sm:-my-2 sm:z-10' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.15, duration: 0.7, type: 'spring', stiffness: 80 }}
    >
      {/* Animated border for popular */}
      {pkg.popular && (
        <motion.div
          className="absolute -inset-[2px] rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #e8a0bf, #c8a96e, #e8a0bf, #c8a96e)',
            backgroundSize: '300% 300%',
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      )}

      <div className={`relative bg-white rounded-2xl overflow-hidden ${pkg.popular ? 'shadow-xl' : 'shadow-md hover:shadow-xl'}`}>
        {/* Image Section */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <motion.img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7 }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

          {/* Popular badge */}
          {pkg.popular && (
            <motion.div
              className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-gold-beauty to-champagne text-plum text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              <Star className="w-2.5 h-2.5 fill-plum" />
              En Popüler
            </motion.div>
          )}

          {/* Icon badge */}
          <motion.div
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
            whileHover={{ scale: 1.15, rotate: 15 }}
          >
            <Icon className="w-5 h-5 text-white" />
          </motion.div>

          {/* Package name on image */}
          <div className="absolute bottom-3 left-4">
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">{pkg.name}</h3>
            <p className="text-white/70 text-[11px]">{pkg.subtitle}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5">
          {/* Price */}
          <div className="flex items-baseline gap-1 mb-4">
            <motion.span
              className="text-3xl sm:text-4xl font-bold shimmer-text-rose"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            >
              {pkg.price}
            </motion.span>
            <span className="text-plum/40 text-sm font-medium">₺{pkg.period}</span>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-5">
            {pkg.features.map((feat) => (
              <div
                key={feat}
                className="flex items-center gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-rose/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-rose" />
                </div>
                <span className="text-sm text-plum/60">{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#randevu"
            className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all ${
              pkg.popular
                ? 'bg-gradient-to-r from-rose to-rose-dark text-white shadow-lg shadow-rose/20'
                : 'border-2 border-rose/30 text-rose-dark hover:bg-rose hover:text-white'
            }`}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 12px 30px rgba(232, 160, 191, 0.3)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Randevu Al
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Shine sweep on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="fiyatlar" className="relative py-16 md:py-24 overflow-hidden" ref={sectionRef}>
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
            <span className="text-xs uppercase tracking-[0.3em] text-rose-dark font-medium">Fiyatlandırma</span>
            <Flower2 className="w-4 h-4 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="shimmer-text-rose">Paket</span> Seçenekleri
          </motion.h2>

          <motion.p
            className="text-plum/50 text-sm max-w-md mx-auto mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Size en uygun paketi seçin, güzelliğe ilk adımınızı atın
          </motion.p>

          <motion.div
            className="ornament-divider max-w-[200px] mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Gift className="w-4 h-4 text-rose/40" />
          </motion.div>
        </div>

        {/* Package Cards - 3 columns on desktop, 1 on mobile */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-plum/40 text-xs">
            ✨ Özel gün paketleri ve grup indirimleri için bizimle iletişime geçin
          </p>
        </motion.div>
      </div>
    </section>
  );
}
