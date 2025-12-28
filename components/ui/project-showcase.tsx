'use client'

import type React from 'react'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  description: string
  budget: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Aurora Luxe',
    description: 'Flagship digital experience with couture visuals, motion, and bespoke storytelling.',
    budget: '$150k+',
    link: '#',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720'><defs><linearGradient id='g1' x1='0' y1='0' x2='1' y2='1'><stop stop-color='%23111a2e' offset='0'/><stop stop-color='%232f4d8c' offset='0.45'/><stop stop-color='%236ad7f0' offset='1'/></linearGradient></defs><rect width='1200' height='720' fill='url(%23g1)'/><rect x='90' y='80' width='1020' height='560' rx='30' fill='rgba(255,255,255,0.06)' stroke='rgba(255,255,255,0.25)' stroke-width='2'/><rect x='130' y='120' width='940' height='80' rx='20' fill='rgba(255,255,255,0.12)'/><circle cx='180' cy='160' r='10' fill='%23ff6b6b'/><circle cx='210' cy='160' r='10' fill='%23ffd166'/><circle cx='240' cy='160' r='10' fill='%236ad7f0'/><rect x='320' y='140' width='260' height='40' rx='14' fill='rgba(255,255,255,0.2)'/><rect x='620' y='140' width='140' height='40' rx='14' fill='rgba(255,255,255,0.2)'/><rect x='780' y='140' width='140' height='40' rx='14' fill='rgba(255,255,255,0.2)'/><rect x='130' y='230' width='420' height='260' rx='26' fill='rgba(255,255,255,0.2)'/><rect x='170' y='270' width='340' height='120' rx='20' fill='rgba(255,255,255,0.18)'/><rect x='170' y='410' width='180' height='50' rx='14' fill='%236ad7f0'/><rect x='370' y='410' width='140' height='50' rx='14' fill='rgba(255,255,255,0.16)'/><rect x='590' y='230' width='420' height='120' rx='22' fill='rgba(255,255,255,0.14)'/><rect x='590' y='370' width='420' height='90' rx='18' fill='rgba(255,255,255,0.1)'/><rect x='590' y='480' width='420' height='60' rx='18' fill='%236ad7f0'/><rect x='130' y='520' width='880' height='60' rx='16' fill='rgba(255,255,255,0.08)'/><text x='180' y='255' fill='white' font-family='Arial' font-size='46' font-weight='700'>Luxury hero headline</text><text x='180' y='305' fill='%23dce7ff' font-family='Arial' font-size='22'>Layered motion, cinematic imagery, concierge CTA</text></svg>"
  },
  {
    title: 'Modernist Studio',
    description: 'High-end minimalist site with interactive case studies and rich art direction.',
    budget: '$90k',
    link: '#',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720'><rect width='1200' height='720' fill='%230b0f16'/><rect x='80' y='90' width='1040' height='520' rx='22' fill='%23141c2b'/><rect x='130' y='140' width='920' height='70' rx='14' fill='%231e293b'/><rect x='160' y='160' width='220' height='30' rx='10' fill='%232c3a52'/><rect x='420' y='160' width='140' height='30' rx='10' fill='%232c3a52'/><rect x='590' y='160' width='140' height='30' rx='10' fill='%232c3a52'/><rect x='760' y='160' width='220' height='30' rx='10' fill='%233f78ff'/><rect x='130' y='240' width='420' height='300' rx='18' fill='%23212c3a'/><rect x='160' y='270' width='360' height='160' rx='16' fill='%232c3a52'/><rect x='160' y='450' width='180' height='40' rx='12' fill='%233f78ff'/><rect x='360' y='450' width='160' height='40' rx='12' fill='%232c3a52'/><rect x='580' y='240' width='470' height='70' rx='14' fill='%23212c3a'/><rect x='580' y='330' width='470' height='70' rx='14' fill='%23212c3a'/><rect x='580' y='420' width='470' height='110' rx='18' fill='%231e293b'/><rect x='580' y='550' width='470' height='30' rx='10' fill='%23212c3a'/><text x='620' y='285' fill='white' font-family='Arial' font-size='28'>Editorial masthead</text><text x='620' y='370' fill='%23cbd5e1' font-family='Arial' font-size='18'>Case study carousel, hover reveals</text></svg>"
  },
  {
    title: 'Founders Launch',
    description: 'Conversion-focused story with bold hero, social proof, and tailored CTAs.',
    budget: '$45k',
    link: '#',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720'><rect width='1200' height='720' fill='%23151a2b'/><rect x='90' y='120' width='1020' height='440' rx='20' fill='%231e2a44'/><rect x='130' y='160' width='460' height='220' rx='16' fill='%23325078'/><rect x='150' y='190' width='420' height='90' rx='14' fill='%233b598d'/><rect x='150' y='300' width='220' height='50' rx='12' fill='%2349a6ff'/><rect x='390' y='300' width='180' height='50' rx='12' fill='%232d3f60'/><rect x='620' y='180' width='460' height='70' rx='14' fill='%232a4267'/><rect x='620' y='270' width='460' height='70' rx='14' fill='%232a4267'/><rect x='620' y='360' width='200' height='42' rx='11' fill='%2349a6ff'/><rect x='840' y='360' width='240' height='42' rx='11' fill='%2330475f'/><rect x='130' y='400' width='950' height='30' rx='10' fill='%23263b5a'/><rect x='130' y='450' width='300' height='70' rx='16' fill='%232a3e5e'/><rect x='460' y='450' width='620' height='70' rx='16' fill='%231e2f4a'/><text x='640' y='230' fill='white' font-family='Arial' font-size='26'>Proof-first hero</text><text x='640' y='320' fill='%23cbd5e5' font-family='Arial' font-size='18'>Badges, testimonials, direct CTA</text></svg>"
  },
  {
    title: 'Lean Launch',
    description: 'Clean single-page site with modular sections and rapid setup.',
    budget: '$15k',
    link: '#',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720'><rect width='1200' height='720' fill='%23f5f5f5'/><rect x='110' y='130' width='980' height='440' rx='14' fill='white' stroke='%23d4d4d8' stroke-width='2'/><rect x='150' y='170' width='400' height='60' rx='10' fill='%23e5e7eb'/><rect x='150' y='250' width='900' height='40' rx='10' fill='%23ededed'/><rect x='150' y='310' width='900' height='40' rx='10' fill='%23ededed'/><rect x='150' y='370' width='240' height='50' rx='10' fill='%23d4d4d8'/><rect x='410' y='370' width='640' height='50' rx='10' fill='%23ededed'/><rect x='150' y='440' width='300' height='80' rx='12' fill='%23e5e7eb'/><rect x='470' y='440' width='580' height='80' rx='12' fill='%23ededed'/><text x='170' y='208' fill='%236b7280' font-family='Arial' font-size='22'>Basic template header</text><text x='170' y='340' fill='%239ca3af' font-family='Arial' font-size='18'>Straightforward sections, no frills</text></svg>"
  }
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15)
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-5xl mx-auto px-6 py-16 md:py-20"
    >
      <h2 className="text-sm font-semibold tracking-[0.3em] text-[#5eade5] uppercase mb-8 text-center md:text-left">
        Selected Work
      </h2>

      <div
        className="pointer-events-none absolute left-0 top-0 z-30 hidden md:block"
        style={{
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 120}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="relative w-[320px] h-[200px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-2xl backdrop-blur">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transform: hoveredIndex === index ? 'scale(1)' : 'scale(1.1)',
                filter: hoveredIndex === index ? 'none' : 'blur(12px)'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      </div>

      <div className="space-y-0 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-2 shadow-xl backdrop-blur">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block rounded-xl px-4"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-5">
              <div
                className={`absolute inset-0 -mx-4 rounded-xl bg-[#5eade5]/10 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`absolute left-0 -bottom-0.5 h-px bg-[#5eade5] transition-all duration-300 ${
                            hoveredIndex === index ? 'w-full' : 'w-0'
                          }`}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      className={`h-4 w-4 text-zinc-400 transition-all duration-300 ${
                        hoveredIndex === index ? 'opacity-100 translate-x-0 translate-y-0 text-[#5eade5]' : 'opacity-0 -translate-x-2 translate-y-2'
                      }`}
                    />
                  </div>

                  <p
                    className={`mt-1 text-sm leading-relaxed transition-all duration-300 ${
                      hoveredIndex === index ? 'text-zinc-200' : 'text-zinc-400'
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <span
                  className={`text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                    hoveredIndex === index ? 'text-[#5eade5]' : 'text-zinc-400'
                  }`}
                >
                  {project.budget}
                </span>
              </div>
            </div>
          </a>
        ))}

        <div className="border-t border-zinc-800" />
      </div>
    </section>
  )
}
