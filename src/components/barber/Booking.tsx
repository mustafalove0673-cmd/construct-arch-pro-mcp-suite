'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '13:00', '13:30', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
];

const services = [
  'Saç Kesimi', 'Sakal Tıraşı', 'Klasik Tıraş',
  'Damat Paketi', 'Yüz Bakımı', 'Saç Boyama',
];

const barbers = [
  'Ahmet Usta', 'Mehmet Usta', 'Ali Usta',
];

export default function Booking() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    barber: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="randevu" className="relative py-24 md:py-32 bg-charcoal-light overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(200,169,110,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

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
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Randevu</span>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Online <span className="shimmer-text">Randevu</span>
          </motion.h2>
          <motion.p
            className="text-gold-light/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hemen online randevunuzu alın, size en uygun zamanı seçin
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          className="bg-charcoal/80 rounded-sm border border-gold/10 p-8 md:p-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">Randevunuz Alındı!</h3>
              <p className="text-gold-light/60">En kısa sürede sizinle iletişime geçeceğiz.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div>
                <motion.h3
                  className="text-lg font-semibold text-gold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <User className="w-5 h-5" />
                  Kişisel Bilgiler
                </motion.h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'name', placeholder: 'Adınız Soyadınız', icon: User, type: 'text' },
                    { name: 'phone', placeholder: 'Telefon Numaranız', icon: Phone, type: 'tel' },
                    { name: 'email', placeholder: 'E-posta Adresiniz', icon: Mail, type: 'email' },
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-charcoal-light/50 border border-gold/10 rounded-sm text-white placeholder-gold-light/30 focus:border-gold focus:outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,169,110,0.1)]"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <motion.h3
                  className="text-lg font-semibold text-gold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <Calendar className="w-5 h-5" />
                  Hizmet Seçimi
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-charcoal-light/50 border border-gold/10 rounded-sm text-white appearance-none focus:border-gold focus:outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,169,110,0.1)]"
                    >
                      <option value="" className="text-gold-light/30">Hizmet Seçiniz</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-charcoal text-white">{s}</option>
                      ))}
                    </select>
                  </motion.div>
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.85 }}
                  >
                    <select
                      name="barber"
                      required
                      value={formData.barber}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-charcoal-light/50 border border-gold/10 rounded-sm text-white appearance-none focus:border-gold focus:outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,169,110,0.1)]"
                    >
                      <option value="" className="text-gold-light/30">Usta Seçiniz</option>
                      {barbers.map((b) => (
                        <option key={b} value={b} className="bg-charcoal text-white">{b}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>
              </div>

              {/* Date & Time */}
              <div>
                <motion.h3
                  className="text-lg font-semibold text-gold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <Clock className="w-5 h-5" />
                  Tarih & Saat
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.95 }}
                  >
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-charcoal-light/50 border border-gold/10 rounded-sm text-white focus:border-gold focus:outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,169,110,0.1)]"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.0 }}
                  >
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-charcoal-light/50 border border-gold/10 rounded-sm text-white appearance-none focus:border-gold focus:outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,169,110,0.1)]"
                    >
                      <option value="" className="text-gold-light/30">Saat Seçiniz</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t} className="bg-charcoal text-white">{t}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>
              </div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 }}
              >
                <motion.button
                  type="submit"
                  className="w-full relative overflow-hidden py-4 bg-gold text-charcoal-dark font-bold text-base uppercase tracking-widest rounded-sm group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300">
                    <Send className="w-5 h-5" />
                    Randevuyu Onayla
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gold-light"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
