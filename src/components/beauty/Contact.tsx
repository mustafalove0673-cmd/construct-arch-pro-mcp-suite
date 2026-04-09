'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Flower2, Instagram, Facebook, Twitter } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Adres',
    lines: ['Bağdat Cad. No: 42', 'Kadıköy, İstanbul'],
    color: 'from-rose/15 to-rose/5',
  },
  {
    icon: Phone,
    title: 'Telefon',
    lines: ['0212 555 12 34', '0532 888 99 00'],
    color: 'from-gold-beauty/15 to-gold-beauty/5',
  },
  {
    icon: Mail,
    title: 'E-posta',
    lines: ['info@lumiere.com', 'randevu@lumiere.com'],
    color: 'from-plum/10 to-plum/5',
  },
  {
    icon: Clock,
    title: 'Saatler',
    lines: ['Pzt - Cmt: 09:00 - 19:00', 'Pazar: Kapalı'],
    color: 'from-champagne/30 to-champagne/10',
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
    <section id="iletisim" className="relative py-16 md:py-20 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-blush/20 to-cream" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Flower2 className="w-4 h-4 text-rose" />
            <span className="text-xs uppercase tracking-[0.3em] text-rose-dark font-medium">İletişim</span>
            <Flower2 className="w-4 h-4 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Bize <span className="shimmer-text-rose">Ulaşın</span>
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-[200px] mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Flower2 className="w-3 h-3 text-rose/40" />
          </motion.div>
        </div>

        {/* Contact Cards - 2 columns, smaller */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-10">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-rose/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 100 }}
              whileHover={{
                y: -4,
                boxShadow: '0 12px 30px rgba(232, 160, 191, 0.12)',
              }}
            >
              <motion.div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-2.5`}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <card.icon className="w-4 h-4 text-rose" />
              </motion.div>
              <h3 className="font-bold text-plum text-sm mb-1.5">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-xs text-plum/50 leading-relaxed">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Map + Social - side by side, smaller */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Map Placeholder */}
          <motion.div
            className="relative rounded-xl overflow-hidden h-48 bg-white/60 border border-rose/10"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(232,160,191,0.08)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <div className="w-3 h-3 bg-rose rounded-full relative z-10 shadow-lg" />
                <motion.div
                  className="absolute inset-0 bg-rose/30 rounded-full"
                  animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-rose/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-rose flex-shrink-0" />
                <p className="text-[11px] text-plum/60">Bağdat Cad. No: 42, Kadıköy</p>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex flex-col justify-center bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-rose/10"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-bold text-plum mb-2">Bizi Takip Edin</h3>
            <p className="text-plum/50 text-xs mb-4 leading-relaxed">
              Kampanya ve güncel çalışmaları takip edin.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className={`w-10 h-10 rounded-xl bg-white border border-rose/10 flex items-center justify-center text-plum/40 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
