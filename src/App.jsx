import React from 'react'
import GlobalNoise from './components/ui/GlobalNoise'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Philosophy from './components/sections/Philosophy'
import Protocol from './components/sections/Protocol'
import CtaSection from './components/sections/CtaSection'

function App() {
  return (
    <div className="relative min-h-screen selection:bg-[#2F80ED]/30 selection:text-white flex flex-col">
      <GlobalNoise />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
