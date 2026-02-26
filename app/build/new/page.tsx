'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { HeroMenuBar } from '@/components/ui/hero-menu-bar'
import { ShatterButton } from '@/components/ui/shatter-button'

const packages = ['Lean Launch ($1000)', 'Founders Launch ($700)', 'Modernist Studio ($500)', 'Aurora Luxe ($300)']
const integrations = ['Analytics', 'CRM', 'Payments', 'Auth/SSO', 'CMS', 'A/B testing', 'AI assistant']
const packageImages = [
  'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop'
]

const palettes = [
  { name: 'Neon Tide', colors: ['#0b132b', '#1c2541', '#3a506b', '#5bc0be', '#9fffe0'] },
  { name: 'Midnight Luxe', colors: ['#0d1117', '#1b1f2a', '#2f3645', '#6c63ff', '#c8b6ff'] },
  { name: 'Solar Bloom', colors: ['#120f1f', '#351f39', '#6a2c70', '#f08a5d', '#ffdd95'] },
  { name: 'Nord Calm', colors: ['#0f1115', '#1f2933', '#2f3e46', '#86b8b1', '#d9e6eb'] }
]

const uiExamples = [
  {
    name: 'Cinematic Hero',
    desc: 'Full-bleed video hero, layered CTAs, parallax motion.',
    palette: 'Neon Tide',
    costRank: 1
  },
  {
    name: 'Editorial Grid',
    desc: 'Magazine layouts, generous whitespace, typographic focus.',
    palette: 'Midnight Luxe',
    costRank: 2
  },
  {
    name: 'Product Story',
    desc: 'Split-screen storytelling with sticky CTAs.',
    palette: 'Solar Bloom',
    costRank: 3
  },
  {
    name: 'Conversion Sprint',
    desc: 'Tight single-page flow with proof, offer, and FAQs.',
    palette: 'Nord Calm',
    costRank: 4
  }
].sort((a, b) => a.costRank - b.costRank)

