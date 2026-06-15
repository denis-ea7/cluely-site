import type { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Блог Suflo',
  description: 'Новости и обновления Suflo — невидимого AI-суфлёра для встреч и интервью.',
  alternates: {
    canonical: 'https://suflo.ru/blog',
    languages: { 'ru-RU': 'https://suflo.ru/blog' },
  },
  openGraph: {
    title: 'Блог Suflo — новости и обновления',
    description: 'Новости и обновления Suflo',
    url: 'https://suflo.ru/blog',
    siteName: 'Suflo',
  },
}

export default function BlogPage() {
  return (
    <div className="bg-app min-h-screen">
      <header className="glass-strong sticky top-0 z-50 border-b border-line/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-fg">
              Suflo
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-muted transition-colors hover:text-fg">
                Главная
              </Link>
              <Link href="/blog" className="font-semibold text-indigo-400">
                Блог
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-fg md:text-5xl">Блог Suflo</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted">
            Новости, новые функции и полезные советы.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
