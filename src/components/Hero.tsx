/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import ThreeHeroWings from './ThreeHeroWings';
import { SocialLinksBar, WhatsAppIcon } from './SocialIcons';
import { useSocial } from '../context/SocialContext';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  const { openWhatsAppChat, config } = useSocial();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#080808]"
    >
      {/* 3D WebGL Metallic Wing Canvas in the Background */}
      <ThreeHeroWings className="z-0" />

      {/* Atmospheric lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D71920]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neutral-900/40 blur-[100px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full flex flex-col items-center text-center">
        {/* Subtle Brand Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141416]/80 border border-white/10 mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
          <span className="text-xs font-tech uppercase tracking-[0.2em] text-[#C4C7CC]">
            Websites · Video Motion · AI Creative · Social Growth
          </span>
        </motion.div>

        {/* Oversized Cinematic Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] max-w-6xl"
        >
          <span className="block text-white">WE DON&apos;T JUST CREATE.</span>
          <span className="block mt-1 sm:mt-2 text-metallic-red drop-shadow-[0_4px_30px_rgba(215,25,32,0.45)]">
            WE MAKE BRANDS FLY.
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#A3A6AD] max-w-2xl font-body font-normal leading-relaxed"
        >
          From powerful websites to unforgettable digital experiences, <strong className="text-white font-medium">WEB WINGS</strong> helps ambitious businesses stand out, connect, and grow.
        </motion.p>

        {/* Dual Call-to-Actions & WhatsApp direct option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto group relative px-8 py-4 bg-[#D71920] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:bg-[#E32128] hover:shadow-[0_0_35px_rgba(215,25,32,0.6)] cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span>Explore Our Work</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => openWhatsAppChat()}
            className="w-full sm:w-auto px-7 py-4 bg-[#141416]/90 hover:bg-[#1A1A1E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-lg border border-[#25D366]/40 hover:border-[#25D366] hover:shadow-[0_0_25px_rgba(37,211,102,0.25)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-[#25D366]" />
          </button>
        </motion.div>

        {/* Floating Social Media Links Strip in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-tech text-[#7C8088] uppercase tracking-widest">
            Official Channels: TikTok · Facebook · YouTube · Instagram
          </span>
          <SocialLinksBar size="md" showLabels={true} className="justify-center" />
        </motion.div>

        {/* Key Agency Strengths Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          {[
            { label: 'Website Architecture', metric: 'Ultra Fast', sub: 'Responsive & SEO-Ready' },
            { label: 'Video & Motion', metric: '4K Cinema', sub: 'High Engagement Reels' },
            { label: 'AI Visual Studio', metric: 'Generative AI', sub: 'Images & Synthetic Video' },
            { label: 'Growth & Socials', metric: 'ROI Driven', sub: 'Strategic Campaigns' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-[#111113]/70 border border-white/[0.06] backdrop-blur-sm text-left hover:border-[#D71920]/40 transition-colors"
            >
              <div className="text-[11px] font-tech text-[#8A8D93] uppercase tracking-wider">{item.label}</div>
              <div className="text-base font-display font-bold text-white mt-0.5">{item.metric}</div>
              <div className="text-[11px] text-[#A0A3A8] mt-0.5">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center mt-6 text-[#75787E]"
      >
        <button
          onClick={onExploreWork}
          className="flex flex-col items-center gap-2 group cursor-pointer"
          aria-label="Scroll down to explore"
        >
          <span className="text-[10px] font-tech uppercase tracking-[0.25em] text-[#8E9197] group-hover:text-white transition-colors">
            Scroll To Discover
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#D71920] transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-[#D71920]"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
