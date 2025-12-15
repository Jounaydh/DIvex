import { Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'

type DisplayCardProps = {
  className?: string
  icon?: ReactNode
  title?: string
  description?: string
  date?: string
  iconClassName?: string
  titleClassName?: string
}

type DisplayCardsProps = {
  cards?: DisplayCardProps[]
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function DisplayCard({
  className,
  icon = <Sparkles className="h-4 w-4 text-red-300" />,
  title = 'Featured',
  description = 'Discover amazing content',
  date = 'Just now',
  iconClassName = 'text-red-400',
  titleClassName = 'text-red-300'
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-red-500/40 bg-gradient-to-br from-zinc-900/90 via-red-900/20 to-black/60 px-4 py-3 text-white shadow-lg backdrop-blur-sm transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-zinc-900 after:to-transparent after:content-[''] hover:border-red-400/60 hover:shadow-red-500/20 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-red-800 p-1">
          {icon}
        </span>
        <p className={cn('text-lg font-medium', titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-zinc-100">{description}</p>
      <p className="text-sm text-red-200/80">{date}</p>
    </div>
  )
}

export function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10"
    }
  ]

  const displayCards = cards || defaultCards

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  )
}
