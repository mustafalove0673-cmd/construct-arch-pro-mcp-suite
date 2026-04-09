'use client';

import { Gem } from 'lucide-react';

const words = [
  'Güzellik', 'VIP', 'Buz Epilasyon', 'Cilt Bakımı', 'Bölgesel İncelme',
  'Kalıcı Makyaj', 'Protez Tırnak', 'Lüks', 'Elegance', 'Premium',
  'Pürüzsüz', 'Işıltılı', 'Zarafet', 'Saç Bakımı', 'Rahatlama', 'Nail Art',
];

export default function Marquee() {
  return (
    <section className="relative py-6 bg-navy-light overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/20 to-transparent" />
      <div className="flex whitespace-nowrap hover:[animation-play-state:paused]">
        <div className="flex items-center gap-8 marquee-scroll">
          {[...words, ...words].map((word, i) => (
            <span key={i} className="inline-flex items-center gap-4">
              <span className="text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase text-[#5A7599] hover:text-coral transition-colors duration-300 cursor-default">
                {word}
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-coral/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
