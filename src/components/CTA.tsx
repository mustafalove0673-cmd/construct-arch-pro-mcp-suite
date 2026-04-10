'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#0D0B08]" />

      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A951]/[0.04] rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C8A951]/10 border border-[#C8A951]/20 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#C8A951] rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-[#C8A951] tracking-wider uppercase">Ücretsiz Keşif & Teklif</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Projenizi <span className="text-[#C8A951]">Hayata Geçirelim</span>
          </h2>

          <p className="max-w-2xl mx-auto text-[#F5F0E8]/40 text-lg leading-relaxed mb-10">
            Hayalinizdeki projeyi birlikte planlayalım. Ücretsiz keşif ve detaylı
            proje teklifi için hemen bizimle iletişime geçin. Uzman ekibimiz
            size en kısa sürede dönüş yapacaktır.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: '📞', label: 'Bizi Arayın', value: '0 (XXX) XXX XX XX' },
              { icon: '📧', label: 'E-Posta', value: 'info@urekolgu.com' },
              { icon: '📍', label: 'Adres', value: 'Ankara, Türkiye' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 bg-[#111111]/60 border border-[#C8A951]/10 rounded-xl"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-[#F5F0E8]/30 mb-1 font-medium">{item.label}</div>
                <div className="text-sm font-bold text-[#F5F0E8]">{item.value}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/"
              target="_blank"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl shadow-2xl shadow-green-600/20 hover:shadow-green-600/40 transition-all duration-500"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">WhatsApp ile Ulaşın</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 px-8 py-4 border-2 border-[#C8A951]/40 text-[#C8A951] font-bold rounded-xl hover:bg-[#C8A951]/10 hover:border-[#C8A951] transition-all duration-500"
            >
              <span>Teklif Formu</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
