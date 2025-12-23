"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin, Instagram, Facebook, ChevronRight, MenuIcon, X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"

export default function HomePage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")
  // Start by showing the site, then display the initial popup shortly after
  const [showInitial, setShowInitial] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showSite, setShowSite] = useState(true)
  const [activeCategory, setActiveCategory] = useState("coldMeze")
  type MenuItem = {
    name: string
    nameEn: string
    price: string
    alcoholic?: boolean
    image?: string
    unit?: string
    desc?: string
    descEn?: string
  }

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("qr") === "menu") {
      // Direct QR opens the menu but keep site visible behind
      setShowInitial(false)
      setShowMenu(true)
      setShowSite(true)
    } else {
      // Show the initial popup shortly after the site renders
      const t = setTimeout(() => setShowInitial(true), 350)
      return () => clearTimeout(t)
    }
  }, [])

  const translations = {
    tr: {
      initialTitle: "Hoş Geldiniz",
      viewMenu: "Menüyü Görüntüle",
      viewSite: "Siteyi Görüntüle",
      menu: "Menü",
      about: "Hakkımızda",
      contact: "İletişim",
      reservation: "Rezervasyon",
      hero: "Kumyalı'nın Tepesinde Eşsiz Lezzet",
      heroDesc: "Rakı balık, fırın kebabı ve taze mezelerimizle unutulmaz anlar",
      coldMeze: "Soğuk Mezeler",
      hotMeze: "Sıcak Mezeler",
      grills: "Izgara",
      seafood: "Deniz Ürünleri",
      combos: "Karışık Tabaklar",
      fixMenus: "Fix Menüler",
      drinks: "İçecekler",
      aboutTitle: "Hakkımızda",
      aboutText:
        "Monobadi Tepe Restaurant, eski Tepe Restaurant'ın yerinde, Kumyalı köyünün tepesinde muhteşem manzarası ve leziz yemekleriyle sizlere hizmet vermektedir. Rakı balık kültürünün ve ızgara ustalarının buluşma noktası.",
      events: "Özel Organizasyonlar",
      eventsText:
        "Nişan, düğün, doğum günü, evlilik teklifi gibi özel günlerinizi bizimle kutlayın. Kalabalık grup yemekleri ve kurumsal organizasyonlar için ideal mekan.",
      contactTitle: "İletişim",
      locationTitle: "Konumumuz",
      phoneTitle: "Bizi Arayın",
      socialTitle: "Sosyal Medya",
      callUs: "Ara",
      whatsapp: "WhatsApp",
      price: "Fiyat",
      person: "Kişi",
      tl: "TL",
      viewDetails: "Detayları Gör",
      closeMenu: "Menüyü Kapat",
      backToHome: "Ana Sayfaya Dön",
      orderNow: "Hemen Sipariş Ver",
      includes: "İçerik",
    },
    en: {
      initialTitle: "Welcome",
      viewMenu: "View Menu",
      viewSite: "View Website",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      reservation: "Reservation",
      hero: "Exquisite Taste at the Top of Kumyalı",
      heroDesc: "Unforgettable moments with seafood, kebabs and fresh mezes",
      coldMeze: "Cold Appetizers",
      hotMeze: "Hot Appetizers",
      grills: "Grills",
      seafood: "Seafood",
      combos: "Mixed Platters",
      fixMenus: "Set Menus",
      drinks: "Beverages",
      aboutTitle: "About Us",
      aboutText:
        "Monobadi Tepe Restaurant, located at the former Tepe Restaurant site at the top of Kumyalı village, serves with magnificent views and delicious food. The meeting point of raki-fish culture and grill masters.",
      events: "Special Events",
      eventsText:
        "Celebrate your special days like engagements, weddings, birthdays, and marriage proposals with us. Ideal venue for large group dinners and corporate events.",
      contactTitle: "Contact",
      locationTitle: "Our Location",
      phoneTitle: "Call Us",
      socialTitle: "Social Media",
      callUs: "Call",
      whatsapp: "WhatsApp",
      price: "Price",
      person: "Person",
      tl: "",
      viewDetails: "View Details",
      closeMenu: "Close Menu",
      backToHome: "Back to Home",
      orderNow: "Order Now",
      includes: "Includes",
    },
  }

  const t = translations[language]

  const menuData: Record<string, MenuItem[]> = {
    coldMeze: [
      {
        name: "Set Soğuk Meze (12 Çeşit)",
        nameEn: "Cold Meze Set (12 Varieties)",
        price: "500",
        unit: "person",
        desc: "Humus, cacık, haydari, rus salatası, közlenmiş patlıcan, yengeç ve daha fazlası",
        descEn: "Hummus, tzatziki, haydari, russian salad, roasted eggplant, crab and more",
      },
      { name: "Humus", nameEn: "Hummus", price: "100", image: "/humus.jpg" },
      { name: "Cacık", nameEn: "Tzatziki", price: "100", image: "/cacık.jpg" },
      { name: "Haydari", nameEn: "Haydari", price: "100" },
      {
        name: "Rus Salatası",
        nameEn: "Russian Salad",
        price: "100",
        image: "/rus-salatası.jpg",
      },
      {
        name: "Közlenmiş Patlıcan",
        nameEn: "Roasted Eggplant",
        price: "100",
      },
      { name: "Yengeç Salatası", nameEn: "Crab Salad", price: "100", image: "/yengeç-bacagı.jpg" },
    ],
    hotMeze: [
      {
        name: "Set Sıcak Meze",
        nameEn: "Hot Meze Set",
        price: "500",
        unit: "person",
        desc: "Bulgur köfte, hellim, pastırma, sigara böreği ve tatar böreği",
        descEn: "Bulgur kofte, halloumi, pastrami, cheese rolls and tatar borek",
      },
      { name: "Bulgur Köftesi", nameEn: "Bulgur Kofte", price: "350" },
      {
        name: "Hellim Izgara",
        nameEn: "Grilled Halloumi",
        price: "300",
        image: "/hellim.jpg",
      },
      { name: "Pastırma", nameEn: "Pastrami", price: "300", image: "/pastırma.jpg" },
      {
        name: "Sigara Böreği",
        nameEn: "Cigarette Borek",
        price: "250",
        image: "/sigara-böreği.jpg",
      },
      { name: "Tatar Böreği", nameEn: "Tatar Borek", price: "450" },
    ],
    grills: [
      {
        name: "Yoğurtlu Beyti",
        nameEn: "Beyti with Yogurt",
        price: "650",
        image: "/beyler-beyi-göbek.jpg",
      },
      { name: "Et Şiş", nameEn: "Beef Shish", price: "600", image: "/et-şiş.jpg" },
      { name: "Tavuk Şiş", nameEn: "Chicken Shish", price: "600", image: "/tavuk-şiş.jpg" },
      { name: "Adana Kebap", nameEn: "Adana Kebab", price: "600", image: "/adana-kebabı.jpg" },
      { name: "Kuzu Pirzola", nameEn: "Lamb Chops", price: "700", image: "/pirzola.jpg" },
      { name: "Fırın Kebabı", nameEn: "Oven Kebab", price: "650" },
      {
        name: "Şeftali Kebabı",
        nameEn: "Sheftali Kebab",
        price: "700",
        image: "/şeftali.jpg",
      },
      { name: "Karışık Izgara", nameEn: "Mixed Grill", price: "700", image: "/full-karısık-et.jpg" },
    ],
    seafood: [
      {
        name: "Kalamar Tava",
        nameEn: "Fried Calamari",
        price: "600",
        image: "/kalamar-tava.jpg",
      },
      { name: "Kalamar Folyo", nameEn: "Calamari in Foil", price: "650", image: "/kalamar-folyo.jpg" },
      { name: "Ahtapot Tava", nameEn: "Fried Octopus", price: "700" },
      {
        name: "Ahtapot Güveç",
        nameEn: "Octopus Casserole",
        price: "700",
        image: "/ahtapot-güveç.jpg",
      },
      { name: "Karides Güveç", nameEn: "Shrimp Casserole", price: "700", image: "/karides-guvec.jpg" },
      { name: "Karides Kızartma", nameEn: "Fried Shrimp", price: "650" },
      { name: "Levrek", nameEn: "Sea Bass", price: "700" },
      { name: "Çupra", nameEn: "Sea Bream", price: "700", image: "/çipura.jpg" },
      { name: "Somon", nameEn: "Salmon", price: "700", image: "/somon.jpg" },
      { name: "Barbun", nameEn: "Red Mullet", price: "650" },
    ],
    combos: [
      {
        name: "Karışık Et Tabağı (2 Kişilik)",
        nameEn: "Mixed Meat Platter (2 Person)",
        price: "1500",
        image: "/full-karısık-et.jpg",
        desc: "Adana, şiş, pirzola ve şeftali kebabı",
        descEn: "Adana, shish, lamb chops and sheftali kebab",
      },
      {
        name: "Karışık Et Tabağı (4 Kişilik)",
        nameEn: "Mixed Meat Platter (4 Person)",
        price: "2800",
        image: "/full-karısık-et.jpg",
        desc: "Geniş ızgara çeşitleri",
        descEn: "Wide variety of grills",
      },
      {
        name: "Karışık Balık Tabağı (2 Kişilik)",
        nameEn: "Mixed Seafood Platter (2 Person)",
        price: "1600",
        image: "/balık-tabagı-kucuk.jpg",
        desc: "Kalamar, ahtapot, karides ve balık",
        descEn: "Calamari, octopus, shrimp and fish",
      },
      {
        name: "Karışık Balık Tabağı (4 Kişilik)",
        nameEn: "Mixed Seafood Platter (4 Person)",
        price: "2900",
        image: "/balık-tabagı-buyuk.jpg",
        desc: "Denizin tüm lezzetleri",
        descEn: "All the flavors of the sea",
      },
    ],
    fixMenus: [
      {
        name: "Fix Et Meze",
        nameEn: "Set Meat Meze",
        price: "900",
        unit: "person",
        desc: "5 soğuk meze + salata + ana yemek",
        descEn: "5 cold mezes + salad + main course",
      },
      {
        name: "Fix Balık Meze",
        nameEn: "Set Seafood Meze",
        price: "1100",
        unit: "person",
        desc: "5 soğuk meze + salata + balık",
        descEn: "5 cold mezes + salad + fish",
      },
      {
        name: "Fix Et Menü",
        nameEn: "Set Meat Menu",
        price: "1100",
        unit: "person",
        desc: "Tam menü: meze + ana yemek + tatlı",
        descEn: "Full menu: meze + main + dessert",
      },
      {
        name: "Fix Balık Menü",
        nameEn: "Set Fish Menu",
        price: "1400",
        unit: "person",
        desc: "Tam menü: meze + balık + tatlı",
        descEn: "Full menu: meze + fish + dessert",
      },
    ],
    drinks: [
      { name: "Su", nameEn: "Water", price: "10", image: "/su.jpg", alcoholic: false },
      { name: "Coca-Cola", nameEn: "Coca-Cola", price: "25", image: "/coca-cola.jpg", alcoholic: false },
      { name: "Fanta", nameEn: "Fanta", price: "25", image: "/fanta.jpg", alcoholic: false },
      { name: "Sprite", nameEn: "Sprite", price: "25", image: "/sprite.jpg", alcoholic: false },
      { name: "Şalgam", nameEn: "Turnip Juice", price: "30", image: "/şalgam.jpg", alcoholic: false },
      { name: "Yeni Rakı", nameEn: "Yeni Rakı", price: "120", image: "/yeni-rakı.jpg", alcoholic: true },
      { name: "Tekidağ Gold", nameEn: "Tekidağ Gold", price: "140", image: "/tekidağ-gold.jpg", alcoholic: true },
      { name: "Jameson", nameEn: "Jameson", price: "150", image: "/jameson.jpg", alcoholic: true },
      { name: "Red Label", nameEn: "Red Label", price: "130", image: "/red-label.jpg", alcoholic: true },
      { name: "Black Label", nameEn: "Black Label", price: "160", image: "/black-label.jpg", alcoholic: true }
    ],
  }

  const categories = [
    { id: "coldMeze", label: t.coldMeze, icon: "🥗" },
    { id: "hotMeze", label: t.hotMeze, icon: "🔥" },
    { id: "grills", label: t.grills, icon: "🍖" },
    { id: "seafood", label: t.seafood, icon: "🦞" },
    { id: "combos", label: t.combos, icon: "🍽️" },
    { id: "drinks", label: t.drinks, icon: "🥤" },
    { id: "fixMenus", label: t.fixMenus, icon: "⭐" },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/5 via-background to-accent/5">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/905338809516"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BD5A] text-white p-3 md:p-4 rounded-full shadow-2xl"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+905338809516"
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 md:p-4 rounded-full shadow-2xl"
          aria-label="Telefon"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
      </motion.div>

      <AnimatePresence>
        {showInitial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-40 bg-linear-to-br from-primary/20 via-background to-accent/20 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-card/95 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-12 max-w-md w-full text-center space-y-6 md:space-y-8 border-2 border-primary/20"
            >
              {/* Language Toggle */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-2"
              >
                <Button
                  variant={language === "tr" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("tr")}
                  className="min-w-22.5 transition-all"
                >
                  🇹🇷 Türkçe
                </Button>
                <Button
                  variant={language === "en" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                  className="min-w-22.5 transition-all"
                >
                  🇬🇧 English
                </Button>
              </motion.div>

              <motion.div
                initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <img
                  src="/logo.png"
                  alt="Monobadi Logo"
                  className="w-36 h-36 md:w-48 md:h-48 mx-auto object-contain drop-shadow-2xl relative z-10"
                />
              </motion.div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
                >
                  {t.initialTitle}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl text-muted-foreground font-medium"
                >
                  Monobadi Tepe Restaurant
                </motion.p>
              </div>

              <div className="space-y-3">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                  <Button
                    size="lg"
                    onClick={() => {
                      setShowMenu(true)
                      setShowInitial(false)
                      setShowSite(true)
                    }}
                    className="w-full text-base md:text-lg py-6 md:py-7 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <MenuIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:rotate-12 transition-transform" />
                    {t.viewMenu}
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      setShowSite(true)
                      setShowInitial(false)
                    }}
                    className="w-full text-base md:text-lg py-6 md:py-7 border-2 hover:bg-accent/10 transition-all group"
                  >
                    {t.viewSite}
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog
        open={showMenu}
        onOpenChange={(open: boolean) => {
          setShowMenu(open)
          if (!open) setShowSite(true)
        }}
      >
        <DialogContent className="max-w-full h-screen max-h-screen p-0 gap-0 overflow-hidden border-0">
            <div className="flex flex-col h-full bg-linear-to-br from-background via-primary/5 to-accent/5 menu-dialog">
            {/* Menu Header - sticky */}
            <div className="sticky top-0 z-20 bg-card/95 backdrop-blur-xl border-b-2 border-primary/20 shadow-lg">
              <div className="p-3 md:p-4">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <img
                      src="/logo.png"
                      alt="Monobadi"
                      className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full shadow-lg ring-2 ring-primary/30"
                    />
                    <div>
                      <h2 className="text-lg md:text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                        Monobadi
                      </h2>
                      <p className="text-xs md:text-sm text-muted-foreground">{t.menu}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={language === "tr" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setLanguage("tr")}
                      className="text-xs md:text-sm"
                    >
                      TR
                    </Button>
                    <Button
                      variant={language === "en" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setLanguage("en")}
                      className="text-xs md:text-sm"
                    >
                      EN
                    </Button>
                    <DialogClose asChild>
                      <Button variant="ghost" size="icon" className="ml-2">
                        <X className="w-5 h-5" />
                      </Button>
                    </DialogClose>
                  </div>
                </div>

                {/* Category Tabs - mobile select / horizontal scroll on desktop */}
                <div className="block sm:hidden mb-3 -mx-3 px-3">
                  <select
                    aria-label="Kategori seçin"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full rounded-full border bg-card/95 p-2 text-sm appearance-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden sm:flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-3 px-3 md:mx-0 md:px-0">
                  {categories.map((cat, index) => (
                    <motion.button
                      key={cat.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 md:px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all flex items-center gap-3 text-sm md:text-sm ${
                        activeCategory === cat.id
                          ? "bg-primary text-primary-foreground shadow-lg scale-105"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm">{cat.icon}</span>
                      <span className="inline-block">{cat.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Items Grid - responsive */}
            <div className="flex-1 overflow-y-auto p-3 md:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="menu-grid gap-3 md:gap-4"
                >
                  {activeCategory === "drinks" ? (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm md:text-lg font-semibold mb-2">{language === "tr" ? "Alkolsüz" : "Non-Alcoholic"}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {menuData.drinks?.filter((d) => !d.alcoholic).map((item, index) => (
                            <motion.div
                              key={`na-${index}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.03, y: -5 }}
                              onClick={() => setSelectedItem(item)}
                              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/30 group cursor-pointer min-w-0"
                            >
                              <div className="relative h-40 md:h-48 overflow-hidden bg-linear-to-br from-primary/10 to-accent/10">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={language === "tr" ? item.name : item.nameEn}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <motion.div
                                  initial={{ scale: 0.9, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  className="absolute top-2 right-2 bg-primary/95 backdrop-blur text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold shadow-xl text-sm md:text-base"
                                >
                                  {item.price} {t.tl}
                                  {item.unit && <span className="text-[10px] md:text-xs font-normal ml-1">/{t.person}</span>}
                                </motion.div>
                              </div>
                              <div className="p-3 md:p-4">
                                <h3 className="font-bold text-sm md:text-lg mb-1 text-balance">
                                  {language === "tr" ? item.name : item.nameEn}
                                </h3>
                                {item.desc && (
                                  <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                                    {language === "tr" ? item.desc : item.descEn}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm md:text-lg font-semibold mb-2">{language === "tr" ? "Alkollü" : "Alcoholic"}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {menuData.drinks?.filter((d) => d.alcoholic).map((item, index) => (
                            <motion.div
                              key={`a-${index}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.03, y: -5 }}
                              onClick={() => setSelectedItem(item)}
                              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/30 group cursor-pointer min-w-0"
                            >
                              <div className="relative h-40 md:h-48 overflow-hidden bg-linear-to-br from-primary/10 to-accent/10">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={language === "tr" ? item.name : item.nameEn}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <motion.div
                                  initial={{ scale: 0.9, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  className="absolute top-2 right-2 bg-primary/95 backdrop-blur text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold shadow-xl text-sm md:text-base"
                                >
                                  {item.price} {t.tl}
                                  {item.unit && <span className="text-[10px] md:text-xs font-normal ml-1">/{t.person}</span>}
                                </motion.div>
                              </div>
                              <div className="p-3 md:p-4">
                                <h3 className="font-bold text-sm md:text-lg mb-1 text-balance">
                                  {language === "tr" ? item.name : item.nameEn}
                                </h3>
                                {item.desc && (
                                  <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                                    {language === "tr" ? item.desc : item.descEn}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    menuData[activeCategory as keyof typeof menuData]?.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        onClick={() => setSelectedItem(item)}
                        className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/30 group cursor-pointer min-w-0"
                      >
                        <div className="relative h-40 md:h-48 overflow-hidden bg-linear-to-br from-primary/10 to-accent/10">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={language === "tr" ? item.name : item.nameEn}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute top-2 right-2 bg-primary/95 backdrop-blur text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold shadow-xl text-sm md:text-base"
                          >
                            {item.price} {t.tl}
                            {item.unit && <span className="text-[10px] md:text-xs font-normal ml-1">/{t.person}</span>}
                          </motion.div>
                        </div>
                        <div className="p-3 md:p-4">
                          <h3 className="font-bold text-sm md:text-lg mb-1 text-balance">
                            {language === "tr" ? item.name : item.nameEn}
                          </h3>
                          {typeof item.alcoholic !== "undefined" && (
                            <div className="mt-1">
                              <span
                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  item.alcoholic ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                                }`}
                              >
                                {item.alcoholic ? (language === "tr" ? "Alkollü" : "Alcoholic") : (language === "tr" ? "Alkolsüz" : "Non-Alcoholic")}
                              </span>
                            </div>
                          )}
                          {item.desc && (
                            <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                              {language === "tr" ? item.desc : item.descEn}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 md:mt-8 p-4 md:p-6 bg-muted/50 backdrop-blur rounded-2xl text-center space-y-2"
              >
                <p className="text-xs md:text-sm text-muted-foreground">
                  {language === "tr"
                    ? "* Balık ve ızgara çeşitlerimiz 5 çeşit soğuk meze ve salata ile servis edilir."
                    : "* Fish and grill varieties are served with 5 types of cold appetizers and salad."}
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/905338809516", "_blank")}
                  className="mt-4 group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {t.orderNow}
                </Button>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl">
          {selectedItem && (
            <div className="space-y-4">
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={language === "tr" ? selectedItem.name : selectedItem.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {language === "tr" ? selectedItem.name : selectedItem.nameEn}
                </h2>
                {selectedItem.desc && (
                  <p className="text-muted-foreground mb-4">
                    {language === "tr" ? selectedItem.desc : selectedItem.descEn}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-primary">
                    {selectedItem.price} {t.tl}
                    {selectedItem.unit && <span className="text-lg font-normal ml-2">/ {t.person}</span>}
                  </div>
                  <Button onClick={() => window.open("https://wa.me/905338809516", "_blank")}>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t.orderNow}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {showSite && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen">
          {/* Navigation */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-30 bg-card/95 backdrop-blur-xl border-b-2 border-primary/20 shadow-lg"
          >
            <div className="container mx-auto px-4 py-3 md:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Monobadi"
                    className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full shadow-lg ring-2 ring-primary/30"
                  />
                  <span className="text-lg md:text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    Monobadi
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                  <Button variant="ghost" size="sm" onClick={() => { setShowMenu(true); setShowSite(true); }} className="text-xs md:text-sm">
                    <MenuIcon className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">{t.menu}</span>
                  </Button>
                  <Button
                    variant={language === "tr" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage("tr")}
                    className="text-xs md:text-sm min-w-15"
                  >
                    TR
                  </Button>
                  <Button
                    variant={language === "en" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage("en")}
                    className="text-xs md:text-sm min-w-15"
                  >
                    EN
                  </Button>
                </div>
              </div>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-accent/20" />
            <div className="absolute inset-0">
              <img
                src="/fish-and-chips.jpg"
                alt="Restaurant View"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-linear-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent text-balance"
              >
                {t.hero}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8 text-balance"
              >
                {t.heroDesc}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  onClick={() => { setShowMenu(true); setShowSite(true); }}
                  className="text-base md:text-lg py-6 px-8 shadow-xl group"
                >
                  <MenuIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:rotate-12 transition-transform" />
                  {t.viewMenu}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://wa.me/905338809516", "_blank")}
                  className="text-base md:text-lg py-6 px-8 border-2 group"
                >
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:scale-110 transition-transform" />
                  {t.reservation}
                </Button>
              </motion.div>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-12 md:py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/fish-and-chips.jpg"
                    alt="Restaurant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t.aboutTitle}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t.aboutText}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-muted/50 rounded-2xl">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {language === "tr" ? "Yıllık Deneyim" : "Years Experience"}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-2xl">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {language === "tr" ? "Mutlu Müşteri" : "Happy Customers"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Events Section */}
          <section className="py-12 md:py-20 px-4 bg-linear-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 md:mb-12"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t.events}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{t.eventsText}</p>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  {
                    icon: "💍",
                    title: language === "tr" ? "Nişan" : "Engagement",
                    desc: language === "tr" ? "Özel günleriniz için" : "For your special days",
                  },
                  {
                    icon: "💒",
                    title: language === "tr" ? "Düğün" : "Wedding",
                    desc: language === "tr" ? "Hayalinizdeki düğün" : "Your dream wedding",
                  },
                  {
                    icon: "🎂",
                    title: language === "tr" ? "Doğum Günü" : "Birthday",
                    desc: language === "tr" ? "Unutulmaz kutlamalar" : "Memorable celebrations",
                  },
                  {
                    icon: "🏢",
                    title: language === "tr" ? "Kurumsal" : "Corporate",
                    desc: language === "tr" ? "Toplu yemek hizmeti" : "Group catering",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-card p-6 md:p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/30"
                  >
                    <div className="text-4xl md:text-5xl mb-4">{event.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{event.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 md:mb-12"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t.contactTitle}
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="bg-card p-6 rounded-3xl shadow-lg border-2 border-primary/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                      <Phone className="w-6 h-6 text-primary" />
                      {t.phoneTitle}
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="tel:+905338809516"
                        className="block text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        +90 533 880 9516
                      </a>
                      <a
                        href="tel:+905338641183"
                        className="block text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        +90 533 864 1183
                      </a>
                      <a
                        href="tel:+905338801918"
                        className="block text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        +90 533 880 1918
                      </a>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <Button
                        onClick={() => window.open("https://wa.me/905338809516", "_blank")}
                        className="flex-1 group"
                      >
                        <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => (window.location.href = "tel:+905338809516")}
                        className="flex-1"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        {t.callUs}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-3xl shadow-lg border-2 border-primary/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-primary" />
                      {t.locationTitle}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Kumyalı Köyü, Tepe Restaurant
                      <br />
                      Kuzey Kıbrıs Türk Cumhuriyeti
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => window.open("https://maps.app.goo.gl/dAYKCvpAVD9jRn1KA", "_blank")}
                      className="w-full"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      {language === "tr" ? "Haritada Gör" : "View on Map"}
                    </Button>
                  </div>

                  <div className="bg-card p-6 rounded-3xl shadow-lg border-2 border-primary/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{t.socialTitle}</h3>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.open("https://www.instagram.com/monobadi_restaurant/", "_blank")}
                        className="flex-1 group"
                      >
                        <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Instagram
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.open("https://www.facebook.com/profile.php?id=100089743077708", "_blank")}
                        className="flex-1 group"
                      >
                        <Facebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Facebook
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="h-100 md:h-full min-h-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.8067443931795!2d34.126418815622536!3d35.42993897266936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14df0b1f000744b7%3A0x2705106c1fef4aa3!2sTepe%20Restoran!5e0!3m2!1str!2s!4v1766493985268!5m2!1str!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Monobadi Restaurant Location"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-card border-t-2 border-primary/20 py-8 md:py-12 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Monobadi"
                    className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full shadow-lg"
                  />
                  <div>
                    <div className="text-lg md:text-xl font-bold">Monobadi Tepe Restaurant</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Kumyalı, Kuzey Kıbrıs</div>
                  </div>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground text-center">
                  © 2025 Monobadi Restaurant. {language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  )
}
