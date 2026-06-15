'use client'

export default function DownloadPage() {
  const platforms = [
    { os: 'macOS', note: 'Apple Silicon / Intel' },
    { os: 'Windows', note: 'Windows 10 / 11' },
  ]

  return (
    <div className="bg-app flex min-h-screen items-center justify-center px-4 py-12">
      <div className="glass-strong w-full max-w-md rounded-2xl p-8 text-center shadow-2xl">
        <h1 className="mb-2 text-2xl font-bold text-fg">Скачать Suflo</h1>
        <p className="mb-6 text-muted">
          Выберите версию для вашей операционной системы.
        </p>

        <div className="mb-6 space-y-3">
          {platforms.map((p) => (
            <div
              key={p.os}
              className="flex items-center justify-between rounded-xl border border-line/10 bg-fg/5 p-4"
            >
              <div className="text-left">
                <div className="font-semibold text-fg">{p.os}</div>
                <div className="text-xs text-faint">{p.note}</div>
              </div>
              <button
                disabled
                className="cursor-not-allowed rounded-lg border border-line/10 bg-fg/5 px-4 py-2 text-sm font-medium text-faint"
              >
                Скоро
              </button>
            </div>
          ))}
        </div>

        <div className="mb-6 rounded-lg border border-amber-400/30 bg-amber-500/10 p-3 text-sm text-amber-200">
          Сборки приложения готовятся. Скоро здесь появятся ссылки на загрузку.
        </div>

        <div className="flex flex-col gap-2 border-t border-line/10 pt-6">
          <a href="/account/" className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
            Личный кабинет
          </a>
          <a href="/" className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
            На главную
          </a>
        </div>
      </div>
    </div>
  )
}
