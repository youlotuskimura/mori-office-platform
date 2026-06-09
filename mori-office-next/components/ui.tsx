import Link from 'next/link'
import type { ReactNode } from 'react'

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="rule-ink" style={light ? { background: '#fff' } : undefined} />
      <span className={`text-[11px] font-semibold uppercase tracking-brand ${light ? 'text-white/70' : 'text-ink-500'}`}>
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  className = '',
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <div className="mb-5">
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`font-serif text-[28px] font-semibold leading-snug tracking-tight sm:text-[38px] ${
          light ? 'text-white' : 'text-ink-950'
        }`}
      >
        {title}
      </h2>
      {lead && <p className={`mt-5 text-[15px] leading-8 ${light ? 'text-white/70' : 'text-ink-600'}`}>{lead}</p>}
    </div>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline' | 'ghost' | 'solid-light' | 'outline-light'
  className?: string
}

export function ButtonLink({ href, children, variant = 'solid', className = '' }: ButtonProps) {
  const styles: Record<string, string> = {
    solid: 'bg-ink-950 text-white hover:bg-ink-700',
    'solid-light': 'bg-white text-ink-950 hover:bg-white/85',
    outline: 'border border-ink-950/25 text-ink-950 hover:border-ink-950 hover:bg-ink-950/[0.04]',
    'outline-light': 'border border-white/35 text-white hover:border-white hover:bg-white/10',
    ghost: 'text-ink-950 hover:bg-ink-950/[0.05]',
  }
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-paper p-7 transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(10,10,10,0.04),0_24px_50px_-30px_rgba(10,10,10,0.35)] ${className}`}>
      {children}
    </div>
  )
}

export function Tag({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${
        light ? 'border border-white/25 text-white/80' : 'border border-line text-ink-600'
      }`}
    >
      {children}
    </span>
  )
}

export function Visual({ className = '', light = false, label }: { className?: string; light?: boolean; label?: string }) {
  return (
    <div className={`${light ? 'visual-light' : 'visual'} ${className}`}>
      {label && (
        <span
          className={`absolute bottom-4 left-5 text-[11px] font-medium uppercase tracking-[0.2em] ${
            light ? 'text-ink-500' : 'text-white/55'
          }`}
        >
          {label}
        </span>
      )}
    </div>
  )
}
