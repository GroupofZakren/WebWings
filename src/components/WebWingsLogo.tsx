/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface WebWingsLogoProps {
  variant?: 'full' | 'compact' | 'icon' | 'emblem-text';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  className?: string;
  isScrolled?: boolean;
  scrollProgress?: number;
  glow?: boolean;
}

export const WebWingsLogo: React.FC<WebWingsLogoProps> = ({
  variant = 'compact',
  size = 'md',
  className = '',
  isScrolled = false,
  scrollProgress = 0,
  glow = true,
}) => {
  // Dimensions mapping
  const sizeClasses = {
    sm: variant === 'icon' ? 'w-8 h-8' : 'h-8',
    md: variant === 'icon' ? 'w-10 h-10' : 'h-10',
    lg: variant === 'icon' ? 'w-16 h-16' : 'h-14',
    xl: variant === 'icon' ? 'w-24 h-24' : 'h-24',
    custom: '',
  };

  // Dynamic wing flap & sweep response to page scrolling
  const wingLift = isScrolled ? Math.sin(scrollProgress * Math.PI * 3) * 2.5 : 0;
  const redGlowIntensity = isScrolled ? 0.9 : 0.45;

  return (
    <div
      className={`inline-flex items-center select-none transition-all duration-300 ${sizeClasses[size]} ${className}`}
      style={{
        filter: glow
          ? `drop-shadow(0 0 ${isScrolled ? '16px' : '8px'} rgba(215, 25, 32, ${redGlowIntensity}))`
          : undefined,
      }}
    >
      <svg
        viewBox={variant === 'full' ? '0 0 1000 780' : variant === 'icon' ? '0 0 1000 640' : '0 0 1000 680'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain overflow-visible"
        aria-label="WEB WINGS Official Logo"
      >
        <defs>
          {/* Metallic Dark Charcoal / Titanium Gradients */}
          <linearGradient id="ww_outer_wing_left" x1="120" y1="200" x2="500" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A4B50" />
            <stop offset="25%" stopColor="#25262A" />
            <stop offset="70%" stopColor="#141517" />
            <stop offset="100%" stopColor="#0B0B0C" />
          </linearGradient>

          <linearGradient id="ww_outer_wing_right" x1="880" y1="200" x2="500" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A4B50" />
            <stop offset="25%" stopColor="#25262A" />
            <stop offset="70%" stopColor="#141517" />
            <stop offset="100%" stopColor="#0B0B0C" />
          </linearGradient>

          <linearGradient id="ww_bevel_rim" x1="500" y1="180" x2="500" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A0A2A8" />
            <stop offset="50%" stopColor="#55575E" />
            <stop offset="100%" stopColor="#1C1D20" />
          </linearGradient>

          {/* Vivid Metallic Crimson Red Gradients */}
          <linearGradient id="ww_red_center" x1="500" y1="360" x2="500" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF4A54" />
            <stop offset="35%" stopColor="#E21A22" />
            <stop offset="75%" stopColor="#B30F16" />
            <stop offset="100%" stopColor="#6E050A" />
          </linearGradient>

          <linearGradient id="ww_red_wing_left" x1="160" y1="320" x2="420" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF444E" />
            <stop offset="40%" stopColor="#D71920" />
            <stop offset="85%" stopColor="#930B11" />
            <stop offset="100%" stopColor="#550307" />
          </linearGradient>

          <linearGradient id="ww_red_wing_right" x1="840" y1="320" x2="580" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF444E" />
            <stop offset="40%" stopColor="#D71920" />
            <stop offset="85%" stopColor="#930B11" />
            <stop offset="100%" stopColor="#550307" />
          </linearGradient>

          {/* Silver Chrome Typography Gradient */}
          <linearGradient id="ww_text_silver" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#D8DCE3" />
            <stop offset="60%" stopColor="#8E929A" />
            <stop offset="90%" stopColor="#D2D6DC" />
            <stop offset="100%" stopColor="#F5F6F8" />
          </linearGradient>

          {/* Red Metallic Typography Gradient */}
          <linearGradient id="ww_text_red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF5C65" />
            <stop offset="30%" stopColor="#E61A22" />
            <stop offset="70%" stopColor="#B50E15" />
            <stop offset="100%" stopColor="#7E060B" />
          </linearGradient>

          {/* Drop Shadows */}
          <filter id="ww_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000000" floodOpacity="0.85" />
          </filter>

          <filter id="ww_red_inner_glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* =================== 1. WING EMBLEM =================== */}
        <g
          filter="url(#ww_shadow)"
          className="transition-transform duration-500 origin-center"
          style={{
            transform: `scale(${1 + (isScrolled ? 0.02 : 0)}) rotate(${wingLift}deg)`,
          }}
        >
          {/* --- LEFT INNER RED FEATHERS (Under outer wing) --- */}
          {/* Feather 1 (upper red feather) */}
          <path
            d="M 160 340 C 230 355, 310 395, 365 445 L 340 475 C 280 435, 210 395, 160 340 Z"
            fill="url(#ww_red_wing_left)"
          />
          {/* Feather 1 highlight rim */}
          <path
            d="M 160 340 C 230 355, 310 395, 365 445"
            stroke="#FF7B82"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Feather 2 (lower red feather) */}
          <path
            d="M 215 425 C 275 445, 340 480, 390 530 L 370 550 C 315 510, 260 475, 215 425 Z"
            fill="url(#ww_red_wing_left)"
          />
          {/* Feather 2 highlight rim */}
          <path
            d="M 215 425 C 275 445, 340 480, 390 530"
            stroke="#FF6670"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* --- RIGHT INNER RED FEATHERS (Under outer wing) --- */}
          {/* Feather 1 (upper red feather) */}
          <path
            d="M 840 340 C 770 355, 690 395, 635 445 L 660 475 C 720 435, 790 395, 840 340 Z"
            fill="url(#ww_red_wing_right)"
          />
          {/* Feather 1 highlight rim */}
          <path
            d="M 840 340 C 770 355, 690 395, 635 445"
            stroke="#FF7B82"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Feather 2 (lower red feather) */}
          <path
            d="M 785 425 C 725 445, 660 480, 610 530 L 630 550 C 685 510, 740 475, 785 425 Z"
            fill="url(#ww_red_wing_right)"
          />
          {/* Feather 2 highlight rim */}
          <path
            d="M 785 425 C 725 445, 660 480, 610 530"
            stroke="#FF6670"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* --- CENTER METALLIC RED 'W' FOLD --- */}
          <path
            d="M 500 385 L 575 565 L 530 575 L 500 485 L 470 575 L 425 565 Z"
            fill="url(#ww_red_center)"
          />
          {/* Center Red fold bevel highlight */}
          <path
            d="M 500 385 L 470 575 M 500 385 L 500 485"
            stroke="#FFA8AE"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* --- LEFT MAIN DARK TITANIUM WING ARM --- */}
          {/* Outer primary silhouette */}
          <path
            d="M 95 208 C 220 300, 320 340, 390 410 L 490 625 L 435 625 L 340 425 C 260 370, 180 320, 95 208 Z"
            fill="url(#ww_outer_wing_left)"
          />
          {/* Left Wing Top/Outer Bevel Ridge */}
          <path
            d="M 95 208 C 220 300, 320 340, 390 410 L 490 625"
            stroke="url(#ww_bevel_rim)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Inner crest facet edge */}
          <path
            d="M 390 410 L 435 625"
            stroke="#6B6E76"
            strokeWidth="2.5"
          />

          {/* --- RIGHT MAIN DARK TITANIUM WING ARM --- */}
          {/* Outer primary silhouette */}
          <path
            d="M 905 208 C 780 300, 680 340, 610 410 L 510 625 L 565 625 L 660 425 C 740 370, 820 320, 905 208 Z"
            fill="url(#ww_outer_wing_right)"
          />
          {/* Right Wing Top/Outer Bevel Ridge */}
          <path
            d="M 905 208 C 780 300, 680 340, 610 410 L 510 625"
            stroke="url(#ww_bevel_rim)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Inner crest facet edge */}
          <path
            d="M 610 410 L 565 625"
            stroke="#6B6E76"
            strokeWidth="2.5"
          />

          {/* Bottom apex joint */}
          <circle cx="500" cy="625" r="4.5" fill="#E21A22" />
        </g>

        {/* =================== 2. TYPOGRAPHY "WEB WINGS" =================== */}
        {variant !== 'icon' && (
          <g className="transition-all duration-300">
            {/* "WEB" in beveled metallic chrome */}
            <text
              x="270"
              y="705"
              fontFamily="'Syne', 'Space Grotesk', sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="10"
              fill="url(#ww_text_silver)"
              textAnchor="middle"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.9))',
              }}
            >
              WEB
            </text>

            {/* "WINGS" in beveled metallic crimson red */}
            <text
              x="680"
              y="705"
              fontFamily="'Syne', 'Space Grotesk', sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="10"
              fill="url(#ww_text_red)"
              textAnchor="middle"
              style={{
                filter: 'drop-shadow(0 4px 10px rgba(215,25,32,0.4))',
              }}
            >
              WINGS
            </text>
          </g>
        )}

        {/* =================== 3. DIVIDER & TAGLINE (Full Variant Only) =================== */}
        {variant === 'full' && (
          <g>
            {/* Horizontal metallic divider line */}
            <line
              x1="180"
              y1="738"
              x2="450"
              y2="738"
              stroke="#2E3035"
              strokeWidth="2"
            />
            {/* Center red metallic notch/accent */}
            <rect
              x="455"
              y="733"
              width="90"
              height="8"
              rx="2"
              fill="#D71920"
            />
            <rect
              x="457"
              y="734"
              width="86"
              height="2"
              rx="1"
              fill="#FF8086"
            />
            <line
              x1="550"
              y1="738"
              x2="820"
              y2="738"
              stroke="#2E3035"
              strokeWidth="2"
            />

            {/* Tagline: | WE BUILD WEBSITES THAT GROW BUSINESSES | */}
            <g transform="translate(500, 772)">
              {/* Left red pipe */}
              <rect x="-355" y="-12" width="3" height="15" fill="#D71920" rx="1" />

              {/* Tagline text */}
              <text
                x="0"
                y="0"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize="21"
                fontWeight="700"
                letterSpacing="5"
                fill="#C6C8CC"
                textAnchor="middle"
              >
                WE BUILD WEBSITES THAT GROW BUSINESSES
              </text>

              {/* Right red pipe */}
              <rect x="352" y="-12" width="3" height="15" fill="#D71920" rx="1" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export default WebWingsLogo;
