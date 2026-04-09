'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Sparkles, Palette, Gem, Snowflake, Target, Check } from 'lucide-react';

const services = [
  { icon: Snowflake, title: 'Buz Epilasyon', desc: 'Ağrısız ve etkili epilasyon.', price: '₺200', features: ['Buz Epilasyon', 'Lazer Destekli', 'Tüm Bölgeler'] },
  { icon: Sparkles, title: 'Cilt Bakımı', desc: 'Profesyonel cilt tedavisi.', price: '₺300', features: ['Hydrafacial', 'Anti-Aging', 'Leke Tedavisi'] },
  { icon: Target, title: 'Bölgesel İncelme', desc: 'Modern incelme teknolojileri.', price: '₺400', features: ['Radyofrekans', 'Ultrason', 'Kavitasyon'] },
  { icon: Palette, title: 'Kalıcı Makyaj', desc: 'Doğal ve kalıcı güzellik.', price: '₺500', features: ['Kaş', 'Dudak', 'Eyeliner'] },
  { icon: Gem, title: 'Protez Tırnak', desc: 'Zarif ve sağlıklı tırnaklar.', price: '₺250', features: ['Jel', 'Akrilik', 'Nail Art'] },
  { icon: Scissors, title: 'Saç Bakım & Kesim', desc: 'Profesyonel saç tasarımı.', price: '₺150', features: ['Kesim', 'Fön', 'Boyama'] },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      className="group relative bg-navy-surface rounded-2xl p-5 border border-white/5 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.5, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 40px rgba(255,107,107,0.15)' }}
    >
      {/* Shine sweep */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.8 }} />

      <div className="flex items-start gap-4">
        <motion.div className="w-11 h-11 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0 group-hover:bg-coral transition-colors duration-300" whileHover={{ rotate: 15, scale: 1.1 }}>
          <service.icon className="w-5 h-5 text-coral group-hover:text-white transition-colors duration-300" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-bold text-white group-hover:text-coral transition-colors truncate">{service.title}</h3>
            <span className="text-lg font-bold shimmer-text-gold flex-shrink-0 ml-2">{service.price}</span>
          </div>
          <p className="text-[#5A7599] text-xs mb-3 leading-relaxed">{service.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {service.features.map((feat) => (
              <span key={feat} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-navy-elevated text-[11px] text-[#8BA3C4] border border-coral/10">
                <Check className="w-2.5 h-2.5 text-coral" /> {feat}
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
    <section id="hizmetler" className="relative py-16 md:py-24 overflow-hidden bg-navy-light" ref={sectionRef}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div className="flex items-center justify-center gap-3 mb-3" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            <Gem className="w-4 h-4 text-coral" />
            <span className="text-xs uppercase tracking-[0.3em] text-coral font-medium">Hizmetlerimiz</span>
            <Gem className="w-4 h-4 text-coral" />
          </motion.div>
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
            <span className="shimmer-text-gold">VIP</span> Hizmetler
          </motion.h2>
          <motion.div className="ornament-divider max-w-[200px] mx-auto" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
            <Sparkles className="w-3 h-3 text-coral/40" />
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
