/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Compass,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  Check,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { useSocial } from '../context/SocialContext';
import { WhatsAppIcon } from './SocialIcons';

interface WorkflowStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: React.ElementType;
}

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Deep Dive & Competitive Analysis',
    description: 'We audit your current brand presence, research target customer psychology, dissect competitors, and pinpoint high-leverage growth opportunities.',
    deliverables: ['Brand & Competitor Audit', 'Target Persona Archetypes', 'Technical Scope Document'],
    icon: Search,
  },
  {
    number: '02',
    name: 'Strategize',
    tagline: 'Architecture & Creative Roadmap',
    description: 'We outline the exact visual direction, user flow wireframes, content calendars, and conversion funnels before a single pixel or video clip is generated.',
    deliverables: ['UX Wireframes & Funnel Maps', 'Art Direction Moodboard', 'Production Milestones'],
    icon: Compass,
  },
  {
    number: '03',
    name: 'Design',
    tagline: 'Visual Systems & Prototype Craft',
    description: 'We build high-fidelity interface prototypes, brand guidelines, color palettes, and graphic templates with uncompromising aesthetic precision.',
    deliverables: ['Interactive Figma Prototypes', 'Design System Assets', 'Social & Marketing Layouts'],
    icon: PenTool,
  },
  {
    number: '04',
    name: 'Create',
    tagline: 'Code Engineering & Video Production',
    description: 'Our developers engineer lightweight, high-performance websites while our motion editors cut dynamic reels, render 3D scenes, and synthesize AI visuals.',
    deliverables: ['Production-Grade Clean Code', '4K Edited Video Content & Ads', 'Generative AI Visual Packs'],
    icon: Code2,
  },
  {
    number: '05',
    name: 'Launch',
    tagline: 'Rigorous Testing & Public Rollout',
    description: 'Comprehensive cross-device testing, SEO verification, security audits, and deployment to high-speed cloud infrastructure.',
    deliverables: ['Core Web Vitals 95+ Audit', 'Live Domain Deployment', 'Technical SEO & Analytics Setup'],
    icon: Rocket,
  },
  {
    number: '06',
    name: 'Grow',
    tagline: 'Iteration & Continuous Scaling',
    description: 'Post-launch social media management, conversion rate optimization, ad campaign tuning, and strategic advisory to keep your business flying.',
    deliverables: ['Ongoing Content Scheduling', 'Performance Retrospectives', 'A/B Conversion Experiments'],
    icon: TrendingUp,
  },
];

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { openWhatsAppChat } = useSocial();

  return (
    <section id="process" className="relative py-28 bg-[#080808] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-tech text-[#D71920] uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
            <span>Methodical Execution</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            OUR <span className="text-metallic-red">WORKFLOW.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9FA2A8]">
            A battle-tested 6-stage lifecycle designed to eliminate guesswork and turn ambitious ideas into market-dominating digital experiences.
          </p>
        </motion.div>

        {/* Step Selector Horizontal / Grid Track with Staggered Scroll Entrance */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {workflowSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            const Icon = step.icon;

            return (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#18181C] border-[#D71920] shadow-[0_0_25px_rgba(215,25,32,0.3)]'
                    : 'bg-[#101012] border-white/[0.06] hover:border-white/20'
                }`}
              >
                {/* Active Indicator Top Stripe */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#D71920]" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-tech text-xs tracking-wider ${
                      isActive ? 'text-[#D71920] font-bold' : 'text-[#6B6E76]'
                    }`}
                  >
                    {step.number}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#7A7E86]'}`}
                  />
                </div>

                <div className="font-display font-bold text-sm text-white">
                  {step.name}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="p-8 sm:p-12 rounded-2xl bg-[#111114] border border-white/[0.08] relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-tech text-lg font-bold text-[#D71920]">
                  Stage {workflowSteps[activeStep].number}
                </span>
                <span className="text-[#4E5158]">/</span>
                <span className="text-xs font-tech text-[#8A8D93] uppercase tracking-wider">
                  {workflowSteps[activeStep].tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-4">
                {workflowSteps[activeStep].name}
              </h3>

              <p className="text-sm sm:text-base text-[#A8ABB2] leading-relaxed mb-6">
                {workflowSteps[activeStep].description}
              </p>

              <div>
                <span className="text-xs font-tech text-[#8A8D93] uppercase tracking-wider block mb-3">
                  Stage Deliverables & Verification
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {workflowSteps[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181D] border border-white/[0.06] text-xs text-[#E1E4EA]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#D71920]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Next Stage / WhatsApp Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]">
              {activeStep > 0 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-4 py-2.5 rounded-lg bg-[#18181C] hover:bg-[#222228] text-xs font-semibold text-[#C4C7CC] uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Previous
                </button>
              )}

              {activeStep < workflowSteps.length - 1 ? (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-5 py-2.5 rounded-lg bg-[#D71920] hover:bg-[#E32128] text-xs font-semibold text-white uppercase tracking-wider shadow-[0_0_15px_rgba(215,25,32,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Next: {workflowSteps[activeStep + 1].name}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => openWhatsAppChat('Hi WEB WINGS! I reviewed your 6-stage workflow and want to start my project.')}
                  className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>Start on WhatsApp</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
