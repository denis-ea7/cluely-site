import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'
import { useCases } from '@/lib/use-cases'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${SITE_URL}/pricing`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_URL}/use-cases`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/download`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/oferta`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/requisites`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ].map((r) => ({ ...r, lastModified: now }))

  const useCaseRoutes: MetadataRoute.Sitemap = useCases.map((u) => ({
    url: `${SITE_URL}/use-cases/${u.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.iso),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...useCaseRoutes, ...blogRoutes]
}
