import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-[0.16em] uppercase text-xs font-medium transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#384D58] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-xs tracking-[0.2em]",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#384D58] text-[#F8F7F4] hover:bg-[#273740] border border-[#384D58] shadow-sm",
    secondary:
      "bg-[#14171A] text-[#F8F7F4] hover:bg-[#2B3740] border border-[#14171A]",
    outline:
      "bg-transparent text-[#14171A] border border-[#14171A] hover:bg-[#14171A] hover:text-[#F8F7F4]",
    ghost:
      "bg-transparent text-[#14171A] hover:bg-[#ECE8E0] border border-transparent",
    link:
      "p-0 text-[#384D58] hover:text-[#14171A] border-b border-[#384D58] hover:border-[#14171A] pb-0.5 tracking-[0.18em]",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2 flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2 flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${variant !== "link" ? sizeStyles : ""} ${variantStyles} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variant !== "link" ? sizeStyles : ""} ${variantStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variant !== "link" ? sizeStyles : ""} ${variantStyles} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
