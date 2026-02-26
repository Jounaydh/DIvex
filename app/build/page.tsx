'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { AnimatedCircleRings } from '@/components/ui/animated-circle-rings'
import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { HeroMenuBar } from '@/components/ui/hero-menu-bar'
import { ProjectShowcase } from '@/components/ui/project-showcase'
import { ShatterButton } from '@/components/ui/shatter-button'

export default function BuildPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleContact = () => {
    const subject = 'Project inquiry'
    const body = encodeURIComponent(`Email: ${email || 'N/A'}\n\n${message || 'Tell us what you need'}`)
    window.location.href = `mailto:support@switchtech.example?subject=${encodeURIComponent(subject)}&body=${body}`
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

      <section className="relative z-10 flex min-h-[80vh] items-center justify-center px-6 pt-20 md:pt-24">
        <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-10 rounded-3xl bg-zinc-900/85 p-10 shadow-2xl backdrop-blur-md md:flex-row md:p-14">
          <div className="relative flex w-full max-w-xl flex-col gap-6 text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-[0_0_24px_rgba(94,173,229,0.45)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Build a website that fits you best
            </motion.h1>
            <p className="text-lg text-zinc-300 leading-relaxed">
              explore every option for your website so it fits to your taste and your budget
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href="#contact"
                className="rounded-full border border-[#5eade5] bg-[#5eade5]/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#5eade5]/20"
              >
                Contact support
              </a>
              <a
                href="#addons"
                className="rounded-full border border-zinc-800 px-5 py-2 text-sm font-semibold text-white transition hover:border-[#5eade5] hover:bg-[#5eade5]/10"
              >
                See add-ons
              </a>
              <a
                href="#showcase"
                className="rounded-full border border-zinc-800 px-5 py-2 text-sm font-semibold text-white transition hover:border-[#5eade5] hover:bg-[#5eade5]/10"
              >
                View work
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => router.push('/build/new')}
            className="group relative flex items-center justify-center"
          >
            <AnimatedCircleRings variant="quinary" className="h-[380px] w-[380px] transition duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <Image
                src="/divex-secondary.png"
                alt="Divex secondary logo"
                width={800}
                height={1082}
                className="h-[210px] w-auto drop-shadow-[0_0_30px_rgba(94,173,229,0.35)] transition duration-300 group-hover:scale-105"
                priority
              />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#5eade5] drop-shadow-[0_0_18px_rgba(94,173,229,0.35)]">
                Start building
              </p>
            </div>
          </button>
        </div>
      </section>

      <section id="showcase" className="relative z-10 pb-10 md:pb-12">
        <ProjectShowcase />
      </section>

      <section id="addons" className="relative z-10 px-6 pb-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#5eade5]">Optional add-ons</p>
              <h3 className="text-2xl font-semibold text-white">Round out your build with managed services</h3>
            </div>
            <a
              href="mailto:support@switchtech.example"
              className="inline-flex items-center justify-center rounded-full border border-[#5eade5] bg-[#5eade5]/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5eade5]/20"
            >
              Ask for a full bundle
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Domain + DNS', desc: 'Acquisition, DNS hardening, and renewals managed.' },
              { title: 'AI assistant', desc: 'Embedded assistant tuned to your brand and content.' },
              { title: 'Hosting & ops', desc: 'Monitored infra, backups, SLAs, and performance tuning.' },
              { title: 'Integrations', desc: 'CRM, analytics, auth, payments, and custom APIs wired in.' }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition hover:border-[#5eade5]/60 hover:bg-zinc-900"
              >
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 pb-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#5eade5]">Contact support</p>
              <h3 className="text-2xl font-semibold text-white">Need help scoping? Send us a note.</h3>
              <p className="text-sm text-zinc-300">
                Drop your email and what you need—<span className="sr-only">we will</span>we&apos;ll reply with a tailored plan.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Optional: timeline or budget"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What do you need? (features, integrations, examples)"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#5eade5] focus:outline-none md:col-span-2"
              rows={4}
            />
            <div className="md:col-span-2">
              <ShatterButton shatterColor="#5eade5" onClick={handleContact}>
                Contact support
              </ShatterButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 w-full bg-black/90 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-zinc-300 md:flex-row md:items-center md:justify-between">
          <span className="text-white font-semibold">Switch Tech</span>
          <div className="flex flex-wrap items-center gap-4 text-zinc-400">
            <a className="hover:text-white transition" href="mailto:support@switchtech.example">
              support@switchtech.example
            </a>
            <span className="text-zinc-600">|</span>
            <span>Custom builds, hosting, integrations</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
