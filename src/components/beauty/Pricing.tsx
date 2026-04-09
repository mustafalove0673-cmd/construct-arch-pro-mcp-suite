'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Gem, Sparkles, Crown, Heart, ArrowRight, Gift } from 'lucide-react';

const packages = [
  { name: 'Temel Bakım', subtitle: 'Temel ihtiyaçlarınız için', price: 350, period: '/seans', popular: false, icon: Heart, image: '/images/beauty/gallery-spa.jpg', features: ['Buz Epilasyon', 'Cilt Bakımı', 'Protez Tırnak', 'Saç Kesimi & Fön', 'Danışmanlık', 'Çay & İkram'] },
  { name: 'Premium Paket', subtitle: 'En çok tercih edilen', price: 750, period: '/seans', popular: true, icon: Crown, image: '/images/beauty/gallery-makeup.jpg', features: ['Buz Epilasyon', 'Cilt Bakımı', 'Protez Tırnak', 'Bölgesel İncelme', 'Kalıcı Makyaj', 'Saç Bakım & Kesim', 'VIP Oda Hizmeti'] },
  { name: 'Lüks VIP', subtitle: 'Tam kapsamlı deneyim', price: 1200, period: '/seans', popular: false, icon: Gem, image: '/images/beauty/gallery-hair.jpg', features: ['Tüm Premium Hizmetler', 'Buz Epilasyon (Tüm Bölgeler)', 'Kalıcı Makyaj (Kaş + Dudak)', 'Bölgesel İncelme Paketi', 'Hydrafacial Cilt Bakımı', 'Protez Tırnak + Nail Art', 'Saç Boyama & Tasarım', 'VIP Oda Hizmeti'] },
];

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const Icon = pkg.icon;
  return (
    <motion.div className={`relative group ${pkg.popular ? 'sm:-my-2 sm:z-10' : ''}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * 0.15, duration: 0.7, type: 'spring', stiffness: 80 }}>
      {pkg.popular && (
        <motion.div className="absolute -inset-[2px] rounded-2xl gradient-border-flow" transition={{ duration: 4, repeat: Infinity }} />
      )}
      <div className={`relative bg-navy-mid rounded-2xl overflow-hidden ${pkg.popular ? 'shadow-xl' : 'shadow-md hover:shadow-xl'}`}>
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <motion.img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.7 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-mid via-navy-mid/40 to-transparent" />
          {pkg.popular && (
            <motion.div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-gold to-gold-light text-navy text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: 'spring' }}>
              <Star className="w-2.5 h-2.5 fill-navy" /> En Popüler
            </motion.div>
          )}
          <motion.div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center" initial={{ rotate: -90, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, type: 'spring' }} whileHover={{ scale: 1.15 }}>
            <Icon className="w-5 h-5 text-white" />
          </motion.div>
          <div className="absolute bottom-3 left-4">
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">{pkg.name}</h3>
            <p className="text-white/60 text-[11px]">{pkg.subtitle}</p>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-baseline gap-1 mb-4">
            <motion.span className="text-3xl sm:text-4xl font-bold shimmer-text-gold" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: 'spring' }}>{pkg.price}</motion.span>
            <span className="text-[#5A7599] text-sm font-medium">₺{pkg.period}</span>
          </div>
          <div className="space-y-2 mb-5">
            {pkg.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0"><Check className="w-2.5 h-2.5 text-coral" /></div>
                <span className="text-sm text-[#8BA3C4]">{feat}</span>
              </div>
            ))}
          </div>
          <motion.a href="#randevu" className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all ${pkg.popular ? 'bg-gradient-to-r from-coral to-coral-dark text-white shadow-lg shadow-coral/20' : 'border-2 border-coral/30 text-coral hover:bg-coral hover:text-white'}`} whileHover={{ scale: 1.03, boxShadow: '0 12px 30px rgba(255,107,107,0.3)' }} whileTap={{ scale: 0.97 }}>
            <Sparkles className="w-3.5 h-3.5" /> Randevu Al <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="fiyatlar" className="relative py-16 md:py-24 overflow-hidden bg-navy-light" ref={sectionRef}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div className="flex items-center justify-center gap-3 mb-3" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            <Gem className="w-4 h-4 text-coral" />
            <span className="text-xs uppercase tracking-[0.3em] text-coral font-medium">Fiyatlandırma</span>
            <Gem className="w-4 h-4 text-coral" />
          </motion.div>
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
            <span className="shimmer-text-gold">VIP</span> Paket Seçenekleri
          </motion.h2>
          <motion.p className="text-[#5A7599] text-sm max-w-md mx-auto mb-4" initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
            Size en uygun VIP paketi seçin, güzelliğe ilk adımınızı atın
          </motion.p>
          <motion.div className="ornament-divider max-w-[200px] mx-auto" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
            <Gift className="w-4 h-4 text-coral/40" />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>
        <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
          <p className="text-[#5A7599] text-xs">✨ Özel gün paketleri ve grup indirimleri için bizimle iletişime geçin</p>
        </motion.div>
      </div>
    </section>
  );
}
