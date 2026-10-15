/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Play,
  Layers,
  ArrowUpRight,
  X,
  Eye,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { useSocial } from '../context/SocialContext';
import { WhatsAppIcon } from './SocialIcons';

export type PortfolioCategory =
  | 'All Projects'
  | 'Websites'
  | 'Video Editing'
  | 'Graphic Design'
  | 'AI Creations'
  | 'Social Media';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Video Editing' | 'Graphic Design' | 'AI Creations' | 'Social Media';
  industry: string;
  year: string;
  badge: string;
  image: string;
  aspect: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  technologies: string[];
  isVideo?: boolean;
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'project-aether-web',
    title: 'Aether Luxury Motors',
    category: 'Websites',
    industry: 'Automotive & Clean Energy',
    year: '2026 Showcase',
    badge: 'WordPress / Headless Web',
    aspect: 'col-span-1 md:col-span-2 row-span-1',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1400&q=80',
    summary: 'Ultra-fast experiential automotive web portal featuring 3D vehicle configurator previews and 99.4/100 Core Web Vitals.',
    challenge: 'The client needed a bespoke digital flagship that matched high-ticket exotic automobile expectations with sub-second page loads.',
    solution: 'Engineered a tailored lightweight WordPress architecture with custom WebGL canvas interactions and fluid typography.',
    results: [
      { label: 'Core Web Vitals', value: '99/100' },
      { label: 'Conversion Lift', value: '+215%' },
      { label: 'Avg Session Time', value: '4m 32s' },
    ],
    technologies: ['Custom WP Architecture', 'Three.js', 'Tailwind', 'PHP 8.3'],
  },
  {
    id: 'project-cyber-reel',
    title: 'Hyperion Kinetic Ad Campaign',
    category: 'Video Editing',
    industry: 'Streetwear & Apparel',
    year: '2026 Showcase',
    badge: 'Motion Reel / Commercial',
    aspect: 'col-span-1 row-span-1',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    summary: 'High-tempo vertical short-form campaign engineered for 80%+ hook retention and 2.4M organic impressions.',
    challenge: 'Existing video ads were dropping 70% of viewers in the first 3 seconds due to slow pacing.',
    solution: 'Designed aggressive 0.8s jump-cut hooks, custom sound fx risers, and kinetic typography that sync to hard-hitting sub-bass.',
    results: [
      { label: 'Retention at 3s', value: '88.4%' },
      { label: 'Impressions', value: '2.4M+' },
      { label: 'CTR to Shop', value: '6.2%' },
    ],
    technologies: ['DaVinci Resolve', 'Sound Design', 'Kinetic Typography'],
    isVideo: true,
  },
  {
    id: 'project-ai-synthetics',
    title: 'Solaria Synthetic Ecosystem',
    category: 'AI Creations',
    industry: 'Architecture & Bio-Tech',
    year: '2026 Showcase',
    badge: 'Generative AI Imagery & Video',
    aspect: 'col-span-1 row-span-1',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    summary: 'Pioneering synthetic visual assets combining generative AI video environments and architectural concept renders.',
    challenge: 'Physical production of architectural mockups in 12 global terrain types would have cost $250k and 6 months.',
    solution: 'Developed custom Midjourney v6 + Runway Gen-3 workflows with bespoke prompt matrices and lossless 4K upscaling.',
    results: [
      { label: 'Production Time Saved', value: '85%' },
      { label: 'Budget Efficiency', value: '92%' },
      { label: 'Assets Produced', value: '140+ 4K Files' },
    ],
    technologies: ['Midjourney v6', 'Runway Gen-3', 'Flux.1', 'Magnific AI'],
  },
  {
    id: 'project-zenith-identity',
    title: 'Zenith Apex Visual Identity',
    category: 'Graphic Design',
    industry: 'Fintech & Venture Capital',
    year: '2026 Showcase',
    badge: 'Brand Design & Social Kit',
    aspect: 'col-span-1 row-span-1',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    summary: 'Comprehensive corporate visual design system, investor pitch decks, and cohesive multi-channel social kit.',
    challenge: 'A growing fintech firm had disjointed brand visuals across LinkedIn, pitch decks, and corporate reports.',
    solution: 'Forged a unified geometric design system, bespoke icon set, and 45 modular social media carousel layouts.',
    results: [
      { label: 'Brand Recognition', value: '+180%' },
      { label: 'Deck Funded Rate', value: 'Series A Closed' },
      { label: 'Design Asset Library', value: '200+ Components' },
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'InDesign System'],
  },
  {
    id: 'project-pulse-social',
    title: 'Kinetix Fitness Growth Engine',
    category: 'Social Media',
    industry: 'Athletics & Nutrition',
    year: '2026 Showcase',
    badge: 'Social Management & Ads',
    aspect: 'col-span-1 md:col-span-2 row-span-1',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=80',
    summary: 'Multi-platform social media takeover scaling organic community members from zero to 140,000 in 6 months.',
    challenge: 'Inconsistent posting schedule and zero organic community interaction led to dead social accounts.',
    solution: 'Instituted daily structured reels, audience DM automation workflows, and weekly educational carousel drops.',
    results: [
      { label: 'Follower Velocity', value: '+140,000' },
      { label: 'Monthly Reach', value: '3.8 Million' },
      { label: 'Direct DM Sales', value: '$84,000+' },
    ],
    technologies: ['Meta Ads Manager', 'Sprout Social', 'CapCut Studio'],
  },
  {
    id: 'project-vogue-ecom',
    title: 'Nocturne High-Fashion E-Commerce',
    category: 'Websites',
    industry: 'Luxury Retail',
    year: '2026 Showcase',
    badge: 'WooCommerce Architecture',
    aspect: 'col-span-1 row-span-1',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    summary: 'Editorial dark luxury fashion e-commerce storefront with seamless 1-click checkout and automated stock syncing.',
    challenge: 'Prior Shopify site was slow, restricted by restrictive template layouts, and lacking brand individuality.',
    solution: 'Engineered a bespoke dark-mode WooCommerce solution with editorial typography, instant cart drawers, and Stripe Express.',
    results: [
      { label: 'Checkout Drop-off', value: '-34%' },
      { label: 'Mobile Revenue', value: '+142%' },
      { label: 'Load Time', value: '0.82s' },
    ],
    technologies: ['WooCommerce', 'Tailwind', 'Stripe API', 'Custom PHP'],
  },
];

