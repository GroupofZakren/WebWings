/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle, Settings, Sliders } from 'lucide-react';
import WebWingsLogo from './WebWingsLogo';
import { SocialLinksBar, WhatsAppIcon } from './SocialIcons';
import { useSocial } from '../context/SocialContext';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigate }) => {
  const { config, openWhatsAppChat, setIsSettingsOpen } = useSocial();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? currentScrollY / docHeight : 0;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(currentScrollY);
          setIsScrolled(currentScrollY > 30);
          setScrollProgress(progress);

          // Detect active section
          const sections = ['home', 'about', 'services', 'portfolio', 'process', 'contact'];
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 200 && rect.bottom >= 200) {
                setActiveSection(section);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Our Process', id: 'process' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  // Dynamic calculations for scrolling animation on the logo ("uper logo ha scurolling animation lagana")
  // As user scrolls: scale from 1.0 down to 0.88, wing flex angle, and intense glowing halo
  const logoScale = isScrolled ? Math.max(0.84, 1 - scrollProgress * 0.2) : 1;
  const logoGlowIntensity = Math.min(1, 0.4 + scrollProgress * 0.8);
  const logoWingLift = Math.sin(scrollProgress * Math.PI * 6) * 3; // subtle wing lift during scroll

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-2.5 bg-[#080808]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.9)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO with dynamic scrolling animation ("uper logo ha scurolling animation lagana") */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="group flex items-center gap-3 relative focus:outline-none"
              aria-label="WEB WINGS - Return to top"
            >
              {/* Dynamic scroll-reactive wrapper */}
              <div
                className="relative flex items-center justify-center transition-all duration-300"
                style={{
                  transform: `scale(${logoScale}) translateY(${isScrolled ? 0 : 0}px)`,
                }}
              >
                {/* Scroll aura that pulses as user scrolls down */}
                <div
                  className="absolute -inset-3 rounded-full pointer-events-none transition-all duration-500 blur-lg"
                  style={{
                    background: `radial-gradient(circle, rgba(215, 25, 32, ${
                      isScrolled ? logoGlowIntensity * 0.45 : 0.1
                    }) 0%, transparent 70%)`,
                    transform: `scale(${1 + scrollProgress * 0.3})`,
                  }}
                />

                {/* Animated Logo Component */}
                <WebWingsLogo
                  variant="compact"
                  size={isScrolled ? 'md' : 'lg'}
                  isScrolled={isScrolled}
                  scrollProgress={scrollProgress}
                  glow={true}
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                {/* Scroll Indicator Micro-Badge on Logo */}
                {isScrolled && (
                  <span className="hidden xl:inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded bg-[#18181D] border border-[#D71920]/40 text-[9px] font-tech text-[#D71920]">
                    <span>{Math.round(scrollProgress * 100)}%</span>
                  </span>
                )}
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1 text-xs font-tech uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-white font-bold' : 'text-[#9A9DA3] hover:text-white'
                    }`}
                  >
                    {link.name}

                    {/* Active Underline */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D71920] shadow-[0_0_10px_#D71920]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* SOCIAL CHANNELS & WHATSAPP DIRECT ACTION */}
            <div className="hidden md:flex items-center gap-3">
              {/* Quick Social Links Bar (TikTok, FB, YT, IG) */}
              <SocialLinksBar size="sm" />

              {/* Edit Links Button */}
              <button
                type="button"
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 rounded-lg bg-[#141416] border border-white/10 hover:border-[#D71920]/60 text-[#8E929A] hover:text-white transition-colors cursor-pointer"
                title="Edit Social Media Links & WhatsApp Number"
                aria-label="Edit Social Media Links & WhatsApp Number"
              >
                <Sliders className="w-3.5 h-3.5" />
              </button>

              {/* WhatsApp Direct Action Button */}
              <button
                type="button"
                onClick={() => openWhatsAppChat()}
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white overflow-hidden rounded-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-[#18181A] to-[#141416] border border-white/10 hover:border-[#25D366]/60 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="hidden xl:inline">WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-[#25D366] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => openWhatsAppChat()}
                className="p-2 rounded-lg bg-[#18181D] text-[#25D366] border border-white/10"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#E1E4E8] hover:text-white rounded-lg focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#D71920]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Scroll Progress Bar along header bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#88080E] via-[#D71920] to-[#FF4D55] shadow-[0_0_12px_#D71920]"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-8 bg-[#080808]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col space-y-3 pt-2">
              <div className="pb-4 border-b border-white/10 flex items-center justify-between">
                <WebWingsLogo variant="compact" size="md" glow={true} />
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsSettingsOpen(true);
                  }}
                  className="px-2.5 py-1 rounded bg-[#18181D] border border-white/10 text-[11px] font-tech text-[#D71920] uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Sliders className="w-3 h-3" />
                  <span>Configure Links</span>
                </button>
              </div>

              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-xl font-display font-semibold text-[#E5E7EB] hover:text-[#D71920] py-2 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-tech text-[#666]">0{idx + 1}</span>
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              {/* Social Channels inside Mobile Drawer */}
              <div>
                <span className="text-[11px] font-tech text-[#8A8D93] uppercase tracking-wider block mb-2">
                  Follow Our Official Channels:
                </span>
                <SocialLinksBar size="md" showLabels={true} className="justify-center" />
              </div>

              {/* Direct WhatsApp Call to Action */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppChat();
                }}
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs tracking-wider uppercase rounded-lg text-center shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black" />
                <span>Chat on WhatsApp ({config.whatsappNumber})</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
