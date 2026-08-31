import React from "react";
import CtaCardShell from "../zones/CtaCardShell.jsx";
import MetricBadge from "../zones/MetricBadge.jsx";
import PrimaryAction from "../zones/PrimaryAction.jsx";
import SecondaryAction from "../zones/SecondaryAction.jsx";
import TrustChip from "../zones/TrustChip.jsx";

const CardCtaPreview = ({ config }) => {
  const Icon = config.icon;

  return (
    <CtaCardShell className="mx-auto max-w-xl rounded-[1.5rem] border border-cyan/20 bg-[#071019] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.38)] md:p-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <MetricBadge className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-semibold text-white">
            {config.metric}
          </MetricBadge>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan">
          Interactive study
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
          {config.headline}
        </h3>
        <p className="mt-4 text-sm leading-7 text-steel md:text-base">
          {config.copy}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {config.trustSignals.map((signal) => (
            <TrustChip key={signal}>{signal}</TrustChip>
          ))}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
          <PrimaryAction className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-[#041018] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] motion-reduce:transform-none motion-reduce:transition-none">
            {config.primaryCta}
          </PrimaryAction>
          <SecondaryAction className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:border-cyan/45 hover:bg-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] motion-reduce:transition-none">
            {config.secondaryAction}
          </SecondaryAction>
        </div>
      </div>
    </CtaCardShell>
  );
};

export default CardCtaPreview;
