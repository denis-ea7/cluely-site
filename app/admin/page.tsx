'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { apiAdminLogs, getToken, type LlmLog } from '@/lib/api'

type State = 'loading' | 'forbidden' | 'ready' | 'error'

export default function AdminPage() {
  const router = useRouter()
  const [state, setState] = useState<State>('loading')
  const [logs, setLogs] = useState<LlmLog[]>([])
  const [filter, setFilter] = useState('')
  const [open, setOpen] = useState<string | null>(null)

  const load = useCallback(async (email?: string) => {
    const t = getToken()
    if (!t) {
      router.replace('/auth/')
      return
    }
    setState('loading')
    const res = await apiAdminLogs(t, email)
    if (res.status === 403) {
      setState('forbidden')
      return
    }
    if (!res.ok) {
      setState('error')
      return
    }
    setLogs(res.data.logs || [])
    setState('ready')
  }, [router])

  useEffect(() => {
    load()
  }, [load])

  const fmt = (iso: string) => {
    try {
      return new Date(iso).toLocaleString('ru-RU')
    } catch {
      return iso
    }
  }

  if (state === 'forbidden') {
    return (
      <div className="bg-app flex min-h-screen items-center justify-center px-4">
        <div className="glass-strong w-full max-w-md rounded-2xl p-8 text-center shadow-2xl">
          <h1 className="mb-2 text-xl font-bold text-fg">Доступ запрещён</h1>
          <p className="text-muted">Эта страница доступна только администратору.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-app min-h-screen px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-fg">Лог запросов к ИИ</h1>
          <div className="flex gap-2">
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && load(filter.trim() || undefined)}
              placeholder="Фильтр по email клиента"
              className="rounded-lg border border-line/10 bg-fg/5 px-3 py-2 text-sm text-fg placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button onClick={() => load(filter.trim() || undefined)} className="btn btn-primary px-4 py-2 text-sm">
              Обновить
            </button>
          </div>
        </div>

        {state === 'loading' && <p className="text-muted">Загрузка…</p>}
        {state === 'error' && <p className="text-red-300">Не удалось загрузить лог.</p>}

        {state === 'ready' && logs.length === 0 && (
          <p className="text-muted">Записей пока нет.</p>
        )}

        {state === 'ready' && (
          <div className="space-y-3">
            {logs.map((log) => {
              const isOpen = open === log.id
              return (
                <div key={log.id} className="glass rounded-xl p-4">
                  <button
                    onClick={() => setOpen(isOpen ? null : log.id)}
                    className="flex w-full items-center justify-between gap-3 text-left"
                  >
                    <div className="min-w-0">
                      <div className="truncate font-medium text-fg">{log.email || '—'}</div>
                      <div className="text-xs text-faint">
                        {fmt(log.created_at)} · {log.model || '—'}
                        {log.images_count > 0 ? ` · 🖼 ${log.images_count}` : ''}
                        {log.error ? ' · ⚠ ошибка' : ''}
                      </div>
                    </div>
                    <span className="shrink-0 text-faint">{isOpen ? '▲' : '▼'}</span>
                  </button>

                  {!isOpen && (
                    <p className="mt-2 line-clamp-2 text-sm text-muted">{log.response || log.error || '—'}</p>
                  )}

                  {isOpen && (
                    <div className="mt-4 space-y-4 text-sm">
                      <Section title="Запрос (реплика/вопрос)" body={log.user_prompt} />
                      {log.error && <Section title="Ошибка" body={log.error} tone="error" />}
                      <Section title="Ответ ИИ" body={log.response} />
                      <details className="text-faint">
                        <summary className="cursor-pointer">Системный промпт</summary>
                        <pre className="mt-2 whitespace-pre-wrap break-words rounded-lg border border-line/10 bg-black/30 p-3 text-xs text-muted">
                          {log.system_prompt || '—'}
                        </pre>
                      </details>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

function Section({ title, body, tone }: { title: string; body: string | null; tone?: 'error' }) {
  return (
    <div>
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-faint">{title}</div>
      <pre
        className={`whitespace-pre-wrap break-words rounded-lg border border-line/10 p-3 text-sm ${
          tone === 'error' ? 'bg-red-500/10 text-red-300' : 'bg-fg/5 text-fg'
        }`}
      >
        {body || '—'}
      </pre>
    </div>
  )
}
