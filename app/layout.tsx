import type { Metadata } from 'next'
import './globals.css'
import TopNav from '@/components/TopNav'

export const metadata: Metadata = {
  title: 'Cluely Россия - Российская адаптация невидимого AI-ассистента для встреч и интервью',
  description: 'Cluely Россия - переработанная версия Cluely (cluely.com), адаптированная для России и СНГ. Невидимый десктоп-ассистент на базе AI для встреч, интервью, презентаций. Основано на оригинальном проекте Cluely.',
  keywords: 'Cluely Россия, Cluely СНГ, AI ассистент, помощь на встречах, интервью ассистент, презентации, десктоп помощник, Cluely адаптация, cluely.com',
  authors: [{ name: 'Cluely Россия' }],
  alternates: {
    canonical: 'https://cluely.ru',
    languages: {
      'ru-RU': 'https://cluely.ru',
      'en-US': 'https://cluely.com',
    },
  },
  openGraph: {
    title: 'Cluely Россия - Российская адаптация AI-ассистента для встреч',
    description: 'Российская версия Cluely (cluely.com) - ваш AI-помощник для встреч, интервью и презентаций',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://cluely.ru',
    siteName: 'Cluely Россия',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  other: {
    'x-reference': 'https://cluely.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased"><TopNav />{children}</body>
    </html>
  )
}

