// Central SEO config + JSON-LD builders. One source of truth for the canonical
// host, page metadata, and the structured data we feed Google / Yandex.

import type { Metadata } from 'next'

export const SITE_URL = 'https://suflo.ru'
export const SITE_NAME = 'Suflo'
export const SITE_TAGLINE = 'Невидимый AI-суфлёр для встреч и интервью'
export const CONTACT_EMAIL = 'contact@suflo.ru'
export const OG_IMAGE = `${SITE_URL}/og.png`

/** Absolute URL for a path like "/pricing" → "https://suflo.ru/pricing". */
export function url(path = '/'): string {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

type PageMetaInput = {
  title: string
  description: string
  /** Path without host, e.g. "/pricing". Drives canonical + og:url. */
  path?: string
  keywords?: string
  /** Set true on utility pages (login, checkout) we don't want indexed. */
  noindex?: boolean
  ogType?: 'website' | 'article'
  image?: string
}

/** Build consistent per-page Metadata (canonical, OG, robots) for Suflo. */
export function pageMetadata({
  title,
  description,
  path = '/',
  keywords,
  noindex,
  ogType = 'website',
  image = OG_IMAGE,
}: PageMetaInput): Metadata {
  const canonical = url(path)
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: { 'ru-RU': canonical },
    },
    openGraph: {
      title,
      description,
      type: ogType,
      locale: 'ru_RU',
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

// ── JSON-LD builders ────────────────────────────────────────────────────────

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: CONTACT_EMAIL,
    description:
      'Suflo — невидимый AI-суфлёр, который слушает разговор и подсказывает ответы в реальном времени на собеседованиях, звонках и встречах.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_EMAIL,
      contactType: 'customer support',
      availableLanguage: ['ru', 'en'],
    },
  }
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'ru-RU',
  }
}

/** The product itself — drives the rich "software" understanding in search. */
export function softwareApplicationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    operatingSystem: 'macOS, Windows',
    applicationCategory: 'BusinessApplication',
    description:
      'AI-помощник для собеседований и рабочих звонков: слушает встречу, транскрибирует речь и подсказывает ответы в реальном времени. Невидим при демонстрации экрана.',
    url: SITE_URL,
    inLanguage: 'ru-RU',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '640',
        priceCurrency: 'RUB',
        description: 'Доступ на 7 дней',
      },
      {
        '@type': 'Offer',
        name: 'Standart',
        price: '1620',
        priceCurrency: 'RUB',
        description: 'Доступ на 30 дней',
      },
      {
        '@type': 'Offer',
        name: 'Plus',
        price: '2980',
        priceCurrency: 'RUB',
        description: 'Доступ на 90 дней',
      },
    ],
  }
}

export type FaqItem = { question: string; answer: string }

export function faqLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export type Crumb = { name: string; path: string }

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: url(c.path),
    })),
  }
}

export function articleLd({
  title,
  description,
  path,
  datePublished,
}: {
  title: string
  description: string
  path: string
  datePublished?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ru-RU',
    mainEntityOfPage: url(path),
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: organizationLd(),
    ...(datePublished ? { datePublished } : {}),
  }
}
