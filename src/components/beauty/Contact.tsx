'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Gem, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

const contactCards = [
  { icon: MapPin, title: 'Adres', lines: ['Saray Cumhuriyet, Edebali', 'Sk. No:6/C, Pursaklar/Ankara'], color: 'from-coral/15 to-coral/5' },
  { icon: Phone, title: 'Telefon', lines: ['0533 570 12 08'], href: 'tel:05335701208', color: 'from-gold/15 to-gold/5' },
  { icon: Clock, title: 'Çalışma Saatleri', lines: ['Her Gün 09:00 – 21:00'], color: 'from-coral/10 to-gold/5' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="iletisim" className="relative py-16 md:py-20 overflow-hidden bg-navy" ref={sectionRef}>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.div className="flex items-center justify-center gap-3 mb-3" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            <Gem className="w-4 h-4 text-coral" />
            <span className="text-xs uppercase tracking-[0.3em] text-coral font-medium">İletişim</span>
            <Gem className="w-4 h-4 text-coral" />
          </motion.div>
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
            Bize <span className="shimmer-text-gold">Ulaşın</span>
          </motion.h2>
          <motion.div className="ornament-divider max-w-[200px] mx-auto" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
            <Gem className="w-3 h-3 text-coral/40" />
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          {contactCards.map((card, i) => (
            <motion.a key={card.title} href={card.href || '#'} className="bg-navy-surface rounded-xl p-4 border border-white/5 text-center block" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 100 }} whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(255,107,107,0.1)' }}>
              <motion.div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-2.5`} whileHover={{ rotate: 15, scale: 1.1 }}>
                <card.icon className="w-4 h-4 text-coral" />
              </motion.div>
              <h3 className="font-bold text-white text-sm mb-1.5">{card.title}</h3>
              {card.lines.map((line) => (<p key={line} className="text-xs text-[#8BA3C4] leading-relaxed">{line}</p>))}
            </motion.a>
          ))}
        </div>

        <motion.div className="grid grid-cols-3 gap-3 mb-8" initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <motion.a href="tel:05335701208" className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-coral to-coral-dark text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-coral/20" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Phone className="w-4 h-4" /><span className="hidden sm:inline">Ara</span>
          </motion.a>
          <motion.a href="https://wa.me/905335701208" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-green-500/20" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <MessageCircle className="w-4 h-4" /><span className="hidden sm:inline">WhatsApp</span>
          </motion.a>
          <motion.a href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-navy-surface text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/5" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Navigation className="w-4 h-4" /><span className="hidden sm:inline">Yol Tarifi</span>
          </motion.a>
        </motion.div>

        <motion.div className="relative rounded-xl overflow-hidden h-56 sm:h-72 bg-navy-surface border border-white/5 shadow-md" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
          <iframe src="https://maps.google.com/maps?q=Saray+Cumhuriyet,+Edebali+Sk.+No:6/C,+Pursaklar/Ankara&t=&z=15&ie=UTF8&iwloc=&output=embed" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ayşe Nur Karcı Beauty Vip Konum" />
          <motion.a href="https://maps.google.com/?q=Ayşe+Nur+Karcı+Beauty+Vip+Pursaklar+Ankara" target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 flex items-center gap-2 px-4 py-2 bg-navy-mid/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/5 text-white hover:bg-navy-surface transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <MapPin className="w-3.5 h-3.5 text-coral" /><span className="text-xs font-medium">Büyük Haritayı Aç</span><ExternalLink className="w-3 h-3 text-[#5A7599]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
