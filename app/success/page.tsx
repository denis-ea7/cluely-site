'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { appDeeplink, getToken, apiUserInfo } from '@/lib/api'

type Status = 'checking' | 'active' | 'pending'

export default function SuccessPage() {
  const router = useRouter()
  const [token, setTokenState] = useState<string | null>(null)
  const [deeplink, setDeeplink] = useState<string>('')
  const [status, setStatus] = useState<Status>('checking')
  const [copied, setCopied] = useState(false)
  const handedOff = useRef(false)

  useEffect(() => {
    const t = getToken()
    if (!t) {
      router.replace('/auth/')
      return
    }
    setTokenState(t)
    setDeeplink(appDeeplink(t))

    // Payment is confirmed asynchronously by the YooKassa webhook, so the
    // subscription may take a few seconds to flip on. Poll until it does.
    let attempts = 0
    let timer: ReturnType<typeof setTimeout>
    let cancelled = false

    const poll = async () => {
      attempts += 1
      try {
        const info = await apiUserInfo(t)
        if (!cancelled && info.data?.premium) {
          setStatus('active')
          if (!handedOff.current) {
            handedOff.current = true
            try {
              window.location.href = appDeeplink(t)
            } catch {
              /* user can click the button below */
            }
          }
          return
        }
      } catch {
        /* ignore and retry */
      }
      if (cancelled) return
      if (attempts >= 15) {
        setStatus('pending')
        return
      }
      timer = setTimeout(poll, 2000)
    }
    poll()

    return () => {
      cancelled = true
      clearTimeout(timer)
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
    <div className="bg-app flex min-h-screen items-center justify-center px-4 py-12">
      <div className="glass-strong w-full max-w-md rounded-2xl p-8 text-center shadow-2xl">
        {status === 'active' ? (
          <>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <path d="m5 13 4 4L19 7" />
              </svg>
            </div>
            <h1 className="mb-2 text-2xl font-bold text-fg">Подписка активирована</h1>
            <p className="mb-6 text-muted">
              Спасибо за покупку! Теперь вы можете открыть приложение Suflo.
            </p>

            <button onClick={openApp} className="btn btn-primary mb-3 w-full py-3">
              Открыть приложение
            </button>

            {deeplink && (
              <div className="mb-6">
                <p className="mb-2 text-xs text-faint">
                  Если приложение не открылось автоматически, скопируйте ссылку:
                </p>
                <div className="flex gap-2">
                  <code className="flex-1 break-all rounded-lg border border-line/10 bg-black/40 p-2 text-left text-xs text-muted">
                    {deeplink}
                  </code>
                  <button
                    onClick={copyLink}
                    className="btn-ghost whitespace-nowrap rounded-lg px-4 py-2 text-sm"
                  >
                    {copied ? 'Скопировано' : 'Копировать'}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : status === 'checking' ? (
          <>
            <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-2 border-indigo-400/30 border-t-indigo-400" />
            <h1 className="mb-2 text-2xl font-bold text-fg">Подтверждаем оплату…</h1>
            <p className="mb-2 text-muted">
              Это занимает несколько секунд. Не закрывайте страницу.
            </p>
          </>
        ) : (
          <>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <path d="M12 8v5M12 16h.01" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <h1 className="mb-2 text-2xl font-bold text-fg">Оплата обрабатывается</h1>
            <p className="mb-6 text-muted">
              Если вы завершили оплату, подписка активируется в течение пары минут.
              Обновите страницу или загляните в личный кабинет чуть позже.
            </p>
            <button onClick={() => location.reload()} className="btn btn-primary mb-3 w-full py-3">
              Обновить
            </button>
          </>
        )}

        <div className="flex flex-col gap-2 border-t border-line/10 pt-6">
          <a href="/download/" className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
            Скачать приложение
          </a>
          <a href="/account/" className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
            Личный кабинет
          </a>
        </div>
      </div>
    </div>
  )
}
