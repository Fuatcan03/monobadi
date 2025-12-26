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

  // 🔴 SAYFA AÇILINCA DİLİ HAFIZADAN OKU
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "tr" | "en" | null
    if (savedLang) setLanguage(savedLang)
  }, [])

  // 🔴 DİL DEĞİŞİNCE HAFIZAYA YAZ
  useEffect(() => {
    localStorage.setItem("lang", language)
  }, [language])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.get("qr") === "menu") {
      router.push("/menu")
    } else {
      const timer = setTimeout(() => {
        setShowInitial(true)
      }, 500)
      return () => clearTimeout(timer)
    }

    const handleScroll = () => {
      if (mainContainerRef.current) {
        setShowScrollTop(mainContainerRef.current.scrollTop > 300)
      }
    }

    mainContainerRef.current?.addEventListener("scroll", handleScroll)
    return () => mainContainerRef.current?.removeEventListener("scroll", handleScroll)
  }, [router])

  const scrollToTop = () => {
    mainContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleMenuClick = () => {
    router.push("/menu")
  }

  return (
    <div className="h-[100dvh] flex flex-col">
      <InitialPopup
        language={language}
        onLanguageChange={setLanguage}
        onMenuClick={handleMenuClick}
        onClose={() => setShowInitial(false)}
        isOpen={showInitial}
      />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-primary text-white p-3 rounded-full"
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      <FloatingButtons />

      <Navigation language={language} onLanguageChange={setLanguage} />

      <div ref={mainContainerRef} className="flex-1 overflow-y-auto">
        <HeroSection language={language} onMenuClick={handleMenuClick} />
        <AboutSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </div>
    </div>
  )
}
