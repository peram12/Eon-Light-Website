"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qUxtdw0ik7ukjsF1btWa9CaoYcCn9R.png"

const INSTAGRAM_URL = "https://www.instagram.com/eon_light_official?igsh=MW5zYzh5ZnB0amp1eg=="
const LINKEDIN_URL = "https://www.linkedin.com/in/perla-arram-559ba53b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

export function Footer() {
  const { t, dir } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: INSTAGRAM_URL },
    { name: "LinkedIn", icon: Linkedin, url: LINKEDIN_URL },
  ]

  return (
    <footer id="contact" className="relative border-t border-white/10 py-12 sm:py-16" dir={dir}>
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 start-1/2 h-[200px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-t from-cyan-500/5 to-purple-500/5 blur-3xl sm:h-[300px] sm:w-[600px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={logoUrl}
              alt="Eon Light Logo"
              width={140}
              height={56}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </motion.div>

          {/* Tagline / Subheader */}
          <motion.p
            className="text-center text-base text-white/60 sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("contact_subheader")}
          </motion.p>

          {/* Contact Prompt */}
          <motion.p
            className="text-center text-sm text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t("contact_prompt")}
          </motion.p>

          {/* Social Links - Instagram and LinkedIn only */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/10 hover:text-white sm:px-5 sm:py-2.5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="w-full border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:pt-8 sm:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Eon Light. {t("footer_rights")}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
