'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative bg-charcoal-dark border-t border-gold/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center bg-gold/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Scissors className="w-6 h-6 text-gold" />
              </motion.div>
              <div>
                <span className="text-gold font-bold text-xl tracking-wider uppercase block">Klasik</span>
                <span className="text-gold-light/70 text-xs tracking-[0.3em] uppercase">Berber</span>
              </div>
            </div>
            <p className="text-gold-light/40 text-sm leading-relaxed mb-6">
              1998&apos;den beri İstanbul&apos;un kalbinde profesyonel erkek kuaförü hizmeti sunuyoruz.
              Geleneksel ustalık, modern tarz.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-6 h-[1px] bg-gold" />
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              {['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Galeri', 'Fiyatlar', 'Randevu'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={`#${link.toLowerCase().replace(' ', '').replace('ü', 'u')}`}
                    className="text-gold-light/40 text-sm hover:text-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-6 h-[1px] bg-gold" />
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              {['Saç Kesimi', 'Sakal Tıraşı', 'Klasik Tıraş', 'Damat Paketi', 'Yüz Bakımı', 'Saç Boyama'].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href="#hizmetler"
                    className="text-gold-light/40 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-6 h-[1px] bg-gold" />
              İletişim
            </h3>
            <div className="space-y-4">
              <div className="text-gold-light/40 text-sm">
                <p className="mb-1">İstiklal Caddesi No: 42</p>
                <p>Beyoğlu, İstanbul 34430</p>
              </div>
              <div className="text-gold-light/40 text-sm">
                <p>+90 212 123 45 67</p>
                <p>+90 532 987 65 43</p>
              </div>
              <div className="text-gold-light/40 text-sm">
                <p>info@klasikberber.com</p>
              </div>
              <div className="text-gold-light/40 text-sm">
                <p>Pzt - Cmt: 09:00 - 20:00</p>
                <p>Pazar: 10:00 - 18:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gold-light/30 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Klasik Berber. Tüm hakları saklıdır.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
            onClick={scrollToTop}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
