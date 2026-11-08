import React from "react";

interface SectionHeaderProps {
  number?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "split";
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  dark = false,
}) => {
  const textColor = dark ? "text-[#F8F7F4]" : "text-[#14171A]";
  const subheadColor = dark ? "text-[#A0B2BD]" : "text-[#545F68]";
  const eyebrowColor = dark ? "text-[#A0B2BD]" : "text-[#384D58]";
  const borderColor = dark ? "border-[#2B3740]" : "border-[#DFDBD2]";

  if (align === "split") {
    return (
      <div className={`border-t ${borderColor} pt-8 pb-10 md:pb-14 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 flex items-baseline gap-3">
            {number && (
              <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] font-medium">
                [{number}]
              </span>
            )}
            <div>
              <span className={`block font-mono text-xs tracking-[0.25em] uppercase mb-2 ${eyebrowColor}`}>
                {eyebrow}
              </span>
              <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight ${textColor}`}>
                {title}
              </h2>
            </div>
          </div>
          {subtitle && (
            <div className="md:col-span-7 md:pl-8 lg:pl-16">
              <p className={`font-sans text-base sm:text-lg leading-relaxed font-light ${subheadColor}`}>
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-10 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""} ${className}`}>
      <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
        {number && (
          <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] font-medium">
            [{number}]
          </span>
        )}
        <span className={`font-mono text-xs tracking-[0.25em] uppercase ${eyebrowColor}`}>
          {eyebrow}
        </span>
      </div>
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-sans text-base sm:text-lg leading-relaxed font-light max-w-2xl ${subheadColor} ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
