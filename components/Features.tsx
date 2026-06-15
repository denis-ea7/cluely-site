import type { ReactNode } from 'react'

type Feature = { title: string; description: string; icon: ReactNode }

const I = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    {children}
  </svg>
)

const features: Feature[] = [
  {
    title: 'Подсказки в реальном времени',
    description: 'Распознаёт речь собеседника на лету и стримит готовый ответ прямо на экран — пока вы ещё думаете.',
    icon: <I><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" /></I>,
  },
  {
    title: 'Невидим при демонстрации экрана',
    description: 'Окно не попадает в трансляцию Zoom, Google Meet, Teams и в запись экрана. Собеседник не видит подсказок.',
    icon: <I><path d="m2 2 20 20" /><path d="M6.7 6.7C4.3 8.1 2.7 10.3 2 12c1.5 3.5 5 6 10 6 1.7 0 3.2-.3 4.6-.9" /><path d="M9.9 4.4A10.6 10.6 0 0 1 12 4c5 0 8.5 2.5 10 6-.6 1.4-1.6 2.8-3 3.9" /></I>,
  },
  {
    title: 'Маскируется под «Заметки»',
    description: 'В трее, в Dock и в диспетчере задач выглядит как обычные заметки. Никакого упоминания Suflo на компьютере.',
    icon: <I><path d="M4 4h12l4 4v12H4z" /><path d="M16 4v4h4" /><path d="M8 12h8M8 16h5" /></I>,
  },
  {
    title: 'Горячие клавиши',
    description: 'Вызов подсказки, скриншот-анализ и чат — без переключения окон и движений мышью.',
    icon: <I><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" /></I>,
  },
  {
    title: 'Топовые AI-модели на сервере',
    description: 'Лучшие модели OpenAI и выверенные промпты работают на нашем бэкенде. Ключи и логика не зашиты в приложение.',
    icon: <I><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></I>,
  },
  {
    title: 'Русский и другие языки',
    description: 'Точное распознавание и ответы на русском, без зарубежных аккаунтов и VPN. Подходит для международных встреч.',
    icon: <I><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20Z" /></I>,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Возможности</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Всё для уверенного разговора
          </h2>
          <p className="mt-4 text-lg text-muted">
            Подсказки приходят мгновенно и незаметно — вы остаётесь собой, только подготовленным.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line/20 hover:bg-fg/[0.06]"
            >
              <div className="bg-brand mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg shadow-indigo-500/20">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-fg">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
