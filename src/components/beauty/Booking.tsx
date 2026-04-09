'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Flower2, Sparkles, Check, Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react';

const serviceOptions = [
  'Saç Bakım & Kesim',
  'Cilt Bakımı',
  'Profesyonel Makyaj',
  'Nail Art & Manikür',
  'Spa & Masaj',
  'Saç Boyama',
];

const specialistOptions = [
  'Herhangi Biri',
  'Aylin Hanım',
  'Deniz Hanım',
  'Elif Hanım',
  'Gül Hanım',
];

const timeOptions = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
];

export default function Booking() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    specialist: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', email: '', service: '', specialist: '', date: '', time: '', notes: '' });
  };

  const inputClass =
    'w-full px-5 py-3.5 rounded-xl bg-white/80 border border-rose/10 text-plum text-sm placeholder:text-plum/30 focus:outline-none focus:border-rose focus:shadow-[0_0_20px_rgba(232,160,191,0.15)] transition-all duration-300';

  return (
    <section id="randevu" className="relative py-20 md:py-32 overflow-hidden" ref={sectionRef}>
      {/* Morphing blob background */}
      <motion.div
        className="absolute -right-40 top-20 w-[500px] h-[500px] bg-rose/5 morph-shape blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-40 bottom-20 w-[400px] h-[400px] bg-gold-beauty/5 morph-shape blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Flower2 className="w-5 h-5 text-rose" />
              <span className="text-sm uppercase tracking-[0.3em] text-rose-dark font-medium">Randevu</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Hemen{' '}
              <span className="shimmer-text-rose">Randevu</span>{' '}
              Alın
            </h2>

            <p className="text-plum/50 text-base sm:text-lg leading-relaxed mb-8">
              Güzelliğinize yatırım yapmanın tam zamanı. Online randevu formumuzu doldurun, sizi arayalım.
            </p>

            <motion.div
              className="ornament-divider mb-8 max-w-xs"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-rose/40" />
            </motion.div>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, text: '0212 555 12 34' },
                { icon: Clock, text: 'Pazartesi - Cumartesi: 09:00 - 19:00' },
                { icon: Mail, text: 'info@lumierebeauty.com' },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-rose/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-rose" />
                  </div>
                  <span className="text-sm text-plum/60">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-rose/10 shadow-lg relative overflow-hidden">
              {/* Decorative blob in form */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-rose/5 morph-shape"
                animate={{ borderRadius: ['60% 40% 30% 70%/60% 30% 70% 40%', '30% 60% 70% 40%/50% 60% 30% 60%', '60% 40% 30% 70%/60% 30% 70% 40%'] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-rose to-rose-dark flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  >
                    <Check className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-plum mb-2">Randevunuz Alındı!</h3>
                  <p className="text-plum/50 text-center">En kısa sürede sizinle iletişime geçeceğiz.</p>

                  {/* Confetti sparkles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-rose"
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{
                        x: (Math.random() - 0.5) * 200,
                        y: (Math.random() - 0.5) * 200,
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{ duration: 1.5, delay: 0.3 + i * 0.05 }}
                    />
                  ))}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="flex items-center gap-2 text-xs font-medium text-plum/60 mb-2 uppercase tracking-wider">
                      <User className="w-3 h-3" /> Ad Soyad
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Adınız Soyadınız"
                      className={inputClass}
                    />
                  </motion.div>

                  {/* Phone & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.45 }}
                    >
                      <label className="flex items-center gap-2 text-xs font-medium text-plum/60 mb-2 uppercase tracking-wider">
                        <Phone className="w-3 h-3" /> Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="05XX XXX XX XX"
                        className={inputClass}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="flex items-center gap-2 text-xs font-medium text-plum/60 mb-2 uppercase tracking-wider">
                        <Mail className="w-3 h-3" /> E-posta
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        className={inputClass}
                      />
                    </motion.div>
                  </div>

                  {/* Service & Specialist */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.55 }}
                    >
                      <label className="flex items-center gap-2 text-xs font-medium text-plum/60 mb-2 uppercase tracking-wider">
                        <Flower2 className="w-3 h-3" /> Hizmet
                      </label>
                      <select name="service" value={formData.service} onChange={handleChange} required className={inputClass}>
                        <option value="">Hizmet Seçin</option>
                        {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="flex items-center gap-2 text-xs font-medium text-plum/60 mb-2 uppercase tracking-wider">
                        <User className="w-3 h-3" /> Uzman
                      </label>
                      <select name="specialist" value={formData.specialist} onChange={handleChange} className={inputClass}>
                        <option value="">Uzman Seçin</option>
                        {specialistOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </motion.div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.65 }}
                    >
                      <label className="flex items-center gap-2 text-xs font-medium text-plum/60 mb-2 uppercase tracking-wider">
                        <Calendar className="w-3 h-3" /> Tarih
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="flex items-center gap-2 text-xs font-medium text-plum/60 mb-2 uppercase tracking-wider">
                        <Clock className="w-3 h-3" /> Saat
                      </label>
                      <select name="time" value={formData.time} onChange={handleChange} required className={inputClass}>
                        <option value="">Saat Seçin</option>
                        {timeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </motion.div>
                  </div>

                  {/* Notes */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.75 }}
                  >
                    <label className="flex items-center gap-2 text-xs font-medium text-plum/60 mb-2 uppercase tracking-wider">
                      <FileText className="w-3 h-3" /> Notlar
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Özel isteklerinizi belirtin..."
                      className={`${inputClass} resize-none`}
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="relative w-full py-4 bg-gradient-to-r from-rose to-rose-dark text-white font-semibold text-sm uppercase tracking-wider rounded-xl overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 15px 40px rgba(232, 160, 191, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Randevuyu Onayla
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
