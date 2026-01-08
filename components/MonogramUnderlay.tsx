"use client";

interface MonogramUnderlayProps {
  className?: string;
  opacity?: number;
}

export default function MonogramUnderlay({ className = "", opacity = 0.5 }: MonogramUnderlayProps) {
  return (
    <div
      aria-hidden="true"
      className={`ws-monogram-parallax absolute inset-0 z-[1] pointer-events-none select-none overflow-hidden ${className}`}
    >
      {/* Mobile: ring half visible on right side */}
      <img
        src="/assets/ring.png"
        alt=""
        className="absolute md:hidden"
        style={{
          height: '100%',
          width: 'auto',
          right: '-40%', // Adjust this value: more negative = more visible, less negative = less visible
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: opacity,
        }}
      />
      {/* Desktop: ring positioned at 120% */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/ring.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: '125% center',
          width: '100%',
          height: '100%',
          opacity: opacity,
        }}
      />
    </div>
  );
}

