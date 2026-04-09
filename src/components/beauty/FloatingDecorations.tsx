'use client';

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blob 1 */}
      <div
        className="absolute bg-rose/10 morph-shape float-slow"
        style={{ left: '5%', top: '15%', width: 80, height: 80, animationDelay: '0s' }}
      />
      {/* Blob 2 */}
      <div
        className="absolute bg-gold-beauty/10 morph-shape float-reverse"
        style={{ left: '90%', top: '25%', width: 60, height: 60, animationDelay: '2s' }}
      />
      {/* Sparkle */}
      <div
        className="absolute spin-slow"
        style={{ left: '10%', top: '30%', width: 8, height: 8, animationDelay: '0.5s' }}
      >
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            fill="currentColor"
            className="text-gold-beauty/40"
          />
        </svg>
      </div>
      {/* Petal 1 */}
      <div
        className="absolute petal float-slow"
        style={{ left: '20%', top: '10%', animationDelay: '0s' }}
      />
      {/* Petal 2 */}
      <div
        className="absolute petal float-reverse"
        style={{ left: '70%', top: '40%', animationDelay: '3s' }}
      />
    </div>
  );
}
