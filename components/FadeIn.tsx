"use client";

import { ReactNode, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Animation variants - matching SettleQuick exactly
// Note: We animate content, not background - background should always be visible
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
  id?: string;
};

export default function FadeIn({ 
  children, 
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  id
}: FadeInProps) {
  const ref = useRef(null);
  // Trigger animation much earlier while scrolling - margin: "300px" means trigger 300px before element enters viewport
  // This ensures large sections like blog appear while scrolling, not after stopping
  const isInView = useInView(ref, { once: false, margin: "300px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variant = variantsMap[direction];

  // Create a modified variant that doesn't affect background visibility
  // The wrapper div will always be visible, only inner content animates
  const contentVariant = {
    hidden: { 
      opacity: 0, 
      ...('x' in variant.hidden && variant.hidden.x !== undefined ? { x: variant.hidden.x } : {}),
      ...('y' in variant.hidden && variant.hidden.y !== undefined ? { y: variant.hidden.y } : {}),
      ...('scale' in variant.hidden && variant.hidden.scale !== undefined ? { scale: variant.hidden.scale } : {})
    },
    visible: { 
      opacity: 1,
      ...('x' in variant.visible && variant.visible.x !== undefined ? { x: variant.visible.x } : {}),
      ...('y' in variant.visible && variant.visible.y !== undefined ? { y: variant.visible.y } : {}),
      ...('scale' in variant.visible && variant.visible.scale !== undefined ? { scale: variant.visible.scale } : {})
    }
  };

  return (
    <div 
      ref={ref} 
      className={className}
      id={id}
      style={{ 
        position: 'relative',
        // Background colors from children (like bg-white) should always be visible
        // This wrapper doesn't animate, preserving background visibility
      }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={contentVariant}
        transition={{ delay, duration, ease: "easeOut" }}
        style={{ 
          willChange: 'opacity, transform',
          // Inner content animates, but background stays visible on parent
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

