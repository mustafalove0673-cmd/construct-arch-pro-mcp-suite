'use client';

import { motion } from 'framer-motion';
import { Flower2, Heart, ArrowUp, Instagram, Facebook, Phone, MapPin, Clock, Star, Navigation, MessageCircle, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Fiyatlar', href: '#fiyatlar' },
];

const serviceLinks = [
  'Saç Bakım', 'Cilt Bakımı', 'Makyaj', 'Nail Art', 'Spa & Masaj', 'Saç Boyama',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-plum-dark text-white overflow-hidden">
      {/* Animated gradient top border */}
      <motion.div
        className="h-0.5"
        style={{
          background: 'linear-gradient(90deg, #e8a0bf, #c8a96e, #e8a0bf, #c8a96e)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {/* Logo & Info */}
          <div>
            <motion.a
              href="#anasayfa"
              className="flex items-center gap-2.5 mb-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-9 h-9 rounded-full border-2 border-rose flex items-center justify-center bg-rose/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Flower2 className="w-4 h-4 text-rose" />
              </motion.div>
              <div>
                <span className="shimmer-text-rose font-bold text-base block leading-tight">İpek Özmel</span>
                <span className="text-rose/40 text-[9px] tracking-[0.2em] uppercase">Güzellik Merkezi</span>
              </div>
            </motion.a>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < 5 ? 'text-gold-beauty fill-gold-beauty' : 'text-white/20'}`} />
                ))}
              </div>
              <span className="text-xs text-white/50">4.7 (1.172 yorum)</span>
            </div>

            <p className="text-white/35 text-xs leading-relaxed mb-3">
              Aksaray&apos;ın güvenilir güzellik merkezi. 25+ yıl profesyonel deneyim.
            </p>

            {/* Quick action buttons */}
            <div className="flex gap-2">
              <motion.a
                href="tel:05326730668"
                className="w-8 h-8 rounded-lg bg-rose/20 border border-rose/20 flex items-center justify-center text-rose hover:bg-rose/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ara"
              >
                <Phone className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="https://wa.me/905326730668"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="https://maps.google.com/?q=İpek+Özmel+Güzellik+Merkezi+Aksaray"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-rose hover:border-rose/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Harita"
              >
                <Navigation className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-rose hover:border-rose/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="mailto:ipekozmelresmi@gmail.com"
                className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="E-Posta"
              >
                <Mail className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2">
              <div className="w-5 h-px bg-rose" />
              Linkler
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-white/35 hover:text-rose text-xs transition-colors inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2">
              <div className="w-5 h-px bg-rose" />
              Hizmetler
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#hizmetler"
                    className="text-white/35 hover:text-rose text-xs transition-colors inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2">
              <div className="w-5 h-px bg-rose" />
              İletişim
            </h4>
            <ul className="space-y-2.5 text-xs text-white/35">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3 h-3 text-rose/60 flex-shrink-0 mt-0.5" />
                Taşpazar, Şht. Tğm. Yalçın Sk. 10/A D:24, Aksaray
              </li>
              <li className="flex items-start gap-1.5">
                <Phone className="w-3 h-3 text-rose/60 flex-shrink-0 mt-0.5" />
                <motion.a href="tel:05326730668" className="hover:text-rose transition-colors">
                  0532 673 06 68
                </motion.a>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="w-3 h-3 text-rose/60 flex-shrink-0 mt-0.5" />
                Her gün 09:00 – 21:00
              </li>
              <li className="flex items-start gap-1.5">
                <Mail className="w-3 h-3 text-rose/60 flex-shrink-0 mt-0.5" />
                <motion.a href="mailto:ipekozmelresmi@gmail.com" className="hover:text-rose transition-colors">
                  ipekozmelresmi@gmail.com
                </motion.a>
              </li>
              <li className="flex items-start gap-1.5">
                <Star className="w-3 h-3 text-gold-beauty/60 flex-shrink-0 mt-0.5" />
                <span className="text-gold-beauty/60">4.7 puan • 1.172 yorum</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <p className="text-white/20 text-[10px] flex items-center gap-1">
            © 2024 İpek Özmel Güzellik Merkezi. <Heart className="w-2 h-2 text-rose/30 inline" />
          </p>
          <motion.button
            className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/35 hover:text-rose hover:border-rose/30 transition-all"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Yukarı"
          >
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
