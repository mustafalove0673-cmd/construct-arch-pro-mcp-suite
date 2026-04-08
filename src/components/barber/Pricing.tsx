'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Temel',
    description: 'Hızlı ve kaliteli bakım',
    price: '150₺',
    period: 'başlangıç',
    features: [
      'Saç Yıkama & Kesim',
      'Fön Çekimi',
      'Saç Şekillendirme',
      'Boyun Tıraşı',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    description: 'Tam kapsamlı bakım deneyimi',
    price: '350₺',
    period: 'paket',
    features: [
      'Saç Yıkama & Kesim',
      'Sakal Tıraşı & Şekillendirme',
      'Sıcak Havlu Uygulaması',
      'Yüz Bakımı & Masaj',
      'Premium Saç Bakımı',
      'Sakal Yağı Uygulaması',
    ],
    popular: true,
  },
  {
    name: 'Kral Paket',
    description: 'Eşsiz VIP deneyim',
    price: '500₺',
    period: 'tam paket',
    features: [
      'Her şey Premium dahil',
      'Klasik Jilet Tıraşı',
      'Derin Cilt Bakımı',
      'Aromaterapi Masaj',
      'Manikür & Pedikür',
      'Özel Sakal Tasarımı',
      'Complimentary İçecek',
      'Özel Usta Seçimi',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="fiyatlar" className="relative py-24 md:py-32 bg-charcoal-light overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(200,169,110,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Fiyatlar</span>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fiyat <span className="shimmer-text">Listemiz</span>
          </motion.h2>
          <motion.p
            className="text-gold-light/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Her bütçeye uygun paket seçenekleri ile kaliteli hizmeti herkes için erişilebilir kılıyoruz
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-sm overflow-hidden ${
                plan.popular
                  ? 'md:-my-4 border-2 border-gold shadow-2xl shadow-gold/10'
                  : 'border border-gold/10'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: plan.popular ? -15 : -10 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  className="absolute top-0 right-0 bg-gold text-charcoal-dark px-4 py-1 text-xs font-bold uppercase tracking-wider z-20"
                  initial={{ x: 100 }}
                  animate={isInView ? { x: 0 } : {}}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  En Popüler
                </motion.div>
              )}

              <div className={`p-8 ${plan.popular ? 'bg-charcoal-dark' : 'bg-charcoal/80'}`}>
                {/* Background glow for popular */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0.5 }}
                  />
                )}

                <div className="relative z-10">
                  {/* Plan name */}
                  <motion.h3
                    className={`text-xl font-bold mb-2 ${plan.popular ? 'text-gold' : 'text-white'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {plan.name}
                  </motion.h3>
                  <p className="text-gold-light/50 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <motion.span
                      className={`text-4xl md:text-5xl font-bold ${plan.popular ? 'shimmer-text' : 'text-white'}`}
                      animate={plan.popular && hoveredIndex === index ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-gold-light/40 text-sm">/ {plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + fIndex * 0.05 + index * 0.1 }}
                      >
                        <motion.div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            plan.popular ? 'bg-gold/20' : 'bg-gold/10'
                          }`}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-gold' : 'text-gold-light/70'}`} />
                        </motion.div>
                        <span className="text-gold-light/60 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    href="#randevu"
                    className={`block text-center py-3.5 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-500 ${
                      plan.popular
                        ? 'bg-gold text-charcoal-dark hover:bg-gold-light'
                        : 'border-2 border-gold text-gold hover:bg-gold hover:text-charcoal-dark'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {plan.popular && <Sparkles className="w-4 h-4" />}
                      Randevu Al
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
