import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
}) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "w-full",
  }[size];

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full ${sizeClasses} ${className}`}>
      {children}
    </div>
  );
};
