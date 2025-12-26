"use client"

import { Button } from "@/components/ui/button"
import { MenuIcon, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface InitialPopupProps {
  language: "tr" | "en"
  onLanguageChange: (lang: "tr" | "en") => void
  onMenuClick: () => void
  onClose: () => void
  isOpen: boolean
}

export function InitialPopup({ 
  language, 
  onLanguageChange, 
  onMenuClick, 
  onClose,
  isOpen 
}: InitialPopupProps) {

  const translations = {
    tr: {
      initialTitle: "Hoş Geldiniz",
      viewMenu: "Menüyü Görüntüle",
      viewSite: "Siteyi Görüntüle",
      restaurantName: "Monobadi Tepe Restaurant",
    },
    en: {
      initialTitle: "Welcome",
      viewMenu: "View Menu",
      viewSite: "View Website",
      restaurantName: "Monobadi Tepe Restaurant",
    },
  }

  const t = translations[language]

  // 🔴 KRİTİK NOKTA
  const handleMenuClick = () => {
    localStorage.setItem("lang", language) // ⬅️ DİLİ ZORLA YAZ
    onMenuClick()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary/20 via-background to-accent/20 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            className="bg-card/95 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-12 max-w-md w-full text-center space-y-6 md:space-y-8 border-2 border-primary/20"
          >
            {/* Language Selector */}
            <div className="flex justify-center gap-2">
              <Button
                variant={language === "tr" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  localStorage.setItem("lang", "tr")
                  onLanguageChange("tr")
                }}
              >
                🇹🇷 Türkçe
              </Button>

              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  localStorage.setItem("lang", "en")
                  onLanguageChange("en")
                }}
              >
                🇬🇧 English
              </Button>
            </div>

            {/* Logo */}
            <motion.img
              src="/logo.png"
              className="w-40 mx-auto"
              alt="Monobadi Logo"
            />

            <h1 className="text-3xl font-bold">{t.initialTitle}</h1>
            <p className="text-muted-foreground">{t.restaurantName}</p>

            <Button
              size="lg"
              className="w-full"
              onClick={handleMenuClick}
            >
              <MenuIcon className="mr-2" />
              {t.viewMenu}
              <ChevronRight className="ml-2" />
            </Button>

            <Button variant="outline" onClick={onClose} className="w-full">
              {t.viewSite}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
