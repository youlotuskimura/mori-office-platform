import React from 'react'

// 小さな共通UI部品。モックアップの一貫した見た目（ヒルズ系の上質なトーン）を担う。

export function Badge({ children, tone = 'gold' }: { children: React.ReactNode; tone?: 'gold' | 'dark' | 'green' | 'red' }) {
  const tones: Record<string, string> = {
    gold: 'bg-gold-500/10 text-gold-600 border border-gold-500/30',
    dark: 'bg-ink-900 text-white',
    green: 'bg-forest-50 text-forest-700 border border-forest-500/30',
    red: 'bg-rose-50 text-rose-700 border border-rose-200',
  }
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  full,
}: {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'gold'
  onClick?: () => void
  full?: boolean
}) {
  const styles: Record<string, string> = {
    primary: 'bg-ink-900 text-white hover:bg-ink-700',
    gold: 'bg-gold-500 text-ink-900 hover:bg-gold-400 font-bold',
    outline: 'border border-ink-900/25 text-ink-900 hover:border-ink-900 hover:bg-ink-900/[0.04]',
    ghost: 'text-ink-700 hover:bg-ink-900/[0.05]',
  }
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 ${styles[variant]} ${full ? 'w-full' : ''}`}
    >
      {children}
    </button>
  )
}

export function Section({
  eyebrow,
  title,
  desc,
  children,
  className = '',
}: {
  eyebrow?: string
  title?: string
  desc?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 sm:py-20 ${className}`}>
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="rule-bronze" />
          <p className="text-[11px] font-semibold uppercase tracking-brand text-gold-600">{eyebrow}</p>
        </div>
      )}
      {title && <h2 className="font-serif text-[26px] font-semibold leading-snug tracking-tight text-ink-900 sm:text-[34px]">{title}</h2>}
      {desc && <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">{desc}</p>}
      <div className={title ? 'mt-10' : ''}>{children}</div>
    </section>
  )
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-stone-200/80 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-[0_2px_4px_rgba(17,33,26,0.05),0_18px_40px_-24px_rgba(17,33,26,0.28)] ${className}`}>
      {children}
    </div>
  )
}

// ワイヤーフレームであることを示す注記ラベル
export function WireNote({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 rounded bg-gold-500/15 px-1.5 py-0.5 text-[10px] font-medium text-gold-600">
      {children}
    </span>
  )
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-stone-200">
      <div className="h-full rounded-full bg-gold-500" style={{ width: `${value}%` }} />
    </div>
  )
}
