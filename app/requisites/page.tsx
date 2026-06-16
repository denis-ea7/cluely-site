import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Реквизиты — Suflo',
  description: 'Реквизиты и контактные данные исполнителя услуг Suflo.',
  alternates: { canonical: 'https://suflo.ru/requisites' },
}

const rows: { label: string; value: string }[] = [
  { label: 'Исполнитель', value: 'Евсеев Денис Николаевич' },
  { label: 'Статус', value: 'Самозанятый (плательщик налога на профессиональный доход, НПД)' },
  { label: 'ИНН', value: '200888684367' },
  { label: 'Сайт', value: 'https://suflo.ru' },
  { label: 'E-mail', value: 'contact@suflo.ru' },
]

export default function RequisitesPage() {
  return (
    <div className="bg-app min-h-screen px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-fg">Реквизиты</h1>
        <p className="mb-8 text-muted">
          Реквизиты и контактные данные исполнителя услуг сервиса Suflo.
        </p>

        <div className="glass-strong overflow-hidden rounded-2xl">
          <dl className="divide-y divide-line/10">
            {rows.map((r) => (
              <div key={r.label} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
                <dt className="w-full shrink-0 text-sm text-faint sm:w-56">{r.label}</dt>
                <dd className="break-words font-medium text-fg">
                  {r.label === 'E-mail' ? (
                    <a href="mailto:contact@suflo.ru" className="text-indigo-400 hover:text-indigo-300">
                      {r.value}
                    </a>
                  ) : r.label === 'Сайт' ? (
                    <a href="https://suflo.ru" className="text-indigo-400 hover:text-indigo-300">
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 text-sm text-muted">
          Условия оказания услуг описаны в{' '}
          <a href="/oferta/" className="text-indigo-400 hover:text-indigo-300">
            публичной оферте
          </a>
          .
        </p>

        <div className="mt-10">
          <a href="/" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
            ← На главную
          </a>
        </div>
      </div>
    </div>
  )
}
