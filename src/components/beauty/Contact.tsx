'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Sparkles, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Adres',
    lines: ['Saray Cumhuriyet, Edebali', 'Sk. No:6/C, Pursaklar/Ankara'],
    color: 'from-[#b76e79]/15 to-[#b76e79]/5',
  },
  {
    icon: Phone,
    title: 'Telefon',
    lines: ['0533 570 12 08'],
    href: 'tel:05335701208',
    color: 'from-[#c9a84c]/15 to-[#c9a84c]/5',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    lines: ['Her Gün 09:00 – 21:00'],
    color: 'from-[#d4a088]/20 to-[#d4a088]/5',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="iletisim" className="relative py-16 md:py-20 overflow-hidden bg-[#0a0a0a]" ref={sectionRef}>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-[#b76e79]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#b76e79] font-medium">İletişim</span>
            <Sparkles className="w-4 h-4 text-[#b76e79] rotate-180" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#f5f5f5]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Bize <span className="shimmer-text-gold">Ulaşın</span>
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-[200px] mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Sparkles className="w-3 h-3 text-[#c9a84c]/40" />
          </motion.div>
        </div>

        {/* Contact Cards - 3 columns */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href || '#'}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-4 border border-white/[0.06] text-center block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 100 }}
              whileHover={{
                y: -4,
                boxShadow: '0 12px 30px rgba(183, 110, 121, 0.1)',
              }}
            >
              <motion.div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-2.5`}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <card.icon className="w-4 h-4 text-[#b76e79]" />
              </motion.div>
              <h3 className="font-bold text-[#f5f5f5] text-sm mb-1.5">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-xs text-[#a0a0a0] leading-relaxed">{line}</p>
              ))}
            </motion.a>
          ))}
        </div>

        {/* Action Buttons - 3 buttons */}
        <motion.div
          className="grid grid-cols-3 gap-3 mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="tel:05335701208"
            className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#b76e79] to-[#8f4a55] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-[#b76e79]/20"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(183,110,121,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Ara</span>
          </motion.a>
          <motion.a
            href="https://wa.me/905335701208"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-green-500/20"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(34,197,94,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>
          <motion.a
            href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-[#252525] text-[#a0a0a0] font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md border border-white/[0.06]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Navigation className="w-4 h-4" />
            <span className="hidden sm:inline">Yol Tarifi</span>
          </motion.a>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          className="relative rounded-xl overflow-hidden h-56 sm:h-72 bg-[#1a1a1a] border border-white/[0.06] shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Saray+Cumhuriyet,+Edebali+Sk.+No:6/C,+Pursaklar/Ankara&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ayşe Nur Karcı Beauty Vip Konum"
          />
          {/* Map overlay badge */}
          <motion.a
            href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/[0.08] text-[#f5f5f5] hover:bg-[#252525] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-3.5 h-3.5 text-[#b76e79]" />
            <span className="text-xs font-medium">Büyük Haritayı Aç</span>
            <ExternalLink className="w-3 h-3 text-[#666]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
