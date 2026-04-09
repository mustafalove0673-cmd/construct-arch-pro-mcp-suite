'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Star, Flower2, Instagram, MessageCircle, Navigation, ExternalLink, Mail } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Adres',
    lines: ['Taşpazar, Şht. Tğm. Yalçın', 'Sk. 10/A D:24, Aksaray'],
    color: 'from-rose/15 to-rose/5',
  },
  {
    icon: Phone,
    title: 'Telefon',
    lines: ['0532 673 06 68'],
    href: 'tel:05326730668',
    color: 'from-gold-beauty/15 to-gold-beauty/5',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    lines: ['Her Gün 09:00 – 21:00'],
    color: 'from-champagne/30 to-champagne/10',
  },
  {
    icon: Star,
    title: 'Değerlendirme',
    lines: ['⭐ 4.7 puan', '1.172 Google yorumu'],
    color: 'from-green-100/50 to-green-50/50',
  },
  {
    icon: Mail,
    title: 'E-Posta',
    lines: ['ipekozmelresmi@gmail.com'],
    href: 'mailto:ipekozmelresmi@gmail.com',
    color: 'from-purple-100/50 to-purple-50/50',
  },
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

        {/* Contact Cards - 2x2 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href || '#'}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-rose/10 text-center block"
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
            </motion.a>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          className="grid grid-cols-4 gap-3 mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="tel:05326730668"
            className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-rose to-rose-dark text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-rose/20"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(232,160,191,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Ara</span>
          </motion.a>
          <motion.a
            href="https://wa.me/905326730668"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-green-500/20"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(34,197,94,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>
          <motion.a
            href="https://maps.google.com/?q=İpek+Özmel+Güzellik+Merkezi+Aksaray"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-plum text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-plum/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Navigation className="w-4 h-4" />
            <span className="hidden sm:inline">Yol Tarifi</span>
          </motion.a>
          <motion.a
            href="mailto:ipekozmelresmi@gmail.com"
            className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-purple-500/20"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(168,85,247,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">E-Posta</span>
          </motion.a>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          className="relative rounded-xl overflow-hidden h-56 sm:h-72 bg-white/60 border border-rose/10 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.5!2d34.0256!3d38.3715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d671c81934bb87%3A0x4d6697b1b610066c!2s%C4%B0pek%20%C3%96zmel%20G%C3%BCzellik%20Merkezi!5e0!3m2!1str!2str!4v1700000000000"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="İpek Özmel Güzellik Merkezi Konum"
          />
          {/* Map overlay badge */}
          <motion.a
            href="https://maps.google.com/?q=İpek+Özmel+Güzellik+Merkezi+Aksaray"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-rose/10 text-plum hover:bg-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-3.5 h-3.5 text-rose" />
            <span className="text-xs font-medium">Büyük Haritayı Aç</span>
            <ExternalLink className="w-3 h-3 text-plum/40" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
