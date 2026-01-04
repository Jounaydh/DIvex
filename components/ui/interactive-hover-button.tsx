'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { forwardRef, ButtonHTMLAttributes } from 'react'

type InteractiveHoverButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  href?: string
}

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(' ')
}

export const InteractiveHoverButton = forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = 'Button', className, href, ...props }, ref) => {
    const content = (
      <>
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight />
        </div>
        <span className="absolute inset-y-0 left-0 w-0 bg-[#5eade5] transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
      </>
    )

    const baseClass = cn(
      'group relative w-32 cursor-pointer overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 p-2 text-center font-semibold text-white transition-colors duration-300 hover:bg-[#5eade5] hover:border-[#5eade5]',
      className
    )

    if (href) {
      return (
        <Link href={href} className={baseClass}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={baseClass} {...props}>
        {content}
      </button>
    )
  }
)

InteractiveHoverButton.displayName = 'InteractiveHoverButton'
