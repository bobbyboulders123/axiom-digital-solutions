import React from "react";
import CtaCardShell from "../zones/CtaCardShell.jsx";
import MetricBadge from "../zones/MetricBadge.jsx";
import PrimaryAction from "../zones/PrimaryAction.jsx";
import SecondaryAction from "../zones/SecondaryAction.jsx";
import TrustChip from "../zones/TrustChip.jsx";

const HeroCtaPreview = ({ config }) => {
  const Icon = config.icon;

  return (
    <CtaCardShell className="relative overflow-hidden rounded-[1.75rem] border border-cyan/20 bg-[#071019] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.42)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(53,208,255,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(47,128,237,0.16),transparent_28%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-2 text-xs font-medium text-cyan">
            <Icon className="h-4 w-4" aria-hidden="true" />
            Concept conversion module
          </div>
          <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {config.headline}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-steel md:text-lg md:leading-8">
            {config.copy}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryAction className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#041018] shadow-[0_0_28px_rgba(53,208,255,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] motion-reduce:transform-none motion-reduce:transition-none">
              {config.primaryCta}
            </PrimaryAction>
            <SecondaryAction className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:border-cyan/45 hover:bg-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] motion-reduce:transition-none">
              {config.secondaryAction}
            </SecondaryAction>
          </div>
        </div>

        <MetricBadge className="rounded-2xl border border-white/10 bg-[#0B1722]/85 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            Signal model
          </p>
          <div className="mt-5">
            <p className="text-4xl font-semibold tracking-tight text-white">
              {config.metric}
            </p>
            <p className="mt-2 text-sm text-steel">{config.metricLabel}</p>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {config.trustSignals.map((signal) => (
              <TrustChip key={signal}>{signal}</TrustChip>
            ))}
          </div>
        </MetricBadge>
      </div>
    </CtaCardShell>
  );
};

export default HeroCtaPreview;
