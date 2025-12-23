"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MenuSectionProps {
  language: "tr" | "en"
}

interface MenuItemSimple {
  name: string
  price: string
  note?: string
}

export function MenuSection({ language }: MenuSectionProps) {
  const translations = {
    tr: {
      title: "Menümüz",
      coldMeze: "Soğuk Mezeler",
      hotMeze: "Sıcak Mezeler",
      grills: "Izgara Çeşitleri",
      fish: "Balık Çeşitleri",
      combos: "Karışık Tabaklar",
      fixMenus: "Fix Menüler",
      beverages: "İçecekler",
      alcohol: "Alkollü İçecekler",
      setNote: "Set menüler minimum 2 kişiliktir",
      grilledNote: "Izgara çeşitlerimiz 5 çeşit soğuk meze ve salata ile servis edilir",
      fishNote: "Balık çeşitlerimiz 5 çeşit soğuk meze ve salata ile servis edilir",
      perPerson: "Kişi başı",
    },
    en: {
      title: "Our Menu",
      coldMeze: "Cold Mezes",
      hotMeze: "Hot Mezes",
      grills: "Grilled Items",
      fish: "Fish Dishes",
      combos: "Mixed Platters",
      fixMenus: "Set Menus",
      beverages: "Beverages",
      alcohol: "Alcoholic Drinks",
      setNote: "Set menus are served for minimum 2 people",
      grilledNote: "Grilled items served with 5 types of cold mezes and salad",
      fishNote: "Fish dishes served with 5 types of cold mezes and salad",
      perPerson: "Per person",
    },
  }

  const t = translations[language]

  const coldMezes: MenuItemSimple[] = [
    { name: "SET SOĞUK MEZE (12 ÇEŞİT)", price: "500", note: t.perPerson },
    { name: "HUMUS", price: "100" },
    { name: "YOĞURT", price: "100" },
    { name: "CACIK", price: "100" },
    { name: "TAHIN", price: "100" },
    { name: "HAYDARI", price: "100" },
    { name: "RUS SALATASI", price: "100" },
    { name: "FASULYE PIYAZ", price: "100" },
    { name: "HAVUÇ TARATOR", price: "100" },
    { name: "BEYAZ PEYNIR", price: "100" },
    { name: "PATATES SALATASI", price: "100" },
    { name: "PANCAR", price: "100" },
    { name: "PEMBE SULTAN", price: "100" },
    { name: "MISIRLI TON BALIĞI", price: "100" },
    { name: "KÖZLENMIŞ BIBER", price: "100" },
    { name: "KÖZLENMIŞ PATLICAN", price: "100" },
    { name: "YENGEÇ SALATASI", price: "100" },
    { name: "ÇAKISDEZ", price: "100" },
  ]

  const hotMezes: MenuItemSimple[] = [
    { name: "SET SICAK MEZE", price: "500", note: t.perPerson },
    { name: "BULGUR KÖFTESI", price: "350" },
    { name: "YENGEÇ BACAĞI", price: "300" },
    { name: "HELLIM IZGARA", price: "300" },
    { name: "PASTIRMA", price: "300" },
    { name: "SIGARA BÖREĞI", price: "250" },
    { name: "BUMBAR", price: "350" },
    { name: "AVCI BÖREĞI", price: "350" },
    { name: "PATATES KÖFTESI", price: "250" },
    { name: "TATAR BÖREĞI", price: "450" },
    { name: "PATATES CIPSI", price: "350" },
  ]

  const grills: MenuItemSimple[] = [
    { name: "YOĞURTLU BEYTİ", price: "650" },
    { name: "ET ŞIŞ", price: "600" },
    { name: "TAVUK ŞIŞ", price: "600" },
    { name: "TAVUK KANAT", price: "600" },
    { name: "KUZU PIRZOLA", price: "700" },
    { name: "ADANA KEBAP", price: "600" },
    { name: "IZGARA KÖFTE", price: "600" },
    { name: "ŞEFTALİ KEBABI", price: "700" },
    { name: "FIRIN KEBABI", price: "650" },
    { name: "KARIŞIK IZGARA 1", price: "700", note: "ET ŞIŞ, TAVUK ŞIŞ, KANAT, KÖFTE" },
    { name: "KARIŞIK IZGARA 2", price: "750", note: "ET ŞIŞ, ADANA, KÖFTE, PİRZOLA" },
    { name: "FULL KARIŞIK IZGARA", price: "850", note: "ET ŞIŞ, ADANA, KÖFTE, PİRZOLA, TAVUK ŞIŞ, ŞEFTALİ" },
  ]

  const fish: MenuItemSimple[] = [
    { name: "KALAMAR TAVA", price: "600" },
    { name: "KALAMAR FOLYO", price: "650" },
    { name: "KALAMAR HELLİMLİ", price: "700" },
    { name: "SİBYA KIZARTMA", price: "650" },
    { name: "AHTAPOT TAVA", price: "700" },
    { name: "AHTAPOT GÜVEÇ", price: "700" },
    { name: "MİDYE KIZARTMA", price: "550" },
    { name: "FISH & CHIPS", price: "700" },
    { name: "KARİDES GÜVEÇ", price: "700" },
    { name: "KARİDES KIZARTMA", price: "650" },
    { name: "MANTARLI KARİDES", price: "700" },
    { name: "ORFO", price: "900" },
    { name: "LEVREK", price: "700" },
    { name: "FOLYODA LEVREK", price: "750" },
    { name: "ÇUPRA", price: "700" },
    { name: "SPESİYAL ÇUPRA", price: "750" },
    { name: "VOPPA", price: "600" },
    { name: "MİNERİ", price: "750" },
    { name: "SOKAN", price: "600" },
    { name: "SOMON", price: "700" },
    { name: "MERCAN", price: "600" },
    { name: "BARBUN", price: "650" },
  ]

  const combos: MenuItemSimple[] = [
    {
      name: "KARIŞIK ET TABAĞI (2 KİŞİLİK)",
      price: "1500",
      note: "1 ET ŞIŞ, 2 TAVUK ŞIŞ, 2 KÖFTE, 2 PİRZOLA, ŞEFTALİ",
    },
    {
      name: "KARIŞIK ET TABAĞI (4 KİŞİLİK)",
      price: "2800",
      note: "2 ET ŞIŞ, 2 TAVUK ŞIŞ, 2 ADANA, 4 ŞEFTALİ, 4 PİRZOLA, 4 KÖFTE",
    },
    { name: "KARIŞIK BALIK TABAĞI (2 KİŞİLİK)", price: "1600", note: "SİBYA, KALAMAR, AHTAPOT, MİDYE, KARİDES" },
    { name: "KARIŞIK BALIK TABAĞI (4 KİŞİLİK)", price: "2900", note: "KALAMAR, SİBYA, KARİDES, AHTAPOT, MİDYE" },
  ]

  const fixMenus: MenuItemSimple[] = [
    {
      name: "FİX ET MEZE",
      price: "900",
      note: "12 SOĞUK MEZE, HELLİM, PASTIRMA, AVCI BÖREĞİ, PATATES KÖFTESİ, BUMBAR, TATAR BÖREĞİ",
    },
    {
      name: "FİX BALIK MEZE",
      price: "1100",
      note: "12 SOĞUK MEZE, HELLİM, BALIK KÖFTE, KARİDESLİ BÖREK, KALAMAR FOLYO, MİDYE TAVA, MANTARLI KARİDES, SİBYA, AHTAPOT",
    },
    { name: "FİX ET MENÜ", price: "1100", note: "12 SOĞUK MEZE + SICAK MEZELER + KARIŞIK IZGARA" },
    { name: "FİX BALIK MENÜ", price: "1400", note: "12 SOĞUK MEZE + SICAK MEZELER + ANA YEMEK (ÇUPRA VEYA LEVREK)" },
  ]

  const beverages: MenuItemSimple[] = [
    { name: "COCA COLA", price: "80" },
    { name: "FANTA", price: "80" },
    { name: "SPRITE", price: "80" },
    { name: "ICE TEA", price: "80" },
    { name: "MEYVE SUYU", price: "80" },
    { name: "AYRAN", price: "80" },
    { name: "ŞALGAM", price: "80" },
    { name: "MEYVELİ SODA", price: "60" },
    { name: "SADE SODA", price: "60" },
    { name: "BÜYÜK SU", price: "50" },
    { name: "KÜÇÜK SU", price: "20" },
  ]

  const alcohol: MenuItemSimple[] = [
    { name: "CARLSBERG", price: "120" },
    { name: "TUBORG", price: "120" },
    { name: "PASQUA KIRMIZI ŞARAP", price: "800" },
    { name: "PASQUA BEYAZ ŞARAP", price: "800" },
    { name: "YENİ RAKI 70CL", price: "1000" },
    { name: "YENİ RAKI 35CL", price: "600" },
    { name: "TEKİRDAĞ GOLD 70CL", price: "1400" },
    { name: "TEKİRDAĞ GOLD 35CL", price: "700" },
    { name: "SARI ZEYBEK 70CL", price: "1500" },
    { name: "SARI ZEYBEK 35CL", price: "700" },
    { name: "RED LABEL 75CL", price: "1200" },
    { name: "BLACK LABEL 75CL", price: "1800" },
    { name: "JAMESON 70CL", price: "1500" },
  ]

  return (
    <section id="menu" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">{t.title}</h2>

        <Tabs defaultValue="coldMeze" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="coldMeze">{t.coldMeze}</TabsTrigger>
            <TabsTrigger value="hotMeze">{t.hotMeze}</TabsTrigger>
            <TabsTrigger value="grills">{t.grills}</TabsTrigger>
            <TabsTrigger value="fish">{t.fish}</TabsTrigger>
            <TabsTrigger value="combos">{t.combos}</TabsTrigger>
            <TabsTrigger value="fixMenus">{t.fixMenus}</TabsTrigger>
            <TabsTrigger value="beverages">{t.beverages}</TabsTrigger>
            <TabsTrigger value="alcohol">{t.alcohol}</TabsTrigger>
          </TabsList>

          <TabsContent value="coldMeze">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-6 italic">{t.setNote}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coldMezes.map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.note && <p className="text-xs text-muted-foreground mt-1">{item.note}</p>}
                    </div>
                    <span className="font-bold text-primary ml-4">{item.price}₺</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="hotMeze">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-6 italic">{t.setNote}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotMezes.map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.note && <p className="text-xs text-muted-foreground mt-1">{item.note}</p>}
                    </div>
                    <span className="font-bold text-primary ml-4">{item.price}₺</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="grills">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-6 italic">{t.grilledNote}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {grills.map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.note && <p className="text-xs text-muted-foreground mt-1">{item.note}</p>}
                    </div>
                    <span className="font-bold text-primary ml-4">{item.price}₺</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="fish">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-6 italic">{t.fishNote}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fish.map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.note && <p className="text-xs text-muted-foreground mt-1">{item.note}</p>}
                    </div>
                    <span className="font-bold text-primary ml-4">{item.price}₺</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="combos">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-6 italic">{t.grilledNote}</p>
              <div className="grid grid-cols-1 gap-4">
                {combos.map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.note && <p className="text-xs text-muted-foreground mt-1">{item.note}</p>}
                    </div>
                    <span className="font-bold text-primary ml-4">{item.price}₺</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="fixMenus">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-6 italic">{t.setNote}</p>
              <div className="grid grid-cols-1 gap-4">
                {fixMenus.map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.note && <p className="text-xs text-muted-foreground mt-1">{item.note}</p>}
                    </div>
                    <span className="font-bold text-primary ml-4">{item.price}₺</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="beverages">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {beverages.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border pb-3">
                    <h4 className="font-semibold">{item.name}</h4>
                    <span className="font-bold text-primary">{item.price}₺</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="alcohol">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {alcohol.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border pb-3">
                    <h4 className="font-semibold">{item.name}</h4>
                    <span className="font-bold text-primary">{item.price}₺</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
