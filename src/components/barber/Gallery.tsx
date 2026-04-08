'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/barber/gallery1.jpg',
    alt: 'Klasik Saç Kesimi',
    title: 'Klasik Kesim',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/barber/gallery2.jpg',
    alt: 'Jilet ile Tıraş',
    title: 'Jilet Tıraşı',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/barber/gallery3.jpg',
    alt: 'Sakal Bakımı',
    title: 'Sakal Bakımı',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/barber/gallery4.jpg',
    alt: 'Saç Şekillendirme',
    title: 'Styling',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeri" className="relative py-24 md:py-32 bg-charcoal overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Galeri</span>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Çalışmalarımız <span className="shimmer-text">Galeri</span>
          </motion.h2>
          <motion.p
            className="text-gold-light/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ustalarımızın elinden çıkan birbirinden şık stiller
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${image.span}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ zIndex: 10 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gold-light/60 text-sm">{image.alt}</p>
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 rotate-90"
                  >
                    <ZoomIn className="w-5 h-5 text-gold" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 rounded-sm transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-charcoal-dark/95 backdrop-blur-md flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/30 transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-gold" />
          </motion.button>
          <motion.img
            src={selectedImage}
            alt="Galeri"
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
          />
        </motion.div>
      )}
    </section>
  );
}
