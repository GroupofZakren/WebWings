/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import WebWingsLogo from './WebWingsLogo';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 300); // Red pulse & wing contour
    const t2 = setTimeout(() => setPhase(2), 900); // Logo letters materialize
    const t3 = setTimeout(() => setPhase(3), 1600); // Ready to exit
    const t4 = setTimeout(() => onComplete(), 2100); // Complete

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] overflow-hidden select-none cursor-pointer"
        onClick={onComplete}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      >
        {/* Deep red atmospheric background flare */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(215, 25, 32, 0.28) 0%, rgba(215, 25, 32, 0.05) 50%, transparent 70%)',
          }}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{
            scale: phase >= 1 ? [0.6, 1.2, 1] : 0.4,
            opacity: phase >= 1 ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Ambient grid lines */}
        <div className="absolute inset-0 carbon-bg opacity-40 pointer-events-none" />

        {/* Main Logo Reveal */}
        <div className="relative z-10 flex flex-col items-center px-6 max-w-lg text-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{
              scale: phase >= 1 ? 1 : 0.85,
              opacity: phase >= 1 ? 1 : 0,
              y: phase >= 1 ? 0 : 20,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <WebWingsLogo variant="full" size="xl" glow={true} />
          </motion.div>

          {/* Micro progress indicator */}
          <div className="w-48 h-[2px] bg-[#1E1E22] mt-8 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D71920] to-[#FF4B54]"
              initial={{ width: '0%' }}
              animate={{ width: phase === 0 ? '20%' : phase === 1 ? '60%' : '100%' }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            />
          </div>

          <motion.span
            className="text-[11px] font-tech text-[#8A8D93] uppercase tracking-[0.25em] mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 0.8 : 0 }}
          >
            Accelerating Digital Excellence · Click to Skip
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CinematicLoader;
