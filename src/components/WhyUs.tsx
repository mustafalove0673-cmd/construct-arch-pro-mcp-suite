'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  { num: '01', title: 'Deneyimli Kadro', desc: 'Her biri alanında uzman 50+ profesyonel mühendis, mimar ve işçi kadromuzla projelerinizi güvenle teslim ediyoruz.' },
  { num: '02', title: 'Premium Malzeme', desc: 'Tüm projelerimizde en yüksek standartlardaki yapı malzemelerini kullanarak dayanıklılığı ve kaliteyi garanti ediyoruz.' },
  { num: '03', title: 'Zamanında Teslimat', desc: 'Projelerimizi belirlenen takvime sadık kalarak, söz verilen tarihte eksiksiz şekilde teslim ediyoruz.' },
  { num: '04', title: 'Şeffaf Süreç', desc: 'Projenin her aşamasında düzenli raporlama ve açık iletişim ile sizi bilgilendiriyoruz.' },
  { num: '05', title: 'Garanti & Destek', desc: 'Teslim sonrası garanti kapsamında teknik destek ve bakım hizmetleri ile yanınızdayız.' },
  { num: '06', title: 'Modern Tasarım', desc: 'Güncel mimari trendleri ve teknolojileri takip ederek estetik ve fonksiyonel tasarımlar sunuyoruz.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0B08] to-[#0A0A0A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C8A951]/10 border border-[#C8A951]/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#C8A951] rounded-full" />
              <span className="text-xs font-semibold text-[#C8A951] tracking-wider uppercase">Neden Biz?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Bizi <span className="text-[#C8A951]">Tercih</span>
              <br />Etmeniz Gereken 6 Neden
            </h2>
            <p className="text-[#F5F0E8]/40 text-lg leading-relaxed mb-8">
              20 yılı aşkın sektör deneyimimizle, her projede kalite, güven ve
              müşteri memnuniyetini ön planda tutuyoruz. İşte bizi farklı kılan
              unsurlar...
            </p>

            {/* Decorative line */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#C8A951] to-transparent rounded-full" />
          </motion.div>

          {/* Right - Reasons */}
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.num}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i + 1}
                className="group relative p-6 bg-[#111111]/40 border border-[#C8A951]/10 rounded-2xl hover:border-[#C8A951]/30 hover:bg-[#151510] transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <span className="text-3xl font-black text-[#C8A951]/20 group-hover:text-[#C8A951]/40 transition-colors duration-300">
                    {reason.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#F5F0E8] mb-2 group-hover:text-[#C8A951] transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[#F5F0E8]/40 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
