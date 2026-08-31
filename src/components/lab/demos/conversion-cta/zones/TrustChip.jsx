import React from "react";
import { CheckCircle2 } from "lucide-react";

const TrustChip = ({ children }) => {
  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/80">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
      {children}
    </span>
  );
};

export default TrustChip;
