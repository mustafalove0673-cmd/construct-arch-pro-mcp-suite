'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adres',
    details: ['İstiklal Caddesi No: 42', 'Beyoğlu, İstanbul 34430'],
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: ['+90 212 123 45 67', '+90 532 987 65 43'],
  },
  {
    icon: Mail,
    title: 'E-posta',
    details: ['info@klasikberber.com', 'randevu@klasikberber.com'],
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    details: ['Pazartesi - Cumartesi: 09:00 - 20:00', 'Pazar: 10:00 - 18:00'],
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="iletisim" className="relative py-24 md:py-32 bg-charcoal overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">İletişim</span>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bize <span className="shimmer-text">Ulaşın</span>
          </motion.h2>
          <motion.p
            className="text-gold-light/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sorularınız veya randevu talepleriniz için bize ulaşabilirsiniz
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="group p-6 bg-charcoal-light/50 rounded-sm border border-gold/10 text-center hover:border-gold/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <info.icon className="w-6 h-6 text-gold" />
              </motion.div>
              <h3 className="text-white font-semibold text-lg mb-3">{info.title}</h3>
              {info.details.map((detail) => (
                <p key={detail} className="text-gold-light/50 text-sm">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          className="relative rounded-sm overflow-hidden border border-gold/10 h-[400px] bg-charcoal-light/30"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-16 h-16 text-gold/40 mx-auto mb-4" />
              </motion.div>
              <p className="text-gold-light/40 text-lg">İstiklal Caddesi No: 42, Beyoğlu</p>
              <p className="text-gold-light/30 text-sm mt-1">İstanbul, Türkiye</p>
            </div>
          </div>
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
