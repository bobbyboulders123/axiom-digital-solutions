import React from "react";
import { ArrowRight } from "lucide-react";

const variants = {
  light: {
    button:
      "border-[#061018] bg-[#061018] text-white shadow-[0_14px_30px_rgba(6,16,24,0.16)] focus-visible:ring-[#061018] focus-visible:ring-offset-white",
    fill: "bg-white",
    hoverText: "group-hover:text-[#061018]",
  },
  dark: {
    button:
      "border-white/15 bg-white text-[#041018] shadow-[0_0_28px_rgba(53,208,255,0.24)] focus-visible:ring-cyan focus-visible:ring-offset-[#071019]",
    fill: "bg-cyan",
    hoverText: "group-hover:text-[#041018]",
  },
};

const FlowButton = ({ text, variant = "light", className = "" }) => {
  const selectedVariant = variants[variant] ?? variants.light;

  return (
    <button
      type="button"
      className={[
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:active:scale-100",
        selectedVariant.button,
        selectedVariant.hoverText,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-[9] motion-reduce:hidden motion-reduce:transition-none",
          selectedVariant.fill,
        ].join(" ")}
        aria-hidden="true"
      />
      <ArrowRight
        className="absolute left-5 h-4 w-4 -translate-x-8 opacity-0 transition duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:hidden motion-reduce:transition-none"
        aria-hidden="true"
      />
      <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-3 motion-reduce:transform-none motion-reduce:transition-none">
        {text}
      </span>
      <ArrowRight
        className="relative z-10 ml-2 h-4 w-4 transition duration-300 ease-out group-hover:translate-x-8 group-hover:opacity-0 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </button>
  );
};

export default FlowButton;
