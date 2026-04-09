'use client';

import { motion } from 'framer-motion';
import { Flower2, Heart, ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Fiyatlar', href: '#fiyatlar' },
  { label: 'Yorumlar', href: '#yorumlar' },
];

const serviceLinks = [
  'Saç Bakım & Kesim',
  'Cilt Bakımı',
  'Profesyonel Makyaj',
  'Nail Art & Manikür',
  'Spa & Masaj',
  'Saç Boyama',
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
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, #e8a0bf, #c8a96e, #e8a0bf, #c8a96e, #e8a0bf)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.a
              href="#anasayfa"
              className="flex items-center gap-3 mb-4 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-10 h-10 rounded-full border-2 border-rose flex items-center justify-center bg-rose/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Flower2 className="w-5 h-5 text-rose" />
              </motion.div>
              <div>
                <span className="shimmer-text-rose font-bold text-xl block">Lumière</span>
                <span className="text-rose/40 text-[10px] tracking-[0.3em] uppercase">Beauty Center</span>
              </div>
            </motion.a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              25 yılı aşkın deneyimimizle kadınların güzelliğine dokunuyoruz. Premium hizmet ve konforlu ortam.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-rose hover:border-rose/30 hover:bg-rose/10 transition-all"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white/80 uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
              <div className="w-6 h-px bg-rose" />
              Hızlı Linkler
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-white/40 hover:text-rose text-sm transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white/80 uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
              <div className="w-6 h-px bg-rose" />
              Hizmetler
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#hizmetler"
                    className="text-white/40 hover:text-rose text-sm transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white/80 uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
              <div className="w-6 h-px bg-rose" />
              İletişim
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                Bağdat Cad. No: 42, Kadıköy, İstanbul
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                0212 555 12 34
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                info@lumierebeauty.com
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                Pzt - Cmt: 09:00 - 19:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs flex items-center gap-1">
            © 2024 Lumière Beauty Center. Tüm hakları saklıdır.{' '}
            <Heart className="w-3 h-3 text-rose/40 inline" />
          </p>

          {/* Back to top */}
          <motion.button
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-rose hover:border-rose/30 hover:bg-rose/10 transition-all"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Yukarı Çık"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
