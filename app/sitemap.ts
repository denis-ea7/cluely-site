import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suflo.ru'
  const blogPosts = [
    { id: 1, date: '2025-01-15' },
    { id: 2, date: '2025-01-08' },
    { id: 3, date: '2024-12-28' },
    { id: 4, date: '2024-12-20' },
    { id: 5, date: '2024-12-12' },
    { id: 6, date: '2024-12-05' },
  ]

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          ru: 'https://suflo.ru',
          en: 'https://suflo.ru',
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://suflo.ru/blog',
          en: 'https://suflo.ru',
        },
      },
    },
    {
      url: `${baseUrl}/oferta`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/requisites`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `https://suflo.ru/blog/${post.id}`,
          en: 'https://suflo.ru',
        },
      },
    })),
  ]

  return routes
}




























