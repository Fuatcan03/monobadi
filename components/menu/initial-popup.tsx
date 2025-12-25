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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
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
                onClick={() => onLanguageChange("tr")}
                className="min-w-[100px]"
              >
                🇹🇷 Türkçe
              </Button>
              <Button 
                variant={language === "en" ? "default" : "outline"} 
                size="sm" 
                onClick={() => onLanguageChange("en")}
                className="min-w-[100px]"
              >
                🇬🇧 English
              </Button>
            </div>

            {/* Logo Animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <motion.img 
                src="/logo.png" 
                className="w-36 h-36 md:w-48 md:h-48 mx-auto object-contain drop-shadow-2xl relative z-10"
                alt="Monobadi Logo"
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>

            {/* Text Content */}
            <div className="space-y-2">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t.initialTitle}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t.restaurantName}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className="w-full text-base md:text-lg py-6 md:py-7 bg-primary group"
                  onClick={() => { 
                    onMenuClick(); 
                    onClose(); 
                  }}
                >
                  <MenuIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:rotate-12 transition-transform" />
                  {t.viewMenu}
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full text-base md:text-lg py-6 md:py-7 border-2 hover:bg-primary/10"
                  onClick={onClose}
                >
                  {t.viewSite}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}