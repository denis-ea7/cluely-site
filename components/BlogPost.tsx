import Link from 'next/link'
import BlogCover from '@/components/BlogCover'
import type { BlogPost as Post } from '@/lib/blog'

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="glass overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-line/20">
      {/* Cover art */}
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative">
          <BlogCover gradient={post.gradient} seed={post.id} className="h-48 w-full" />
          <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-7">
        <div className="mb-3 flex items-center justify-between">
          <time className="text-sm text-faint">{post.date}</time>
          <span className="text-sm text-faint">{post.author}</span>
        </div>

        <h2 className="mb-3 text-2xl font-bold text-fg">{post.title}</h2>
        <p className="mb-5 leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line/10 bg-fg/5 px-3 py-1 text-xs text-muted">
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
        >
          Читать полностью
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
