'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Bell, Home, Settings, User } from 'lucide-react'

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: 'Home',
    href: '#',
    gradient:
      'radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.08) 45%, rgba(239,68,68,0) 80%)',
    iconColor: 'text-blue-500'
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: 'Notifications',
    href: '#',
    gradient: 'radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.08) 45%, rgba(239,68,68,0) 80%)',
    iconColor: 'text-red-500'
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: 'Settings',
    href: '#',
    gradient: 'radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.08) 45%, rgba(239,68,68,0) 80%)',
    iconColor: 'text-red-500'
  },
  {
    icon: <User className="h-5 w-5" />,
    label: 'Profile',
    href: '#',
    gradient:
      'radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.08) 45%, rgba(239,68,68,0) 80%)',
    iconColor: 'text-red-500'
  }
] as const

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 }
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 }
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2
  }
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1
  }
}

export function HeroMenuBar() {
  return (
    <div className="dark">
      <motion.nav
        className="relative w-[70vw] min-w-[800px] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/60 px-10 py-4 shadow-lg backdrop-blur-xl"
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-radial from-transparent via-red-400/25 via-40% to-transparent"
          variants={navGlowVariants}
        />
        <ul className="relative z-10 flex items-center justify-between gap-8">
          {menuItems.map((item) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="group relative block overflow-visible rounded-xl"
                style={{ perspective: '600px' }}
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 z-0"
                  variants={glowVariants}
                  style={{
                    background: item.gradient,
                    opacity: 0,
                    borderRadius: '16px'
                  }}
                />
                <motion.a
                  href={item.href}
                  className="relative z-10 flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-zinc-200 transition-colors group-hover:text-white group-hover:bg-red-500/10"
                  variants={itemVariants}
                  style={{ transformStyle: 'preserve-3d', transformOrigin: 'center bottom' }}
                >
                  <span className="transition-colors duration-300 text-red-400 group-hover:text-red-300">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>
                <motion.a
                  href={item.href}
                  className="absolute inset-0 z-10 flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-zinc-200 transition-colors group-hover:text-white group-hover:bg-red-500/10"
                  variants={backVariants}
                  style={{ transformStyle: 'preserve-3d', transformOrigin: 'center top', rotateX: 90 }}
                >
                  <span className="transition-colors duration-300 text-red-400 group-hover:text-red-300">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  )
}
