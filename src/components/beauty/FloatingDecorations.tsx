'use client';

import { motion } from 'framer-motion';

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gold sparkle 1 - circle */}
      <motion.div
        className="absolute gold-particle"
        style={{ left: '8%', top: '20%' }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
      />

      {/* Rose gold diamond */}
      <motion.div
        className="absolute gold-diamond"
        style={{ left: '85%', top: '30%' }}
        animate={{
          y: [0, 15, 0],
          rotate: [45, 90, 45],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Gold sparkle 2 - circle */}
      <motion.div
        className="absolute gold-particle"
        style={{ left: '50%', top: '60%' }}
        animate={{
          y: [0, -12, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Rose gold sparkle 3 */}
      <motion.div
        className="absolute"
        style={{
          left: '25%',
          top: '75%',
          width: 3,
          height: 3,
          background: '#b76e79',
          borderRadius: '50%',
          boxShadow: '0 0 4px rgba(183,110,121,0.4)',
        }}
        animate={{
          y: [0, -10, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
}
