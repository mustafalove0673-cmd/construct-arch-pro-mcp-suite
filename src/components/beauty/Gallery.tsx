'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { X, ZoomIn, Flower2 } from 'lucide-react';

const galleryItems = [
  { src: '/images/beauty/gallery1.jpg', title: 'Saç Bakımı', col: 'row-span-2' },
  { src: '/images/beauty/gallery2.jpg', title: 'Makyaj Stüdyo', col: '' },
  { src: '/images/beauty/gallery3.jpg', title: 'Spa Deneyimi', col: '' },
  { src: '/images/beauty/gallery4.jpg', title: 'Manikür & Nail Art', col: '' },
  { src: '/images/beauty/gallery5.jpg', title: 'Cilt Bakımı', col: '' },
  { src: '/images/beauty/gallery6.jpg', title: 'Saç Boyama', col: 'row-span-2' },
];

function GalleryItem({ item, index, onClick }: { item: typeof galleryItems[0]; index: number; onClick: () => void }) {
  return (
    <motion.div
      className={`relative group cursor-pointer rounded-2xl overflow-hidden ${item.col}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="relative w-full h-full min-h-[200px] sm:min-h-[240px] overflow-hidden rounded-2xl">
        <motion.img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Dark overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-plum/0 group-hover:bg-plum/60 flex flex-col items-center justify-center gap-3 transition-colors duration-500"
        >
          {/* Title */}
          <motion.span
            className="text-white font-bold text-lg sm:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            {item.title}
          </motion.span>

          {/* Zoom icon with rotation animation */}
          <motion.div
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            initial={{ rotate: 90, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <ZoomIn className="w-5 h-5 text-white" />
          </motion.div>
        </motion.div>

        {/* Decorative corner accents on hover */}
        <motion.div
          className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold-beauty/0 group-hover:border-gold-beauty/80 transition-colors duration-500 rounded-tl-lg"
        />
        <motion.div
          className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold-beauty/0 group-hover:border-gold-beauty/80 transition-colors duration-500 rounded-br-lg"
        />
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
    <section id="galeri" className="relative py-20 md:py-32 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Flower2 className="w-5 h-5 text-rose" />
            <span className="text-sm uppercase tracking-[0.3em] text-rose-dark font-medium">Galeri</span>
            <Flower2 className="w-5 h-5 text-rose rotate-180" />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Çalışmalarımız
          </motion.h2>

          <motion.div
            className="ornament-divider max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Flower2 className="w-4 h-4 text-rose/40" />
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-plum/90 backdrop-blur-xl p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            onKeyDown={handleKeyDown}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image */}
            <motion.div
              className="relative max-w-4xl max-h-[85vh] w-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].title}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass">
                <span className="text-white font-medium">{galleryItems[lightbox].title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
