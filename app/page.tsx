'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { AnimatedCircleRings } from '@/components/ui/animated-circle-rings'
import { HeroMenuBar } from '@/components/ui/hero-menu-bar'
import { FeaturesSection } from '@/components/ui/features-section'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { DisplayCards } from '@/components/ui/display-cards'
import { TextScramble } from '@/components/ui/text-scramble'

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="h-full w-full">
          <DotScreenShader />
        </div>
      </div>
      <div className="fixed top-6 left-0 right-0 z-20 flex justify-center">
        <HeroMenuBar />
      </div>
      <HeroIntro />
      <section className="relative z-10 mt-[-26vh]">
        <FeaturesSection />
      </section>
      <section className="relative z-10 mt-[-14vh] flex min-h-[55vh] items-center justify-center px-6 pt-10 md:px-16">
        <div className="flex w-full max-w-[90rem] flex-col gap-10 rounded-2xl bg-zinc-900/85 p-12 shadow-2xl backdrop-blur-md md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl text-left text-white drop-shadow-[0_0_18px_rgba(94,173,229,0.35)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              Design, build, and evolve your digital experience with bespoke craftsmanship, performance-first engineering, and a partner who keeps quality and timelines non-negotiable—so you can launch with confidence, scale without friction, and maintain a brand presence that consistently outperforms expectations.
            </h2>
          </div>
          <div className="flex w-full justify-center md:w-1/2 md:justify-start md:pl-12 md:-mt-24">
            <DisplayCards />
          </div>
        </div>
      </section>
      <section className="relative z-10 mt-10 w-full px-0">
        <div className="w-full bg-gradient-to-b from-transparent via-black/60 to-black py-10">
          <div className="flex w-full flex-col items-center px-6 md:px-16">
            <TextScramble text="Contact Support" className="text-center" />
          </div>
        </div>
      </section>
      <footer className="relative z-10 w-full bg-black/90 py-12 mt-0">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-base text-white/85 md:px-12">
          <Image src="/2221.png" alt="Switch Tech logo" width={2000} height={260} className="h-6 w-auto" />
          <span>support@switchtech.example</span>
        </div>
      </footer>
    </main>
  )
}

function HeroIntro() {
  const router = useRouter()
  const [hovering, setHovering] = useState(false)
  const options = [
    { label: 'Build a website', href: '/build' },
    { label: 'Build an app', href: '/build' },
    { label: 'Update your front end', href: '/build' }
  ]
  const MotionInteractiveHoverButton = motion(InteractiveHoverButton)

  return (
    <motion.div className="sticky top-0 z-10 flex h-svh items-center justify-center" initial={false}>
      <div
        className="relative flex h-[500px] w-full max-w-4xl items-center justify-center"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{ x: hovering ? -200 : 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <AnimatedCircleRings variant="quinary" className="h-[460px] w-[460px]" />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="drop-shadow-[0_0_28px_rgba(94,173,229,0.5)] flex items-center justify-center relative h-[260px] w-full max-w-[750px]">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: hovering ? 0 : 1 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src="/2221.png"
                  alt="Switch Tech logo"
                  width={2000}
                  height={260}
                  priority
                  className="h-auto w-[750px] max-w-full"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovering ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src="/11123.png"
                  alt="Switch Tech secondary logo"
                  width={2000}
                  height={260}
                  priority
                  className="h-[240px] w-auto max-w-[560px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute hidden md:flex"
          style={{ left: 'calc(50% + 60px)', top: '35%' }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: hovering ? 1 : 0, x: hovering ? 0 : 30 }}
          transition={{ type: 'spring', stiffness: 140, damping: 20 }}
        >
          <div className="flex flex-col items-start gap-4 pl-4">
            {options.map((item, idx) => (
              <MotionInteractiveHoverButton
                key={item.label}
                text={item.label}
                href={item.href}
                className="w-56 border-[#5eade5]/80 bg-[#5eade5] text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hovering ? 1 : 0,
                  y: hovering ? 0 : 10
                }}
                transition={{ delay: hovering ? idx * 0.08 : 0, type: 'spring', stiffness: 160, damping: 18 }}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.99 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
