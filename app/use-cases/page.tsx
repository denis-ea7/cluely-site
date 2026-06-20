import Link from 'next/link'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { useCases } from '@/lib/use-cases'
import { pageMetadata, breadcrumbLd } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Сценарии использования Suflo — где помогает AI-суфлёр',
  description:
    'Где помогает Suflo: собеседования, live coding, рабочие встречи и звонки с клиентами. Подсказки и ответы в реальном времени, невидимо при демонстрации экрана.',
  path: '/use-cases',
  keywords: 'сценарии Suflo, где использовать AI суфлёр, AI помощник для собеседований и встреч',
})

export default function UseCasesIndex() {
  return (
    <main className="bg-app bg-grid min-h-screen overflow-hidden">
      <JsonLd
        data={breadcrumbLd([
          { name: 'Главная', path: '/' },
          { name: 'Сценарии', path: '/use-cases' },
        ])}
      />

      <div className="container mx-auto px-4 pt-32 md:pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Где помогает <span className="text-gradient">Suflo</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-muted">
            Один помощник для всех разговоров, где важно ответить уверенно и по делу. Выберите свой
            сценарий.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              href={`/use-cases/${uc.slug}`}
              className="glass group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line/20"
            >
              <div
                className={`mb-5 inline-flex h-2 w-12 rounded-full bg-gradient-to-r ${uc.gradient}`}
              />
              <h2 className="text-xl font-bold text-fg">{uc.h1}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{uc.cardSummary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400">
                Подробнее
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  )
}
