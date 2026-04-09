'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { X, ZoomIn, Gem } from 'lucide-react';

const galleryItems = [
  { src: '/images/beauty/gallery-hair.jpg', title: 'Saç Boyama', category: 'saç' },
  { src: '/images/beauty/nail-art-blue.jpg', title: 'Nail Art - Mavi', category: 'tırnak' },
  { src: '/images/beauty/gallery-spa.jpg', title: 'Spa & Cilt Bakımı', category: 'spa' },
  { src: '/images/beauty/nail-art-pink.jpg', title: 'Jel Tırnak', category: 'tırnak' },
  { src: '/images/beauty/gallery-makeup.jpg', title: 'Profesyonel Makyaj', category: 'makyaj' },
  { src: '/images/beauty/nail-art-purple.jpg', title: 'Tırnak Tasarım', category: 'tırnak' },
  { src: '/images/beauty/gallery-nails.jpg', title: 'Manikür & Pedikür', category: 'tırnak' },
  { src: '/images/beauty/nail-art-hearts.jpg', title: 'Nail Art - Kalpler', category: 'tırnak' },
  { src: '/images/beauty/gel-nail-application.jpg', title: 'Gel Tırnak Uygulama', category: 'tırnak' },
  { src: '/images/beauty/interior-reception.jpg', title: 'Merkezimiz', category: 'merkez' },
  { src: '/images/beauty/gallery1.jpg', title: 'Saç Bakımı', category: 'saç' },
  { src: '/images/beauty/gallery2.jpg', title: 'Styling', category: 'saç' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleKeyDown = useCallback((e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); }, []);

  return (
    <section id="galeri" className="relative py-16 md:py-24 overflow-hidden bg-navy" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.div className="flex items-center justify-center gap-3 mb-3" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            <Gem className="w-4 h-4 text-coral" />
            <span className="text-xs uppercase tracking-[0.3em] text-coral font-medium">Galeri</span>
            <Gem className="w-4 h-4 text-coral" />
          </motion.div>
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
            Çalışmalarımız
          </motion.h2>
          <motion.div className="ornament-divider max-w-[200px] mx-auto" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
            <Gem className="w-3 h-3 text-coral/40" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div key={item.title} className="relative group cursor-pointer rounded-xl overflow-hidden border border-white/5" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.06, duration: 0.5 }} whileHover={{ y: -4, zIndex: 5 }} onClick={() => setLightbox(i)}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <motion.img src={item.src} alt={item.title} className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} loading="lazy" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 flex items-center justify-center transition-all duration-400">
                  <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="text-white font-bold text-xs sm:text-sm">{item.title}</span>
                    <div className="w-8 h-8 rounded-full border-2 border-coral flex items-center justify-center"><ZoomIn className="w-3.5 h-3.5 text-coral" /></div>
                  </div>
                </div>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-navy/80 backdrop-blur-sm text-[9px] font-medium text-coral uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-xl p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setLightbox(null)} onKeyDown={handleKeyDown}>
            <motion.button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10" onClick={() => setLightbox(null)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><X className="w-5 h-5" /></motion.button>
            <motion.button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : galleryItems.length - 1); }} whileHover={{ scale: 1.1 }}><span className="text-xl">‹</span></motion.button>
            <motion.button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < galleryItems.length - 1 ? lightbox + 1 : 0); }} whileHover={{ scale: 1.1 }}><span className="text-xl">›</span></motion.button>
            <motion.div className="relative max-w-3xl max-h-[80vh] w-full" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 25 }} onClick={(e) => e.stopPropagation()}>
              <img src={galleryItems[lightbox].src} alt={galleryItems[lightbox].title} className="w-full h-full object-contain rounded-xl" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full glass"><span className="text-white text-sm font-medium">{galleryItems[lightbox].title}</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
