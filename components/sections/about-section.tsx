import { Card } from "@/components/ui/card"
import { Users, Calendar, ChefHat, Heart } from "lucide-react"

interface AboutSectionProps {
  language: "tr" | "en"
}

export function AboutSection({ language }: AboutSectionProps) {
  const translations = {
    tr: {
      title: "Hakkımızda",
      description:
        "Monobadi Tepe Restaurant (eski adıyla Tepe Restaurant), Kumyalı köyünün tepesinde, muhteşem manzarası ve lezzetli yemekleriyle sizlere hizmet vermektedir. Rakı balık kültürü, fırın kebabı ve özel mezelerimizle unutulmaz anlar yaşatıyoruz.",
      events: "Özel Etkinlikler",
      eventsDesc: "Nişan, düğün, doğum günü, evlilik teklifi gibi özel günlerinizi bizimle paylaşın.",
      groups: "Toplu Yemekler",
      groupsDesc: "Kurumsal etkinlikler, okul yemekleri, yılbaşı ve özel günler için toplu yemek hizmetleri.",
      quality: "Kaliteli Hizmet",
      qualityDesc: "Taze malzemeler ve deneyimli mutfak ekibimizle en kaliteli hizmeti sunuyoruz.",
      location: "Muhteşem Konum",
      locationDesc: "Kumyalı köyünün tepesinde, eşsiz manzara eşliğinde yemek keyfi.",
    },
    en: {
      title: "About Us",
      description:
        "Monobadi Tepe Restaurant (formerly Tepe Restaurant) serves you at the top of Kumyalı village with its magnificent view and delicious food. We create unforgettable moments with our fish & raki culture, oven kebab and special mezes.",
      events: "Special Events",
      eventsDesc: "Share your special days with us: engagements, weddings, birthdays, marriage proposals.",
      groups: "Group Dining",
      groupsDesc: "Group dining services for corporate events, school meals, New Year and special occasions.",
      quality: "Quality Service",
      qualityDesc: "We offer the highest quality service with fresh ingredients and our experienced kitchen team.",
      location: "Amazing Location",
      locationDesc: "Dining pleasure with a unique view at the top of Kumyalı village.",
    },
  }

  const t = translations[language]

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">{t.title}</h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">{t.events}</h3>
            <p className="text-muted-foreground">{t.eventsDesc}</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">{t.groups}</h3>
            <p className="text-muted-foreground">{t.groupsDesc}</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">{t.quality}</h3>
            <p className="text-muted-foreground">{t.qualityDesc}</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">{t.location}</h3>
            <p className="text-muted-foreground">{t.locationDesc}</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
