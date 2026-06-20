import Logo from '@/components/Logo'

const cols = [
  {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '/#features' },
      { label: 'Цены', href: '/pricing/' },
      { label: 'Скачать', href: '/download/' },
      { label: 'Блог', href: '/blog' },
    ],
  },
  {
    title: 'Сценарии',
    links: [
      { label: 'Собеседования', href: '/use-cases/ai-interview-assistant/' },
      { label: 'Live coding', href: '/use-cases/live-coding-assistant/' },
      { label: 'Встречи и созвоны', href: '/use-cases/meeting-assistant/' },
      { label: 'Звонки с клиентами', href: '/use-cases/sales-call-assistant/' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'Контакты', href: '/contact/' },
      { label: 'Кабинет', href: '/account/' },
    ],
  },
  {
    title: 'Документы',
    links: [
      { label: 'Публичная оферта', href: '/oferta/' },
      { label: 'Конфиденциальность', href: '/privacy/' },
      { label: 'Условия использования', href: '/terms/' },
      { label: 'Реквизиты', href: '/requisites/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line/10 py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Logo size={30} className="text-fg text-lg" />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Невидимый AI-суфлёр: подсказывает нужные ответы во время встреч и интервью.
              Для России и СНГ.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-fg">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line/10 pt-6 text-sm text-faint">
          <p className="mb-2">
            Самозанятый Евсеев Денис Николаевич · ИНН 200888684367 · НПД (налог на профессиональный доход)
          </p>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>&copy; {new Date().getFullYear()} Suflo. Все права защищены.</p>
            <p>AI-суфлёр для встреч и интервью · suflo.ru</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
