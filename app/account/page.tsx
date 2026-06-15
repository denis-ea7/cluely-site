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
      <div className="bg-app flex min-h-screen items-center justify-center">
        <div className="text-muted">Загрузка...</div>
      </div>
    )
  }

  if (state === 'error') {
    return (
      <div className="bg-app flex min-h-screen items-center justify-center px-4">
        <div className="glass-strong w-full max-w-md rounded-2xl p-8 text-center shadow-2xl">
          <p className="mb-4 text-red-300">Не удалось загрузить данные аккаунта.</p>
          <button
            onClick={() => location.reload()}
            className="btn btn-primary px-4 py-2 text-sm"
          >
            Повторить
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-app flex min-h-screen items-center justify-center px-4 py-12">
      <div className="glass-strong w-full max-w-md rounded-2xl p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-fg">Личный кабинет</h1>

        <div className="mb-6 space-y-4">
          <div className="rounded-xl border border-line/10 bg-fg/5 p-4">
            <div className="mb-1 text-xs text-faint">Email</div>
            <div className="break-all font-medium text-fg">{email || '—'}</div>
          </div>

          <div className="rounded-xl border border-line/10 bg-fg/5 p-4">
            <div className="mb-1 text-xs text-faint">Статус подписки</div>
            {premium ? (
              <div className="font-medium text-emerald-400">
                Активна <span className="text-faint">· до {formatDate(premiumUntil)}</span>
              </div>
            ) : (
              <div className="font-medium text-muted">Нет активной подписки</div>
            )}
          </div>
        </div>

        {premium ? (
          <button
            onClick={openApp}
            className="btn btn-primary mb-3 w-full py-3"
          >
            Открыть приложение
          </button>
        ) : (
          <a
            href="/#pricing"
            className="btn btn-primary mb-3 w-full py-3"
          >
            Оформить подписку
          </a>
        )}

        <a
          href="/download/"
          className="btn btn-ghost mb-3 w-full py-3"
        >
          Скачать приложение
        </a>

        <button
          onClick={logout}
          className="w-full py-2 text-sm font-medium text-faint transition-colors hover:text-muted"
        >
          Выйти из аккаунта
        </button>
      </div>
    </div>
  )
}
