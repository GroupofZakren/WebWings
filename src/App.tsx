/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import CinematicLoader from './components/CinematicLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollFlightTracker from './components/ScrollFlightTracker';
import ScrollMarquee from './components/ScrollMarquee';
import SocialSettingsModal from './components/SocialSettingsModal';
import { SocialProvider, useSocial } from './context/SocialContext';
import { WhatsAppIcon } from './components/SocialIcons';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  const { openWhatsAppChat, config } = useSocial();

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    handleNavigate('contact');
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F4F6] selection:bg-[#D71920] selection:text-white relative">
      {/* Cinematic Loading Experience */}
      {loading && <CinematicLoader onComplete={() => setLoading(false)} />}

      {/* Main Sticky Navbar with Scroll-Reactive Logo Animation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onNavigate={handleNavigate}
      />

      {/* Top-to-Bottom Scroll Flight Rail & Animated Flying Wing Indicator ("uper sa nachay tak") */}
      <ScrollFlightTracker />

      {/* Main Sections */}
      <main>
        {/* Hero Section with 3D Metallic Wing Canvas */}
        <Hero
          onExploreWork={() => handleNavigate('portfolio')}
          onStartProject={handleOpenContact}
        />

        {/* Scroll Marquee Ticker 1 */}
        <ScrollMarquee
          direction="left"
          items={[
            'WE BUILD WEBSITES THAT GROW BUSINESSES',
            '4K VIDEO EDITING & REELS',
            'NEXT-GEN GENERATIVE AI CREATIONS',
            'SUB-SECOND WORDPRESS ARCHITECTURE',
            'ROI-DRIVEN SOCIAL MEDIA ACQUISITION',
          ]}
        />

        {/* About Section */}
        <About />

        {/* Services Section with 8 Core Capabilities & Detail Drawer */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Scroll Marquee Ticker 2 (Reverse direction) */}
        <ScrollMarquee
          direction="right"
          items={[
            'CREATIVITY WITH PURPOSE',
            'TECHNOLOGY WITH VISION',
            'TIKTOK · INSTAGRAM · YOUTUBE · FACEBOOK',
            'DIRECT WHATSAPP CONSULTATION',
            'ZERO RECYCLED TEMPLATES',
          ]}
        />

        {/* Portfolio Showcase with Categorized Demonstrations & Case Studies */}
        <Portfolio onStartProject={handleOpenContact} />

        {/* 6-Stage Methodology Workflow */}
        <Workflow />

        {/* Contact Section: WhatsApp Communication Only & Social Channels */}
        <Contact initialService={selectedServiceForInquiry} />
      </main>

      {/* Footer with Full Branding Lockup & Social Media Directory */}
      <Footer onNavigate={handleNavigate} />

      {/* Social & WhatsApp Configuration Modal */}
      <SocialSettingsModal />

      {/* Persistent Floating WhatsApp Action Widget (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <button
          type="button"
          onClick={() => openWhatsAppChat()}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#111114] hover:bg-[#18181D] border border-white/10 hover:border-[#25D366]/60 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-all duration-300 cursor-pointer"
          aria-label="Direct WhatsApp Consultation"
        >
          {/* Subtle Green Pulse */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
          </span>

          <span className="text-xs font-semibold text-white tracking-wide">
            Chat on WhatsApp
          </span>
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SocialProvider>
      <AppContent />
    </SocialProvider>
  );
}
