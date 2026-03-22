"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Primary Elo image (default state - arms open)
const eloImage1 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/78566-removebg-preview%20%281%29%20%281%29-xyAdHfe74QjFqwthD3FMofqMV57Qrm.png"
// Secondary Elo image (on click)
const eloImage2 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000219738-removebg-preview-Q82qIBaFuz8ARUqiSVQDMURzizi4Zc.png"

// Pre-defined particle positions to avoid hydration mismatch
const particles = [
  { top: "25%", left: "15%", duration: 2.5, xOffset: 3 },
  { top: "35%", left: "80%", duration: 3.2, xOffset: -4 },
  { top: "55%", left: "20%", duration: 2.8, xOffset: 2 },
  { top: "65%", left: "75%", duration: 3.5, xOffset: -3 },
  { top: "45%", left: "85%", duration: 2.2, xOffset: 4 },
  { top: "75%", left: "30%", duration: 3.0, xOffset: -2 },
]

export function EloCharacter() {
  const [isAlternate, setIsAlternate] = useState(false)

  const handleClick = () => {
    setIsAlternate(!isAlternate)
  }

  return (
    <div className="relative">
      {/* Glow effects behind Elo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute h-32 w-32 rounded-full bg-cyan-500/30 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-24 w-24 rounded-full bg-purple-500/30 blur-3xl sm:h-36 sm:w-36 md:h-48 md:w-48 lg:h-60 lg:w-60"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-16 w-16 rounded-full bg-blue-400/40 blur-2xl sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles around Elo - using fixed positions */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2"
          style={{
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Elo Character with breathing animation */}
      <motion.div
        className="relative z-10 cursor-pointer"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Elo images with fade transition */}
        <div className="relative h-60 w-60 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem] xl:h-[40rem] xl:w-[40rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={isAlternate ? "alternate" : "primary"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={isAlternate ? eloImage2 : eloImage1}
                alt="Elo - Eon Light's intelligent digital companion"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle glow on Elo */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-b from-cyan-400/20 to-purple-500/20 blur-2xl sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48" />
          </div>
        </div>
      </motion.div>

      {/* Orbiting ring effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-96 lg:w-96"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-400 sm:h-2 sm:w-2" />
      </motion.div>
      
      <motion.div
        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10 sm:h-68 sm:w-68 md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem]"
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute -top-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400 sm:h-1.5 sm:w-1.5" />
      </motion.div>
    </div>
  )
}
