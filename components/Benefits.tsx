const steps = [
  {
    n: '01',
    title: 'Запустите незаметно',
    description: 'Suflo выглядит как «Заметки» и держится поверх любого окна. Включается одной горячей клавишей.',
  },
  {
    n: '02',
    title: 'Suflo слушает разговор',
    description: 'Распознаёт речь собеседника в реальном времени и понимает контекст диалога и того, что на экране.',
  },
  {
    n: '03',
    title: 'Читаете готовый ответ',
    description: 'Подсказка появляется на экране за секунды — отвечаете уверенно и по делу, не выдавая себя.',
  },
]

const useCases = ['Собеседования и лайвкодинг', 'Звонки с клиентами', 'Переговоры', 'Презентации и экзамены']

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Как это работает</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Три шага до уверенного ответа
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-7">
              <div className="text-gradient mb-4 text-5xl font-extrabold tracking-tight">{s.n}</div>
              <h3 className="mb-2 text-xl font-semibold text-fg">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-faint">Подходит для:</span>
          {useCases.map((u) => (
            <span key={u} className="glass rounded-full px-4 py-1.5 text-sm text-muted">
              {u}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
