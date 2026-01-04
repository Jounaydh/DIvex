'use client'

import { useState, type ReactNode } from 'react'

import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { HeroMenuBar } from '@/components/ui/hero-menu-bar'
import { ThemeToggleSwitch } from '@/components/ui/theme-toggle'

export default function SettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [autoUpdates, setAutoUpdates] = useState(true)
  const [privacyMode, setPrivacyMode] = useState(false)

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

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-24 pb-12">
        <header className="flex flex-col gap-3 rounded-3xl bg-zinc-900/85 p-8 shadow-2xl ring-1 ring-zinc-800 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#5eade5]">Settings</p>
              <h1 className="text-3xl font-semibold tracking-tight text-white">Control your experience</h1>
              <p className="text-sm text-zinc-300">Notifications, appearance, and privacy in one place.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400">Theme</span>
              <ThemeToggleSwitch />
            </div>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <SettingsCard title="Notifications" subtitle="Choose how you want to hear from us.">
            <ToggleRow label="Email alerts" enabled={emailAlerts} onChange={setEmailAlerts} />
            <ToggleRow label="SMS alerts" enabled={smsAlerts} onChange={setSmsAlerts} />
            <ToggleRow label="Product updates" enabled={autoUpdates} onChange={setAutoUpdates} />
          </SettingsCard>

          <SettingsCard title="Privacy" subtitle="Keep your data and visibility in check.">
            <ToggleRow label="Privacy mode" enabled={privacyMode} onChange={setPrivacyMode} />
            <div className="mt-2 rounded-xl border border-zinc-800 bg-black/30 p-4 text-sm text-zinc-300">
              When enabled, your profile is hidden from public showcases and anonymized in analytics.
            </div>
          </SettingsCard>
        </div>

        <SettingsCard title="Account" subtitle="Download or reset your account data.">
          <div className="flex flex-wrap gap-3">
            <ActionButton label="Export data" />
            <ActionButton label="Download invoices" />
            <ActionButton label="Reset preferences" variant="ghost" />
          </div>
        </SettingsCard>
      </section>
    </main>
  )
}

type SettingsCardProps = {
  title: string
  subtitle: string
  children: ReactNode
}

function SettingsCard({ title, subtitle, children }: SettingsCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl backdrop-blur">
      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-zinc-400">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

type ToggleRowProps = {
  label: string
  enabled: boolean
  onChange: (val: boolean) => void
}

function ToggleRow({ label, enabled, onChange }: ToggleRowProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-black/30 px-4 py-3 text-left transition hover:border-[#5eade5]/60 hover:bg-[#5eade5]/5"
      aria-pressed={enabled}
    >
      <span className="text-sm font-medium text-white">{label}</span>
      <span
        className={`inline-flex h-6 w-11 items-center rounded-full px-1 transition ${
          enabled ? 'bg-[#5eade5]/70' : 'bg-zinc-800'
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full bg-white shadow transition ${enabled ? 'translate-x-4' : 'translate-x-0'}`}
        />
      </span>
    </button>
  )
}

type ActionButtonProps = {
  label: string
  variant?: 'solid' | 'ghost'
}

function ActionButton({ label, variant = 'solid' }: ActionButtonProps) {
  if (variant === 'ghost') {
    return (
      <button className="rounded-full border border-zinc-800 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#5eade5] hover:text-[#5eade5]">
        {label}
      </button>
    )
  }

  return (
    <button className="rounded-full border border-[#5eade5] bg-[#5eade5]/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5eade5]/20">
      {label}
    </button>
  )
}
