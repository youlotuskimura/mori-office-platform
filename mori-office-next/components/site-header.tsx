'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { href: '/leasing', label: '入居をご検討の方' },
  { href: '/tenants', label: 'ご入居中の方' },
  { href: '/insights', label: 'ワークスタイル知見' },
  { href: '/contact', label: 'お問い合わせ' },
]

function Wordmark() {
  return (
    <Link href="/" className="flex items-baseline gap-2.5">
      <span className="font-serif text-xl font-semibold tracking-wide text-ink-950">HILLS</span>
      <span className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">Office</span>
    </Link>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="container-x flex h-16 items-center justify-between sm:h-[72px]">
        <Wordmark />

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => {
            const active = pathname === n.href
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active ? 'text-ink-950' : 'text-ink-600 hover:text-ink-950'
                }`}
              >
                {n.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-700"
          >
            内覧を予約
          </Link>
        </nav>

        {/* モバイル：ハンバーガー */}
        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 block h-px w-6 bg-ink-950 transition-all duration-300 ${open ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 block h-px w-6 bg-ink-950 transition-all duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 block h-px w-6 bg-ink-950 transition-all duration-300 ${open ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div className="animate-rise-fast border-t border-line bg-paper lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-[15px] font-medium text-ink-800 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-ink-950 py-3 text-center text-sm font-semibold text-white"
            >
              内覧を予約
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
