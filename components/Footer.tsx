import Logo from '@/components/Logo'

const cols = [
  {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '#features' },
      { label: 'Как это работает', href: '#benefits' },
      { label: 'Цены', href: '#pricing' },
      { label: 'Скачать', href: '/download/' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'Блог', href: '/blog' },
      { label: 'Кабинет', href: '/account/' },
      { label: 'Контакты', href: 'mailto:contact@suflo.ru' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line/10 py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line/10 pt-6 text-sm text-faint sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Suflo. Все права защищены.</p>
          <p>AI-суфлёр для встреч и интервью · suflo.ru</p>
        </div>
      </div>
    </footer>
  )
}
