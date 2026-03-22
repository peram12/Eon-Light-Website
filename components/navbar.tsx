"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useLanguage, languageNames } from "@/lib/language-context"

const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qUxtdw0ik7ukjsF1btWa9CaoYcCn9R.png"

export function Navbar() {
  const { language, setLanguage, t, dir } = useLanguage()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { key: "nav_home", href: "#home" },
    { key: "nav_about", href: "#about" },
    { key: "nav_services", href: "#services" },
    { key: "nav_elo", href: "#elo" },
    { key: "nav_contact", href: "#contact" },
  ]

  const languages = ["en", "ar", "he"] as const

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      dir={dir}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl sm:px-6 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={logoUrl}
                alt="Eon Light - For a Brighter Future"
                width={160}
                height={160}
                className="object-contain"
                style={{ height: "48px", width: "auto" }}
                priority
                unoptimized
              />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
                Eon Light
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5 text-sm text-white/80 transition-all hover:border-cyan-500/50 hover:bg-white/10 sm:gap-2 sm:px-3 sm:py-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{languageNames[language]}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                  />
                </motion.button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute end-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang)
                            setIsLangOpen(false)
                          }}
                          className={`flex w-full items-center gap-2 px-4 py-3 text-sm transition-colors ${
                            language === lang
                              ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white"
                              : "text-white/70 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              language === lang
                                ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                                : "bg-white/20"
                            }`}
                          />
                          {languageNames[lang]}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 md:hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-2 border-t border-white/10 pt-4 mt-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="rounded-lg px-4 py-3 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {t(item.key)}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}
