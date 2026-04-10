'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>
    ),
    title: 'Konut İnşaatı',
    desc: 'Modern yaşam standartlarına uygun, güvenli ve konforlu konut projeleri geliştiriyoruz. Her detay sizin için tasarlanır.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    title: 'Ticari Yapılar',
    desc: 'İş dünyasının ihtiyaçlarına özel, işlevsel ve estetik ticari yapı projeleri üretiyoruz.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18l-2 8H5L3 3zm0 0l2 8m0 0l4 4h4l4-4m0 0V17a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z" /></svg>
    ),
    title: 'Villa & Müstakil Ev',
    desc: 'Özel tasarlanmış lüks villa ve müstakil ev projeleri ile hayalinizdeki evi inşa ediyoruz.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: 'Mimari Danışmanlık',
    desc: 'Uzman mimar kadromuzla projenizin her aşamasında profesyonel danışmanlık hizmeti sunuyoruz.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
    ),
    title: 'Restorasyon & Yenileme',
    desc: 'Mevcut yapıların restore edilmesi ve modern standartlara uygun şekilde yenilenmesi konusunda uzmanız.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: 'Anahtar Teslim Projeler',
    desc: 'Proje tasarımından anahtar teslimine kadar tüm süreci biz yönetiyoruz. Sizin için tek noktadan çözüm.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0B08] to-[#0A0A0A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C8A951]/10 border border-[#C8A951]/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#C8A951] rounded-full" />
            <span className="text-xs font-semibold text-[#C8A951] tracking-wider uppercase">Hizmetlerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Kapsamlı <span className="text-[#C8A951]">İnşaat</span> Çözümleri
          </h2>
          <p className="max-w-2xl mx-auto text-[#F5F0E8]/40 text-lg">
            Her projeye özel yaklaşım ile hayalinizdeki yapıyı gerçekleştiriyoruz
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              className="group relative p-8 bg-[#111111]/60 border border-[#C8A951]/10 rounded-2xl hover:border-[#C8A951]/40 hover:bg-[#151510] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C8A951]/5 rounded-bl-[60px] rounded-tr-2xl group-hover:bg-[#C8A951]/10 transition-colors duration-500" />
              <div className="w-14 h-14 bg-[#C8A951]/10 rounded-xl flex items-center justify-center text-[#C8A951] mb-5 group-hover:bg-[#C8A951]/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#F5F0E8] group-hover:text-[#C8A951] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-[#F5F0E8]/40 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#C8A951]/60 group-hover:text-[#C8A951] transition-colors duration-300">
                <span>Detaylı Bilgi</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
