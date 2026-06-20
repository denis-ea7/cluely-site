'use client'

import { useEffect } from 'react'

/** /login is an alias for the real auth page — send the user there on load. */
export default function RedirectToAuth() {
  useEffect(() => {
    window.location.replace('/auth/')
  }, [])
  return null
}
