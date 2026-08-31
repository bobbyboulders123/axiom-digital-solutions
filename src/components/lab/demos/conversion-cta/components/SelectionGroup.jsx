import React from "react";

const SelectionGroup = ({ label, options, value, onChange }) => {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-cyan">
        {label}
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {options.map((option) => {
          const selected = option.id === value;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={`min-h-12 rounded-full border px-4 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A] motion-reduce:transition-none ${
                selected
                  ? "border-cyan/70 bg-cyan/15 text-white shadow-[0_0_24px_rgba(53,208,255,0.16)]"
                  : "border-white/10 bg-white/[0.03] text-steel hover:border-cyan/35 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectionGroup;
