'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'

type CircleVariantKey = keyof typeof COLOR_VARIANTS

const COLOR_VARIANTS = {
  primary: {
    border: ['border-emerald-500/60', 'border-cyan-400/50', 'border-slate-600/30'],
    gradient: 'from-emerald-500/30'
  },
  secondary: {
    border: ['border-violet-500/60', 'border-fuchsia-400/50', 'border-slate-600/30'],
    gradient: 'from-violet-500/30'
  },
  tertiary: {
    border: ['border-orange-500/60', 'border-yellow-400/50', 'border-slate-600/30'],
    gradient: 'from-orange-500/30'
  },
  quaternary: {
    border: ['border-purple-500/60', 'border-pink-400/50', 'border-slate-600/30'],
    gradient: 'from-purple-500/30'
  },
  quinary: {
    border: ['border-[#1f222a]/70', 'border-[#2b2f38]/60', 'border-[#0f1116]/40'],
    gradient: 'from-[#353a44]/35'
  },
  senary: {
    border: ['border-blue-500/60', 'border-sky-400/50', 'border-slate-600/30'],
    gradient: 'from-blue-500/30'
  },
  septenary: {
    border: ['border-gray-500/60', 'border-gray-400/50', 'border-slate-600/30'],
    gradient: 'from-gray-500/30'
  },
  octonary: {
    border: ['border-[#252932]/70', 'border-[#313640]/60', 'border-[#13161d]/40'],
    gradient: 'from-[#3e444e]/35'
  }
} as const

type AnimatedCircleRingsProps = {
  variant?: CircleVariantKey
  className?: string
}

export function AnimatedCircleRings({ variant = 'octonary', className }: AnimatedCircleRingsProps) {
  const variantStyles = COLOR_VARIANTS[variant]

  return (
    <div className={clsx('relative h-[420px] w-[420px] rounded-full bg-[#12151b]/90', className)}>
      <div className="absolute inset-0 rounded-full bg-[#1a1e25]/85" />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={clsx(
            'absolute inset-0 rounded-full',
            'border-2 bg-gradient-to-br to-transparent',
            variantStyles.border[i],
            variantStyles.gradient
          )}
          animate={{
            rotate: 360,
            scale: [1, 1.05 + i * 0.05, 1],
            opacity: [0.95, 1, 0.95]
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut'
          }}
        >
          <div
            className={clsx(
              'absolute inset-0 rounded-full mix-blend-screen',
              `bg-[radial-gradient(ellipse_at_center,${variantStyles.gradient.replace('from-', '')}/20%,transparent_70%)]`
            )}
          />
        </motion.div>
      ))}
    </div>
  )
}
