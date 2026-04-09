'use client';

import { motion } from 'framer-motion';

const decorations = [
  { type: 'blob', x: '5%', y: '15%', size: 80, color: 'bg-rose/10', delay: 0, duration: 8 },
  { type: 'blob', x: '90%', y: '25%', size: 60, color: 'bg-gold-beauty/10', delay: 2, duration: 10 },
  { type: 'blob', x: '15%', y: '55%', size: 100, color: 'bg-blush/20', delay: 1, duration: 12 },
  { type: 'blob', x: '85%', y: '65%', size: 70, color: 'bg-rose-light/15', delay: 3, duration: 9 },
  { type: 'blob', x: '50%', y: '85%', size: 90, color: 'bg-champagne/15', delay: 4, duration: 11 },
  { type: 'sparkle', x: '10%', y: '30%', size: 8, delay: 0.5, duration: 3 },
  { type: 'sparkle', x: '25%', y: '70%', size: 6, delay: 1.5, duration: 2.5 },
  { type: 'sparkle', x: '75%', y: '20%', size: 10, delay: 0.8, duration: 3.5 },
  { type: 'sparkle', x: '60%', y: '45%', size: 7, delay: 2.2, duration: 2.8 },
  { type: 'sparkle', x: '40%', y: '90%', size: 5, delay: 3.1, duration: 3.2 },
  { type: 'sparkle', x: '95%', y: '50%', size: 9, delay: 1.8, duration: 2.2 },
  { type: 'petal', x: '20%', y: '10%', delay: 0, duration: 12 },
  { type: 'petal', x: '70%', y: '40%', delay: 3, duration: 14 },
  { type: 'petal', x: '45%', y: '75%', delay: 6, duration: 11 },
  { type: 'petal', x: '80%', y: '85%', delay: 9, duration: 13 },
];

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {decorations.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: item.x,
            top: item.y,
            width: item.size,
            height: item.size,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: item.delay * 0.3, duration: 1 }}
        >
          {item.type === 'blob' && (
            <motion.div
              className={`w-full h-full ${item.color}`}
              animate={{
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '50% 60% 30% 70% / 40% 70% 60% 30%',
                  '60% 40% 60% 30% / 70% 30% 50% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                ],
                y: [0, -15, 5, -10, 0],
                rotate: [0, 5, -3, 7, 0],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}

          {item.type === 'sparkle' && (
            <motion.svg
              width={item.size}
              height={item.size}
              viewBox="0 0 24 24"
              fill="none"
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: 'easeInOut',
              }}
            >
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="currentColor"
                className="text-gold-beauty/40"
              />
            </motion.svg>
          )}

          {item.type === 'petal' && (
            <motion.div
              className="petal"
              style={{ width: item.size * 0.15, height: item.size * 0.22 }}
              animate={{
                y: [0, -300, 0],
                x: [0, 50, -30, 0],
                rotate: [0, 360],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: 'linear',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
