'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Sparkles, Heart, Droplets, Crown, Palette } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Saç Kesimi',
    description: 'Profesyonel ustalarımızın elinde, modern ve klasik stillerde mükemmel saç kesimi deneyimi yaşayın.',
    price: '150₺',
    features: ['Wash & Cut', 'Styling', 'Saç Bakımı'],
  },
  {
    icon: Sparkles,
    title: 'Sakal Tıraşı',
    description: 'Sakalınızı hassas bir şekilde şekillendiriyoruz. Sıcak havlu ve premium yağlarla rahatlatıcı bir deneyim.',
    price: '120₺',
    features: ['Hot Towel', 'Trim & Shape', 'Sakal Yağı'],
  },
  {
    icon: Droplets,
    title: 'Klasik Tıraş',
    description: 'Jilet ile yapılan geleneksel tıraş deneyimi. Sıcak köpük ve doğal yağlarla cildinizi yenileyin.',
    price: '180₺',
    features: ['Straight Razor', 'Hot Towel', 'Cilt Bakımı'],
  },
  {
    icon: Crown,
    title: 'Damat Paketi',
    description: 'Özel günleriniz için kapsamlı bakım paketi. Düğünden önce kendinizi en iyi hissetmenizi sağlıyoruz.',
    price: '500₺',
    features: ['Saç + Sakal + Tıraş', 'Yüz Masajı', 'Cilt Bakımı'],
  },
  {
    icon: Heart,
    title: 'Yüz Bakımı',
    description: 'Derin temizlik, nemlendirme ve gençleştirici masaj ile cildinize canlılık katın.',
    price: '200₺',
    features: ['Cilt Analizi', 'Maske', 'Masaj'],
  },
  {
    icon: Palette,
    title: 'Saç Boyama',
    description: 'Doğal görünümlü ve kalıcı saç boyama hizmeti. Deneyimli renk uzmanlarımız eşliğinde.',
    price: '300₺',
    features: ['Tam Boyama', 'Folyan', 'Renk Danışma'],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hizmetler" className="relative py-24 md:py-32 bg-charcoal-light overflow-hidden" ref={ref}>
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

      {/* Decorative glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Hizmetlerimiz</span>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Profesyonel <span className="shimmer-text">Hizmetler</span>
          </motion.h2>
          <motion.p
            className="text-gold-light/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Her biri alanında uzman ustalarımızla, size en kaliteli hizmeti sunuyoruz
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 bg-charcoal/80 rounded-sm border border-gold/10 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -10, borderColor: 'rgba(200, 169, 110, 0.5)' }}
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-12 group-hover:left-full transition-all duration-1000"
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 text-gold" />
                </motion.div>

                {/* Title & Price */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-gold font-bold text-lg">{service.price}</span>
                </div>

                {/* Description */}
                <p className="text-gold-light/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs bg-gold/5 border border-gold/10 text-gold-light/70 rounded-sm group-hover:border-gold/30 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Bottom line animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold to-gold-light"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
