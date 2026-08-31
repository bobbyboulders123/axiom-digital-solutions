import React from "react";
import { ArrowRight } from "lucide-react";

const PrimaryAction = ({ children, className = "" }) => {
  return (
    <button type="button" className={className}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
};

export default PrimaryAction;
