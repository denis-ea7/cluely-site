'use client'

export default function DownloadPage() {
  const platforms = [
    { os: 'macOS', icon: '', note: 'Apple Silicon / Intel' },
    { os: 'Windows', icon: '', note: 'Windows 10 / 11' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Скачать Cluely</h1>
        <p className="text-slate-600 mb-6">
          Выберите версию для вашей операционной системы.
        </p>

        <div className="space-y-3 mb-6">
          {platforms.map((p) => (
            <div
              key={p.os}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white"
            >
              <div className="text-left">
                <div className="font-semibold text-slate-900">{p.os}</div>
                <div className="text-xs text-slate-500">{p.note}</div>
              </div>
              <button
                disabled
                className="px-4 py-2 bg-slate-200 text-slate-500 rounded-lg text-sm font-medium cursor-not-allowed"
              >
                Скоро
              </button>
            </div>
          ))}
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm mb-6">
          Сборки приложения готовятся. Скоро здесь появятся ссылки на загрузку.
        </div>

        <div className="flex flex-col gap-2 pt-6 border-t border-slate-200">
          <a href="/account/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Личный кабинет
          </a>
          <a href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            На главную
          </a>
        </div>
      </div>
    </div>
  )
}
