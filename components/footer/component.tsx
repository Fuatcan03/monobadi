import { Instagram, Facebook, Mail, Phone } from "lucide-react"

interface FooterProps {
  language: "tr" | "en"
}

export function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  const translations = {
    tr: {
      follow: "Bizi Takip Edin",
      contact: "İletişim",
      hours: "Çalışma Saatleri",
      hoursText: "Her gün 11:00 - 23:00",
      address: "Kumyalı Köyü, Tepe Restaurant",
      copyright: `© ${currentYear} Monobadi Tepe Restaurant. Tüm hakları saklıdır.`,
    },
    en: {
      follow: "Follow Us",
      contact: "Contact",
      hours: "Opening Hours",
      hoursText: "Every day 11:00 - 23:00",
      address: "Kumyalı Village, Tepe Restaurant",
      copyright: `© ${currentYear} Monobadi Tepe Restaurant. All rights reserved.`,
    },
  }

  const t = translations[language]

  return (
    <footer className="bg-muted/50 border-t border-primary/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" className="w-12 h-12 rounded-full" alt="Monobadi Logo" />
              <div>
                <h3 className="text-xl font-bold">Monobadi</h3>
                <p className="text-sm text-muted-foreground">Tepe Restaurant</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Kumyalı'nın tepesinde, eşsiz lezzetler ve manzaralar.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.contact}</h4>
            <div className="space-y-3">
              <a href="tel:+905338809516" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+90 533 880 95 16</span>
              </a>
              <a href="tel:+905338641183" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+90 533 864 11 83</span>
              </a>
              <a href="mailto:info@monobadi.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@monobadi.com</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.hours}</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">{t.hoursText}</p>
              <p className="text-sm text-muted-foreground">{t.address}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.follow}</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/monobadi_restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/profile.php?id=100089743077708"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}