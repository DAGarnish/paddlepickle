import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", variant = "dark" }) => {
  const getColors = () => {
    switch (variant) {
      case "light":
        return {
          shield: "#FFFFFF",
          accent: "#D4AF37",
          text: "#FFFFFF"
        };
      case "gold":
        return {
          shield: "#D4AF37",
          accent: "#FFFFFF",
          text: "#D4AF37"
        };
      case "dark":
      default:
        return {
          shield: "#0C2318",
          accent: "#D4AF37",
          text: "#0C2318"
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Tournament Emblem Shield */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
      >
        {/* Shield Border */}
        <path
          d="M50 5L90 18V50C90 73 73 91 50 95C27 91 10 73 10 50V18L50 5Z"
          fill={variant === "light" ? "transparent" : "#0C2318"}
          stroke={colors.accent}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Crossed Padel & Pickleball Rackets */}
        <path
          d="M32 68L48 52M68 68L52 52"
          stroke={colors.accent}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Racket 1 (Padel) */}
        <circle cx="28" cy="28" r="12" fill={colors.accent} />
        <circle cx="28" cy="28" r="3" fill="#0C2318" />
        <circle cx="24" cy="28" r="1.5" fill="#0C2318" />
        <circle cx="32" cy="28" r="1.5" fill="#0C2318" />
        {/* Racket 2 (Pickleball) */}
        <rect x="58" y="16" width="22" height="24" rx="6" fill={colors.accent} />
        {/* Pickleball holes */}
        <circle cx="64" cy="24" r="1.5" fill="#0C2318" />
        <circle cx="74" cy="24" r="1.5" fill="#0C2318" />
        <circle cx="69" cy="28" r="1.5" fill="#0C2318" />
        <circle cx="64" cy="32" r="1.5" fill="#0C2318" />
        <circle cx="74" cy="32" r="1.5" fill="#0C2318" />
        {/* Inner Stars */}
        <polygon points="50,34 52,38 57,38 53,41 55,46 50,43 45,46 47,41 43,38 48,38" fill={colors.accent} />
      </svg>

      {/* Brand Name Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className="font-serif text-lg md:text-xl font-bold tracking-wider leading-none"
          style={{ color: colors.text }}
        >
          PADEL PICKLE
        </span>
        <span
          className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] leading-none mt-1"
          style={{ color: colors.accent }}
        >
          HEADQUARTERS
        </span>
      </div>
    </div>
  );
};
export default Logo;
