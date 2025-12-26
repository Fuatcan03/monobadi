import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Monobadi Tepe Restaurant | Kumyalı Kıbrıs - Rakı Balık, Fırın Kebabı, Kalamar",
  description: "Kumyalı'nın tepesinde eşsiz manzara ve lezzetler. Monobadi Tepe Restaurant'ta rakı balık, fırın kebabı, deniz ürünleri ve özel organizasyonlar. Nişan, düğün, doğum günü, evlilik teklifi ve toplu yemek hizmetleri.",
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
    "restoran kıbrıs",
    "akdeniz mutfağı",
    "kıbrıs yemekleri"
  ],
  authors: [{ name: "Monobadi Restaurant", url: "https://www.monobadirestaurant.com" }],
  creator: "Monobadi Restaurant",
  publisher: "Monobadi Restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://www.monobadirestaurant.com'),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.monobadirestaurant.com",
    title: "Monobadi Tepe Restaurant - Kumyalı Kıbrıs | Rakı Balık & Fırın Kebabı",
    description: "Kumyalı'nın tepesinde eşsiz manzara ve lezzet. Rakı balık, fırın kebabı, deniz ürünleri ve özel organizasyonlar.",
    siteName: "Monobadi Tepe Restaurant",
    images: [
      {
        url: "https://www.monobadirestaurant.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Monobadi Tepe Restaurant - Kumyalı Kıbrıs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monobadi Tepe Restaurant",
    description: "Kumyalı'nın tepesinde eşsiz lezzetler",
    images: ["https://www.monobadirestaurant.com/logo.png"],
    creator: "@monobadi_restaurant",
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
    canonical: "https://www.monobadirestaurant.com",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  category: "restaurant",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Monobadi Tepe Restaurant",
              "image": "https://www.monobadirestaurant.com/logo.png",
              "description": "Kumyalı köyü tepesinde geleneksel Kıbrıs lezzetleri sunan restoran",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kumyalı Köyü",
                "addressLocality": "Kumyalı",
                "addressRegion": "Kıbrıs",
                "postalCode": "TRNC",
                "addressCountry": "CY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.42993897266936,
                "longitude": 34.126418815622536
              },
              "url": "https://www.monobadirestaurant.com",
              "telephone": "+905338809516",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "11:00",
                  "closes": "23:00"
                }
              ],
              "priceRange": "₺₺",
              "servesCuisine": ["Turkish", "Cypriot", "Mediterranean"],
              "menu": "https://www.monobadirestaurant.com/menu",
              "acceptsReservations": true,
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100089743077708",
                "https://instagram.com/monobadi_restaurant/"
              ]
            })
          }}
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <footer className="py-3 text-center text-sm text-white bg-gradient-to-r from-red-600 to-red-700">
          <div className="container mx-auto px-4">
            <p>
              Powered by{' '}
              <a 
                href="https://fuatcanagcabay.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline font-semibold hover:text-yellow-200 transition-colors"
              >
                fuatcanagcabay.com
              </a>{' '}
              —{' '}
              <a 
                href="https://instagram.com/herseykibris" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline font-semibold hover:text-yellow-200 transition-colors"
              >
                @herseykibris
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}