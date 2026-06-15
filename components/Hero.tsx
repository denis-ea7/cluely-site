import Logo from '@/components/Logo'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <a
            href="#features"
            className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-muted"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
            Невидимый AI-суфлёр · работает поверх любого звонка
          </a>

          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Подсказывает нужный ответ
            <br className="hidden sm:block" />{' '}
            <span className="text-gradient">в реальном времени</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted md:text-xl">
            Suflo незаметно слушает разговор и выводит готовый ответ прямо на экран —
            на собеседованиях, звонках и переговорах. Невидим при демонстрации экрана,
            маскируется под «Заметки».
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="btn btn-primary w-full px-6 py-3 text-base sm:w-auto">
              Попробовать Suflo
            </a>
            <a href="#features" className="btn btn-ghost w-full px-6 py-3 text-base sm:w-auto">
              Как это работает
            </a>
          </div>

          <p className="mt-5 text-sm text-faint">
            Для России и СНГ · на русском · без VPN · оплата картой РФ
          </p>
        </div>

        {/* Product mockup: the overlay in action over a video call. */}
        <div className="relative mx-auto mt-16 max-w-4xl fade-up" style={{ animationDelay: '120ms' }}>
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
          <div className="force-dark glass-strong overflow-hidden rounded-2xl text-fg shadow-2xl">
            {/* fake call window chrome */}
            <div className="flex items-center gap-2 border-b border-line/5 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs text-faint">Видеозвонок · демонстрация экрана</span>
            </div>

            <div className="relative grid gap-4 bg-slate-950/40 p-5 sm:grid-cols-[1fr_auto] sm:p-7">
              {/* participant tiles */}
              <div className="grid grid-cols-2 gap-3">
                {['Собеседник', 'Вы'].map((who) => (
                  <div
                    key={who}
                    className="flex aspect-video items-end rounded-xl border border-line/5 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-3"
                  >
                    <span className="rounded-md bg-black/40 px-2 py-0.5 text-[11px] text-muted">
                      {who}
                    </span>
                  </div>
                ))}
              </div>

              {/* floating Suflo overlay */}
              <div className="floaty w-full sm:w-72">
                <div className="ring-brand rounded-xl border border-line/10 bg-slate-900/90 backdrop-blur">
                  <div className="flex items-center gap-2 border-b border-line/5 px-3 py-2">
                    <Logo withText={false} size={18} />
                    <span className="text-xs font-semibold text-fg">Suflo</span>
                    <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> запись
                    </span>
                  </div>
                  <div className="space-y-3 px-3 py-3 text-left">
                    <p className="text-[11px] uppercase tracking-wide text-faint">Собеседник</p>
                    <p className="text-[13px] leading-snug text-muted">
                      Как вы оптимизировали тяжёлые запросы к базе?
                    </p>
                    <div className="h-px bg-fg/5" />
                    <p className="text-[11px] uppercase tracking-wide text-indigo-400">Подсказка</p>
                    <p className="caret text-[13px] leading-snug text-fg">
                      Вынес агрегаты в материализованные представления, добавил
                      покрывающие индексы и кэш на горячие выборки
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
