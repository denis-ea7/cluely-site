export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="force-dark relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line/10 px-6 py-16 text-center text-fg md:px-16">
          <div className="absolute inset-0 -z-20 bg-slate-950" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgba(99,102,241,0.35),transparent_70%)]" />

          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Превратите следующий разговор в <span className="text-gradient">оффер</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Установите Suflo за пару минут и получайте нужные ответы в реальном времени —
            незаметно для собеседника.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="btn btn-primary w-full px-6 py-3 text-base sm:w-auto">
              Выбрать тариф
            </a>
            <a href="mailto:contact@suflo.ru" className="btn btn-ghost w-full px-6 py-3 text-base sm:w-auto">
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
