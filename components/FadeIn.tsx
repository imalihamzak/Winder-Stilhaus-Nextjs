"use client";

import { ReactNode, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Animation variants - matching SettleQuick exactly
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1
  }
};

const variantsMap = {
  up: fadeInUp,
  down: fadeInUp, // Same as up but reversed
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
};

export default function FadeIn({ 
  children, 
  className,
  delay = 0,
  duration = 0.6,
  direction = "up"
}: FadeInProps) {
  const ref = useRef(null);
  // Matching SettleQuick exactly: once: false, margin: "-100px"
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variant = variantsMap[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variant}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

