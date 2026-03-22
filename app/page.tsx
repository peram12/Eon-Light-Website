"use client"

import { useLanguage } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const { dir } = useLanguage()

  return (
    <div dir={dir} className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f]">
      {/* Global background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute -top-1/2 start-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-cyan-500/8 via-blue-500/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 end-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-tl from-purple-500/8 via-pink-500/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 end-0 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-blue-500/5 to-transparent blur-3xl" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
