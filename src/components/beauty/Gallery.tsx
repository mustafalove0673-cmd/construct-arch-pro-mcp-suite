'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { X, ZoomIn, Flower2 } from 'lucide-react';

const galleryItems = [
  { src: '/images/beauty/gallery1.jpg', title: 'Saç Bakımı' },
  { src: '/images/beauty/gallery2.jpg', title: 'Nail Art' },
  { src: '/images/beauty/gallery3.jpg', title: 'Spa & Cilt' },
  { src: '/images/beauty/gallery4.jpg', title: 'Makyaj' },
  { src: '/images/beauty/gallery5.jpg', title: 'Saç Boyama' },
  { src: '/images/beauty/gallery6.jpg', title: 'Masaj Terapi' },
];

function GalleryItem({ item, index, onClick }: { item: typeof galleryItems[0]; index: number; onClick: () => void }) {
  return (
    <motion.div
      className="relative group cursor-pointer rounded-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.5, type: 'spring' }}
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
        <motion.img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />

        {/* Dark overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-plum/0 group-hover:bg-plum/50 flex items-center justify-center transition-colors duration-400"
        >
          <motion.div
            className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400"
          >
            <span className="text-white font-bold text-sm">{item.title}</span>
            <motion.div
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"
              initial={{ rotate: 90, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <ZoomIn className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-beauty/0 group-hover:border-gold-beauty/60 transition-colors duration-400 rounded-tl-md" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-beauty/0 group-hover:border-gold-beauty/60 transition-colors duration-400 rounded-br-md" />
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setLightbox(null);
  }, []);

  return (
    <section id="galeri" className="relative py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Flower2 className="w-4 h-4 text-rose" />
            <span className="text-xs uppercase tracking-[0.3em] text-rose-dark font-medium">Galeri</span>
            <Flower2 className="w-4 h-4 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Çalışmalarımız
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-[200px] mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Flower2 className="w-3 h-3 text-rose/40" />
          </motion.div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <GalleryItem
              key={item.title}
              item={item}
              index={i}
              onClick={() => setLightbox(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-plum/90 backdrop-blur-xl p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            onKeyDown={handleKeyDown}
          >
            <motion.button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              className="relative max-w-3xl max-h-[80vh] w-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].title}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full glass">
                <span className="text-white text-sm font-medium">{galleryItems[lightbox].title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
