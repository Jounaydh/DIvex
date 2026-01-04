'use client'

import Link from 'next/link'

import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { HeroMenuBar } from '@/components/ui/hero-menu-bar'

export default function DatabaseGatePage() {
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

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="w-full max-w-3xl rounded-3xl bg-zinc-900/85 p-10 text-center shadow-2xl ring-1 ring-zinc-800 backdrop-blur">
          <h1 className="text-3xl font-bold tracking-tight">Database access is locked</h1>
          <p className="mt-4 text-base text-zinc-300">
            You need to build a website first before you can view or manage its database. Finish your build flow and
            we&apos;ll unlock the data tools for you.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-[#5eade5] bg-[#5eade5]/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#5eade5]/20"
            >
              Go back to home
            </Link>
            <Link href="/build" className="text-xs text-zinc-400 transition hover:text-white">
              Start building a website
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
