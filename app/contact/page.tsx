"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/header/navigation"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer/component"
import { FloatingButtons } from "@/components/ui/floating-buttons"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    guests: "2",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log("Form submitted:", formData)
    alert(language === "tr" ? "Mesajınız gönderildi!" : "Your message has been sent!")
    setFormData({ name: "", email: "", phone: "", message: "", date: "", guests: "2" })
  }

  const translations = {
    tr: {
      title: "İletişim",
      subtitle: "Bize Ulaşın",
      reservationTitle: "Rezervasyon Yap",
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      date: "Tarih",
      guests: "Misafir Sayısı",
      message: "Mesajınız",
      submit: "Gönder",
      contactInfo: "İletişim Bilgileri",
      hours: "Çalışma Saatleri",
      address: "Adres",
      follow: "Bizi Takip Edin",
      successMessage: "Mesajınız başarıyla gönderildi!",
      required: "Bu alan zorunludur",
      invalidEmail: "Geçerli bir e-posta adresi giriniz",
    },
    en: {
      title: "Contact",
      subtitle: "Get in Touch",
      reservationTitle: "Make a Reservation",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      date: "Date",
      guests: "Number of Guests",
      message: "Your Message",
      submit: "Send",
      contactInfo: "Contact Information",
      hours: "Opening Hours",
      address: "Address",
      follow: "Follow Us",
      successMessage: "Your message has been sent successfully!",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
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
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="/fish-and-chips.jpg" 
            className="w-full h-full object-cover opacity-10"
            alt="Contact Background"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">{t.reservationTitle}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.email}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.date}</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.guests}</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {language === "tr" ? "Kişi" : "People"}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.message}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.submit}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">{t.contactInfo}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{language === "tr" ? "Telefon" : "Phone"}</h3>
                  <div className="space-y-1">
                    <a href="tel:+905338809516" className="block text-muted-foreground hover:text-primary transition-colors">
                      +90 533 880 95 16
                    </a>
                    <a href="tel:+905338641183" className="block text-muted-foreground hover:text-primary transition-colors">
                      +90 533 864 11 83
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">E-posta</h3>
                  <a href="mailto:info@monobadi.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@monobadi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.hours}</h3>
                  <p className="text-muted-foreground">Her gün 11:00 - 23:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.address}</h3>
                  <p className="text-muted-foreground">Kumyalı Köyü, Tepe Restaurant Yolu, Kıbrıs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Contact Section Component */}
      <ContactSection language={language} />

      {/* Footer */}
      <Footer language={language} />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  )
}