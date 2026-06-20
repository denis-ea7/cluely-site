import type { FaqItem } from '@/lib/seo'

/**
 * Accessible FAQ built on native <details> — works without JS and is easy for
 * crawlers to read. Pair it with faqLd() so the same Q&A also ships as JSON-LD.
 */
export default function Faq({
  items,
  title = 'Частые вопросы',
}: {
  items: FaqItem[]
  title?: string
}) {
  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((f) => (
          <details
            key={f.question}
            className="glass group rounded-2xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-fg">
              {f.question}
              <svg
                className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
