import React from "react";

// Batik Parang - S diagonal pattern
export function BatikParang({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="parang-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#f5f0e6"/>
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="#8b4513" opacity="0.15"/>
            <path d="M5 20 L20 5 L35 20 L20 35 Z" fill="none" stroke="#8b4513" strokeWidth="1.5" opacity="0.4"/>
            <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="none" stroke="#c8a96e" strokeWidth="1" opacity="0.6"/>
            <circle cx="20" cy="20" r="2" fill="#8b4513" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#parang-pattern)"/>
        <g opacity="0.25">
          {[...Array(8)].map((_, i) => (
            <line key={i} x1={i * 50 - 50} y1={0} x2={i * 50 + 200} y2={300} stroke="#8b4513" strokeWidth="3"/>
          ))}
        </g>
      </svg>
    </div>
  );
}

// Batik Kawung - Concentric circles
export function BatikKawung({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="kawung-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="#f8f3eb"/>
            <circle cx="30" cy="30" r="24" fill="none" stroke="#8b4513" strokeWidth="1" opacity="0.2"/>
            <circle cx="30" cy="30" r="18" fill="none" stroke="#8b4513" strokeWidth="1.5" opacity="0.3"/>
            <circle cx="30" cy="30" r="12" fill="none" stroke="#c8a96e" strokeWidth="1.5" opacity="0.4"/>
            <circle cx="30" cy="30" r="6" fill="#8b4513" opacity="0.15"/>
            <ellipse cx="30" cy="30" rx="24" ry="12" fill="none" stroke="#c8a96e" strokeWidth="0.8" opacity="0.3"/>
            <ellipse cx="30" cy="30" rx="12" ry="24" fill="none" stroke="#c8a96e" strokeWidth="0.8" opacity="0.3"/>
            <circle cx="0" cy="0" r="12" fill="none" stroke="#8b4513" strokeWidth="1" opacity="0.15"/>
            <circle cx="60" cy="0" r="12" fill="none" stroke="#8b4513" strokeWidth="1" opacity="0.15"/>
            <circle cx="0" cy="60" r="12" fill="none" stroke="#8b4513" strokeWidth="1" opacity="0.15"/>
            <circle cx="60" cy="60" r="12" fill="none" stroke="#8b4513" strokeWidth="1" opacity="0.15"/>
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#kawung-pattern)"/>
      </svg>
    </div>
  );
}

// Batik Mega Mendung - Cloud pattern
export function BatikMegaMendung({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="megaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#2980b9" stopOpacity="0.3"/>
          </linearGradient>
          <linearGradient id="megaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2980b9" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#5dade2" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#f0f5fa"/>
        {/* Cloud layers */}
        <g opacity="0.8">
          {[0, 100, 200, 300].map((x, i) => (
            <g key={`cloud1-${i}`} transform={`translate(${x}, ${i * 30})`}>
              <ellipse cx="50" cy="30" rx="45" ry="18" fill="url(#megaGrad1)"/>
              <ellipse cx="30" cy="22" rx="28" ry="14" fill="url(#megaGrad1)"/>
              <ellipse cx="70" cy="22" rx="28" ry="14" fill="url(#megaGrad1)"/>
              <ellipse cx="50" cy="15" rx="22" ry="10" fill="url(#megaGrad2)"/>
            </g>
          ))}
        </g>
        <g opacity="0.5">
          {[50, 150, 250].map((x, i) => (
            <g key={`cloud2-${i}`} transform={`translate(${x}, ${50 + i * 40})`}>
              <ellipse cx="40" cy="25" rx="35" ry="14" fill="url(#megaGrad2)"/>
              <ellipse cx="25" cy="18" rx="22" ry="11" fill="url(#megaGrad2)"/>
              <ellipse cx="55" cy="18" rx="22" ry="11" fill="url(#megaGrad2)"/>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

// Batik Sekar Jagad - Diverse flower shapes
export function BatikSekarJagad({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sekar-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="#faf6f0"/>
            {/* Flower center */}
            <circle cx="40" cy="40" r="5" fill="#8b4513" opacity="0.3"/>
            {/* Petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <ellipse
                key={i}
                cx="40" cy="40"
                rx="3" ry="12"
                fill="none"
                stroke="#c8a96e"
                strokeWidth="1"
                opacity="0.5"
                transform={`rotate(${angle} 40 40)`}
              />
            ))}
            <circle cx="40" cy="40" r="15" fill="none" stroke="#8b4513" strokeWidth="0.8" opacity="0.25"/>
            {/* Corner flowers */}
            <circle cx="0" cy="0" r="3" fill="#c8a96e" opacity="0.2"/>
            <circle cx="80" cy="0" r="3" fill="#c8a96e" opacity="0.2"/>
            <circle cx="0" cy="80" r="3" fill="#c8a96e" opacity="0.2"/>
            <circle cx="80" cy="80" r="3" fill="#c8a96e" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#sekar-pattern)"/>
      </svg>
    </div>
  );
}

// Batik Truntum - Small star pattern
export function BatikTruntum({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="truntum-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="#f5f0e6"/>
            {/* 8-point star */}
            <g transform="translate(25,25)">
              {[0, 45, 90, 135].map((angle, i) => (
                <line
                  key={i}
                  x1="0" y1="-12" x2="0" y2="12"
                  stroke="#8b4513"
                  strokeWidth="1.5"
                  opacity="0.3"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle r="4" fill="#8b4513" opacity="0.2"/>
              <circle r="8" fill="none" stroke="#c8a96e" strokeWidth="0.8" opacity="0.3"/>
            </g>
            {/* Corner dots */}
            <circle cx="0" cy="0" r="1.5" fill="#c8a96e" opacity="0.25"/>
            <circle cx="50" cy="0" r="1.5" fill="#c8a96e" opacity="0.25"/>
            <circle cx="0" cy="50" r="1.5" fill="#c8a96e" opacity="0.25"/>
            <circle cx="50" cy="50" r="1.5" fill="#c8a96e" opacity="0.25"/>
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#truntum-pattern)"/>
      </svg>
    </div>
  );
}

// Batik Pekalongan - Colorful coastal pattern
export function BatikPekalongan({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pekalongan-pattern" x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
            <rect width="70" height="70" fill="#faf6f0"/>
            {/* Vine stem */}
            <path d="M0 35 Q17 20 35 35 Q52 50 70 35" fill="none" stroke="#2d5a27" strokeWidth="1.5" opacity="0.3"/>
            {/* Leaves */}
            <ellipse cx="17" cy="28" rx="8" ry="5" fill="#2d5a27" opacity="0.15" transform="rotate(-20 17 28)"/>
            <ellipse cx="52" cy="42" rx="8" ry="5" fill="#2d5a27" opacity="0.15" transform="rotate(20 52 42)"/>
            {/* Flowers */}
            <circle cx="35" cy="35" r="6" fill="#c0392b" opacity="0.12"/>
            <circle cx="35" cy="35" r="3" fill="#c8a96e" opacity="0.3"/>
            {/* Small buds */}
            <circle cx="10" cy="15" r="2.5" fill="#8e44ad" opacity="0.1"/>
            <circle cx="60" cy="55" r="2.5" fill="#e67e22" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#pekalongan-pattern)"/>
      </svg>
    </div>
  );
}
