"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qUxtdw0ik7ukjsF1btWa9CaoYcCn9R.png"
const eloImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/78566-removebg-preview%20%281%29%20%281%29-xyAdHfe74QjFqwthD3FMofqMV57Qrm.png"

export function AboutSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32" dir={dir}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute end-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl sm:h-[500px] sm:w-[500px]" />
        <div className="absolute start-0 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-3xl sm:h-[400px] sm:w-[400px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About Us / Vision Section */}
        <motion.div
          className="mb-12 text-center sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-4 inline-block sm:mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src={logoUrl}
              alt="Eon Light Logo"
              width={180}
              height={180}
              className="mx-auto object-contain"
              style={{ height: "56px", width: "auto" }}
              unoptimized
            />
          </motion.div>

          {/* Title */}
          <h2 className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-2xl md:mb-8 md:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t("about_title")}
            </span>
          </h2>

          {/* Vision Text */}
          <motion.p
            className="mx-auto max-w-4xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t("about_vision")}
          </motion.p>
        </motion.div>

        {/* Meet Elo Section - Vertical on mobile, horizontal on desktop */}
        <div id="elo" className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* Elo Image with effects */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto w-fit">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="h-36 w-36 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64" />
              </motion.div>

              {/* Floating animation for Elo */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={eloImage}
                  alt="Elo - Your intelligent digital companion"
                  width={320}
                  height={320}
                  className="relative z-10 h-44 w-44 object-contain drop-shadow-2xl sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
                />
              </motion.div>

              {/* Decorative ring */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-500/20 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="mb-3 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 sm:mb-4 sm:px-4 sm:py-1.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xs text-cyan-300 sm:text-sm">{t("meet_elo")}</span>
            </motion.div>

            {/* Heading */}
            <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Elo
              </span>
            </h2>

            {/* Description */}
            <p className="mb-5 text-sm text-white/60 leading-relaxed sm:mb-6 sm:text-base md:mb-8 md:text-lg lg:text-xl">
              {t("elo_description")}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {["AI-Powered", "24/7 Available", "Multilingual"].map((feature, index) => (
                <motion.span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
