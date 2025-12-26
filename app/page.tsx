"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/header/navigation"
import { HeroSection } from "@/components/hero/section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer/component"
import { InitialPopup } from "@/components/menu/initial-popup"
import { FloatingButtons } from "@/components/ui/floating-buttons"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

import tr from "../locales/tr.json"
import en from "../locales/en.json"

export default function HomePage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"tr" | "en">("tr")
  const [showInitial, setShowInitial] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const mainContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "tr" | "en" | null
    if (savedLang) setLanguage(savedLang)
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", language)
  }, [language])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.get("qr") === "menu") {
      router.push("/menu")
      return
    }

    const hasSeenPopup = localStorage.getItem("hasSeenPopup")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowInitial(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [router])

  useEffect(() => {
    if (showInitial) {
      localStorage.setItem("hasSeenPopup", "true")
    }
  }, [showInitial])

  const handleScroll = () => {
    if (mainContainerRef.current) {
      setShowScrollTop(mainContainerRef.current.scrollTop > 300)
    }
  }

  useEffect(() => {
    const container = mainContainerRef.current
    if (!container) return

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    mainContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleMenuClick = () => {
    router.push("/menu")
  }

  const handleLanguageChange = (lang: "tr" | "en") => {
    setLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  return (
    <div className="h-[100dvh] flex flex-col bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <InitialPopup
        language={language}
        onLanguageChange={handleLanguageChange}
        onMenuClick={handleMenuClick}
        onClose={() => setShowInitial(false)}
        isOpen={showInitial}
      />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-2xl transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <FloatingButtons />

      <Navigation
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <div 
        ref={mainContainerRef}
        className="flex-1 overflow-y-auto scroll-smooth"
      >
        <HeroSection
          language={language}
          onMenuClick={handleMenuClick}
        />

        <AboutSection language={language} />

        <ContactSection language={language} />

        <Footer language={language} />
      </div>
    </div>
  )
}