"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MonogramUnderlayProps {
  className?: string;
}

export default function MonogramUnderlay({ className = "" }: MonogramUnderlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Very gentle scroll-based movement (parallax effect)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -8]);

  return (
    <motion.div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 z-0 pointer-events-none select-none overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.35, 
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Tiled monogram ring pattern - asymmetrical overlay with scroll movement */}
      <motion.div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'url(/assets/bgring.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          backgroundPosition: '20% 30%',
          opacity: 0.03,
          transform: 'rotate(-5deg)',
          x: x1,
          y: y1
        }} 
      />
      {/* Additional layer for depth - offset position with scroll movement */}
      <motion.div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'url(/assets/bgring.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '350px 350px',
          backgroundPosition: '80% 70%',
          opacity: 0.02,
          transform: 'rotate(3deg)',
          x: x2,
          y: y2
        }} 
      />
    </motion.div>
  );
}

