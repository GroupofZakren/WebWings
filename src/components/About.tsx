/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Sparkles, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import WebWingsLogo from './WebWingsLogo';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Anti-Template Engineering',
      desc: 'We never reuse recycled themes or bloated drag-and-drop builders. Every digital asset and line of code is custom-forged for speed, security, and unique distinction.',
    },
    {
      title: 'Cinematic Visual Standard',
      desc: 'We combine Hollywood-grade color grading, kinetic typography, and high-fidelity 3D/AI pipelines to give your brand an unignorable presence.',
    },
    {
      title: 'Business Growth Centric',
      desc: 'Beautiful aesthetics mean nothing without conversions. Every layout, CTA, and video hook is calibrated to turn attention into measurable revenue.',
    },
    {
      title: 'AI Augmented Velocity',
      desc: 'We harness modern generative AI models to compress 3-month production cycles into days, without ever compromising on human artistic polish.',
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#080808] text-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D71920]/8 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-neutral-900/60 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-tech text-[#D71920] uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
            <span>The WEB WINGS Philosophy</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            CREATIVITY WITH PURPOSE. <br />
            <span className="text-metallic-silver">TECHNOLOGY WITH VISION.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#9EA1A8] leading-relaxed">
            <strong className="text-white font-semibold">WEB WINGS</strong> is an international-caliber digital creative company. We partner with ambitious founders, brands, and enterprises to craft high-conversion websites, captivating motion stories, and enduring brand identities that soar above saturated markets.
          </p>
        </motion.div>

        {/* Mission & Vision Editorial Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-2xl bg-[#101013] border border-white/[0.08] relative overflow-hidden group hover:border-[#D71920]/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D71920]/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-white/10 flex items-center justify-center text-[#D71920] mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>

            <span className="text-xs font-tech text-[#8A8D93] uppercase tracking-widest block mb-2">
              Core Objective
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-[#9FA2A8] leading-relaxed">
              To empower ambitious businesses by equipping them with extraordinary digital presence, high-velocity websites, and high-impact visual storytelling that reliably drives customer acquisition, authority, and sustained revenue growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-2xl bg-[#101013] border border-white/[0.08] relative overflow-hidden group hover:border-[#D71920]/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-white/10 flex items-center justify-center text-[#C4C7CC] mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>

            <span className="text-xs font-tech text-[#8A8D93] uppercase tracking-widest block mb-2">
              Future Direction
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-[#9FA2A8] leading-relaxed">
              To be the premier digital creative partner globally recognized for fusing cutting-edge software engineering with cinematic design aesthetics and pioneering generative AI workflows—turning bold brand aspirations into enduring digital reality.
            </p>
          </motion.div>
        </div>

        {/* Why Choose WEB WINGS Section with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-2xl bg-[#0E0E10] border border-white/[0.06] relative"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-white/[0.08] gap-6">
            <div>
              <span className="text-xs font-tech text-[#D71920] uppercase tracking-widest block mb-1">
                The Competitive Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Why Choose WEB WINGS?
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <WebWingsLogo variant="icon" size="md" glow={true} />
              <div className="text-left">
                <div className="text-xs font-bold text-white">WEB WINGS STANDARD</div>
                <div className="text-[11px] text-[#7E828A]">Precision. Speed. Distinction.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-xl bg-[#141417]/80 border border-white/[0.05] hover:border-[#D71920]/40 transition-colors"
              >
                <div className="font-tech text-xs text-[#D71920] font-bold mb-2">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-display font-bold text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#90939A] leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Impact Ticker Numbers with Scroll Scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white">100%</div>
              <div className="text-xs text-[#8A8D93] uppercase font-tech tracking-wider mt-1">
                Custom Craftsmanship
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#D71920]">0%</div>
              <div className="text-xs text-[#8A8D93] uppercase font-tech tracking-wider mt-1">
                Recycled Templates
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white">95+</div>
              <div className="text-xs text-[#8A8D93] uppercase font-tech tracking-wider mt-1">
                Target PageSpeed Score
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#25D366]">24/7</div>
              <div className="text-xs text-[#8A8D93] uppercase font-tech tracking-wider mt-1">
                Direct WhatsApp Channel
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
