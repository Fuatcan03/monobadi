"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/header/navigation"
import { MenuSection } from "@/components/sections/menu-section"
import { Footer } from "@/components/footer/component"
import { FloatingButtons } from "@/components/ui/floating-buttons"
import { motion } from "framer-motion"

// JSON dosyalarını import ediyoruz
import tr from "../../locales/tr.json"
import en from "../../locales/en.json"

export default function MenuPage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")
  
  // Seçili dile göre sözlüğü belirle
  const dict = language === "tr" ? tr : en

  useEffect(() => {
    // Sayfa yüklendiğinde scroll'u üste al
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Navigation */}
      <Navigation 
  language={language}
  onLanguageChange={setLanguage}
/>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-140px)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MenuSection language={language} />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  )
}