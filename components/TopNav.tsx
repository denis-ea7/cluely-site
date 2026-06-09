'use client'

import { useEffect, useState } from 'react'
import { getToken } from '@/lib/api'

export default function TopNav() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(Boolean(getToken()))
  }, [])

  return (
    <nav className="fixed top-0 right-0 z-50 p-4 flex gap-3 items-center">
      <a
        href="/download/"
        className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white/70 backdrop-blur-md rounded-lg border border-white/60 shadow"
      >
        Скачать
      </a>
      <a
        href={loggedIn ? '/account/' : '/auth/'}
        className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow"
      >
        {loggedIn ? 'Кабинет' : 'Войти'}
      </a>
    </nav>
  )
}
