'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Flower2, Instagram, Facebook, Twitter } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Adres',
    lines: ['Bağdat Cad. No: 42', 'Kadıköy, İstanbul'],
  },
  {
    icon: Phone,
    title: 'Telefon',
    lines: ['0212 555 12 34', '0532 888 99 00'],
  },
  {
    icon: Mail,
    title: 'E-posta',
    lines: ['info@lumierebeauty.com', 'randevu@lumierebeauty.com'],
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    lines: ['Pzt - Cmt: 09:00 - 19:00', 'Pazar: Kapalı'],
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Twitter, label: 'Twitter', color: 'hover:text-sky-500' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="iletisim" className="relative py-20 md:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-blush/30 to-cream" />

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
            <span className="text-sm uppercase tracking-[0.3em] text-rose-dark font-medium">İletişim</span>
            <Flower2 className="w-5 h-5 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Bize <span className="shimmer-text-rose">Ulaşın</span>
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Flower2 className="w-4 h-4 text-rose/40" />
          </motion.div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose/10 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(232, 160, 191, 0.15)',
              }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose/20 to-gold-beauty/20 flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <card.icon className="w-6 h-6 text-rose" />
              </motion.div>
              <h3 className="font-bold text-plum mb-3">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-sm text-plum/50">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Map placeholder & Social */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-72 sm:h-80 bg-white/60 border border-rose/10"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {/* Animated grid lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(232,160,191,0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Pulsing pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-4 h-4 bg-rose rounded-full relative z-10 shadow-lg" />
                <motion.div
                  className="absolute inset-0 bg-rose/30 rounded-full"
                  animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>

            {/* Address label */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-rose/10">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-rose flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-plum">Lumière Beauty Center</p>
                  <p className="text-xs text-plum/50">Bağdat Cad. No: 42, Kadıköy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social & Extra */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-plum mb-4">Bizi Takip Edin</h3>
            <p className="text-plum/50 mb-8 leading-relaxed">
              Sosyal medya hesaplarımızdan en güncel çalışmaları ve kampanyaları takip edebilirsiniz.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className={`w-14 h-14 rounded-2xl bg-white border border-rose/10 flex items-center justify-center text-plum/40 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.15, y: -5, boxShadow: '0 10px 25px rgba(232, 160, 191, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose/20 to-transparent" />
              <Flower2 className="w-4 h-4 text-rose/30" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
