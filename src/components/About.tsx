'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Section bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Construction image placeholder with geometric design */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F]">
                {/* Architectural grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(200,169,81,0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(200,169,81,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Building outline */}
                <svg viewBox="0 0 400 300" className="w-full h-full opacity-20">
                  <rect x="50" y="80" width="120" height="220" fill="none" stroke="#C8A951" strokeWidth="1.5" />
                  <rect x="70" y="100" width="25" height="30" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="110" y="100" width="25" height="30" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="70" y="150" width="25" height="30" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="110" y="150" width="25" height="30" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="200" y="40" width="150" height="260" fill="none" stroke="#C8A951" strokeWidth="1.5" />
                  <rect x="220" y="60" width="30" height="35" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="270" y="60" width="30" height="35" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="220" y="115" width="30" height="35" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="270" y="115" width="30" height="35" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="220" y="170" width="30" height="35" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                  <rect x="270" y="170" width="30" height="35" fill="none" stroke="#C8A951" strokeWidth="0.8" />
                </svg>
              </div>
              {/* Gold overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 sm:right-8 bg-[#111111] border border-[#C8A951]/30 rounded-2xl p-5 shadow-2xl"
            >
              <div className="text-3xl font-black text-[#C8A951]">20+</div>
              <div className="text-xs text-[#F5F0E8]/50 font-medium">Yıllık Tecrübe</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={1}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C8A951]/10 border border-[#C8A951]/20 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#C8A951] rounded-full" />
              <span className="text-xs font-semibold text-[#C8A951] tracking-wider uppercase">Hakkımızda</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6"
            >
              Kaliteyi ve{' '}
              <span className="text-[#C8A951]">Güveni</span>
              <br />Her Yonunda Sunuyoruz
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={3}
              className="text-[#F5F0E8]/50 leading-relaxed mb-8 text-base lg:text-lg"
            >
              ÜREKOL GÜ İNŞAAT olarak 20 yılı aşkın süredir sektörde faaliyet gösteriyoruz.
              Müşterilerimize sadece binalar değil, yaşanacak mekanlar ve geleceğin mirasını
              inşa ediyoruz. Modern mimari anlayışımız, deneyimli ekibimiz ve kaliteli
              malzeme kullanımımızla her projede fark yaratıyoruz.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={4}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                { icon: '🏗️', title: 'Kaliteli Malzeme', desc: 'En üst standartlarda yapı malzemeleri' },
                { icon: '⏱️', title: 'Zamanında Teslimat', desc: 'Projeleri planlanan sürede tamamlama' },
                { icon: '🏆', title: 'Ödüllü Projeler', desc: 'Sektörde kabul gören başarılı işler' },
                { icon: '🤝', title: 'Şeffaf Süreç', desc: 'Her aşamada müşteri ile iletişim' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-[#111111]/50 border border-[#C8A951]/10 rounded-xl hover:border-[#C8A951]/30 transition-colors duration-300"
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="text-sm font-bold text-[#F5F0E8] mb-1">{item.title}</div>
                  <div className="text-xs text-[#F5F0E8]/40">{item.desc}</div>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={5}
              href="#services"
              className="inline-flex items-center gap-2 text-[#C8A951] font-semibold hover:gap-4 transition-all duration-300"
            >
              Hizmetlerimizi Keşfedin
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
