'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { apiUserInfo, getToken, clearToken, appDeeplink } from '@/lib/api'

type State = 'loading' | 'ready' | 'error'

export default function AccountPage() {
  const router = useRouter()
  const [state, setState] = useState<State>('loading')
  const [email, setEmail] = useState('')
  const [premium, setPremium] = useState(false)
  const [premiumUntil, setPremiumUntil] = useState<string | null>(null)
  const [token, setTokenState] = useState<string | null>(null)

  useEffect(() => {
    const t = getToken()
    if (!t) {
      router.replace('/auth/')
      return
    }
    setTokenState(t)
    apiUserInfo(t)
      .then((res) => {
        if (!res.ok) {
          // Token invalid/expired — force re-auth.
          clearToken()
          router.replace('/auth/')
          return
        }
        setEmail(res.data?.email || '')
        setPremium(Boolean(res.data?.premium))
        setPremiumUntil(res.data?.premiumUntil ?? null)
        setState('ready')
      })
      .catch(() => setState('error'))
  }, [router])

  const logout = () => {
    clearToken()
    router.push('/auth/')
  }

  const openApp = () => {
    if (token) {
      try {
        window.location.href = appDeeplink(token)
      } catch {
        /* ignore */
      }
    }
  }

  const formatDate = (iso: string | null) => {
    if (!iso) return '—'
    try {
      return new Date(iso).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return iso
    }
  }

  if (state === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50">
        <div className="text-slate-600">Загрузка...</div>
      </div>
    )
  }

  if (state === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50 px-4">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50 text-center">
          <p className="text-red-600 mb-4">Не удалось загрузить данные аккаунта.</p>
          <button
            onClick={() => location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            Повторить
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50">
        <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">Личный кабинет</h1>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="text-xs text-slate-500 mb-1">Email</div>
            <div className="font-medium text-slate-900 break-all">{email || '—'}</div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="text-xs text-slate-500 mb-1">Статус подписки</div>
            {premium ? (
              <div className="font-medium text-green-700">
                Активна <span className="text-slate-500">· до {formatDate(premiumUntil)}</span>
              </div>
            ) : (
              <div className="font-medium text-slate-700">Нет активной подписки</div>
            )}
          </div>
        </div>

        {premium ? (
          <button
            onClick={openApp}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg mb-3"
          >
            🔗 Открыть приложение
          </button>
        ) : (
          <a
            href="/#pricing"
            className="block text-center w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg mb-3"
          >
            Оформить подписку
          </a>
        )}

        <a
          href="/download/"
          className="block text-center w-full py-3 bg-slate-100 text-slate-800 rounded-lg font-semibold hover:bg-slate-200 transition-all mb-3"
        >
          Скачать приложение
        </a>

        <button
          onClick={logout}
          className="w-full py-2 text-slate-500 hover:text-slate-700 text-sm font-medium"
        >
          Выйти из аккаунта
        </button>
      </div>
    </div>
  )
}
