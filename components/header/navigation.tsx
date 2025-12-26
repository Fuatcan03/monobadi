"use client"

import { Button } from "@/components/ui/button"
import { MenuIcon, X, Utensils, Home, Info, PhoneCall, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavigationProps {
  language: "tr" | "en"
  onLanguageChange: (lang: "tr" | "en") => void
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* 🔴 SAYFA AÇILINCA DİLİ LOCALSTORAGE'DAN OKU */
  useEffect(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang === "tr" || savedLang === "en") {
      onLanguageChange(savedLang)
    }
  }, [])

  /* 🔴 DİL DEĞİŞİNCE LOCALSTORAGE'A YAZ */
  useEffect(() => {
    localStorage.setItem("lang", language)
  }, [language])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const translations = {
    tr: { home: "Ana Sayfa", menu: "Menü", about: "Hakkımızda", contact: "İletişim" },
    en: { home: "Home", menu: "Menu", about: "About", contact: "Contact" },
  }

  const t = translations[language]

  const navLinks = [
    { name: t.home, path: "/", icon: <Home className="w-4 h-4" /> },
    { name: t.menu, path: "/menu", icon: <Utensils className="w-4 h-4" /> },
    { name: t.about, path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: t.contact, path: "/contact", icon: <PhoneCall className="w-4 h-4" /> },
  ]

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 transition-all duration-500 p-4",
        scrolled 
          ? "bg-card/80 backdrop-blur-2xl border-b border-primary/10 shadow-2xl py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-4">
        {/* Logo */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="flex items-center gap-3 group text-left"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-colors" />
            <img 
              src="/logo.png" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-2xl relative z-10 border-2 border-primary/20" 
              alt="Monobadi Logo" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl w-40 font-black tracking-tighter bg-linear-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent uppercase italic">
              Monobadi
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase -mt-1 ml-0.5">
              Restaurant
            </span>
          </div>
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 bg-muted/20 backdrop-blur-md p-1.5 rounded-2xl border border-white/5">
          {navLinks.map((link) => (
            <button 
              key={link.path}
              onClick={() => router.push(link.path)}
              className={cn(
                "relative px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2",
                pathname === link.path 
                  ? "text-white" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              {pathname === link.path && (
                <motion.div 
                  layoutId="activeNav" 
                  className="absolute inset-0 bg-primary shadow-lg shadow-primary/30 rounded-xl -z-10" 
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.icon}
              {link.name}
            </button>
          ))}

          <div className="w-px h-6 bg-white/10 mx-2" />

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onLanguageChange(language === "tr" ? "en" : "tr")}
            className="rounded-xl font-bold flex items-center gap-2 hover:bg-primary/10 transition-colors px-4"
          >
            <Globe className="w-4 h-4 text-primary" />
            {language.toUpperCase()}
          </Button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onLanguageChange(language === "tr" ? "en" : "tr")}
            className="rounded-xl border-primary/20 bg-background/50 font-bold"
          >
            {language.toUpperCase()}
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-xl shadow-lg border border-primary/10"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-primary" /> : <MenuIcon className="w-5 h-5 text-primary" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full md:hidden bg-card/95 backdrop-blur-2xl border-b border-primary/10 shadow-2xl"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button 
                  key={link.path}
                  onClick={() => { 
                    router.push(link.path)
                    setIsMenuOpen(false)
                  }}
                  className={cn(
                    "flex items-center gap-4 py-4 px-5 rounded-2xl font-bold transition-all",
                    pathname === link.path 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "hover:bg-primary/5 text-muted-foreground"
                  )}
                >
                  <span className={cn(
                    "p-2 rounded-lg bg-background shadow-inner",
                    pathname === link.path ? "text-primary" : "text-muted-foreground"
                  )}>
                    {link.icon}
                  </span>
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
