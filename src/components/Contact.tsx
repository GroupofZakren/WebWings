/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
  Sliders,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import WebWingsLogo from './WebWingsLogo';
import { useSocial } from '../context/SocialContext';
import {
  TikTokIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from './SocialIcons';

const availableServices = [
  'WordPress Website Development',
  'Video Editing & Reels',
  'AI Video Generation',
  'AI Image Generation',
  'Graphic Designing',
  'Social Media Marketing',
  'Social Media Account Management',
  'Brand Identity & Creative Design',
];

const budgetTiers = [
  'Under $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
];

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const { config, openWhatsAppChat, setIsSettingsOpen } = useSocial();

  const [fullName, setFullName] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['WordPress Website Development']
  );
  const [budget, setBudget] = useState('$2,500 – $5,000');
  const [note, setNote] = useState('');
  const [copied, setCopied] = useState(false);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleLaunchWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#25D366', '#D71920', '#FFFFFF'],
    });

    const srvText = selectedServices.join(', ');
    const msg = `Hi WEB WINGS! 
My name is: ${fullName.trim() || 'Client'}
Services required: ${srvText}
Estimated budget: ${budget}
Project description: ${note.trim() || 'I want to discuss website development and creative production for my business.'}`;

    openWhatsAppChat(msg);
  };

  const handleCopyWhatsAppNumber = () => {
    navigator.clipboard.writeText(config.whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#080808] text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D71920]/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25D366]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-[#25D366] uppercase tracking-[0.25em] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Direct WhatsApp Communication Channel</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              TALK DIRECTLY ON <br />
              <span className="text-[#25D366]">WHATSAPP.</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#141416] hover:bg-[#1C1C20] border border-white/10 hover:border-[#D71920]/50 text-xs font-tech text-[#C4C7CC] hover:text-white transition-all cursor-pointer w-fit"
          >
            <Sliders className="w-4 h-4 text-[#D71920]" />
            <span>Update WhatsApp Number & Social Links</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct WhatsApp & Official Social Media Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Primary WhatsApp Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#121215] to-[#0A0A0C] border border-[#25D366]/30 shadow-[0_15px_40px_rgba(37,211,102,0.1)] relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/60 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-tech font-bold uppercase tracking-wider">
                  Official Line
                </span>
              </div>

              <span className="text-xs font-tech text-[#8A8D93] uppercase tracking-wider block mb-1">
                Direct Client Hotline
              </span>
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                {config.whatsappNumber}
              </div>
              <p className="text-xs text-[#9EA1A8] leading-relaxed mb-6">
                Fastest way to get a project estimate, discuss requirements, or schedule a strategy call directly with the WEB WINGS team.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => openWhatsAppChat()}
                  className="flex-1 py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>Start WhatsApp Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyWhatsAppNumber}
                  className="py-3.5 px-4 bg-[#18181D] hover:bg-[#222228] border border-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Official Social Channels (TikTok, Facebook, YouTube, Instagram) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111114] border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg text-white">
                  Official Social Channels
                </h3>
                <span className="text-[11px] font-tech text-[#D71920] uppercase">
                  Follow & Connect
                </span>
              </div>
              <p className="text-xs text-[#8E929A] mb-6">
                Watch our latest creative edits, tutorials, and marketing case studies on our official channels:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {/* TikTok */}
                <a
                  href={config.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#18181D] border border-white/[0.08] hover:border-[#25F4EE]/50 hover:bg-[#1C1C22] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white group-hover:text-[#25F4EE] transition-colors">
                      <TikTokIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#25F4EE] transition-colors">
                        TikTok
                      </div>
                      <div className="text-[10px] text-[#7A7E86]">Shorts & Reels</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#666] group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#18181D] border border-white/[0.08] hover:border-[#E1306C]/50 hover:bg-[#1C1C22] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C]">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#E1306C] transition-colors">
                        Instagram
                      </div>
                      <div className="text-[10px] text-[#7A7E86]">Visual Grid</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#666] group-hover:text-white transition-colors" />
                </a>

                {/* YouTube */}
                <a
                  href={config.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#18181D] border border-white/[0.08] hover:border-[#FF0000]/50 hover:bg-[#1C1C22] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000]">
                      <YouTubeIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#FF0000] transition-colors">
                        YouTube
                      </div>
                      <div className="text-[10px] text-[#7A7E86]">Case Studies</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#666] group-hover:text-white transition-colors" />
                </a>

                {/* Facebook */}
                <a
                  href={config.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#18181D] border border-white/[0.08] hover:border-[#1877F2]/50 hover:bg-[#1C1C22] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                      <FacebookIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#1877F2] transition-colors">
                        Facebook
                      </div>
                      <div className="text-[10px] text-[#7A7E86]">Official Page</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#666] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Brief Builder */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#111114] border border-white/[0.08] relative">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Generate WhatsApp Project Brief
                  </h3>
                  <p className="text-xs text-[#8A8D93] mt-1">
                    Select your project details to launch WhatsApp with a prefilled message instantly
                  </p>
                </div>
                <WebWingsLogo variant="icon" size="sm" glow={true} />
              </div>

              <form onSubmit={handleLaunchWhatsApp} className="space-y-6">
                {/* Your Name */}
                <div>
                  <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-2">
                    Your Name or Business Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Bilal or Apex Brand"
                    className="w-full px-4 py-3 rounded-lg bg-[#18181D] border border-white/10 focus:border-[#25D366] text-sm text-white placeholder-[#5A5D65] focus:outline-none transition-all"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-2">
                    Select Services Needed:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableServices.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`p-2.5 rounded-lg text-left text-xs transition-all duration-200 border cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#25D366]/15 border-[#25D366] text-white font-semibold'
                              : 'bg-[#161619] border-white/[0.06] text-[#A2A5AC] hover:border-white/20'
                          }`}
                        >
                          <span className="truncate pr-2">{service}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-2">
                    Approximate Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetTiers.map((tier) => {
                      const isSelected = budget === tier;
                      return (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudget(tier)}
                          className={`px-3 py-1.5 rounded-md text-xs font-tech transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#25D366] text-black font-bold shadow-sm'
                              : 'bg-[#18181C] text-[#8E929A] hover:text-white border border-white/[0.08]'
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Short Note */}
                <div>
                  <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-2">
                    Message / Project Goals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Provide any specific requirements, timeline targets, or questions..."
                    className="w-full px-4 py-3 rounded-lg bg-[#18181D] border border-white/10 focus:border-[#25D366] text-sm text-white placeholder-[#5A5D65] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Launch on WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-black" />
                    <span>Send Project Details on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                  <span className="text-[11px] text-[#7E828A] text-center block mt-2.5">
                    Opens WhatsApp Web on Desktop or your WhatsApp App on Mobile instantly.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
