"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { EloCharacter } from "./elo-character"

const INSTAGRAM_URL = "https://www.instagram.com/eon_light_official?igsh=MW5zYzh5ZnB0amp1eg=="

export function HeroSection() {
  const { t, dir } = useLanguage()

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleInstagramClick = () => {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12"
      dir={dir}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient orbs */}
        <div className="absolute -top-1/4 start-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl sm:h-[500px] sm:w-[500px]" />
        <div className="absolute -bottom-1/4 end-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-purple-500/10 to-transparent blur-3xl sm:h-[600px] sm:w-[600px]" />
        <div className="absolute top-1/2 start-0 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-3xl sm:h-[400px] sm:w-[400px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile: Vertical layout (Elo on top) | Desktop: Horizontal layout */}
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-8 sm:min-h-[calc(100vh-96px)] lg:flex-row lg:justify-between lg:gap-12">
          
          {/* Elo Character - Top on mobile, Right on desktop */}
          <motion.div
            className="relative flex flex-shrink-0 items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <EloCharacter />
          </motion.div>

          {/* Text Content - Bottom on mobile, Left on desktop */}
          <motion.div
            className="flex-1 text-center order-2 lg:order-1 lg:text-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main heading */}
            <motion.h1
              className="mb-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-white">{t("hero_tagline")}</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t("hero_tagline_highlight")}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mx-auto mb-6 max-w-md text-sm text-white/60 sm:text-base md:text-lg lg:mx-0 lg:max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t("hero_description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                onClick={handleInstagramClick}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/40 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t("cta_button")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={handleContactClick}
                className="group w-full rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("cta_contact")}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent sm:h-24 lg:h-32" />
    </section>
  )
}
