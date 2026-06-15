// Client-side helpers for the onboarding flow. The site is a static export
// (output: 'export'), so everything here runs in the browser: the JWT is kept
// in localStorage and all calls go straight to the backend API.

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://suflo.ru/api'
export const DEEPLINK_SCHEME = process.env.NEXT_PUBLIC_DEEPLINK_SCHEME || 'suflo'

const TOKEN_KEY = 'suflo_token'

export function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string) {
  if (typeof window !== 'undefined') window.localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  if (typeof window !== 'undefined') window.localStorage.removeItem(TOKEN_KEY)
}

/** Deep link that hands the JWT to the desktop app. */
export function appDeeplink(token: string): string {
  return `${DEEPLINK_SCHEME}://auth?token=${encodeURIComponent(token)}`
}

export type ApiResult<T = any> = { ok: boolean; status: number; data: T }

async function call<T = any>(path: string, init?: RequestInit): Promise<ApiResult<T>> {
  const r = await fetch(`${API_URL}${path}`, init)
  const data = await r.json().catch(() => ({} as T))
  return { ok: r.ok, status: r.status, data }
}

export function apiRegister(email: string, password: string) {
  return call<{ error?: string; id?: string }>('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
}

export function apiLogin(email: string, password: string) {
  return call<{ token?: string; premium?: boolean; premiumUntil?: string | null; error?: string }>('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
}

export function apiUserInfo(token: string) {
  return call<{ email?: string; premium?: boolean; premiumUntil?: string | null }>('/user/info', {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export type LlmLog = {
  id: string
  email: string | null
  model: string | null
  images_count: number
  system_prompt: string | null
  user_prompt: string | null
  response: string | null
  error: string | null
  created_at: string
}

/** Admin-only: fetch per-request LLM logs (prompt + response). */
export function apiAdminLogs(token: string, email?: string) {
  const q = email ? `?email=${encodeURIComponent(email)}` : ''
  return call<{ logs?: LlmLog[]; error?: string }>(`/admin/logs${q}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export function apiActivate(token: string, plan: string) {
  return call<{ ok?: boolean; plan?: string; premiumUntil?: string; error?: string }>('/billing/activate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ plan }),
  })
}

/** Create a YooKassa payment and get the URL to redirect the user to. */
export function apiCheckout(token: string, plan: string) {
  return call<{ confirmationUrl?: string; paymentId?: string; error?: string }>('/billing/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ plan }),
  })
}

export type Plan = {
  name: string
  price: number
  /** Human-readable period shown on the card, e.g. "30 дней". */
  period: string
  /** Access duration in days — drives premium extension on the backend. */
  days: number
  popular?: boolean
  /** Short pitch shown under the common access line. */
  tagline: string
}

export const PLANS: Record<string, Plan> = {
  starter: {
    name: 'Starter',
    price: 640,
    period: '7 дней',
    days: 7,
    tagline: 'Отлично подходит для первого знакомства и тестирования сервиса.',
  },
  standart: {
    name: 'Standart',
    price: 1620,
    period: '30 дней',
    days: 30,
    popular: true,
    tagline: 'Идеален для регулярных собесов и активного поиска работы.',
  },
  plus: {
    name: 'Plus',
    price: 2980,
    period: '90 дней',
    days: 90,
    tagline: 'Подходит для затяжного поиска работы.',
  },
}

/** Plans in display order. */
export const PLAN_ORDER: string[] = ['starter', 'standart', 'plus']

/** Default plan id used when none is specified in the URL. */
export const DEFAULT_PLAN = 'standart'

/** Format a ruble amount with a thin-space thousands separator: 1620 → "1 620". */
export function formatPrice(n: number): string {
  return n.toLocaleString('ru-RU')
}

/** Map a backend error code to a Russian message. */
export function authErrorMessage(code?: string): string {
  switch (code) {
    case 'email_exists':
      return 'Email уже зарегистрирован — войдите в систему.'
    case 'invalid_credentials':
      return 'Неверный email или пароль.'
    case 'email_password_required':
      return 'Заполните все поля.'
    default:
      return code || 'Ошибка авторизации.'
  }
}
