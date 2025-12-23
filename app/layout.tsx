import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Monobadi Tepe Restaurant | Kumyalı Kıbrıs - Rakı Balık, Fırın Kebabı, Kalamar | QR Menü",
  description:
    "Monobadi Tepe Restaurant Kumyalı'da rakı balık, fırın kebabı, kalamar, ahtapot, karides, mezeler ve özel organizasyonlar. Nişan, düğün, doğum günü, evlilik teklifi ve toplu yemek hizmetleri. QR menü ile sipariş verin.",
  keywords: [
    "monobadi",
    "monobadi restaurant",
    "tepe restaurant",
    "kumyalı restaurant",
    "kumyalı tepe restaurant",
    "kıbrıs restaurant",
    "kktc restaurant",
    "kuzey kıbrıs restaurant",
    "cyprus restaurant",
    "rakı balık",
    "rakı balık kıbrıs",
    "fırın kebabı",
    "fırın kebabı kıbrıs",
    "kebap",
    "kebab",
    "kalamar",
    "kalamar tava",
    "ahtapot",
    "ahtapot güveç",
    "karides",
    "karides güveç",
    "balık restaurant kıbrıs",
    "seafood cyprus",
    "mezeler",
    "soğuk meze",
    "sıcak meze",
    "ızgara",
    "mixed grill",
    "nişan organizasyonu",
    "düğün mekanı kıbrıs",
    "doğum günü kutlama",
    "evlilik teklifi",
    "toplu yemek",
    "kurumsal yemek",
    "kumyalı köyü",
    "kumyali",
    "qr menü",
    "dijital menü",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Monobadi Tepe Restaurant - Kumyalı Kıbrıs | Rakı Balık & Fırın Kebabı",
    description:
      "Kumyalı'nın tepesinde eşsiz manzara ve lezzet. Rakı balık, fırın kebabı, deniz ürünleri ve özel organizasyonlar.",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Monobadi Tepe Restaurant",
      },


    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://monobadi-restaurant.vercel.app", // updated to match sitemap
    languages: {
      "tr-TR": "https://monobadi-restaurant.vercel.app/tr",
      "en-US": "https://monobadi-restaurant.vercel.app/en",
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <footer className="mt-12 py-6 text-center text-sm text-muted-foreground">
          <div>
            Powered by{' '}
            <a href="https://fuatcanagcabay.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              fuatcanagcabay.com
            </a>{' '}
            —{' '}
            <a href="https://instagram.com/herseykibris" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              @herseykibris
            </a>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
