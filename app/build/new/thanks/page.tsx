'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ThanksPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="flex w-full max-w-3xl flex-col gap-6 rounded-3xl bg-zinc-900/85 p-10 text-center shadow-2xl ring-1 ring-zinc-800">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/divex-secondary.png"
            alt="Divex logo"
            width={400}
            height={400}
            className="h-[160px] w-auto drop-shadow-[0_0_30px_rgba(94,173,229,0.35)]"
            priority
          />
          <h1 className="text-3xl font-bold tracking-tight">Thanks for building with Divex</h1>
          <p className="text-base text-zinc-300">
            Your brief is on its way. We’ll review your selections and follow up shortly to lock in the build plan.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-[#5eade5] bg-[#5eade5]/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#5eade5]/20"
          >
            Back to home
          </Link>
          <Link
            href="/build"
            className="text-xs text-zinc-400 hover:text-white transition"
          >
            Return to the builder
          </Link>
        </div>
      </div>
    </main>
  )
}
