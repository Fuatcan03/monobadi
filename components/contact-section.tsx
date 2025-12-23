import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

interface ContactSectionProps {
  language: "tr" | "en"
}

export function ContactSection({ language }: ContactSectionProps) {
  const translations = {
    tr: {
      title: "İletişim & Rezervasyon",
      address: "Adres",
      addressText: "Kumyalı Köyü, Tepe Restaurant Yolu, Kıbrıs",
      phone: "Telefon",
      hours: "Çalışma Saatleri",
      hoursText: "Her gün 11:00 - 23:00",
      reservation: "Rezervasyon için bizi arayın",
      call: "Hemen Ara",
      whatsapp: "WhatsApp",
      location: "Konumu Görüntüle",
    },
    en: {
      title: "Contact & Reservation",
      address: "Address",
      addressText: "Kumyalı Village, Tepe Restaurant Road, Cyprus",
      phone: "Phone",
      hours: "Opening Hours",
      hoursText: "Every day 11:00 - 23:00",
      reservation: "Call us for reservation",
      call: "Call Now",
      whatsapp: "WhatsApp",
      location: "View Location",
    },
  }

  const t = translations[language]

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">{t.title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.address}</h3>
                  <p className="text-muted-foreground">{t.addressText}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{t.phone}</h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+905338809516"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      +90 533 880 95 16
                    </a>
                    <a
                      href="tel:+905338641183"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      +90 533 864 11 83
                    </a>
                    <a
                      href="tel:+905338801918"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      +90 533 880 19 18
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.hours}</h3>
                  <p className="text-muted-foreground">{t.hoursText}</p>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                <a href="tel:+905338809516">
                  <Phone className="w-5 h-5 mr-2" />
                  {t.call}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1 bg-transparent">
                <a href="https://wa.me/905338809516" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5 mr-2" />
                  {t.whatsapp}
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">{t.location}</h3>
            <div className="relative w-full h-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.8067443931795!2d34.126418815622536!3d35.42993897266936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14df0b1f000744b7%3A0x2705106c1fef4aa3!2sTepe%20Restoran!5e0!3m2!1str!2s!4v1766493985268!5m2!1str!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monobadi Tepe Restaurant Location"
              />
            </div>
            <Button asChild variant="link" className="mt-4 w-full">
              <a href="https://maps.app.goo.gl/dAYKCvpAVD9jRn1KA" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 mr-2" />
                Google Maps'te Aç
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
