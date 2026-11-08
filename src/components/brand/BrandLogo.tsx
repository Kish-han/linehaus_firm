import Link from "next/link";
import React from "react";

interface BrandLogoProps {
  variant?: "horizontal" | "stacked" | "monogram";
  theme?: "default" | "light" | "charcoal";
  className?: string;
  withLink?: boolean;
}

/**
 * BrandLogo Component
 * -------------------
 * Faithfully represents the approved LINEHAUS ARCHITECTS brand identity:
 * - Geometric "LA" architectural monogram
 * - Uppercase LINEHAUS wordmark
 * - ARCHITECTS supporting typography
 * - Architecture + Interior descriptor
 * 
 * NOTE FOR PRODUCTION REPLACEMENT:
 * When official vector assets are supplied, place the SVG file in:
 * `/public/brand/linehaus-logo.svg`
 * and toggle the image replacement flag if desired, or replace the SVG paths below.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "horizontal",
  theme = "default",
  className = "",
  withLink = true,
}) => {
  // Color tokens based on theme
  const colors = {
    default: {
      monogramFill: "#384D58", // Muted slate-blue
      monogramStroke: "#384D58",
      primaryText: "#14171A", // High contrast charcoal
      secondaryText: "#384D58", // Slate-blue
      descriptorText: "#5A6672", // Muted slate
      border: "#DFDBD2",
    },
    light: {
      monogramFill: "#E8EDF0",
      monogramStroke: "#E8EDF0",
      primaryText: "#F8F7F4",
      secondaryText: "#A0B2BD",
      descriptorText: "#8C9EA9",
      border: "#3B4750",
    },
    charcoal: {
      monogramFill: "#14171A",
      monogramStroke: "#14171A",
      primaryText: "#14171A",
      secondaryText: "#384D58",
      descriptorText: "#545F68",
      border: "#14171A",
    },
  }[theme];

  const MonogramSvg = (
    <div className="relative flex-shrink-0 flex items-center justify-center">
      <svg
        width="38"
        height="38"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-[1.02]"
        aria-label="Linehaus Architects LA Monogram"
      >
        {/* Geometric Framing Box with Architectural Hairline Corner Cuts */}
        <rect
          x="2"
          y="2"
          width="40"
          height="40"
          stroke={colors.monogramStroke}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Architectonic L & A Monogram Construction Lines */}
        {/* 'L' Stem & Base */}
        <path
          d="M12 11V31H25"
          stroke={colors.monogramStroke}
          strokeWidth="2.2"
          strokeLinecap="square"
        />
        {/* 'A' Apex & Rafter */}
        <path
          d="M23 31L29 11L35 31"
          stroke={colors.monogramStroke}
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* 'A' Crossbar extending horizontally as an architectural alignment datum */}
        <line
          x1="20"
          y1="23.5"
          x2="33"
          y2="23.5"
          stroke={colors.monogramStroke}
          strokeWidth="1.6"
        />
        {/* Subtle grid intersection datum point */}
        <circle cx="12" cy="11" r="1.2" fill={colors.monogramFill} />
        <circle cx="29" cy="11" r="1.2" fill={colors.monogramFill} />
      </svg>
    </div>
  );

  const LogoContent = (
    <div
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 ${className}`}
      data-brand="linehaus-architects"
    >
      {variant === "monogram" && MonogramSvg}

      {variant === "horizontal" && (
        <div className="flex items-center gap-3">
          {MonogramSvg}
          <div className="flex flex-col justify-center border-l pl-3" style={{ borderColor: colors.border }}>
            <div className="flex items-baseline gap-1.5 leading-none">
              <span
                className="font-sans font-bold tracking-[0.18em] text-[15px] sm:text-[16px] uppercase"
                style={{ color: colors.primaryText }}
              >
                LINEHAUS
              </span>
              <span
                className="font-mono text-[10px] tracking-[0.25em] font-medium uppercase"
                style={{ color: colors.secondaryText }}
              >
                ARCHITECTS
              </span>
            </div>
            <span
              className="font-sans text-[9px] tracking-[0.22em] uppercase mt-1 font-medium"
              style={{ color: colors.descriptorText }}
            >
              Architecture + Interior
            </span>
          </div>
        </div>
      )}

      {variant === "stacked" && (
        <div className="flex flex-col items-start gap-3">
          {MonogramSvg}
          <div className="flex flex-col gap-1">
            <span
              className="font-sans font-bold tracking-[0.22em] text-xl sm:text-2xl uppercase leading-none"
              style={{ color: colors.primaryText }}
            >
              LINEHAUS
            </span>
            <span
              className="font-mono text-xs tracking-[0.3em] font-medium uppercase"
              style={{ color: colors.secondaryText }}
            >
              ARCHITECTS
            </span>
            <div className="h-[1px] w-12 my-1" style={{ backgroundColor: colors.border }} />
            <span
              className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium"
              style={{ color: colors.descriptorText }}
            >
              Architecture + Interior Studio
            </span>
          </div>
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" aria-label="Linehaus Architects Home" className="focus-visible:outline-none">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
};
