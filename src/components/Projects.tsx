'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  { title: 'Grand Residence', type: 'Konut', location: 'Ankara', year: '2024', status: 'Tamamlandı', desc: '144 daire, 5 katlı modern konut projesi', color: '#C8A951' },
  { title: 'Merkez Tower', type: 'Ticari', location: 'İstanbul', year: '2024', status: 'Devam Ediyor', desc: '20 katlı A+ ofis binası', color: '#8B7D3C' },
  { title: 'Gül Villaları', type: 'Villa', location: 'Bodrum', year: '2023', status: 'Tamamlandı', desc: '12 adet lüks deniz manzaralı villa', color: '#E8D5A3' },
  { title: 'Park Yaşam', type: 'Konut', location: 'Ankara', year: '2023', status: 'Tamamlandı', desc: '80 daire, peyzajlı site projesi', color: '#C8A951' },
  { title: 'Trade Center', type: 'Ticari', location: 'İzmir', year: '2024', status: 'Devam Ediyor', desc: 'Alışveriş ve ofis merkezi', color: '#8B7D3C' },
  { title: 'Sapphire Hills', type: 'Villa', location: 'Antalya', year: '2024', status: 'Planlama', desc: '18 adet özel tasarım villa', color: '#E8D5A3' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [filter, setFilter] = useState('Tümü');

  const filters = ['Tümü', 'Konut', 'Ticari', 'Villa'];
  const filtered = filter === 'Tümü' ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#0D0D0D]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C8A951]/10 border border-[#C8A951]/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#C8A951] rounded-full" />
            <span className="text-xs font-semibold text-[#C8A951] tracking-wider uppercase">Projelerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Tamamlanan <span className="text-[#C8A951]">Başarılı</span> Projeler
          </h2>
          <p className="max-w-2xl mx-auto text-[#F5F0E8]/40 text-lg">
            Her biri özenle planlanmış ve başarıyla tamamlanmış projelerimiz
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === f
                  ? 'bg-[#C8A951] text-[#0A0A0A] shadow-lg shadow-[#C8A951]/20'
                  : 'bg-[#111111] text-[#F5F0E8]/50 border border-[#C8A951]/10 hover:border-[#C8A951]/30 hover:text-[#C8A951]'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 2}
              className="group relative bg-[#111111]/60 border border-[#C8A951]/10 rounded-2xl overflow-hidden hover:border-[#C8A951]/30 transition-all duration-500"
            >
              {/* Project image placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(${project.color}44 1px, transparent 1px),
                      linear-gradient(90deg, ${project.color}44 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 opacity-20" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h1M9 13h1M9 17h1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'Tamamlandı'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : project.status === 'Devam Ediyor'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#C8A951] bg-[#C8A951]/10 px-3 py-1 rounded-full">{project.type}</span>
                  <span className="text-xs text-[#F5F0E8]/30">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-2 group-hover:text-[#C8A951] transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-[#F5F0E8]/40 mb-4">{project.desc}</p>
                <div className="flex items-center gap-2 text-xs text-[#F5F0E8]/30">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
