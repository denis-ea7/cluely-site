import { notFound } from 'next/navigation'
import Link from 'next/link'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'
import JsonLd from '@/components/JsonLd'
import { useCases, useCasesBySlug } from '@/lib/use-cases'
import { pageMetadata, faqLd, breadcrumbLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const uc = useCasesBySlug[params.slug]
  if (!uc) return { title: 'Страница не найдена' }
  return pageMetadata({
    title: uc.title,
    description: uc.description,
    path: `/use-cases/${uc.slug}`,
    keywords: uc.keywords,
  })
}

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400"
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
)

export default function UseCasePage({ params }: { params: { slug: string } }) {
  const uc = useCasesBySlug[params.slug]
  if (!uc) notFound()

  return (
    <main className="bg-app bg-grid min-h-screen overflow-hidden">
      <JsonLd
        data={[
          faqLd(uc.faq),
          breadcrumbLd([
            { name: 'Главная', path: '/' },
            { name: 'Сценарии', path: '/use-cases' },
            { name: uc.label, path: `/use-cases/${uc.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: uc.title,
            description: uc.description,
            url: url(`/use-cases/${uc.slug}`),
            inLanguage: 'ru-RU',
          },
        ]}
      />

      {/* Hero */}
      <section className="container mx-auto px-4 pt-32 md:pt-40">
        <nav className="mb-6 flex items-center gap-2 text-sm text-faint">
          <Link href="/" className="hover:text-fg">
            Главная
          </Link>
          <span>/</span>
          <Link href="/use-cases" className="hover:text-fg">
            Сценарии
          </Link>
          <span>/</span>
          <span className="text-muted">{uc.label}</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            {uc.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-muted md:text-xl">{uc.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/pricing/" className="btn btn-primary px-6 py-3 text-base">
              Попробовать Suflo
            </a>
            <a href="/download/" className="btn btn-ghost px-6 py-3 text-base">
              Скачать приложение
            </a>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass mx-auto max-w-3xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold tracking-tight text-fg">{uc.pain.title}</h2>
          <p className="mt-4 leading-relaxed text-muted">{uc.pain.body}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Как это работает
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Подсказка приходит, пока вы ещё думаете
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {uc.how.map((s, i) => (
            <div key={s.title} className="glass rounded-2xl p-7">
              <div className="text-gradient mb-4 text-4xl font-extrabold tracking-tight">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-fg">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For whom + scenarios */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-fg">Для кого</h2>
            <ul className="space-y-3">
              {uc.forWhom.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-muted">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-fg">Сценарии использования</h2>
            <div className="space-y-4">
              {uc.scenarios.map((s) => (
                <div key={s.title} className="glass rounded-xl p-5">
                  <h3 className="mb-1.5 font-semibold text-fg">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <Faq items={uc.faq} title="Частые вопросы" />
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-24">
        <div className="force-dark relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line/10 px-6 py-14 text-center text-fg md:px-16">
          <div className="absolute inset-0 -z-20 bg-slate-950" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgba(99,102,241,0.35),transparent_70%)]" />
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Готовы к следующему разговору?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Установите Suflo за пару минут и получайте подсказки в реальном времени — незаметно для
            собеседника.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/pricing/" className="btn btn-primary w-full px-6 py-3 text-base sm:w-auto">
              Выбрать тариф
            </a>
            <a href="/download/" className="btn btn-ghost w-full px-6 py-3 text-base sm:w-auto">
              Скачать
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
