import type { Metadata } from 'next'
import { url } from '@/lib/seo'
import RedirectToAuth from './redirect-client'

// /login is a friendly alias people type; the real page is /auth. We canonical
// to /auth and noindex this alias so search engines keep just one login URL.
export const metadata: Metadata = {
  title: 'Вход — Suflo',
  description: 'Вход в личный кабинет Suflo.',
  alternates: { canonical: url('/auth') },
  robots: { index: false, follow: true },
}

export default function LoginPage() {
  return (
    <main className="bg-app flex min-h-screen items-center justify-center px-4">
      <RedirectToAuth />
      <p className="text-muted">
        Открываем вход…{' '}
        <a href="/auth/" className="font-medium text-indigo-400 hover:text-indigo-300">
          Перейти ко входу
        </a>
      </p>
    </main>
  )
}
