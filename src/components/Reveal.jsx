import React, { useEffect, useState } from 'react';
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
        filter: blur ? 'blur(8px)' : 'blur(0px)'
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      transition={{
        duration: 0.56,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </Component>
  );
}

/**
 * Word-by-word spring-damped blur reveal heading (Junior.ai inspired).
 */
export function AnimatedHeading({
  text,
  as = 'h1',
  className = '',
  style = {},
  stagger = 0.042,
  initialDelay = 0.04
}) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = as;

  if (prefersReducedMotion || typeof text !== 'string') {
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }

  const words = text.split(' ');

  return (
    <Tag className={className} style={style} aria-label={text}>
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="word-reveal"
          aria-hidden="true"
          initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.62,
            delay: initialDelay + idx * stagger,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {word}
          {idx < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Tag>
  );
}

/**
 * Character-by-character sequential typewriter text effect with blinking cursor
 * modeled on Junior.ai's TypeIt live card streaming mechanic.
 */
export function TypewriterText({ text, speed = 22, className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  const [charCount, setCharCount] = useState(prefersReducedMotion ? text.length : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCharCount(text.length);
      return;
    }
    setCharCount(0);
    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, prefersReducedMotion]);

  return (
    <span className={className}>
      {text.slice(0, charCount)}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
