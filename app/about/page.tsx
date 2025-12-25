"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/header/navigation"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer/component"
import { FloatingButtons } from "@/components/ui/floating-buttons"
import { motion } from "framer-motion"
import { Users, ChefHat, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const translations = {
    tr: {
      title: "Hakkımızda",
      subtitle: "Monobadi Hikayesi",
      storyTitle: "Bizim Hikayemiz",
      storyText: "2018 yılında kurulan Monobadi Tepe Restaurant, Kumyalı köyünün en yüksek noktasında hizmet vermeye başladı. Amacımız, geleneksel Kıbrıs lezzetlerini modern bir yaklaşımla sunmak ve misafirlerimize unutulmaz bir deneyim yaşatmaktır.",
      missionTitle: "Misyonumuz",
      missionText: "Taze, kaliteli malzemeler kullanarak geleneksel tariflerimizi korurken, modern sunum teknikleriyle lezzetleri bir adım öteye taşımak.",
      visionTitle: "Vizyonumuz",
      visionText: "Bölgenin en çok tercih edilen restoranı olmak ve Kıbrıs mutfağını dünyaya tanıtmak.",
      valuesTitle: "Değerlerimiz",
    },
    en: {
      title: "About Us",
      subtitle: "The Monobadi Story",
      storyTitle: "Our Story",
      storyText: "Founded in 2018, Monobadi Tepe Restaurant started serving at the highest point of Kumyalı village. Our goal is to present traditional Cypriot flavors with a modern approach and provide our guests with an unforgettable experience.",
      missionTitle: "Our Mission",
      missionText: "To preserve our traditional recipes using fresh, quality ingredients while taking flavors to the next level with modern presentation techniques.",
      visionTitle: "Our Vision",
      visionText: "To become the most preferred restaurant in the region and introduce Cypriot cuisine to the world.",
      valuesTitle: "Our Values",
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Navigation */}
      <Navigation 
  language={language}
  onLanguageChange={setLanguage}
/>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="/logo.png" 
            className="w-full h-full object-cover opacity-10"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">{t.storyTitle}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t.storyText}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{t.missionTitle}</h3>
              <p className="text-muted-foreground">{t.missionText}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{t.visionTitle}</h3>
              <p className="text-muted-foreground">{t.visionText}</p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{t.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Müşteri Memnuniyeti", desc: "Misafirlerimizin memnuniyeti bizim için en önemli önceliktir." },
              { icon: <ChefHat className="w-8 h-8" />, title: "Kalite", desc: "En taze malzemelerle en lezzetli yemekleri sunuyoruz." },
              { icon: <Heart className="w-8 h-8" />, title: "Sevgi", desc: "Yaptığımız her işi sevgiyle yapıyoruz." },
              { icon: <Globe className="w-8 h-8" />, title: "Geleneksel", desc: "Geleneksel tariflerimizi koruyor, modern dokunuşlar ekliyoruz." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card p-6 rounded-2xl border border-primary/10 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">{value.title}</h3>
                <p className="text-muted-foreground text-center text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section (Optional - can add later) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AboutSection language={language} />
        </motion.div>
      </main>

      {/* Contact Section */}
      <ContactSection language={language} />

      {/* Footer */}
      <Footer language={language} />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  )
}