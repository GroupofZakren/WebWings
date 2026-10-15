/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface ScrollMarqueeProps {
  direction?: 'left' | 'right';
  className?: string;
  items?: string[];
}

export const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({
  direction = 'left',
  className = '',
  items = [
    'WE BUILD WEBSITES THAT GROW BUSINESSES',
    'HIGH-CONVERSION ARCHITECTURE',
    '4K CINEMATIC VIDEO EDITING',
    'NEXT-GEN GENERATIVE AI STUDIO',
    'VIRAL SOCIAL MEDIA ACCELERATION',
    'BESPOKE BRAND SYSTEMS',
  ],
}) => {
  const [scrollSpeedMultiplier, setScrollSpeedMultiplier] = useState(1);

  useEffect(() => {
    let lastY = window.scrollY;
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastY);
      lastY = currentY;

      // Accelerate marquee slightly during active scrolling
      setScrollSpeedMultiplier(Math.min(3, 1 + delta * 0.05));

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrollSpeedMultiplier(1);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const marqueeDuration = (direction === 'left' ? 24 : 28) / scrollSpeedMultiplier;

  return (
    <div
      className={`relative w-full overflow-hidden py-3 bg-[#0c0c0e] border-y border-white/[0.06] select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max">
        <motion.div
          className="flex items-center gap-8 text-xs font-tech tracking-[0.25em] uppercase text-[#73767E] whitespace-nowrap"
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
          }}
          transition={{
            repeat: Infinity,
            duration: marqueeDuration,
            ease: 'linear',
          }}
        >
          {[...items, ...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors">{text}</span>
              <span className="text-[#D71920] font-bold">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollMarquee;
