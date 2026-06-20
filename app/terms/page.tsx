import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { pageMetadata, breadcrumbLd, CONTACT_EMAIL } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Условия использования — Suflo',
  description:
    'Условия использования сервиса Suflo: правила доступа к приложению, тарифы и оплата, ответственность сторон и порядок возврата. Юридически обязывающий документ — публичная оферта.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <main className="bg-app min-h-screen">
      <JsonLd
        data={breadcrumbLd([
          { name: 'Главная', path: '/' },
          { name: 'Условия использования', path: '/terms' },
        ])}
      />

      <article className="container mx-auto max-w-3xl px-4 pt-32 pb-16 md:pt-40">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-fg md:text-4xl">
          Условия использования
        </h1>
        <p className="mb-10 text-sm text-muted">Редакция от 16 июня 2026 г. · suflo.ru</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">1. Принятие условий</h2>
            <p>
              Используя сервис Suflo, вы соглашаетесь с настоящими условиями и с{' '}
              <a href="/oferta/" className="text-indigo-400 hover:text-indigo-300">
                публичной офертой
              </a>
              , которая является основным юридически обязывающим документом. Оплата любого тарифа
              означает полное и безоговорочное принятие условий оферты.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">2. Что такое Suflo</h2>
            <p>
              Suflo — приложение, которое распознаёт речь собеседника и в реальном времени подсказывает
              пользователю ответы на экране. Доступ предоставляется по подписке на выбранный срок и в
              объёме функций тарифа.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">3. Доступ и учётная запись</h2>
            <ul className="mt-2 space-y-1.5">
              <li>— для доступа нужна учётная запись, созданная на suflo.ru;</li>
              <li>— вы отвечаете за сохранность пароля и не передаёте доступ третьим лицам;</li>
              <li>— один доступ предназначен для использования одним человеком.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">4. Тарифы, оплата и возврат</h2>
            <p>
              Стоимость и срок доступа определяются выбранным тарифом и указаны на странице{' '}
              <a href="/pricing/" className="text-indigo-400 hover:text-indigo-300">
                «Цены»
              </a>
              . Оплата — картой РФ или через СБП. Условия возврата описаны в разделе 5 оферты.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">5. Допустимое использование</h2>
            <p>
              Вы обязуетесь использовать Сервис в соответствии с законодательством РФ и самостоятельно
              несёте ответственность за правомерность применения подсказок в конкретных ситуациях с
              учётом правил третьих лиц и необходимых согласий.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">6. Ответственность</h2>
            <p>
              Сервис предоставляется «как есть». Мы не гарантируем достижение конкретных результатов и
              не отвечаем за временную недоступность по причинам, не зависящим от нас.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">7. Контакты</h2>
            <p>
              Вопросы по условиям использования — на{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-400 hover:text-indigo-300">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium">
          <a href="/oferta/" className="text-indigo-400 hover:text-indigo-300">
            Публичная оферта
          </a>
          <a href="/privacy/" className="text-indigo-400 hover:text-indigo-300">
            Конфиденциальность
          </a>
          <a href="/" className="text-indigo-400 hover:text-indigo-300">
            На главную
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}
