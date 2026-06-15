import Link from 'next/link'

const COLS = [
  {
    head: '入居をご検討の方',
    items: [
      { label: '物件ポートフォリオ', href: '/leasing' },
      { label: 'ワークプレイスコンサル', href: '/leasing' },
      { label: '内覧予約', href: '/contact' },
    ],
  },
  {
    head: 'ご入居中の方',
    items: [
      { label: 'WORKERS BOARD', href: '/tenants' },
      { label: 'コミュニティイベント', href: '/tenants' },
      { label: '各種申請の窓口', href: '/tenants' },
    ],
  },
  {
    head: 'ワークスタイル知見',
    items: [
      { label: 'MORIワークスタイルラボ', href: '/insights' },
      { label: '関連コラム', href: '/insights' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-baseline gap-2.5">
            <span className="font-serif text-xl font-semibold tracking-wide">HILLS</span>
            <span className="text-[11px] font-semibold uppercase tracking-brand text-white/55">Office</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
            入居前・入居中・更新時を、ひとつの窓口で。
            <br />
            働く場を超えて、事業の基盤を支えるオフィスサービス。
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.head}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">{c.head}</p>
            <ul className="mt-5 space-y-3">
              {c.items.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="rounded-sm border border-white/20 px-1.5 py-0.5 font-medium text-white/70">NOTICE</span>
            <span className="ml-2">これは社内検討用モックアップです。掲載の社名・数値・物件情報はすべて架空のサンプルです。</span>
          </p>
          <p>© 2026 HILLS OFFICE (Internal Mockup)</p>
        </div>
      </div>
    </footer>
  )
}
