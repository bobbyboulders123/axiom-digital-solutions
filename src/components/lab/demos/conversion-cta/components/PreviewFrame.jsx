import React from "react";
import { goals, layouts } from "../conversionCtaData.js";
import CardCtaPreview from "../previews/CardCtaPreview.jsx";
import HeroCtaPreview from "../previews/HeroCtaPreview.jsx";

const PreviewFrame = ({ goal, layout, config }) => {
  return (
    <div className="min-w-0 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(53,208,255,0.08),rgba(47,128,237,0.04)_34%,rgba(255,255,255,0.03))] p-4 md:p-6">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
            Live preview
          </p>
          <p className="mt-2 text-sm text-steel">
            {goals[goal].label} /{" "}
            {layouts.find((item) => item.id === layout)?.label}
          </p>
        </div>
      </div>

      {layout === "hero" ? (
        <HeroCtaPreview config={config} />
      ) : (
        <CardCtaPreview config={config} />
      )}
    </div>
  );
};

export default PreviewFrame;
