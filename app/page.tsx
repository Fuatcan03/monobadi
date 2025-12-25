"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/header/navigation"
import { HeroSection } from "@/components/hero/section"
import { MenuSection } from "@/components/sections/menu-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer/component"
import { InitialPopup } from "@/components/menu/initial-popup"
import { FloatingButtons } from "@/components/ui/floating-buttons"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

// JSON dosyalarını import ediyoruz
import tr from "../locales/tr.json"
import en from "../locales/en.json"

export default function HomePage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"tr" | "en">("tr")
  const [showInitial, setShowInitial] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const mainContainerRef = useRef<HTMLDivElement>(null)

  // Seçili dile göre sözlüğü belirle
  const dict = language === "tr" ? tr : en

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    
    // QR kodu kontrolü - menu için ise direkt menu sayfasına
    if (urlParams.get("qr") === "menu") {
      router.push("/menu")
    } else {
      // Normal ziyaretçiler için popup göster (2 saniye sonra)
      const timer = setTimeout(() => {
        setShowInitial(true)
      }, 500)
      return () => clearTimeout(timer)
    }

    // Scroll kontrolü
    const handleScroll = () => {
      if (mainContainerRef.current) {
        const { scrollTop } = mainContainerRef.current
        setShowScrollTop(scrollTop > 300)
      }
    }

    if (mainContainerRef.current) {
      mainContainerRef.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (mainContainerRef.current) {
        mainContainerRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [router])

  const scrollToTop = () => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleMenuClick = () => {
    router.push("/menu")
  }

  return (
    <div className="h-[100dvh] flex flex-col bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Initial Popup - SADECE ilk açılışta */}
      <InitialPopup
        language={language}
        onLanguageChange={setLanguage}
        onMenuClick={handleMenuClick}
        onClose={() => setShowInitial(false)}
        isOpen={showInitial}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-2xl"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Navigation */}
      <Navigation
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Main Content with Scroll */}
      <div 
        ref={mainContainerRef}
        className="flex-1 overflow-y-auto"
      >
        {/* Hero Section */}
        <HeroSection
          language={language}
          onMenuClick={handleMenuClick}
        />

        {/* Menu Preview Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {dict.ui.menu}
            </h2>
            <div className="max-w-4xl mx-auto">
              <MenuSection language={language} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection language={language} />

        {/* Contact Section */}
        <ContactSection language={language} />

        {/* Footer */}
        <Footer language={language} />
      </div>
    </div>
  )
}