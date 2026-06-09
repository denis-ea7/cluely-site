// Client-side helpers for the onboarding flow. The site is a static export
// (output: 'export'), so everything here runs in the browser: the JWT is kept
// in localStorage and all calls go straight to the backend API.

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://121.127.37.208:4000'
export const DEEPLINK_SCHEME = process.env.NEXT_PUBLIC_DEEPLINK_SCHEME || 'cluely'

const TOKEN_KEY = 'cluely_token'

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

export function apiActivate(token: string, plan: string) {
  return call<{ ok?: boolean; plan?: string; premiumUntil?: string; error?: string }>('/billing/activate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ plan }),
  })
}

export const PLANS: Record<string, { name: string; price: number; period: string }> = {
  basic: { name: 'Базовый', price: 990, period: 'месяц' },
  pro: { name: 'Профессиональный', price: 1990, period: 'месяц' },
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
