import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { pageMetadata, organizationLd, breadcrumbLd, CONTACT_EMAIL } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Контакты Suflo — поддержка и связь',
  description:
    'Связаться с командой Suflo: поддержка по email contact@suflo.ru, помощь с оплатой и подпиской, реквизиты исполнителя. Отвечаем на русском языке.',
  path: '/contact',
  keywords: 'контакты Suflo, поддержка Suflo, связаться с Suflo, email Suflo',
})

const channels = [
  {
    title: 'Поддержка по email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    note: 'Вопросы по работе приложения, оплате и доступу. Отвечаем в течение рабочего дня.',
  },
  {
    title: 'Возврат и оплата',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}?subject=Оплата%20и%20возврат`,
    note: 'Запросы по платежам, чекам и возвратам — с указанием даты и суммы платежа.',
  },
]

export default function ContactPage() {
  return (
    <main className="bg-app bg-grid min-h-screen overflow-hidden">
      <JsonLd
        data={[
          organizationLd(),
          breadcrumbLd([
            { name: 'Главная', path: '/' },
            { name: 'Контакты', path: '/contact' },
          ]),
        ]}
      />

      <div className="container mx-auto max-w-3xl px-4 pt-32 md:pt-40">
        <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
          Контакты
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Мы на связи на русском языке. Самый быстрый способ — написать на email,
          мы отвечаем в течение рабочего дня.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line/20"
            >
              <h2 className="text-lg font-semibold text-fg">{c.title}</h2>
              <p className="mt-1 font-medium text-indigo-400">{c.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.note}</p>
            </a>
          ))}
        </div>

        <div className="glass mt-6 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-fg">Реквизиты</h2>
          <div className="mt-3 space-y-1 text-sm text-muted">
            <p>Самозанятый Евсеев Денис Николаевич</p>
            <p>ИНН: 200888684367</p>
            <p>Налоговый режим: НПД (налог на профессиональный доход)</p>
            <p>Сайт: suflo.ru</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/oferta/" className="text-indigo-400 hover:text-indigo-300">
              Публичная оферта
            </a>
            <a href="/privacy/" className="text-indigo-400 hover:text-indigo-300">
              Конфиденциальность
            </a>
            <a href="/requisites/" className="text-indigo-400 hover:text-indigo-300">
              Полные реквизиты
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  )
}
