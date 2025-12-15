'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'

type TextScrambleProps = {
  text: string
  className?: string
}

export function TextScramble({ text, className = '' }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrambling, setIsScrambling] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const frameRef = useRef(0)

  const scramble = useCallback(() => {
    setIsScrambling(true)
    frameRef.current = 0
    const duration = text.length * 3

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      frameRef.current++

      const progress = frameRef.current / duration
      const revealedLength = Math.floor(progress * text.length)

      const newText = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < revealedLength) return text[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setDisplayText(newText)

      if (frameRef.current >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, 30)
  }, [text])

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    },
    []
  )

  return (
    <div
      className={`group relative inline-flex flex-col cursor-pointer select-none ${className}`}
      onMouseEnter={() => {
        setIsHovering(true)
        scramble()
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="relative font-mono text-lg tracking-widest uppercase">
        {displayText.split('').map((char, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-150 ${
              isScrambling && char !== text[i] ? 'text-primary scale-110' : 'text-foreground'
            }`}
            style={{ transitionDelay: `${i * 10}ms` }}
          >
            {char}
          </span>
        ))}
      </span>

      <span className="relative mt-2 h-px w-full overflow-hidden">
        <span
          className={`absolute inset-0 origin-left bg-foreground transition-transform duration-500 ease-out ${
            isHovering ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
        <span className="absolute inset-0 bg-border" />
      </span>

      <span
        className={`absolute -inset-4 -z-10 rounded-lg bg-primary/5 transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
