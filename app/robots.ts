import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/_next/',
        '/account/',
        '/checkout/',
        '/success/',
        '/reset/',
        '/reset-request/',
        '/login/',
      ],
    },
    sitemap: 'https://suflo.ru/sitemap.xml',
    host: 'https://suflo.ru',
  }
}
