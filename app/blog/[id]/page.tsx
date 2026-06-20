import { notFound } from 'next/navigation'
import Link from 'next/link'
import BlogCover from '@/components/BlogCover'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { blogPosts, blogPostsById } from '@/lib/blog'
import { pageMetadata, articleLd, breadcrumbLd } from '@/lib/seo'

export function generateStaticParams() {
  // Slug URLs are canonical; numeric ids stay valid for old /blog/1 links.
  return blogPosts.flatMap((p) => [{ id: p.slug }, { id: String(p.id) }])
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPostsById[params.id]
  if (!post) return { title: 'Пост не найден' }
  return pageMetadata({
    title: `${post.title} | Блог Suflo`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogType: 'article',
  })
}

/** Inline markdown: turns [text](url) into links and strips **bold**. */
function renderInline(text: string) {
  const parts: React.ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  let key = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(strip(text.slice(last, m.index)))
    parts.push(
      <Link key={key++} href={m[2]} className="font-medium text-indigo-400 hover:text-indigo-300">
        {m[1]}
      </Link>
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(strip(text.slice(last)))
  return parts
}

const strip = (s: string) => s.replace(/\*\*(.*?)\*\*/g, '$1')

function formatContent(content: string) {
  return content.split('\n\n').map((paragraph, index) => {
    if (paragraph.startsWith('**') && paragraph.includes(':**')) {
      const [title, ...rest] = paragraph.split(':**')
      const titleText = title.replace('**', '').trim()
      return (
        <div key={index} className="mb-5">
          <h2 className="mb-3 text-xl font-bold text-fg">{titleText}</h2>
          <ul className="list-inside list-disc space-y-2 text-muted">
            {rest
              .join(':**')
              .split('\n')
              .filter(Boolean)
              .map((item, i) => (
                <li key={i}>{renderInline(item.replace(/^-\s*/, '').trim())}</li>
              ))}
          </ul>
        </div>
      )
    }
    return (
      <p key={index} className="mb-4 leading-relaxed text-muted">
        {renderInline(paragraph)}
      </p>
    )
  })
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPostsById[params.id]
  if (!post) notFound()

  return (
    <div className="bg-app min-h-screen">
      <JsonLd
        data={[
          articleLd({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            datePublished: post.iso,
          }),
          breadcrumbLd([
            { name: 'Главная', path: '/' },
            { name: 'Блог', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="container mx-auto px-4 pt-32 pb-12 md:pt-40">
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
            <time dateTime={post.iso} className="text-sm text-faint">
              {post.date}
            </time>
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

      <Footer />
    </div>
  )
}
