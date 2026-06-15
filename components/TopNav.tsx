'use client'

import { useEffect, useState } from 'react'
import { getToken } from '@/lib/api'
import Logo from '@/components/Logo'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { href: '#features', label: 'Возможности' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#pricing', label: 'Цены' },
  { href: '/blog', label: 'Блог' },
]

export default function TopNav() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setLoggedIn(Boolean(getToken()))
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-2xl' : 'border border-transparent'
        }`}
      >
        <a href="/" className="text-fg" aria-label="Suflo — на главную">
          <Logo size={30} />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-fg/5 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/download/"
            className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:text-fg sm:inline-block"
          >
            Скачать
          </a>
          <a
            href={loggedIn ? '/account/' : '/auth/'}
            className="btn btn-primary px-4 py-1.5 text-sm"
          >
            {loggedIn ? 'Кабинет' : 'Войти'}
          </a>
        </div>
      </nav>
    </header>
  )
}
