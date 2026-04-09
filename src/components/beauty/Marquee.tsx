'use client';

import { Sparkles } from 'lucide-react';

const words = [
  'Güzellik',
  'VIP',
  'Buz Epilasyon',
  'Cilt Bakımı',
  'Bölgesel İncelme',
  'Kalıcı Makyaj',
  'Protez Tırnak',
  'Lüks',
  'Elegance',
  'Premium',
  'Pürüzsüz',
  'Işıltılı',
  'Zarafet',
  'Saç Bakımı',
  'Rahatlama',
  'Nail Art',
];

export default function Marquee() {
  return (
    <section className="relative py-6 bg-[#111] overflow-hidden">
      {/* Decorative top & bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b76e79]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="flex whitespace-nowrap hover:[animation-play-state:paused]">
        <div className="flex items-center gap-8 marquee-scroll">
          {[...words, ...words].map((word, i) => (
            <span key={i} className="inline-flex items-center gap-4">
              <span className="text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase text-[#666] hover:text-[#b76e79] transition-colors duration-300 cursor-default">
                {word}
              </span>
              <Sparkles className="w-3 h-3 text-[#b76e79]/25 rotate-45" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
