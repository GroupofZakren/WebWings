/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Sliders, ExternalLink } from 'lucide-react';
import WebWingsLogo from './WebWingsLogo';
import { SocialLinksBar, WhatsAppIcon } from './SocialIcons';
import { useSocial } from '../context/SocialContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { config, openWhatsAppChat, setIsSettingsOpen } = useSocial();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    'WordPress Development',
    'Video Editing & Reels',
    'AI Video Production',
    'AI Image Generation',
    'Graphic Design & Branding',
    'Social Media Marketing',
    'Account Management',
  ];

  return (
    <footer className="relative bg-[#060607] border-t border-white/[0.08] text-white pt-20 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#D71920]/8 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Massive Branding Lockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-16 border-b border-white/[0.08] gap-8">
          <div className="max-w-xl">
            <WebWingsLogo variant="full" size="lg" glow={true} className="mb-4" />
            <p className="text-xs sm:text-sm text-[#8E929A] leading-relaxed mt-4">
              WEB WINGS is an elite digital creative agency helping ambitious brands achieve soaring online growth through world-class website engineering, high-retention video motion, and next-gen AI content production.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="/web-wings-full-project.zip"
              download="web-wings-agency.zip"
              className="p-3.5 rounded-xl bg-[#111114] border border-[#D71920]/40 hover:border-[#D71920] hover:bg-[#18181D] text-[#D71920] hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(215,25,32,0.2)]"
              title="Download entire codebase folder as a ZIP file"
            >
              <span className="text-xs font-tech uppercase tracking-wider">Download Folder (.ZIP)</span>
            </a>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-3.5 rounded-xl bg-[#111114] border border-white/10 hover:border-[#D71920]/60 hover:bg-[#18181D] text-[#A0A3A8] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sliders className="w-4 h-4 text-[#D71920]" />
              <span className="text-xs font-tech uppercase tracking-wider">Configure Channels</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-xl bg-[#111114] border border-white/10 hover:border-[#D71920]/60 hover:bg-[#18181D] text-[#A0A3A8] hover:text-white transition-all flex items-center gap-2 cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <span className="text-xs font-tech uppercase tracking-wider">Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#D71920] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/[0.06]">
          {/* Navigation */}
          <div>
            <h4 className="text-xs font-tech text-white uppercase tracking-widest font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E929A]">
              {['home', 'about', 'services', 'portfolio', 'process', 'contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="hover:text-white transition-colors cursor-pointer capitalize"
                  >
                    {sec === 'process' ? 'Our Process' : sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-tech text-white uppercase tracking-widest font-bold mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E929A]">
              {servicesList.slice(0, 4).map((s) => (
                <li key={s}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Media Links (TikTok, Facebook, YouTube, Instagram) */}
          <div>
            <h4 className="text-xs font-tech text-white uppercase tracking-widest font-bold mb-4">
              Social Media
            </h4>
            <div className="space-y-2.5 text-xs text-[#8E929A]">
              <a
                href={config.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25F4EE] transition-colors"
              >
                <span>TikTok Profile</span>
                <ExternalLink className="w-3 h-3 text-[#666]" />
              </a>
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E1306C] transition-colors"
              >
                <span>Instagram Profile</span>
                <ExternalLink className="w-3 h-3 text-[#666]" />
              </a>
              <a
                href={config.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FF0000] transition-colors"
              >
                <span>YouTube Channel</span>
                <ExternalLink className="w-3 h-3 text-[#666]" />
              </a>
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3 h-3 text-[#666]" />
              </a>
            </div>
          </div>

          {/* Direct Communication: WhatsApp Only */}
          <div>
            <h4 className="text-xs font-tech text-[#25D366] uppercase tracking-widest font-bold mb-4">
              Direct Communication
            </h4>
            <div className="space-y-3 text-xs text-[#8E929A]">
              <div className="text-white font-semibold text-sm">
                WhatsApp: {config.whatsappNumber}
              </div>
              <p className="text-[11px] text-[#7E828A]">
                Our primary communication hotline for client project inquiries and updates.
              </p>
              <button
                type="button"
                onClick={() => openWhatsAppChat()}
                className="w-full py-2.5 px-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-[#25D366] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B6E76] gap-4">
          <div>
            © {new Date().getFullYear()} WEB WINGS. All rights reserved. We build websites that grow businesses.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-tech text-[#8A8D93] uppercase">Official Channels:</span>
            <SocialLinksBar size="sm" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
