"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  aspectRatio?: "16/10" | "16/9" | "4/5" | "1/1" | "21/9";
  caption?: string;
  isHero?: boolean;
  isPlaceholder?: boolean;
  priority?: boolean;
  className?: string;
  overlayText?: string;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  aspectRatio = "16/10",
  caption,
  isHero = false,
  isPlaceholder = true,
  priority = false,
  className = "",
  overlayText,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Aspect ratio class map
  const ratioClasses = {
    "16/10": "aspect-[16/10]",
    "16/9": "aspect-[16/9]",
    "4/5": "aspect-[4/5]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
  }[aspectRatio];

  return (
    <figure className={`relative group w-full overflow-hidden ${className}`}>
      {/* Structural Hairline Frame */}
      <div
        className={`relative w-full ${ratioClasses} bg-[#ECE8E0] overflow-hidden border border-[#DFDBD2] transition-colors duration-300`}
      >
        {/* Architectural Crosshair / Datum Indicators at Corners */}
        <div className="absolute top-2 left-2 z-20 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 border-t border-l border-[#384D58]" />
        </div>
        <div className="absolute top-2 right-2 z-20 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 border-t border-r border-[#384D58]" />
        </div>
        <div className="absolute bottom-2 left-2 z-20 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 border-b border-l border-[#384D58]" />
        </div>
        <div className="absolute bottom-2 right-2 z-20 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 border-b border-r border-[#384D58]" />
        </div>

        {/* Temporary Asset Replacement Badge for Transparency */}
        {isPlaceholder && (
          <div className="absolute top-3 left-3 z-20 pointer-events-none">
            <span className="inline-flex items-center px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[#14171A]/75 text-[#F8F7F4] backdrop-blur-sm border border-white/10">
              Curated Reference Frame
            </span>
          </div>
        )}

        {/* Aspect Ratio & Scale Metric Badge */}
        <div className="absolute bottom-3 right-3 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-block px-1.5 py-0.5 text-[9px] font-mono tracking-wider bg-[#14171A]/80 text-[#ECE8E0] backdrop-blur-sm">
            RATIO {aspectRatio}
          </span>
        </div>

        {/* Subtle architectural gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171A]/40 via-transparent to-transparent opacity-30 group-hover:opacity-20 transition-opacity z-10" />

        {/* Image Component with Smooth Fade In */}
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority || isHero}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
          className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.015] ${
            isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
          }`}
          onLoad={() => setIsLoaded(true)}
        />

        {overlayText && (
          <div className="absolute bottom-4 left-4 z-20 max-w-[80%]">
            <p className="text-white font-mono text-xs tracking-wider uppercase drop-shadow-sm">
              {overlayText}
            </p>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 text-[11px] font-mono tracking-wide text-[#545F68] flex items-center justify-between">
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
