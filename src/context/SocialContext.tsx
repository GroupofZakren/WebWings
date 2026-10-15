/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SocialConfig {
  whatsappNumber: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
}

const DEFAULT_CONFIG: SocialConfig = {
  whatsappNumber: '+92 300 1234567',
  instagramUrl: 'https://instagram.com/webwings',
  facebookUrl: 'https://facebook.com/webwings',
  youtubeUrl: 'https://youtube.com/@webwings',
  tiktokUrl: 'https://tiktok.com/@webwings',
};

interface SocialContextType {
  config: SocialConfig;
  updateConfig: (newConfig: Partial<SocialConfig>) => void;
  getCleanWhatsAppNumber: () => string;
  openWhatsAppChat: (customText?: string) => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

const SocialContext = createContext<SocialContextType | undefined>(undefined);

export const SocialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SocialConfig>(() => {
    try {
      const saved = localStorage.getItem('webwings_social_config');
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch (e) {
      // Fallback
    }
    return DEFAULT_CONFIG;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('webwings_social_config', JSON.stringify(config));
    } catch (e) {}
  }, [config]);

  const updateConfig = (newConfig: Partial<SocialConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const getCleanWhatsAppNumber = () => {
    return config.whatsappNumber.replace(/[^0-9]/g, '');
  };

  const openWhatsAppChat = (customText?: string) => {
    const cleanNum = getCleanWhatsAppNumber();
    const message = customText || 'Hi WEB WINGS, I want to discuss a project for my business.';
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${cleanNum || '15551234567'}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <SocialContext.Provider
      value={{
        config,
        updateConfig,
        getCleanWhatsAppNumber,
        openWhatsAppChat,
        isSettingsOpen,
        setIsSettingsOpen,
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};

export const useSocial = () => {
  const context = useContext(SocialContext);
  if (!context) {
    throw new Error('useSocial must be used within a SocialProvider');
  }
  return context;
};
