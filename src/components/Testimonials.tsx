'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  { name: 'Ahmet Yılmaz', role: 'Grand Residence Müdürü', text: 'ÜREKOL GÜ ile çalışmak gerçekten keyifti. Projeyi zamanında ve beklentilerimizin üzerinde teslim ettiler. Kalite standartları mükemmeldi.', rating: 5 },
  { name: 'Fatma Kaya', role: 'Gül Villaları Sahibi', text: 'Villamız hayal ettiğimizden çok daha güzel oldu. Her aşamada bizimle iletişim halindeydiler ve her detayı özenle ele aldılar.', rating: 5 },
  { name: 'Mehmet Demir', role: 'Trade Center Yatırımcısı', text: 'Ticari projemizde profesyonel yaklaşımları ve teknik bilgileri sayesinde sorunsuz bir süreç geçirdik. Kesinlikle tavsiye ederim.', rating: 5 },
  { name: 'Ayşe Çelik', role: 'Park Yaşam Sakini', text: 'Evimizin her detayı düşünülmüş, kaliteli malzemeler kullanılmış. Satış sonrası destekleri de çok iyi. Teşekkürler ÜREKOL GÜ!', rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C8A951]/10 border border-[#C8A951]/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#C8A951] rounded-full" />
            <span className="text-xs font-semibold text-[#C8A951] tracking-wider uppercase">Referanslar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Müşterilerimiz <span className="text-[#C8A951]">Ne Diyor?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#F5F0E8]/40 text-lg">
            İşbirliği yaptığımız müşterilerimizin deneyimleri
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 1}
              className="p-6 bg-[#111111]/60 border border-[#C8A951]/10 rounded-2xl hover:border-[#C8A951]/30 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#C8A951]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#F5F0E8]/50 leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C8A951] to-[#8B7D3C] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F5F0E8]">{t.name}</div>
                  <div className="text-xs text-[#F5F0E8]/30">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-[#111111]/60 border border-[#C8A951]/10 rounded-2xl"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[active].rating)].map((_, j) => (
                <svg key={j} className="w-4 h-4 text-[#C8A951]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-[#F5F0E8]/50 leading-relaxed mb-5 italic">"{testimonials[active].text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C8A951] to-[#8B7D3C] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold text-sm">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-[#F5F0E8]">{testimonials[active].name}</div>
                <div className="text-xs text-[#F5F0E8]/30">{testimonials[active].role}</div>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active ? 'bg-[#C8A951] w-8' : 'bg-[#C8A951]/20 hover:bg-[#C8A951]/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
