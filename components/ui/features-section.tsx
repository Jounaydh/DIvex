'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Lock, Smartphone } from 'lucide-react'
import { useEffect, useState } from 'react'

function TypeTester() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.5 : 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-full items-center justify-center">
      <motion.span
        className="font-serif text-6xl font-medium text-[#5eade5] md:text-8xl"
        animate={{ scale }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Aa
      </motion.span>
    </div>
  )
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const layouts = ['grid-cols-2', 'grid-cols-3', 'grid-cols-1']

  return (
    <div className="flex h-full items-center justify-center">
      <motion.div className={`grid ${layouts[layout]} h-full w-full max-w-[140px] gap-1.5`} layout transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="h-5 w-full rounded-md bg-[#5eade5]/30"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function SpeedIndicator() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="relative flex h-10 w-full items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="h-8 w-24 rounded bg-[#5eade5]/20"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              exit={{ opacity: 0, y: -20, position: 'absolute' }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <motion.span
              key="text"
              initial={{ y: 20, opacity: 0, filter: 'blur(5px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              className="font-sans text-3xl font-medium text-[#5eade5] md:text-4xl"
            >
              100ms
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="text-sm text-gray-400">Load Time</span>
      <div className="h-1.5 w-full max-w-[120px] overflow-hidden rounded-full bg-[#5eade5]/10">
        <motion.div
          className="h-full rounded-full bg-[#5eade5]"
          initial={{ width: 0 }}
          animate={{ width: loading ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, mass: 1 }}
        />
      </div>
    </div>
  )
}

function SecurityBadge() {
  const [shields, setShields] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setShields((prev) => {
        const nextIndex = prev.findIndex((s) => !s.active)
        if (nextIndex === -1) {
          return prev.map(() => ({ id: Math.random(), active: false }))
        }
        return prev.map((s, i) => (i === nextIndex ? { ...s, active: true } : s))
      })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-full items-center justify-center gap-2">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          className={`flex h-12 w-12 items-center justify-center rounded-lg ${shield.active ? 'bg-[#5eade5]/20' : 'bg-[#5eade5]/10'}`}
          animate={{ scale: shield.active ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Lock className={`h-5 w-5 ${shield.active ? 'text-[#5eade5]' : 'text-[#5eade5]/50'}`} />
        </motion.div>
      ))}
    </div>
  )
}

function GlobalNetwork() {
  const [pulses] = useState([0, 1, 2, 3, 4])

  return (
    <div className="relative flex h-full items-center justify-center">
      <Globe className="z-10 h-16 w-16 text-[#5eade5]" />
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute h-16 w-16 rounded-full border-2 border-[#5eade5]/30"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: pulse * 0.8,
            ease: 'easeOut'
          }}
        />
      ))}
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-6">
          <motion.div
            className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:cursor-pointer hover:border-zinc-700 md:col-span-2 md:row-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(39, 39, 42, 1)' }}
          >
            <div className="flex-1">
              <TypeTester />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl font-medium text-white">Typography</h3>
              <p className="mt-1 text-sm text-gray-400">Beautiful, responsive type that scales perfectly.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:cursor-pointer hover:border-zinc-700 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <LayoutAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl font-medium text-white">Designs</h3>
              <p className="mt-1 text-sm text-gray-400">Themes unseen before.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:cursor-pointer hover:border-zinc-700 md:col-span-2 md:row-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
          >
            <div className="flex flex-1 items-center justify-center">
              <div className="relative">
                <GlobalNetwork />
              </div>
            </div>
            <div className="relative mt-auto rounded-lg bg-zinc-900/50 p-2 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 font-serif text-xl font-medium text-white">
                <Globe className="h-5 w-5 text-[#5eade5]" />
                Global CDN
              </h3>
              <p className="mt-1 text-sm text-gray-400">Lightning-fast content delivery worldwide with edge locations.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:cursor-pointer hover:border-zinc-700 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <SpeedIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl font-medium text-white">Speed</h3>
              <p className="mt-1 text-sm text-gray-400">Blazing fast performance.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:cursor-pointer hover:border-zinc-700 md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <SecurityBadge />
            </div>
            <div className="mt-4">
              <h3 className="flex items-center gap-2 font-serif text-xl font-medium text-white">
                <Lock className="h-5 w-5 text-[#5eade5]" />
                Security First
              </h3>
              <p className="mt-1 text-sm text-gray-400">Enterprise-grade encryption and data protection built-in.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:cursor-pointer hover:border-zinc-700 md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex flex-1 items-center justify-center">
              <Smartphone className="h-16 w-16 text-[#5eade5]" />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl font-medium text-white">Mobile Ready</h3>
              <p className="mt-1 text-sm text-gray-400">Optimized for all devices and screen sizes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