export default function BuildNewPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    timeline: '',
    budget: '',
    palette: '',
    adjectives: '',
    package: packages[1],
    notes: '',
    integrations: [] as string[]
  })
  const [selectedPalette, setSelectedPalette] = useState(palettes[1])
  const [selectedExample, setSelectedExample] = useState(uiExamples[1])
  const [customColors, setCustomColors] = useState<string[]>(['#5eade5', '#9fffe0'])
  const [useCustomPalette, setUseCustomPalette] = useState(false)
  const router = useRouter()

  const toggleIntegration = (value: string) => {
    setForm((prev) => {
      const exists = prev.integrations.includes(value)
      return {
        ...prev,
        integrations: exists ? prev.integrations.filter((i) => i !== value) : [...prev.integrations, value]
      }
    })
  }

  const completed = [
    form.name || form.email,
    form.package,
    selectedPalette,
    selectedExample,
    form.integrations.length > 0
  ].filter(Boolean).length
  const progress = Math.min(100, Math.round((completed / 5) * 100))

  const handleSubmit = () => {
    // In this flow, just redirect to thank-you page with temp acknowledgment
    router.push('/build/new/thanks')
  }

  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="h-full w-full">
          <DotScreenShader />
        </div>
      </div>

      <div className="fixed top-6 left-0 right-0 z-20 flex justify-center">
        <HeroMenuBar />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col gap-8 px-6 pt-24 pb-12">
        <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-slate-900/80 p-8 shadow-2xl ring-1 ring-zinc-800/60 backdrop-blur md:p-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <motion.h1
                className="text-4xl font-bold tracking-tight drop-shadow-[0_0_24px_rgba(94,173,229,0.45)] md:text-5xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Build your new website
              </motion.h1>
              <p className="text-lg text-zinc-300">
                Choose a package, pick your vibe, stack integrations, and level up your launch.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right md:text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#5eade5]">Quest meter</span>
              <div className="h-2 w-52 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#5eade5] via-[#7fd2ff] to-[#c0f7ff]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-zinc-400">{progress}% ready</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#5eade5]">Pick your package</p>
              <div className="grid gap-3">
                {packages.map((pkg, idx) => {
                  const active = form.package === pkg
                  return (
                    <motion.button
                      key={pkg}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setForm((f) => ({ ...f, package: pkg }))}
                      className={`rounded-xl border p-4 text-left transition ${
                        active
                          ? 'border-[#5eade5] bg-[#5eade5]/10 shadow-[0_10px_30px_-12px_rgba(94,173,229,0.5)]'
                          : 'border-zinc-800 bg-zinc-900/70 hover:border-[#5eade5]/60'
                      }`}
                    >
                      <div
                        className="relative mb-3 h-40 w-full overflow-hidden rounded-lg border border-black/20 bg-cover bg-center"
                        style={{ backgroundImage: `url(${packageImages[idx]})`, filter: active ? 'saturate(1.15)' : 'saturate(0.9)' }}
                      />
                      <span className="text-base font-semibold text-white">{pkg.split('(')[0]}</span>
                      <p className="text-xs text-zinc-400">{pkg.split('(')[1]?.replace(')', '') || ''}</p>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#5eade5]">Pick your palette</p>
              <div className="grid gap-3 md:grid-cols-2">
                {palettes.map((pal) => {
                  const active = !useCustomPalette && selectedPalette.name === pal.name
                  return (
                    <motion.button
                      key={pal.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setUseCustomPalette(false)
                        setSelectedPalette(pal)
                        setForm((f) => ({ ...f, palette: pal.name }))
                      }}
                      className={`flex h-full flex-col gap-3 rounded-xl border p-4 text-left transition ${
                        active
                          ? 'border-[#5eade5] bg-[#5eade5]/10 shadow-[0_10px_30px_-12px_rgba(94,173,229,0.5)]'
                          : 'border-zinc-800 bg-zinc-900/70 hover:border-[#5eade5]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-white">{pal.name}</span>
                        <span className="text-xs text-zinc-400">{pal.colors[0]}</span>
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                        {pal.colors.map((c) => (
                          <span
                            key={c}
                            className="h-12 w-full rounded-lg border border-black/10 shadow-inner"
                            style={{ background: c }}
                            title={c}
                          />
                        ))}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
              <div
                className={`grid gap-3 rounded-2xl border border-dashed bg-zinc-900/50 p-4 transition ${
                  useCustomPalette ? 'border-[#5eade5] ring-1 ring-[#5eade5]/40' : 'border-zinc-800'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">Custom palette</p>
                  <button
                    type="button"
                    onClick={() => {
                      setUseCustomPalette(true)
                      setSelectedPalette({ name: 'Custom', colors: customColors })
                      setForm((f) => ({ ...f, palette: customColors.join(' ') }))
                    }}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                      useCustomPalette
                        ? 'border-[#5eade5] bg-[#5eade5]/20 text-white'
                        : 'border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-[#5eade5]/60'
                    }`}
                  >
                    {useCustomPalette ? 'Using custom palette' : 'Use this palette'}
                  </button>
                </div>
                <div className="grid gap-3">
                  {customColors.map((color, idx) => (
                    <label
                      key={`color-${idx}`}
                      className="flex flex-wrap items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white"
                    >
                      <span className="w-24 text-xs uppercase tracking-[0.15em] text-zinc-400">Color {idx + 1}</span>
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => {
                          const val = e.target.value
                          setCustomColors((prev) => {
                            const next = prev.map((c, i) => (i === idx ? val : c))
                            if (useCustomPalette) {
                              setSelectedPalette({ name: 'Custom', colors: next })
                              setForm((f) => ({ ...f, palette: next.join(' ') }))
                            }
                            return next
                          })
                        }}
                        className="h-10 w-16 cursor-pointer rounded border border-zinc-700 bg-zinc-800"
                      />
                      <span className="text-xs text-zinc-400">{color}</span>
                      {customColors.length > 2 && (
                        <button
                          type="button"
                          onClick={() =>
                            setCustomColors((prev) => {
                              const next = prev.filter((_, i) => i !== idx)
                              if (useCustomPalette) {
                                setSelectedPalette({ name: 'Custom', colors: next })
                                setForm((f) => ({ ...f, palette: next.join(' ') }))
                              }
                              return next
                            })
                          }
                          className="text-xs text-zinc-400 hover:text-white"
                        >
                          Remove
                        </button>
                      )}
                    </label>
                  ))}
                <button
                  type="button"
                  onClick={() =>
                    setCustomColors((prev) => {
                      const next = [...prev, '#ffffff']
                      if (useCustomPalette) {
                        setSelectedPalette({ name: 'Custom', colors: next })
                        setForm((f) => ({ ...f, palette: next.join(' ') }))
                      }
                      return next
                    })
                  }
                  className="w-full rounded-lg border border-dashed border-zinc-700 bg-zinc-900/80 px-3 py-2 text-sm font-semibold text-white transition hover:border-[#5eade5] hover:text-[#5eade5]"
                  >
                    + Add another color
                  </button>
                </div>
                <p className="text-xs text-zinc-400">Use the pickers to craft a custom set, then click “Use this palette” to apply.</p>
              </div>
              <input
                placeholder="Brand adjectives (e.g., bold, minimal, playful)"
                value={form.adjectives}
                onChange={(e) => setForm((f) => ({ ...f, adjectives: e.target.value }))}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#5eade5]">UI archetypes</p>
              <div className="grid gap-3 md:grid-cols-2">
                {uiExamples.map((ui) => {
                  const active = selectedExample.name === ui.name
                  const pal = palettes.find((p) => p.name === ui.palette) || selectedPalette
                  const bgImage = packageImages[ui.costRank - 1] || packageImages[0]
                  return (
                    <motion.button
                      key={ui.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedExample(ui)}
                      className={`flex h-full flex-col gap-2 rounded-xl border p-4 text-left transition ${
                        active
                          ? 'border-[#5eade5] bg-[#5eade5]/10 shadow-[0_10px_30px_-12px_rgba(94,173,229,0.5)]'
                          : 'border-zinc-800 bg-zinc-900/70 hover:border-[#5eade5]/60'
                      }`}
                    >
                      <div
                        className="h-24 w-full rounded-lg border border-black/20 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${bgImage})`,
                          filter: active ? 'saturate(1.15)' : 'saturate(0.9)',
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)'
                        }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">{ui.name}</p>
                        <p className="text-xs text-zinc-400">{ui.desc}</p>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#5eade5]">Integrations & extras</p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((option) => {
                  const active = form.integrations.includes(option)
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleIntegration(option)}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                        active
                          ? 'border-[#5eade5] bg-[#5eade5]/20 text-white'
                          : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-[#5eade5]/60'
                      }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
              <textarea
                placeholder="Anything else? Site map, inspiration links, required features, content readiness."
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none"
                rows={4}
              />
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4">
            <p className="text-sm uppercase tracking-[0.25em] text-[#5eade5]">Your details</p>
            <div className="grid gap-3 md:grid-cols-2">
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none"
              />
              <input
                placeholder="Timeline (e.g., 6-10 weeks)"
                value={form.timeline}
                onChange={(e) => setForm((f) => ({ ...f, timeline: e.target.value }))}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none"
              />
              <input
                placeholder="Budget (or range)"
                value={form.budget}
                onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShatterButton shatterColor="#5eade5" onClick={handleSubmit}>
              Send brief
            </ShatterButton>
            <p className="text-xs text-zinc-400">Opens your email client with these details prefilled.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
