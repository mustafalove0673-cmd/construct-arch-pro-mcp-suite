'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Müşteri - 3 yıl',
    text: 'İstanbul\'un en iyi berberi kesinlikle burası! Ustalar çok profesyonel ve samimi. Her gelişimde kendimi özel hissediyorum. Sakal tıraşı muhteşem.',
    rating: 5,
  },
  {
    name: 'Mehmet Kaya',
    role: 'Müşteri - 5 yıl',
    text: '25 yıllık tecrübe gerçekten hissediliyor. Düğünüm için damat paketi aldım ve hayal kırıklığına uğramadım. Herkese tavsiye ederim.',
    rating: 5,
  },
  {
    name: 'Emre Demir',
    role: 'Müşteri - 2 yıl',
    text: 'Atmosfer harika, personel çok ilgili. Klasik jilet tıraşı deneyimini mutlaka yaşamalısınız. Hot towel uygulaması ayrı bir keyif.',
    rating: 5,
  },
  {
    name: 'Burak Çelik',
    role: 'Müşteri - 4 yıl',
    text: 'Modern bir yer arıyorsanız ama aynı zamanda geleneksel berber kültürünü de özlediyseniz, burası tam size göre. Kalite her zaman üst düzey.',
    rating: 5,
  },
  {
    name: 'Can Öztürk',
    role: 'Müşteri - 1 yıl',
    text: 'İlk kez geldim ve memnun kaldım. Saç boyama hizmeti çok profesyonel. Fiyatlar da gayet makul. Kesinlikle tekrar geleceğim.',
    rating: 4,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="yorumlar" className="relative py-24 md:py-32 bg-charcoal overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Decorative quote icon */}
      <motion.div
        className="absolute top-20 left-10 text-gold/5"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Quote className="w-40 h-40" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Yorumlar</span>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Müşterilerimiz Ne <span className="shimmer-text">Diyor?</span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main testimonial */}
          <div className="relative overflow-hidden min-h-[280px] flex items-center">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="w-full"
            >
              <div className="text-center px-4 md:px-16">
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          i < testimonials[current].rating
                            ? 'fill-gold text-gold'
                            : 'text-gold/20'
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <motion.p
                  className="text-xl md:text-2xl text-gold-light/80 leading-relaxed mb-8 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </motion.p>

                {/* Author */}
                <motion.div
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mb-2">
                    <span className="text-gold font-bold text-lg">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-lg">{testimonials[current].name}</p>
                  <p className="text-gold-light/40 text-sm">{testimonials[current].role}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal-dark transition-all duration-300"
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className="relative"
                >
                  <motion.div
                    className={`rounded-full transition-all duration-300 ${
                      index === current
                        ? 'w-8 h-2 bg-gold'
                        : 'w-2 h-2 bg-gold/30 hover:bg-gold/50'
                    }`}
                    whileHover={{ scale: 1.3 }}
                  />
                </button>
              ))}
            </div>

            <motion.button
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal-dark transition-all duration-300"
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
