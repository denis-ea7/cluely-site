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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">
          Cluely Россия
        </h1>
        <p className="text-slate-600 text-center mb-6">
          {mode === 'login' ? 'Войдите в систему' : 'Создайте аккаунт'}
        </p>

        {planInfo && (
          <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-sm text-blue-800">
              Выбран план <span className="font-semibold">{planInfo.name}</span> —{' '}
              {planInfo.price} ₽/{planInfo.period}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {mode === 'login' ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center">
            После оплаты подписки вы сможете открыть приложение Cluely
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50">
        <div className="text-slate-600">Загрузка...</div>
      </div>
    }>
      <AuthForm />
    </Suspense>
  )
}
