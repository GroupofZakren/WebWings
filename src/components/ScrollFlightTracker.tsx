/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import WebWingsLogo from './WebWingsLogo';

interface SectionCheckpoint {
  id: string;
  name: string;
  short: string;
}

const sections: SectionCheckpoint[] = [
  { id: 'home', name: 'Home', short: '01' },
  { id: 'about', name: 'About', short: '02' },
  { id: 'services', name: 'Services', short: '03' },
  { id: 'portfolio', name: 'Portfolio', short: '04' },
  { id: 'process', name: 'Process', short: '05' },
  { id: 'contact', name: 'WhatsApp', short: '06' },
];

export const ScrollFlightTracker: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? Math.min(1, Math.max(0, currentScroll / totalHeight)) : 0;
      setScrollProgress(progress);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 200);

      // Detect active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i].id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center pointer-events-none select-none"
      aria-label="Scroll progress flight rail"
    >
      <div className="relative flex flex-col items-center py-4 pointer-events-auto">
        {/* Background Vertical Track Line */}
        <div className="w-[2px] h-64 bg-white/10 rounded-full relative overflow-hidden">
          {/* Active Glowing Scroll Progress Fill (Uper sa nachay tak) */}
          <motion.div
            className="w-full bg-gradient-to-b from-[#FF4D55] via-[#D71920] to-[#88080E] rounded-full shadow-[0_0_15px_#D71920]"
            style={{
              height: `${scrollProgress * 100}%`,
            }}
          />
        </div>

        {/* Flying Wing Indicator that travels down the rail with scroll */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-100 ease-out"
          style={{
            top: `calc(1rem + ${scrollProgress * 16}rem - 14px)`,
          }}
        >
          <div
            className={`relative flex items-center justify-center transition-transform duration-200 ${
              isScrolling ? 'scale-125' : 'scale-100'
            }`}
          >
            {/* Wing Glow Aura */}
            <div className="absolute -inset-2 bg-[#D71920]/40 rounded-full blur-sm animate-pulse" />

            {/* Micro Wing Icon */}
            <div className="w-7 h-7 rounded-full bg-[#121215] border border-[#D71920] flex items-center justify-center shadow-[0_0_15px_rgba(215,25,32,0.8)]">
              <WebWingsLogo variant="icon" size="sm" isScrolled={true} glow={false} className="w-5 h-5" />
            </div>

            {/* Scroll percentage tooltip */}
            <div className="absolute right-9 px-2 py-0.5 rounded bg-[#0A0A0C]/90 border border-white/10 text-[10px] font-tech text-white whitespace-nowrap shadow-lg">
              {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </div>

        {/* Section Navigation Dots along the rail */}
        <div className="absolute inset-y-4 flex flex-col justify-between items-center w-full pointer-events-auto">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="group relative flex items-center justify-center cursor-pointer p-1"
                aria-label={`Jump to ${sec.name} section`}
              >
                {/* Dot */}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-3 h-3 bg-[#D71920] shadow-[0_0_10px_#D71920]'
                      : 'bg-[#40434A] group-hover:bg-white group-hover:scale-125'
                  }`}
                />

                {/* Hover Label */}
                <span className="absolute right-6 px-2 py-1 rounded bg-[#111114]/95 border border-white/10 text-[11px] font-tech text-[#C4C7CC] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                  {sec.short} · {sec.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default ScrollFlightTracker;
