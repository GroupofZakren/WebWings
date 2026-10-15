/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Film,
  Palette,
  Sparkles,
  Image as ImageIcon,
  Globe,
  TrendingUp,
  Share2,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  X,
  MessageSquare,
} from 'lucide-react';
import { useSocial } from '../context/SocialContext';
import { WhatsAppIcon } from './SocialIcons';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  icon: React.ElementType;
  deliverables: string[];
  techTools: string[];
  fullSummary: string;
  highlightTag: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'video-editing',
    number: '01',
    title: 'Video Editing',
    category: 'Motion Production',
    shortDesc: 'Professional reels, promotional videos, YouTube content and commercial advertisements engineered for high retention.',
    icon: Film,
    deliverables: [
      'High-retention Instagram Reels & TikTok cuts',
      'Corporate promotional trailers & product launch ads',
      'YouTube long-form documentary & vlog pacing',
      'Color grading, dynamic sound design & kinetic typography',
    ],
    techTools: ['DaVinci Resolve Studio', 'Premiere Pro', 'After Effects'],
    fullSummary: 'We turn raw footage into cinematic, attention-commanding stories. Every cut, beat drop, sound effect, and typography cue is calibrated to stop the scroll and turn viewers into loyal brand advocates.',
    highlightTag: '4K Cinematic Delivery',
  },
  {
    id: 'graphic-designing',
    number: '02',
    title: 'Graphic Designing',
    category: 'Visual Craft',
    shortDesc: 'Social media posts, posters, banners, YouTube thumbnails, and high-impact marketing collateral.',
    icon: Palette,
    deliverables: [
      'Social media carousel systems and brand grids',
      'High-CTR YouTube thumbnail design',
      'Advertising banners for Google, Meta & LinkedIn',
      'Pitch decks, brochures and print-ready collateral',
    ],
    techTools: ['Photoshop', 'Illustrator', 'Figma', 'InDesign'],
    fullSummary: 'Our graphic design blends razor-sharp visual balance with persuasive psychology. We construct visuals that command immediate respect and communicate your value proposition in a split second.',
    highlightTag: 'Pixel-Perfect Systems',
  },
  {
    id: 'ai-video-generation',
    number: '03',
    title: 'AI Video Generation',
    category: 'Next-Gen AI',
    shortDesc: 'Creative AI-assisted video production, photorealistic animations, and synthetic cinematic B-roll.',
    icon: Sparkles,
    deliverables: [
      'Hyper-realistic conceptual video scenes',
      'Virtual product cinematic demonstrations',
      'Multilingual AI voiceover syncing & digital human avatars',
      'Complex VFX simulations without multimillion-dollar sets',
    ],
    techTools: ['Runway Gen-3', 'Sora workflows', 'Luma Dream Machine', 'ElevenLabs'],
    fullSummary: 'Supercharge your production timelines with state-of-the-art generative video pipelines. We conceptualize, generate, upscale, and post-process AI cinema that was previously impossible without massive Hollywood budgets.',
    highlightTag: 'Generative Cinema',
  },
  {
    id: 'ai-image-generation',
    number: '04',
    title: 'AI Image Generation',
    category: 'Synthetic Imagery',
    shortDesc: 'High-quality AI-assisted marketing imagery, hyper-realistic product shoots, and conceptual visual assets.',
    icon: ImageIcon,
    deliverables: [
      'Surreal & photorealistic commercial product imagery',
      'Brand character generation and lifestyle backdrops',
      'Ultra-high resolution upscaling & retouching',
      'Custom LoRA and consistency training for brand assets',
    ],
    techTools: ['Midjourney v6', 'Flux.1 Pro', 'Stable Diffusion', 'Magnific AI'],
    fullSummary: 'No more generic stock photos or expensive location scouting. We create tailor-made, award-winning visual scenes tailored exactly to your brand palette and stylistic guidelines.',
    highlightTag: 'Bespoke Brand Assets',
  },
  {
    id: 'wordpress-development',
    number: '05',
    title: 'WordPress Website Development',
    category: 'Web Engineering',
    shortDesc: 'Responsive business websites, high-converting landing pages, and scalable e-commerce portals.',
    icon: Globe,
    deliverables: [
      'Custom lightweight theme development (no bloated builders)',
      'WooCommerce e-commerce store architecture',
      'Sub-second page speeds with Core Web Vitals 95+',
      'Built-in Technical SEO, Schema markup & security hardening',
    ],
    techTools: ['Custom PHP/React', 'WordPress Core', 'WooCommerce', 'Tailwind', 'ACF Pro'],
    fullSummary: 'We do not build generic cookie-cutter templates. We engineer blazing-fast, mobile-first WordPress experiences customized for effortless content editing and maximum sales conversions.',
    highlightTag: 'Sub-Second Speeds',
  },
  {
    id: 'social-media-marketing',
    number: '06',
    title: 'Social Media Marketing',
    category: 'Growth & Performance',
    shortDesc: 'Data-driven campaign planning, content strategy, paid ad scaling, and digital audience promotion.',
    icon: TrendingUp,
    deliverables: [
      'Full-funnel paid advertising (Meta, TikTok, Google Ads)',
      'Audience segmentation & retargeting matrices',
      'Growth sprint playbooks and viral organic strategies',
      'Transparent weekly KPI dashboards and ROI tracking',
    ],
    techTools: ['Meta Ads Manager', 'TikTok Ads', 'Google Analytics 4', 'Triple Whale'],
    fullSummary: 'Grow your bottom line, not just vanity metrics. We construct aggressive acquisition funnels that capture high-intent leads and deliver measurable return on advertising spend (ROAS).',
    highlightTag: 'ROI-Driven Funnels',
  },
  {
    id: 'social-media-management',
    number: '07',
    title: 'Social Media Account Management',
    category: 'Brand Continuity',
    shortDesc: 'Consistent content scheduling, day-to-day account handling, community engagement, and analytics.',
    icon: Share2,
    deliverables: [
      'Full monthly content calendar production & scheduling',
      'Active comment & DM engagement with potential customers',
      'Hashtag & audio trend capitalization',
      'Monthly performance retrospectives and strategic tuning',
    ],
    techTools: ['Sprout Social', 'Later', 'Notion OS', 'Brand24'],
    fullSummary: 'Hand over the daily grind of social media. We manage your presence end-to-end with flawless consistency, brand-aligned voice, and active community nurturing that builds true brand equity.',
    highlightTag: 'Full Hands-Off Operation',
  },
  {
    id: 'brand-identity',
    number: '08',
    title: 'Brand Identity & Creative Design',
    category: 'Foundational Identity',
    shortDesc: 'Distinctive brand visuals, complete creative direction, typography systems, and enduring design assets.',
    icon: Layers,
    deliverables: [
      'Complete brand identity design & logo systems',
      'Comprehensive brand guidelines (color, typography, voice)',
      'Digital asset kits, icons & custom motion stingers',
      'Packaging and print identity specifications',
    ],
    techTools: ['Figma', 'Illustrator', 'Cinema 4D', 'Type Design'],
    fullSummary: 'Your brand is what people say about you when you leave the room. We forge memorable identities that command premium pricing, differentiate you from rivals, and inspire trust instantly.',
    highlightTag: 'Iconic Brand Architecture',
  },
];

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { openWhatsAppChat } = useSocial();

  return (
    <section id="services" className="relative py-28 bg-[#080808] text-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D71920]/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-red-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Trigger Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-[#D71920] uppercase tracking-[0.25em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
              <span>Full-Spectrum Digital Arsenal</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              EVERYTHING YOUR BRAND <br />
              <span className="text-metallic-red">NEEDS TO FLY.</span>
            </h2>
          </div>

          <p className="max-w-md text-[#9EA1A8] text-sm sm:text-base leading-relaxed">
            From high-conversion web development to viral video motion and AI-driven asset generation, we build the digital infrastructure that catapults market leaders.
          </p>
        </motion.div>

        {/* 8 Premium Service Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 4) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col justify-between p-6 rounded-xl bg-[#101012] border border-white/[0.07] hover:border-[#D71920]/50 hover:shadow-[0_12px_35px_-10px_rgba(215,25,32,0.25)] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Top Subtle Red Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D71920]/15 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Header: Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-tech text-xs tracking-widest text-[#666970] group-hover:text-[#D71920] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#18181C] border border-white/10 flex items-center justify-center text-[#E5E7EB] group-hover:text-white group-hover:border-[#D71920]/60 group-hover:bg-[#D71920]/20 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Kicker */}
                  <span className="text-[11px] font-tech text-[#8A8D93] uppercase tracking-wider block mb-1">
                    {service.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm text-[#94979E] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Footer Details */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium">
                  <span className="text-[11px] font-tech text-[#D71920]">
                    {service.highlightTag}
                  </span>
                  <div className="flex items-center gap-1 text-[#8A8D93] group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D71920] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* DETAILED SERVICE MODAL / DRAWER */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#121215] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Top ambient red flare */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D71920] to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#1C1C20] hover:bg-white/10 text-[#A0A3A8] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#D71920]/20 border border-[#D71920]/50 flex items-center justify-center text-[#FF4D55]">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-tech text-[#D71920] tracking-widest uppercase">
                    Service {selectedService.number} · {selectedService.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#B0B3BA] leading-relaxed mb-6">
                {selectedService.fullSummary}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-tech text-[#8A8D93] uppercase tracking-wider mb-3">
                  Core Deliverables & Outputs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#D8DCE3]">
                      <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Stacks */}
              <div className="mb-8">
                <h4 className="text-xs font-tech text-[#8A8D93] uppercase tracking-wider mb-2">
                  Production Suite & Stack
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedService.techTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#1A1A1E] border border-white/10 text-[#A4A7AE] font-mono text-[11px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: Direct WhatsApp & Inquiry */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForInquiry(title);
                  }}
                  className="flex-1 py-3 px-5 bg-[#D71920] hover:bg-[#E32128] text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-all shadow-[0_0_20px_rgba(215,25,32,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Configure Project Brief</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    openWhatsAppChat(
                      `Hi WEB WINGS! I want to discuss your "${title}" service for my business.`
                    );
                  }}
                  className="py-3 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs tracking-wider uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>Direct WhatsApp Chat</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
