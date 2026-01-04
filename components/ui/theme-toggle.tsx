'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggleSwitch() {
  const { theme, systemTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark' || currentTheme === undefined

  if (!mounted) {
    return <div className="h-9 w-16 rounded-full bg-zinc-800/80" />
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative flex h-9 w-16 items-center rounded-full border border-zinc-800 bg-black/50 px-1 text-white transition ${
        isDark ? 'justify-end' : 'justify-start'
      }`}
      aria-label="Toggle theme"
    >
      <span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5eade5]/30 via-transparent to-transparent opacity-60"
        aria-hidden
      />
      <span className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black shadow-lg">
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  )
}
