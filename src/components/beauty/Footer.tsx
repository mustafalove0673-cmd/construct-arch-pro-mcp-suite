'use client';

import { motion } from 'framer-motion';
import { Flower2, Heart, ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Fiyatlar', href: '#fiyatlar' },
];

const serviceLinks = [
  'Saç Bakım', 'Cilt Bakımı', 'Makyaj', 'Nail Art', 'Spa', 'Boya',
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo */}
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
                <span className="shimmer-text-rose font-bold text-lg block leading-tight">Lumière</span>
                <span className="text-rose/40 text-[9px] tracking-[0.2em] uppercase">Beauty Center</span>
              </div>
            </motion.a>
            <p className="text-white/35 text-xs leading-relaxed mb-4">
              25+ yıl deneyim. Premium güzellik hizmeti.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-rose hover:border-rose/30 hover:bg-rose/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
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
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
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

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white/70 uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
              <div className="w-5 h-px bg-rose" />
              İletişim
            </h4>
            <ul className="space-y-2 text-xs text-white/35">
              <li className="flex items-start gap-1.5">
                <span className="mt-1 w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                Bağdat Cad. No: 42, Kadıköy
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-1 w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                0212 555 12 34
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-1 w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                info@lumierebeauty.com
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-1 w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                Pzt - Cmt: 09:00 - 19:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar - compact */}
      <div className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <p className="text-white/20 text-[11px] flex items-center gap-1">
            © 2024 Lumière Beauty. <Heart className="w-2.5 h-2.5 text-rose/30 inline" />
          </p>
          <motion.button
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/35 hover:text-rose hover:border-rose/30 transition-all"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Yukarı"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
