import type { Metadata, Viewport } from 'next'
import './globals.css'
import TopNav from '@/components/TopNav'
import Analytics from '@/components/Analytics'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, OG_IMAGE, organizationLd, websiteLd, softwareApplicationLd } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Suflo — невидимый AI-суфлёр для встреч и интервью',
  description: 'Suflo незаметно слушает разговор и подсказывает вам нужные ответы в реальном времени прямо на экране — на встречах, интервью, презентациях и переговорах. Для России и СНГ, на русском языке, без VPN.',
  keywords: 'Suflo, суфлёр, AI ассистент, помощь на встречах, ассистент для интервью, подсказки на собеседовании, презентации, десктоп помощник, невидимый ассистент',
  authors: [{ name: 'Suflo' }],
  alternates: {
    canonical: 'https://suflo.ru',
    languages: {
      'ru-RU': 'https://suflo.ru',
    },
  },
  openGraph: {
    title: 'Suflo — невидимый AI-суфлёр для встреч и интервью',
    description: 'Подсказывает нужные ответы в реальном времени прямо на экране. Для России и СНГ, на русском, без VPN.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://suflo.ru',
    siteName: 'Suflo',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Suflo — AI-суфлёр' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suflo — невидимый AI-суфлёр для встреч и интервью',
    description: 'Подсказывает нужные ответы в реальном времени прямо на экране.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '0nZEZ9PBiNH7LxPR5QVUjIcOV9495kKs-DBsaZl3gOU',
    yandex: 'a0b8e9aa94164549',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060810',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
        <link rel="alternate" hrefLang="ru" href="https://suflo.ru" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}",
          }}
        />
        <JsonLd data={[organizationLd(), websiteLd(), softwareApplicationLd()]} />
        <Analytics />
      </head>
      <body className="antialiased"><TopNav />{children}</body>
    </html>
  )
}

