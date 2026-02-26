'use client'

import clsx from 'clsx'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggleSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      type='button'
      aria-label='Toggle theme'
      aria-pressed={isDark}
      onClick={handleToggle}
      className='group inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/40 px-3 py-1.5 text-xs font-medium text-white transition hover:border-[#5eade5]/70 hover:bg-[#5eade5]/10'
    >
      <Sun className={clsx('h-4 w-4 transition', isDark ? 'text-zinc-500' : 'text-[#5eade5] drop-shadow-[0_0_8px_rgba(94,173,229,0.45)]')} />
      <div
        className={clsx(
          'relative flex h-6 w-12 items-center rounded-full border border-zinc-700/80 bg-zinc-900/60 transition group-hover:border-[#5eade5]/80 group-hover:bg-zinc-900',
          isDark && 'ring-1 ring-[#5eade5]/50'
        )}
        aria-hidden
      >
        <span
          className={clsx(
            'absolute left-[4px] h-4 w-4 rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.35)] transition-transform duration-200',
            isDark ? 'translate-x-[24px]' : 'translate-x-0'
          )}
        />
      </div>
      <Moon className={clsx('h-4 w-4 transition', isDark ? 'text-[#5eade5] drop-shadow-[0_0_8px_rgba(94,173,229,0.45)]' : 'text-zinc-500')} />
    </button>
  )
}
