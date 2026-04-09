'use client';

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Geometric circle outline 1 */}
      <div
        className="absolute rounded-full border border-coral/15 spin-slow"
        style={{ left: '5%', top: '15%', width: 80, height: 80, animationDelay: '0s' }}
      />
      {/* Geometric circle outline 2 */}
      <div
        className="absolute rounded-full border border-gold/10 float-slow"
        style={{ left: '88%', top: '25%', width: 60, height: 60, animationDelay: '2s' }}
      />
      {/* Gold dot */}
      <div
        className="absolute w-2 h-2 rounded-full bg-gold/30 glow-pulse"
        style={{ left: '12%', top: '35%', animationDelay: '1s' }}
      />
      {/* Coral dot */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-coral/25 twinkle"
        style={{ left: '75%', top: '45%', animationDelay: '2s' }}
      />
      {/* Thin ring */}
      <div
        className="absolute rounded-full border border-coral/8 glow-pulse"
        style={{ left: '50%', top: '10%', width: 40, height: 40, animationDelay: '3s' }}
      />
    </div>
  );
}
