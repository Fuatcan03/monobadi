"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sparkles, Star, Flame, Fish, GlassWater, Wine, Utensils, Salad } from "lucide-react"

// Yarattığımız JSON dosyalarını çekiyoruz
import tr from "@/locales/tr.json"
import en from "@/locales/en.json"

interface MenuSectionProps {
  language: "tr" | "en"
}

export function MenuSection({ language }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState("coldMeze")
  const menuContentRef = useRef<HTMLDivElement>(null)

  // Seçili dile göre sözlüğü belirle
  const dict = language === "tr" ? tr : en
  const categories = Object.keys(dict.categories)

  // Kategori ikonları
  const categoryIcons: Record<string, React.ReactNode> = {
    coldMeze: <Salad className="w-4 h-4 md:w-5 md:h-5" />,
    hotMeze: <Flame className="w-4 h-4 md:w-5 md:h-5" />,
    grills: <Utensils className="w-4 h-4 md:w-5 md:h-5" />,
    fish: <Fish className="w-4 h-4 md:w-5 md:h-5" />,
    combos: <Star className="w-4 h-4 md:w-5 md:h-5" />,
    fixMenus: <Sparkles className="w-4 h-4 md:w-5 md:h-5" />,
    beverages: <GlassWater className="w-4 h-4 md:w-5 md:h-5" />,
    alcohol: <Wine className="w-4 h-4 md:w-5 md:h-5" />,
  }

  // Kategoriye özel notları getiren yardımcı fonksiyon
  const getCategoryNote = (catKey: string) => {
    if (catKey === "grills") return dict.ui.grilledNote
    if (catKey === "fish") return dict.ui.fishNote
    if (catKey === "fixMenus" || catKey === "combos") return dict.ui.setNote
    return null
  }

  // Menü yüklendiğinde scroll pozisyonunu ayarla
  useEffect(() => {
    if (menuContentRef.current) {
      menuContentRef.current.scrollTop = 0
    }
  }, [activeTab])

  return (
    <section id="menu" className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Başlık */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {dict.ui.menu}
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            {language === "tr" ? "Kumyalı'nın en özel lezzetleri" : "The most special flavors of Kumyalı"}
          </p>
        </div>

        {/* MODERN DROPDOWN - MOBİL */}
        <div className="block md:hidden mb-8">
          <div className="relative">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full h-14 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-card to-primary/5 shadow-lg group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      {categoryIcons[activeTab]}
                    </div>
                    <span className="font-semibold text-base">{(dict.categories as any)[activeTab]}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </div>
              </SelectTrigger>
              <SelectContent
                className="rounded-xl border-2 border-primary/20 bg-card backdrop-blur-md shadow-2xl w-[calc(100vw-32px)] max-h-80 overflow-y-auto"
                position="popper"
                align="center"
                sideOffset={8}
              >
                {categories.map((catKey) => (
                  <SelectItem
                    key={catKey}
                    value={catKey}
                    className="py-3 px-4 my-1 mx-2 rounded-lg hover:bg-primary/10 transition-all data-[state=checked]:bg-primary data-[state=checked]:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                        {categoryIcons[catKey]}
                      </div>
                      <span className="font-medium">{(dict.categories as any)[catKey]}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* MASAÜSTÜ TABS - MODERN VE RESPONSIVE */}
        <div className="hidden md:block mb-10 ">
          <div className="relative ">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl blur-xl" />

            <Tabs value={activeTab} onValueChange={setActiveTab} className="relative z-10 items-center ">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent p-2 rounded-2xl ">
                {categories.map((catKey) => (
                  <TabsTrigger
                    key={catKey}
                    value={catKey}
                    className="group relative px-5 py-3 transition-all duration-300 rounded-lg min-w-30 cursor-pointer"
                  >
                    {/* Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 rounded-lg opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300" />

                    {/* Border Effect */}
                    <div className="absolute inset-0 p-10 -top-7 border-2 border-transparent group-data-[state=active]:border-primary/30 rounded-lg transition-all duration-300" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-1.5">
                      <div
                        className={`p-2 rounded-lg transition-colors duration-300 ${activeTab === catKey ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                      >
                        {categoryIcons[catKey]}
                      </div>
                      <span className="text-xs font-semibold text-center leading-tight">
                        {(dict.categories as any)[catKey]}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* MENÜ İÇERİK ALANI - FIXED SCROLL */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-4 md:p-8  rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border-primary/10 bg-card/60 backdrop-blur-sm">
                {/* Kategori Bilgi Notu */}
                {getCategoryNote(activeTab) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6 md:mb-8 p-3 md:p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl md:rounded-2xl border-l-4 border-primary/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-primary text-lg">💡</span>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground italic">{getCategoryNote(activeTab)}</p>
                    </div>
                  </motion.div>
                )}

                {/* Ürün Listesi - FIXED HEIGHT WITH SCROLL */}
                <div
                  ref={menuContentRef}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[calc(100vh-400px)] md:max-h-[calc(100vh-500px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
                >
                  {(dict.menu as any)[activeTab]?.map((item: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      className="group relative"
                    >
                      {/* Card with Hover Effects */}
                      <div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-muted-foreground/10 hover:border-primary/20 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white/50 to-white/30 dark:from-card/50 dark:to-card/30">
                        {/* Ürün Görseli */}
                        <div className="shrink-0 mx-auto md:mx-0">
                          <div className="w-full max-w-50 md:max-w-none md:w-24 md:h-24 aspect-square rounded-xl overflow-hidden border border-primary/10 bg-gradient-to-br from-muted to-muted/50 shadow-sm group-hover:shadow-md transition-all duration-500">
                            <img
                              src={item.image || "/logo.png"}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Ürün Bilgileri */}
                        <div className="flex flex-col md:flex-row md:items-start md:gap-4 flex-1">
                          {/* Ürün Bilgileri */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg md:text-xl group-hover:text-primary transition-colors leading-tight line-clamp-2 mb-2 text-center md:text-left">
                              {item.name}
                            </h4>

                            {item.desc && (
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2 italic text-center md:text-left">
                                {item.desc}
                              </p>
                            )}

                            {item.note && (
                              <div className="flex justify-center md:justify-start mb-3 md:mb-0">
                                <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider">
                                  {item.note}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Fiyat */}
                          <div className="flex md:flex-col items-center md:items-end justify-center gap-1 pt-3 md:pt-0 border-t md:border-t-0 border-primary/10">
                            <span className="font-bold text-primary text-2xl md:text-2xl whitespace-nowrap">
                              {item.price}
                            </span>
                            <span className="text-base md:text-base font-semibold text-muted-foreground">
                              {dict.ui.tl}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Scroll Indicator - Sadece çok fazla öğe varsa */}
                {(dict.menu as any)[activeTab]?.length > 12 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-center"
                  >
                    <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-primary/5 px-4 py-2 rounded-full">
                      <span className="animate-bounce">↓</span>
                      <span>{language === "tr" ? "Daha fazlası için kaydırın" : "Scroll for more items"}</span>
                      <span className="animate-bounce">↓</span>
                    </div>
                  </motion.div>
                )}

                {/* Ürün Sayısı Bilgisi */}
                <div className="mt-6 pt-4 border-t border-primary/10">
                  <p className="text-sm text-muted-foreground text-center">
                    {language === "tr" ? (
                      <>
                        {categories.length} kategori, toplam{" "}
                        <span className="font-semibold text-primary">{(dict.menu as any)[activeTab]?.length}</span> ürün
                      </>
                    ) : (
                      <>
                        {categories.length} categories, total{" "}
                        <span className="font-semibold text-primary">{(dict.menu as any)[activeTab]?.length}</span>{" "}
                        items
                      </>
                    )}
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}