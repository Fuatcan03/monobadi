"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/header/navigation"
import { MenuSection } from "@/components/sections/menu-section"
import { Footer } from "@/components/footer/component"
import { FloatingButtons } from "@/components/ui/floating-buttons"
import { motion } from "framer-motion"

// JSON dosyaları
import tr from "../../locales/tr.json"
import en from "../../locales/en.json"

export default function MenuPage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")

  // 🔴 SAYFA AÇILINCA DİLİ HAFIZADAN OKU
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "tr" | "en" | null
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  // 🔴 MENÜ SAYFASINDA DİL DEĞİŞİRSE HAFIZAYA YAZ
  useEffect(() => {
    localStorage.setItem("lang", language)
  }, [language])

  // Scroll üstte başlasın
  useEffect(() => {
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
