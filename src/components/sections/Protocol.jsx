import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../utils/gsapUtils'

const steps = [
  {
    id: '01',
    phase: 'Phase 01',
    title: 'Discovery',
    intro:
      'We define the technical, visual, and strategic requirements before a single interface is built.',
    detail:
      'This phase aligns brand position, site architecture, conversion goals, and implementation scope so the project moves with precision instead of guesswork.',
    bullets: [
      'Business and positioning alignment',
      'Content and page structure mapping',
      'Technical scope and platform decisions',
      'Visual direction and reference calibration',
    ],
    bgClass: 'bg-[#0B0F14]',
    panelTag: 'Requirements Matrix',
  },
  {
    id: '02',
    phase: 'Phase 02',
    title: 'Design',
    intro:
      'We translate strategy into a high-fidelity visual system built for trust, clarity, and premium perception.',
    detail:
      'Every layout, motion cue, and content block is designed to feel intentional — clean in structure, refined in pacing, and unmistakably custom.',
    bullets: [
      'Interface hierarchy and composition',
      'Premium visual language and motion direction',
      'Responsive layout planning across breakpoints',
      'Conversion-first UX refinement',
    ],
    bgClass: 'bg-[#101720]',
    panelTag: 'Interface System',
  },
  {
    id: '03',
    phase: 'Phase 03',
    title: 'Engineering',
    intro:
      'We build the front-end with modern frameworks, performance discipline, and exacting implementation standards.',
    detail:
      'This is where polish becomes real. The site is coded, tuned, tested, and structured to feel fast, stable, and expensive in the best way.',
    bullets: [
      'Custom front-end development',
      'Performance and animation optimization',
      'Section systems and reusable components',
      'Cross-device QA and visual consistency',
    ],
    bgClass: 'bg-[#0D131B]',
    panelTag: 'Build Stack',
  },
  {
    id: '04',
    phase: 'Phase 04',
    title: 'Launch',
    intro:
      'We deploy the finished environment with final QA, production readiness checks, and post-launch polish.',
    detail:
      'The result is not just a website pushed live. It is a digital instrument — tuned for credibility, clarity, and long-term use.',
    bullets: [
      'Production deployment and verification',
      'Speed, accessibility, and final polish checks',
      'Analytics and handoff readiness',
      'Post-launch refinement support',
    ],
    bgClass: 'bg-[#0B0F14]',
    panelTag: 'Deployment Control',
  },
]

const Protocol = () => {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current
      if (!cards.length) return

      const timeline = gsap.timeline()
      timeline.to(cards.slice(1), {
        yPercent: -100,
        ease: 'none',
        stagger: 0.5,
      })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: true,
        animation: timeline,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(124,138,153,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.14) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(53,208,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(47,128,237,0.08),transparent_30%)]" />
      </div>

      <div className="absolute top-10 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-6 md:px-10 pointer-events-none">
        <div className="inline-flex items-center gap-4">
          <div className="h-8 w-[3px] rounded-full bg-gradient-to-b from-electric via-cyan to-cyan/20" />
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/80">
            AXIOM // PROTOCOL
          </span>
        </div>
      </div>

      <div className="relative h-full w-full">
        {steps.map((step, index) => (
          <article
            key={step.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`absolute left-0 h-full w-full ${step.bgClass} ${
              index > 0 ? 'top-[100%]' : 'top-0'
            }`}
            style={{
              zIndex: index + 1,
              boxShadow: index > 0 ? '0 -24px 60px rgba(0,0,0,0.55)' : 'none',
            }}
          >
            <div className="relative flex h-full items-center px-6 pt-28 pb-12 md:px-10 lg:px-16">
              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <div className="relative">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-mono text-sm uppercase tracking-[0.28em] text-cyan">
                      {step.phase}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan/50 to-transparent" />
                  </div>

                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div>
                      <div className="mb-3 font-mono text-[12px] uppercase tracking-[0.3em] text-white/35">
                        Operational Sequence
                      </div>
                      <h3 className="text-5xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                        {step.title}
                      </h3>
                    </div>

                    <div className="hidden md:flex h-16 min-w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 font-mono text-xl text-cyan shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_40px_rgba(0,0,0,0.28)]">
                      {step.id}
                    </div>
                  </div>

                  <div className="max-w-3xl space-y-6">
                    <p className="text-xl leading-relaxed text-white md:text-2xl">
                      {step.intro}
                    </p>

                    <p className="max-w-2xl text-base leading-8 text-steel md:text-lg">
                      {step.detail}
                    </p>

                    <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
                      {step.bullets.map((item) => (
                        <div
                          key={item}
                          className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 backdrop-blur-sm transition duration-300 hover:border-cyan/30 hover:bg-white/[0.04]"
                        >
                          <div className="mt-[7px] h-2 w-2 rounded-full bg-cyan shadow-glow" />
                          <p className="text-sm leading-6 text-white/88 md:text-[15px]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                    <div className="absolute inset-0">
                      <div
                        className="absolute inset-0 opacity-[0.16]"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(124,138,153,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.16) 1px, transparent 1px)',
                          backgroundSize: '28px 28px',
                        }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,208,255,0.20),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(47,128,237,0.18),transparent_28%)]" />
                    </div>

                    <div className="relative z-10 p-5 sm:p-6">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-3 w-3 rounded-full bg-cyan shadow-glow" />
                          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/65">
                            {step.panelTag}
                          </span>
                        </div>
                        <div className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                          AXM-{step.id}
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0B0F14]/80 p-4">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
                              Visual Module
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan/80">
                              Premium Placeholder
                            </span>
                          </div>

                          <div className="relative h-52 overflow-hidden rounded-[1.25rem] border border-white/8 bg-[linear-gradient(135deg,#0d131b_0%,#0f1722_35%,#101a27_100%)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,208,255,0.16),transparent_22%),radial-gradient(circle_at_80%_75%,rgba(47,128,237,0.16),transparent_20%)]" />
                            <div className="absolute left-6 right-6 top-6 h-16 rounded-2xl border border-white/10 bg-white/[0.04]" />
                            <div className="absolute left-6 top-28 h-16 w-[42%] rounded-2xl border border-white/10 bg-white/[0.03]" />
                            <div className="absolute right-6 top-28 h-16 w-[32%] rounded-2xl border border-cyan/20 bg-cyan/[0.06]" />
                            <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-[1.25rem] border border-white/10 bg-[#0B0F14]/70 p-4">
                            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                              System Notes
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 w-[85%] rounded-full bg-white/10" />
                              <div className="h-2 w-[70%] rounded-full bg-white/10" />
                              <div className="h-2 w-[58%] rounded-full bg-cyan/20" />
                            </div>
                          </div>

                          <div className="rounded-[1.25rem] border border-white/10 bg-[#0B0F14]/70 p-4">
                            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                              Status
                            </div>
                            <div className="flex h-[52px] items-end gap-2">
                              <div className="h-[40%] w-3 rounded-t-full bg-white/10" />
                              <div className="h-[58%] w-3 rounded-t-full bg-white/10" />
                              <div className="h-[72%] w-3 rounded-t-full bg-cyan/50" />
                              <div className="h-[88%] w-3 rounded-t-full bg-electric/70" />
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[1.25rem] border border-white/10 bg-[#0B0F14]/70 p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                              Precision Markers
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
                              {step.id}/04
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {step.bullets.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/70"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-cyan/10 blur-3xl" />
                  <div className="pointer-events-none absolute -top-6 -left-6 h-28 w-28 rounded-full bg-electric/10 blur-3xl" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Protocol