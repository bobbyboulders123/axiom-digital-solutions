import React from 'react'

const Footer = () => {
  return (
    <footer className="relative border-t border-steel/10 bg-background pt-20 pb-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-cyan/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img src="/brand/axiom-symbol.png" alt="Axiom Symbol" className="h-8 w-auto mix-blend-screen" />
            <span className="text-xl font-semibold tracking-tight text-white">Axiom Digital Solutions</span>
          </div>
          <p className="text-steel max-w-sm text-sm">
            Premium websites and digital experiences for businesses that want a sharper, more credible online presence. Built with precision.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-medium text-sm">Navigation</h4>
          <ul className="space-y-3">
            <li><a href="#services" className="text-sm text-steel hover:text-white transition-colors hover:-translate-y-[1px] inline-block">Services</a></li>
            <li><a href="#process" className="text-sm text-steel hover:text-white transition-colors hover:-translate-y-[1px] inline-block">Process</a></li>
            <li><a href="#work" className="text-sm text-steel hover:text-white transition-colors hover:-translate-y-[1px] inline-block">Work</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-medium text-sm">Contact</h4>
          <ul className="space-y-3">
            <li><a href="mailto:hello@axiomdigital.com" className="text-sm text-steel hover:text-white transition-colors hover:-translate-y-[1px] inline-block">hello@axiomdigital.com</a></li>
            <li><a href="#" className="text-sm text-steel hover:text-white transition-colors hover:-translate-y-[1px] inline-block">Book a Consultation</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-steel/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-steel/60">
          © {new Date().getFullYear()} Axiom Digital Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-steel/20 bg-surface/50">
          <div className="w-2 h-2 rounded-full bg-cyan animate-pulse"></div>
          <span className="font-mono text-[10px] text-cyan uppercase tracking-wider">Systems Operational</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
