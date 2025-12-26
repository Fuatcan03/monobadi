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
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "tr" | "en" | null
    if (savedLang) setLanguage(savedLang)
    
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", language)
  }, [language])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      console.log("Form submitted:", formData)
      
      const whatsappMessage = `Yeni Rezervasyon İsteği:%0A%0Aİsim: ${formData.name}%0ATelefon: ${formData.phone}%0ATarih: ${formData.date}%0AMisafir Sayısı: ${formData.guests}%0AMesaj: ${formData.message}`
      window.open(`https://wa.me/905338809516?text=${whatsappMessage}`, '_blank')
      
      alert(language === "tr" ? "Rezervasyon isteğiniz alındı! Size dönüş yapacağız." : "Your reservation request has been received! We will get back to you.")
      setFormData({ name: "", email: "", phone: "", message: "", date: "", guests: "2" })
    } catch (error) {
      console.error("Form submission error:", error)
      alert(language === "tr" ? "Bir hata oluştu. Lütfen tekrar deneyin." : "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
      submit: "Rezervasyon Yap",
      contactInfo: "İletişim Bilgileri",
      hours: "Çalışma Saatleri",
      address: "Adres",
      follow: "Bizi Takip Edin",
      successMessage: "Rezervasyon isteğiniz alındı!",
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
      submit: "Make Reservation",
      contactInfo: "Contact Information",
      hours: "Opening Hours",
      address: "Address",
      follow: "Follow Us",
      successMessage: "Your reservation request has been received!",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Navigation 
        language={language}
        onLanguageChange={setLanguage}
      />

      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="/fish-and-chips.jpg" 
            className="w-full h-full object-cover opacity-10"
            alt="Monobadi Restaurant Contact"
            loading="eager"
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

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">{t.reservationTitle}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.name} *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                  placeholder={language === "tr" ? "Adınız ve soyadınız" : "Your full name"}
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
                    placeholder={language === "tr" ? "ornek@email.com" : "example@email.com"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.phone} *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                    placeholder="+90 533 000 0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.date} *</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.guests} *</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(num => (
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
                  placeholder={language === "tr" ? "Özel istekleriniz veya notlarınız..." : "Your special requests or notes..."}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (language === "tr" ? "Gönderiliyor..." : "Sending...") : t.submit}
              </button>
              
              <p className="text-sm text-muted-foreground text-center">
                {language === "tr" 
                  ? "* ile işaretli alanlar zorunludur. Rezervasyonunuz onaylandıktan sonra size dönüş yapılacaktır." 
                  : "* Required fields. We will get back to you after your reservation is confirmed."}
              </p>
            </form>
          </motion.div>

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
                      +90 533 880 95 16 (Ana Hat)
                    </a>
                    <a href="tel:+905338641183" className="block text-muted-foreground hover:text-primary transition-colors">
                      +90 533 864 11 83
                    </a>
                    <a href="tel:+905338801918" className="block text-muted-foreground hover:text-primary transition-colors">
                      +90 533 880 19 18
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{language === "tr" ? "E-posta" : "Email"}</h3>
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
                  <p className="text-muted-foreground">11:00 - 23:00</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === "tr" ? "Her gün açığız" : "Open every day"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.address}</h3>
                  <p className="text-muted-foreground">Kumyalı Köyü, Tepe Restaurant Yolu, Kıbrıs</p>
                  <a 
                    href="https://maps.app.goo.gl/dAYKCvpAVD9jRn1KA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline mt-2 inline-block"
                  >
                    {language === "tr" ? "Google Maps'te aç" : "Open in Google Maps"}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <ContactSection language={language} />

      <Footer language={language} />

      <FloatingButtons />
    </div>
  )
}