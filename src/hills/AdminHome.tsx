import { adminQuickActions, healthScores, matches } from './data'
import { Badge, Button, Card, Section } from './ui'

// ログイン時トップ（企業管理ポータル＝総務・人事・経営層／解約防止）
export default function AdminHome({
  onContact,
  onNav,
}: {
  onContact: () => void
  onNav: (key: string) => void
}) {
  const kpis = [
    { label: 'Lorem ipsum', value: '00%', trend: '+0pt', good: true },
    { label: 'Dolor sit', value: '00', trend: '+0', good: true },
    { label: 'Amet elit', value: '000 / 000', trend: '00%', good: true },
    { label: 'Consectetur', value: '00 lorem', trend: 'Lorem', good: false },
  ]

  return (
    <div className="bg-stone-50">
      <div className="bg-ink-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-400/90">Lorem ipsum dolor</p>
          <h1 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Lorem ipsum dolor <span className="font-sans text-base font-normal text-stone-400">/ Consectetur adipiscing elit</span>
          </h1>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {adminQuickActions.map((a) => (
              <button key={a.label} className="rounded-xl bg-white/10 p-4 text-left transition-colors hover:bg-white/20">
                <div className="text-2xl">{a.icon}</div>
                <p className="mt-2 text-sm font-semibold">{a.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 法人ダッシュボード KPI */}
      <Section eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit" className="!py-10">
        <div className="grid gap-4 sm:grid-cols-4">
          {kpis.map((k) => (
            <Card key={k.label}>
              <p className="text-sm text-stone-500">{k.label}</p>
              <p className="mt-2 font-serif text-3xl font-semibold text-ink-900">{k.value}</p>
              <Badge tone={k.good ? 'green' : 'red'}>{k.trend}</Badge>
            </Card>
          ))}
        </div>
      </Section>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-14 lg:grid-cols-3">
        {/* 健康経営ダッシュボード（解約防止の証拠） */}
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-serif text-xl font-semibold text-ink-900">Lorem ipsum dolor</h2>
            <button onClick={() => onNav('health')} className="text-sm font-semibold text-gold-600 hover:underline">
              Lorem ipsum →
            </button>
          </div>
          <Card>
            <p className="mb-4 text-xs text-stone-500">Lorem ipsum dolor sit amet consectetur adipiscing</p>
            <div className="space-y-3">
              {healthScores.map((h) => (
                <div key={h.dept} className="flex items-center gap-3">
                  <span className="w-16 text-sm font-medium text-ink-900">{h.dept}</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-stone-100">
                    <div className="h-full rounded-full bg-forest-600" style={{ width: `${h.score}%` }} />
                  </div>
                  <span className="w-10 text-right text-sm font-bold text-ink-900">{h.score}</span>
                  <span className={`w-8 text-right text-xs font-semibold ${h.trend.startsWith('−') ? 'text-rose-600' : 'text-forest-600'}`}>
                    {h.trend}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-gold-500/20 bg-gold-500/[0.07] p-3 text-sm text-ink-700">
              💡 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" onClick={() => onNav('health')}>Lorem ipsum dolor</Button>
              <Button variant="ghost" onClick={() => onNav('health')}>Dolor sit amet</Button>
            </div>
          </Card>
        </div>

        {/* ビジネスマッチング + アップセル */}
        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-ink-900">Lorem ipsum</h2>
              <button onClick={() => onNav('matching')} className="text-sm font-semibold text-gold-600 hover:underline">
                Lorem →
              </button>
            </div>
            <Card>
              {matches.map((m) => (
                <div key={m.company} className="border-b border-stone-100 py-3 last:border-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-ink-900">{m.company}</span>
                    <Badge tone={m.status === '新着' ? 'gold' : 'dark'}>{m.status}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-stone-600">{m.want}</p>
                  <div className="mt-2 flex gap-1">
                    {m.tags.map((t) => (
                      <span key={t} className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-600">#{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          </div>

          {/* アップセル / 解約防止 CTA */}
          <Card className="border-gold-500/40 bg-gold-500/5">
            <p className="text-sm font-bold text-ink-900">📈 Lorem ipsum dolor</p>
            <p className="mt-2 text-sm text-stone-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <div className="mt-4">
              <Button variant="gold" full onClick={onContact}>
                Lorem ipsum
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
