'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { apiActivate, getToken, PLANS } from '@/lib/api'

function Checkout() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [token, setTokenState] = useState<string | null>(null)

  const planId = (searchParams.get('plan') || 'basic').toLowerCase()
  const plan = PLANS[planId] || PLANS.basic

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
      const res = await apiActivate(token, planId)
      if (!res.ok) {
        setError('Не удалось активировать подписку. Попробуйте ещё раз.')
        setLoading(false)
        return
      }
      router.push('/success/')
    } catch (e: any) {
      setError('Ошибка подключения к серверу: ' + (e?.message || 'неизвестная ошибка'))
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50">
        <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center">Оформление подписки</h1>
        <p className="text-slate-600 text-center mb-6">Шаг оплаты (демо-режим)</p>

        <div className="mb-6 p-4 rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between mb-1">
            <span className="text-slate-700 font-medium">Тариф</span>
            <span className="text-slate-900 font-semibold">{plan.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-700 font-medium">Стоимость</span>
            <span className="text-slate-900 font-semibold">
              {plan.price} ₽ / {plan.period}
            </span>
          </div>
        </div>

        <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm text-center">
          Это демонстрационная оплата — реальные деньги не списываются. Нажмите
          «Оплатить», чтобы активировать подписку.
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handlePay}
          disabled={loading || !token}
          className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Активация...' : `Оплатить ${plan.price} ₽`}
        </button>

        <div className="mt-4 text-center">
          <a href="/#pricing" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-yellow-50">
        <div className="text-slate-600">Загрузка...</div>
      </div>
    }>
      <Checkout />
    </Suspense>
  )
}
