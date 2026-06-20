import BlogPost from '@/components/BlogPost'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { blogPostsSorted } from '@/lib/blog'
import { pageMetadata, breadcrumbLd } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Блог Suflo — собеседования, интервью и AI-помощь',
  description:
    'Гайды и разборы для собеседований и рабочих звонков: как проходить интервью, готовиться к техническим вопросам и использовать AI-суфлёр в реальном времени.',
  path: '/blog',
  keywords: 'блог Suflo, подготовка к собеседованию, AI помощник интервью, технические вопросы',
})

export default function BlogPage() {
  return (
    <main className="bg-app bg-grid min-h-screen">
      <JsonLd
        data={breadcrumbLd([
          { name: 'Главная', path: '/' },
          { name: 'Блог', path: '/blog' },
        ])}
      />

      <div className="container mx-auto px-4 pt-32 pb-12 md:pt-40">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-fg md:text-5xl">
            Блог Suflo
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted">
            Как проходить собеседования и рабочие звонки увереннее — гайды, разборы технических тем
            и возможности AI-суфлёра.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {blogPostsSorted.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
