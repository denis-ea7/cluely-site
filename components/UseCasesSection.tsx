import Link from 'next/link'
import { useCases } from '@/lib/use-cases'

// Homepage section linking to the intent landing pages — internal links from the
// site's highest-authority page help those pages rank.
export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Сценарии
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Где Suflo помогает каждый день
          </h2>
          <p className="mt-4 text-lg text-muted">
            Один помощник для всех разговоров, где важно ответить уверенно и по делу.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              href={`/use-cases/${uc.slug}`}
              className="glass group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line/20"
            >
              <span className={`mb-4 inline-flex h-2 w-10 rounded-full bg-gradient-to-r ${uc.gradient}`} />
              <h3 className="text-lg font-semibold text-fg">{uc.h1}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{uc.cardSummary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400">
                Подробнее
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
