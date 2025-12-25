"use client"

import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationProps {
  language: "tr" | "en"
  onLanguageChange: (lang: "tr" | "en") => void
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const translations = {
    tr: {
      home: "Ana Sayfa",
      menu: "Menü",
      about: "Hakkımızda",
      contact: "İletişim",
    },
    en: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
    },
  }

  const t = translations[language]

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-xl border-b-2 border-primary/20 p-4">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => router.push("/")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src="/logo.png" className="w-10 h-10 rounded-full shadow-lg" alt="Monobadi Logo" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Monobadi
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => router.push("/")}
            className="font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
          >
            {t.home}
          </button>
          <button 
            onClick={() => router.push("/menu")}
            className="font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
          >
            {t.menu}
          </button>
          <button 
            onClick={() => router.push("/about")}
            className="font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
          >
            {t.about}
          </button>
          <button 
            onClick={() => router.push("/contact")}
            className="font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
          >
            {t.contact}
          </button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onLanguageChange(language === "tr" ? "en" : "tr")}
            className="min-w-[60px] font-medium"
          >
            {language.toUpperCase()}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onLanguageChange(language === "tr" ? "en" : "tr")}
            className="font-medium"
          >
            {language.toUpperCase()}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-6 flex flex-col gap-1">
              <button 
                onClick={() => { 
                  router.push("/"); 
                  setIsMenuOpen(false); 
                }}
                className="py-3 px-4 hover:bg-primary/10 rounded-lg text-left font-medium transition-colors"
              >
                {t.home}
              </button>
              <button 
                onClick={() => { 
                  router.push("/menu"); 
                  setIsMenuOpen(false); 
                }}
                className="py-3 px-4 hover:bg-primary/10 rounded-lg text-left font-medium transition-colors"
              >
                {t.menu}
              </button>
              <button 
                onClick={() => { 
                  router.push("/about"); 
                  setIsMenuOpen(false); 
                }}
                className="py-3 px-4 hover:bg-primary/10 rounded-lg text-left font-medium transition-colors"
              >
                {t.about}
              </button>
              <button 
                onClick={() => { 
                  router.push("/contact"); 
                  setIsMenuOpen(false); 
                }}
                className="py-3 px-4 hover:bg-primary/10 rounded-lg text-left font-medium transition-colors"
              >
                {t.contact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}