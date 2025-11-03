import Link from 'next/link'

interface BlogPostProps {
  post: {
    id: number
    title: string
    date: string
    author: string
    excerpt: string
    content: string
    category: string
    image: string
    tags: string[]
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-xl transition-all shadow-lg border border-slate-200">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">
            {post.category === 'Обновления' && '🔄'}
            {post.category === 'Функции' && '⚡'}
            {post.category === 'Улучшения' && '✨'}
            {!['Обновления', 'Функции', 'Улучшения'].includes(post.category) && '📝'}
          </div>
        </div>
        {/* Placeholder for actual image - можно заменить на реальное изображение */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <span className="text-white/50 text-sm">{post.title}</span>
        </div>
      </div>

      <div className="p-8">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            {post.category}
          </span>
          <time className="text-slate-500 text-sm">
            {post.date}
          </time>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          {post.title}
        </h2>

        {/* Author */}
        <p className="text-slate-600 mb-4">
          Автор: <span className="font-semibold text-slate-700">{post.author}</span>
        </p>

        {/* Excerpt */}
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Content Preview */}
        <div className="prose prose-lg max-w-none mb-6">
          {post.content.split('\n\n').slice(0, 2).map((paragraph, index) => (
            <p key={index} className="text-slate-600 mb-4">
              {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm border border-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Читать полностью
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}

