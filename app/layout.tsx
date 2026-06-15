import type { Metadata } from 'next'
import './globals.css'
import TopNav from '@/components/TopNav'

export const metadata: Metadata = {
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
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '0nZEZ9PBiNH7LxPR5QVUjIcOV9495kKs-DBsaZl3gOU',
    yandex: 'a0b8e9aa94164549',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}",
          }}
        />
      </head>
      <body className="antialiased"><TopNav />{children}</body>
    </html>
  )
}

