"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Cloud } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    icon: Brain,
    titleKey: "service_1_title",
    descKey: "service_1_desc",
    gradient: "from-cyan-500 to-blue-500",
    shadowColor: "shadow-cyan-500/20",
  },
  {
    icon: Palette,
    titleKey: "service_2_title",
    descKey: "service_2_desc",
    gradient: "from-purple-500 to-pink-500",
    shadowColor: "shadow-purple-500/20",
  },
  {
    icon: Cloud,
    titleKey: "service_3_title",
    descKey: "service_3_desc",
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
  },
]

export function ServicesSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="services" className="relative py-16 sm:py-24 md:py-32" dir={dir}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute start-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-10 text-center sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-3 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 sm:mb-4 sm:px-4 sm:py-1.5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs text-purple-300 sm:text-sm">{t("services_title")}</span>
          </motion.div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              {t("services_title")}
            </span>
          </h2>
        </motion.div>

        {/* Service cards - Stack on mobile, row on desktop */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 sm:rounded-3xl sm:p-8 ${service.shadowColor} hover:shadow-2xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              />

              {/* Icon */}
              <motion.div
                className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${service.gradient} p-3 sm:mb-6 sm:rounded-2xl sm:p-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <service.icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
              </motion.div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl">{t(service.titleKey)}</h3>
              <p className="text-sm text-white/60 leading-relaxed sm:text-base">{t(service.descKey)}</p>

              {/* Decorative corner gradient */}
              <div
                className={`absolute -end-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 sm:h-32 sm:w-32`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
