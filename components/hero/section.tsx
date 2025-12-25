"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroSectionProps {
  language: "tr" | "en"
  onMenuClick: () => void
}

export function HeroSection({ language, onMenuClick }: HeroSectionProps) {
  const translations = {
    tr: {
      title: "Kumyalı'nın Tepesinde Eşsiz Lezzet",
      description: "Rakı balık, fırın kebabı ve taze mezelerimizle unutulmaz anlar",
      viewMenu: "Menüyü Görüntüle",
    },
    en: {
      title: "Unique Taste at Kumyalı Peak",
      description: "Unforgettable moments with raki-fish, oven kebab, and fresh appetizers",
      viewMenu: "View Menu",
    },
  }

  const t = translations[language]

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center p-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/full-karısık-et.jpg" 
          className="w-full h-full object-cover opacity-20"
          alt="Monobadi Restaurant"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Animated Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl space-y-8"
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <img 
            src="/logo.png" 
            className="w-32 h-32 md:w-48 md:h-48 mx-auto object-contain drop-shadow-2xl"
            alt="Monobadi Logo"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold"
        >
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            {t.title}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
        >
          {t.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-8"
        >
          <Button
            size="lg"
            className="rounded-full px-16 py-8 text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            onClick={onMenuClick}
          >
            {t.viewMenu}
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pt-16"
        >
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <span>{language === "tr" ? "Keşfetmek için kaydır" : "Scroll to explore"}</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-primary/50 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Food Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl opacity-10"
            initial={{ y: 0, x: Math.random() * 100 }}
            animate={{ 
              y: [0, -20, 0],
              x: [Math.random() * 100, Math.random() * 100 + 10]
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 2,
              delay: i * 0.5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["🍖", "🦞", "🥗", "🔥", "🍷", "🥤", "🍽️", "⭐"][i]}
          </motion.div>
        ))}
      </div>
    </section>
  )
}