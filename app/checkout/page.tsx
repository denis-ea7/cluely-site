'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { apiCheckout, getToken, PLANS, DEFAULT_PLAN, formatPrice } from '@/lib/api'

function Checkout() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [token, setTokenState] = useState<string | null>(null)

  const planId = (searchParams.get('plan') || DEFAULT_PLAN).toLowerCase()
  const plan = PLANS[planId] || PLANS[DEFAULT_PLAN]

  // Must be logged in to pay. If not, bounce back to auth (keeping the plan).
  useEffect(() => {
    const t = getToken()
    if (!t) {
      router.replace(`/auth/?plan=${encodeURIComponent(planId)}`)
      return
    }
    setTokenState(t)
  }, [planId, router])

  const handlePay = async () => {
    if (!token) return
    setError('')
    setLoading(true)
    try {
      const res = await apiCheckout(token, planId)
      if (res.ok && res.data?.confirmationUrl) {
        // Hand the user over to YooKassa's hosted payment form.
        window.location.href = res.data.confirmationUrl
        return
      }
      if (res.data?.error === 'billing_not_configured') {
        setError('Оплата временно недоступна — приём платежей ещё настраивается. Попробуйте позже.')
      } else {
        setError('Не удалось создать платёж. Попробуйте ещё раз.')
      }
      setLoading(false)
    } catch (e: any) {
      setError('Ошибка подключения к серверу: ' + (e?.message || 'неизвестная ошибка'))
      setLoading(false)
    }
  }

  return (
    <div className="bg-app flex min-h-screen items-center justify-center px-4 py-12">
      <div className="glass-strong w-full max-w-md rounded-2xl p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-2xl font-bold text-fg">Оформление подписки</h1>
        <p className="mb-6 text-center text-muted">Безопасная оплата через ЮKassa</p>

        <div className="mb-6 rounded-xl border border-line/10 bg-fg/5 p-4">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-medium text-muted">Тариф</span>
            <span className="font-semibold text-fg">{plan.name}</span>
          </div>
          <div className="mb-1 flex items-center justify-between">
            <span className="font-medium text-muted">Период</span>
            <span className="font-semibold text-fg">{plan.period}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-muted">Стоимость</span>
            <span className="font-semibold text-fg">{formatPrice(plan.price)} ₽</span>
          </div>
        </div>

        <div className="mb-6 rounded-lg border border-indigo-400/20 bg-indigo-500/10 p-3 text-center text-sm text-muted">
          Вы перейдёте на защищённую страницу оплаты ЮKassa. Картой РФ или через СБП.
          Доступ откроется автоматически после оплаты.
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <button
          onClick={handlePay}
          disabled={loading || !token}
          className="btn btn-primary w-full py-3 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Переходим к оплате…' : `Оплатить ${formatPrice(plan.price)} ₽`}
        </button>

        <div className="mt-4 text-center">
          <a href="/#pricing" className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
            ← Выбрать другой тариф
          </a>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="bg-app flex min-h-screen items-center justify-center">
        <div className="text-muted">Загрузка...</div>
      </div>
    }>
      <Checkout />
    </Suspense>
  )
}
