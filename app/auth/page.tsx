'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  apiLogin,
  apiRegister,
  apiUserInfo,
  setToken as persistToken,
  authErrorMessage,
  PLANS,
} from '@/lib/api'
import Logo from '@/components/Logo'

function AuthForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Optional plan carried over from the pricing page (?plan=basic|pro).
  const plan = searchParams.get('plan') || ''
  const planInfo = plan && PLANS[plan] ? PLANS[plan] : null

  // If the app handed us back a token in the URL, persist it and continue.
  useEffect(() => {
    const urlToken = searchParams.get('token')
    if (urlToken) {
      persistToken(urlToken)
      routeAfterAuth(urlToken)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  /** Decide where to send the user once we have a valid JWT. */
  async function routeAfterAuth(token: string) {
    persistToken(token)
    // Premium users go straight to "open the app"; everyone else pays first.
    let premium = false
    try {
      const info = await apiUserInfo(token)
      premium = Boolean(info.data?.premium)
    } catch {
      premium = false
    }
    if (premium) {
      router.push('/success/')
    } else {
      const q = plan ? `?plan=${encodeURIComponent(plan)}` : ''
      router.push(`/checkout/${q}`)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (mode === 'register') {
        const reg = await apiRegister(email, password)
        if (!reg.ok) {
          setError(authErrorMessage(reg.data?.error))
          setLoading(false)
          return
        }
        // Auto-login right after a successful registration.
      }

      const res = await apiLogin(email, password)
      if (!res.ok) {
        setError(authErrorMessage(res.data?.error))
        setLoading(false)
        return
      }

      const token = res.data?.token
      if (token && typeof token === 'string') {
        await routeAfterAuth(token)
      } else {
        setError('Токен не получен от сервера.')
        setLoading(false)
      }
    } catch (e: any) {
      setError('Ошибка подключения к серверу: ' + (e?.message || 'неизвестная ошибка'))
      setLoading(false)
    }
  }

  return (
    <div className="bg-app flex min-h-screen items-center justify-center px-4 py-12">
      <div className="glass-strong w-full max-w-md rounded-2xl p-8 shadow-2xl">
        <div className="mb-2 flex justify-center">
          <Logo size={34} />
        </div>
        <p className="mb-6 text-center text-muted">
          {mode === 'login' ? 'Войдите в аккаунт' : 'Создайте аккаунт'}
        </p>

        {planInfo && (
          <div className="mb-6 rounded-lg border border-indigo-400/30 bg-indigo-500/10 p-3 text-center">
            <p className="text-sm text-indigo-200">
              Выбран план <span className="font-semibold">{planInfo.name}</span> —{' '}
              {planInfo.price} ₽/{planInfo.period}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-line/10 bg-fg/5 px-4 py-2.5 text-fg placeholder-slate-500 outline-none transition focus:border-transparent focus:ring-2 focus:ring-indigo-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-muted">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full rounded-lg border border-line/10 bg-fg/5 px-4 py-2.5 text-fg placeholder-slate-500 outline-none transition focus:border-transparent focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full py-3 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Загрузка...' : mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setMode(mode === 'login' ? 'register' : 'login')
              setError('')
            }}
            className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            {mode === 'login' ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
          </button>
        </div>

        <div className="mt-8 border-t border-line/10 pt-6">
          <p className="text-center text-xs text-faint">
            После оплаты подписки вы сможете открыть приложение Suflo
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="bg-app flex min-h-screen items-center justify-center">
        <div className="text-muted">Загрузка...</div>
      </div>
    }>
      <AuthForm />
    </Suspense>
  )
}