const categories: PortfolioCategory[] = [
  'All Projects',
  'Websites',
  'Video Editing',
  'Graphic Design',
  'AI Creations',
  'Social Media',
];

interface PortfolioProps {
  onStartProject: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onStartProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { openWhatsAppChat } = useSocial();

  const filteredProjects =
    activeCategory === 'All Projects'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-[#D71920] uppercase tracking-[0.25em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
              <span>Curated Demonstrations & Case Studies</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              WORK THAT SPEAKS <br />
              <span className="text-metallic-red">FOR ITSELF.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs font-tech text-[#8A8D93] uppercase tracking-wider mb-2">
              Demonstration Showcase
            </span>
            <p className="max-w-xs text-xs text-[#6C7078] text-left md:text-right">
              Explore interactive prototypes and creative executions illustrating our standards across web, video, AI, and social.
            </p>
          </div>
        </motion.div>

        {/* Filter Bar with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 pb-8 border-b border-white/[0.08] mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-tech tracking-wider uppercase rounded-md transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#D71920] text-white shadow-[0_0_15px_rgba(215,25,32,0.4)] font-bold'
                    : 'bg-[#141416] text-[#A0A3A8] hover:text-white hover:bg-[#1E1E22] border border-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Masonry / Grid Showcase with Staggered Scroll Triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 45, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-xl bg-[#101012] border border-white/[0.08] overflow-hidden cursor-pointer hover:border-[#D71920]/60 transition-all duration-300"
              >
                {/* Image Container with Cinematic Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#18181A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[10px] font-tech uppercase text-[#D71920] font-bold">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-tech text-[#8A8D93] bg-[#080808]/80 backdrop-blur-md px-2 py-0.5 rounded">
                      {project.year}
                    </span>
                  </div>

                  {/* Video Play Overlay if applicable */}
                  {project.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#D71920]/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(215,25,32,0.8)] group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#8A8D93] mb-2 font-body">
                    <span>{project.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#C4C7CC]">{project.category}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#9FA2A8] line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Metric Preview */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="text-[11px] font-tech text-[#8A8D93] uppercase">Key Impact</div>
                    <div className="text-xs font-tech font-bold text-[#D71920]">
                      {project.results[0].label}: {project.results[0].value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* PROJECT CASE STUDY DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#111114] border border-white/15 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] my-8"
            >
              {/* Header Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/50" />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-[#080808]/80 text-[#C4C7CC] hover:text-white hover:bg-black transition-colors"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-tech text-[#D71920] uppercase tracking-widest font-bold mb-1">
                    {selectedProject.badge} · {selectedProject.industry}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Case Study Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-[#D0D3DA] leading-relaxed">
                  {selectedProject.summary}
                </p>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#18181C] border border-white/[0.06]">
                    <div className="text-xs font-tech text-[#8A8D93] uppercase tracking-wider mb-1">
                      The Challenge
                    </div>
                    <p className="text-xs sm:text-sm text-[#A8ABB2] leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#18181C] border border-[#D71920]/20">
                    <div className="text-xs font-tech text-[#D71920] uppercase tracking-wider mb-1">
                      Creative Execution
                    </div>
                    <p className="text-xs sm:text-sm text-[#A8ABB2] leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <div className="text-xs font-tech text-[#8A8D93] uppercase tracking-wider mb-3">
                    Verified Performance Metrics
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedProject.results.map((res, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-[#141416] border border-white/10 text-center"
                      >
                        <div className="text-lg sm:text-2xl font-display font-extrabold text-[#D71920]">
                          {res.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#8A8D93] uppercase tracking-wider mt-1">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Modal CTA: WhatsApp Direct Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const pTitle = selectedProject.title;
                      setSelectedProject(null);
                      openWhatsAppChat(
                        `Hi WEB WINGS! I saw your "${pTitle}" case study and want to build a similar project for my business.`
                      );
                    }}
                    className="flex-1 py-3 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs tracking-wider uppercase rounded-lg transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-black" />
                    <span>Discuss Similar Project on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-6 bg-[#18181C] hover:bg-white/10 text-[#C4C7CC] text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
