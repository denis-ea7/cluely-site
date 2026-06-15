import { notFound } from 'next/navigation'
import Link from 'next/link'
import BlogCover from '@/components/BlogCover'
import { blogPosts, blogPostsById } from '@/lib/blog'

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: String(p.id) }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPostsById[params.id]
  if (!post) return { title: 'Пост не найден' }
  return {
    title: `${post.title} | Блог Suflo`,
    description: post.excerpt,
    alternates: {
      canonical: `https://suflo.ru/blog/${params.id}`,
      languages: { 'ru-RU': `https://suflo.ru/blog/${params.id}` },
    },
    openGraph: {
      title: `${post.title} | Suflo`,
      description: post.excerpt,
      url: `https://suflo.ru/blog/${params.id}`,
      siteName: 'Suflo',
    },
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPostsById[params.id]
  if (!post) notFound()

  const formatContent = (content: string) =>
    content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.includes(':**')) {
        const [title, ...rest] = paragraph.split(':**')
        const titleText = title.replace('**', '').trim()
        return (
          <div key={index} className="mb-5">
            <h3 className="mb-3 text-xl font-bold text-fg">{titleText}</h3>
            <ul className="list-inside list-disc space-y-2 text-muted">
              {rest
                .join(':**')
                .split('\n')
                .filter(Boolean)
                .map((item, i) => (
                  <li key={i}>{item.replace(/^-\s*/, '').trim()}</li>
                ))}
            </ul>
          </div>
        )
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-muted">
          {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
        </p>
      )
    })

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

      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Вернуться к блогу
          </Link>

          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full border border-line/10 bg-fg/5 px-4 py-1.5 text-sm font-medium text-muted">
              {post.category}
            </span>
            <time className="text-sm text-faint">{post.date}</time>
          </div>

          <h1 className="mb-3 text-4xl font-bold text-fg md:text-5xl">{post.title}</h1>
          <p className="mb-8 text-faint">{post.author}</p>

          {/* Cover art */}
          <BlogCover gradient={post.gradient} seed={post.id} className="mb-10 h-64 w-full rounded-2xl" />

          <div className="text-lg">{formatContent(post.content)}</div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-line/10 pt-8">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line/10 bg-fg/5 px-3 py-1 text-sm text-muted">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
