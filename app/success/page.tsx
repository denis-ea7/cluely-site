'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { appDeeplink, getToken } from '@/lib/api'

export default function SuccessPage() {
  const router = useRouter()
  const [token, setTokenState] = useState<string | null>(null)
  const [deeplink, setDeeplink] = useState<string>('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const t = getToken()
    if (!t) {
      router.replace('/auth/')
      return
    }
    setTokenState(t)
    const dl = appDeeplink(t)
    setDeeplink(dl)
    // Try to hand the token to the desktop app automatically.
    try {
      window.location.href = dl
    } catch {
      /* user can click the button below */
    }
  }, [router])

  const openApp = () => {
    if (deeplink) {
      try {
        window.location.href = deeplink
      } catch {
        /* ignore */
      }
    }
  }

  const copyLink = async () => {
    if (!deeplink) return
    try {
      await navigator.clipboard.writeText(deeplink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Спасибо за покупку!</h1>
        <p className="text-slate-600 mb-6">
          Подписка активирована. Теперь вы можете открыть приложение Cluely.
        </p>

        <button
          onClick={openApp}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg mb-3"
        >
          🔗 Открыть приложение
        </button>

        {deeplink && (
          <div className="mb-6">
            <p className="text-xs text-slate-500 mb-2">
              Если приложение не открылось автоматически, скопируйте ссылку:
            </p>
            <div className="flex gap-2">
              <code className="flex-1 p-2 bg-slate-100 rounded text-xs break-all border border-slate-300 text-left">
                {deeplink}
              </code>
              <button
                onClick={copyLink}
                className="px-4 py-2 bg-slate-700 text-white rounded text-sm hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                {copied ? 'Скопировано' : 'Копировать'}
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 pt-6 border-t border-slate-200">
          <a href="/download/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Скачать приложение
          </a>
          <a href="/account/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Личный кабинет
          </a>
        </div>
      </div>
    </div>
  )
}
