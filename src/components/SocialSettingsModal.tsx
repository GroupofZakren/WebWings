/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Link2, Sparkles, AlertCircle } from 'lucide-react';
import { useSocial } from '../context/SocialContext';
import { TikTokIcon, FacebookIcon, InstagramIcon, YouTubeIcon, WhatsAppIcon } from './SocialIcons';

export const SocialSettingsModal: React.FC = () => {
  const { config, updateConfig, isSettingsOpen, setIsSettingsOpen } = useSocial();

  const [whatsapp, setWhatsapp] = useState(config.whatsappNumber);
  const [instagram, setInstagram] = useState(config.instagramUrl);
  const [facebook, setFacebook] = useState(config.facebookUrl);
  const [youtube, setYoutube] = useState(config.youtubeUrl);
  const [tiktok, setTiktok] = useState(config.tiktokUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state if modal opens
  React.useEffect(() => {
    if (isSettingsOpen) {
      setWhatsapp(config.whatsappNumber);
      setInstagram(config.instagramUrl);
      setFacebook(config.facebookUrl);
      setYoutube(config.youtubeUrl);
      setTiktok(config.tiktokUrl);
      setSavedSuccess(false);
    }
  }, [isSettingsOpen, config]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig({
      whatsappNumber: whatsapp.trim(),
      instagramUrl: instagram.trim(),
      facebookUrl: facebook.trim(),
      youtubeUrl: youtube.trim(),
      tiktokUrl: tiktok.trim(),
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsSettingsOpen(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-xl bg-[#121215] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-left"
          >
            {/* Top Red Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D71920] to-transparent" />

            {/* Close Button */}
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1A1A1E] text-[#8E929A] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#D71920]/20 border border-[#D71920]/40 flex items-center justify-center text-[#FF4D55]">
                <Link2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Social Channels & WhatsApp
                </h3>
                <p className="text-xs text-[#8E929A]">
                  Configure your official WhatsApp number and links for TikTok, Instagram, YouTube & Facebook
                </p>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Number (For Direct Client Communication)</span>
                </label>
                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+92 300 1234567 or +1 (555) 019-2834"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#18181D] border border-white/10 focus:border-[#25D366] text-sm text-white placeholder-[#5A5D65] focus:outline-none transition-all"
                />
                <span className="text-[11px] text-[#7E828A] mt-1 block">
                  All &ldquo;Chat on WhatsApp&rdquo; buttons across the website connect directly to this number.
                </span>
              </div>

              {/* Instagram URL */}
              <div>
                <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram Profile URL</span>
                </label>
                <input
                  type="url"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="https://instagram.com/youragency"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#18181D] border border-white/10 focus:border-[#E1306C] text-sm text-white placeholder-[#5A5D65] focus:outline-none transition-all"
                />
              </div>

              {/* TikTok URL */}
              <div>
                <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <TikTokIcon className="w-4 h-4 text-[#25F4EE]" />
                  <span>TikTok Profile URL</span>
                </label>
                <input
                  type="url"
                  value={tiktok}
                  onChange={(e) => setTiktok(e.target.value)}
                  placeholder="https://tiktok.com/@youragency"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#18181D] border border-white/10 focus:border-[#25F4EE] text-sm text-white placeholder-[#5A5D65] focus:outline-none transition-all"
                />
              </div>

              {/* YouTube Channel URL */}
              <div>
                <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <YouTubeIcon className="w-4 h-4 text-[#FF0000]" />
                  <span>YouTube Channel URL</span>
                </label>
                <input
                  type="url"
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  placeholder="https://youtube.com/@youragency"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#18181D] border border-white/10 focus:border-[#FF0000] text-sm text-white placeholder-[#5A5D65] focus:outline-none transition-all"
                />
              </div>

              {/* Facebook Page URL */}
              <div>
                <label className="block text-xs font-tech text-[#C4C7CC] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook Page URL</span>
                </label>
                <input
                  type="url"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  placeholder="https://facebook.com/youragency"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#18181D] border border-white/10 focus:border-[#1877F2] text-sm text-white placeholder-[#5A5D65] focus:outline-none transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 bg-[#D71920] hover:bg-[#E32128] text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-all shadow-[0_0_20px_rgba(215,25,32,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {savedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Updated & Saved!</span>
                    </>
                  ) : (
                    <span>Save Channel Links</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="py-3 px-5 bg-[#18181C] hover:bg-[#202026] border border-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              {/* Download Entire Project ZIP */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <div className="text-xs text-[#8A8D93]">
                  <span>Export Full Source Code:</span>
                </div>
                <a
                  href="/web-wings-full-project.zip"
                  download="web-wings-agency.zip"
                  className="px-3 py-1.5 rounded-lg bg-[#18181D] hover:bg-[#222228] border border-white/10 text-xs font-tech text-[#D71920] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Download Project Folder (.ZIP)</span>
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SocialSettingsModal;
