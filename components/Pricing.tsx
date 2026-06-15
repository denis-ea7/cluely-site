import { PLANS, PLAN_ORDER, formatPrice } from '@/lib/api'

// Everything in every plan — the price only changes how long access lasts.
const included = [
  'Подсказки в реальном времени на встречах и собесах',
  'Невидимость при демонстрации экрана',
  'Маскировка окна под «Заметки»',
  'Распознавание речи и анализ скриншотов',
  'Топовые AI-модели (OpenAI)',
  'Горячие клавиши и кастомный контекст',
  'Контекст вакансии и встречи',
  'Поддержка по email',
]

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400">
    <path d="m5 13 4 4L19 7" />
  </svg>
)

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Тарифы</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">Выберите подписку</h2>
          <p className="mt-4 text-lg text-muted">Оплата картой РФ или через СБП. Доступ открывается сразу после оплаты.</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {PLAN_ORDER.map((id) => {
            const plan = PLANS[id]
            return (
              <div
                key={id}
                className={`relative flex flex-col rounded-2xl p-7 transition-transform duration-300 ${
                  plan.popular
                    ? 'ring-brand border border-indigo-400/40 bg-surface md:-translate-y-2'
                    : 'glass hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-fg">{plan.name}</h3>
                  {plan.popular && (
                    <span className="bg-brand rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                      Популярный
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">{plan.period}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-fg">{formatPrice(plan.price)}</span>
                  <span className="text-2xl font-extrabold tracking-tight text-fg">₽</span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  Полноценный доступ ко всем возможностям сервиса. {plan.tagline}
                </p>

                <a
                  href={`/auth/?plan=${id}`}
                  className={`btn mt-auto flex w-full items-center justify-center gap-2 pt-2.5 ${
                    plan.popular ? 'btn-primary' : 'btn-ghost'
                  } mt-7 py-2.5`}
                >
                  Оформить подписку
                  <Arrow />
                </a>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-fg">
            Возможности, включённые в подписку
          </h3>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {included.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                <Check />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-sm text-faint">
            Подписка разовая на выбранный период — без автопродления. Продлить можно в любой момент.
          </p>
        </div>
      </div>
    </section>
  )
}
