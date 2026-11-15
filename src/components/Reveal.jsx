import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function Reveal({
  children,
  delay = 0,
  y = 14,
  blur = false,
  className = '',
  as = 'div',
  style
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (prefersReducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag className={className} style={style}>
        {children}
      </StaticTag>
    );
  }

  return (
    <Component
      className={className}
      style={style}
      initial={{
        opacity: 0,
        y,
        filter: blur ? 'blur(6px)' : 'blur(0px)'
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      transition={{
        duration: 0.48,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </Component>
  );
}
