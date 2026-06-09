import { workerQuickActions, recommendations, archives, feedItems, lunchMatches } from './data'
import { Badge, Button, Card, Section, ProgressBar } from './ui'

// ログイン時トップ（ワーカー個人＝リテンション最優先）
export default function WorkerHome({ onNav }: { onNav: (key: string) => void }) {
  return (
    <div className="bg-stone-50">
      {/* 1-2. パーソナルヘッダー + クイックアクション */}
      <div className="bg-ink-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-400/90">Lorem ipsum dolor sit</p>
          <h1 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Lorem ipsum dolor <span className="font-sans text-base font-normal text-stone-400">/ Consectetur adipiscing</span>
          </h1>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {workerQuickActions.map((a) => (
              <button
                key={a.label}
                className="rounded-xl bg-white/10 p-4 text-left transition-colors hover:bg-white/20"
              >
                <div className="text-2xl">{a.icon}</div>
                <p className="mt-2 text-sm font-semibold">{a.label}</p>
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm text-stone-300">
            <span>💳 Lorem ipsum dolor <span className="font-bold text-gold-400">¥0,000</span></span>
            <span>🏅 Lorem ipsum dolor sit</span>
          </div>
        </div>
      </div>

      {/* 3. 今日のレコメンド（回遊喚起） */}
      <Section eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit" className="!py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {recommendations.map((r) => (
            <Card key={r.title} className="flex items-start gap-3">
              <span className="text-2xl">{r.icon}</span>
              <div>
                <Badge tone="dark">{r.cat}</Badge>
                <p className="mt-2 text-sm font-medium text-ink-900">{r.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-14 lg:grid-cols-3">
        {/* 4. イベント＆アーカイブ */}
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-serif text-xl font-semibold text-ink-900">Lorem ipsum dolor</h2>
            <button onClick={() => onNav('archive')} className="text-sm font-semibold text-gold-600 hover:underline">
              Lorem →
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {archives.slice(0, 4).map((a) => (
              <Card key={a.title}>
                <div className="archviz mb-3 grid h-24 place-items-center rounded-lg text-3xl text-white/70">
                  ▶
                </div>
                <Badge>{a.tag}</Badge>
                <h3 className="mt-2 text-sm font-bold text-ink-900">{a.title}</h3>
                <p className="mt-1 text-xs text-stone-500">{a.speaker}・{a.len}</p>
                {a.progress > 0 && (
                  <div className="mt-3">
                    <ProgressBar value={a.progress} />
                    <p className="mt-1 text-xs text-stone-400">{a.progress === 100 ? 'Lorem ipsum' : `Lorem ${a.progress}%`}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* 5-6. コミュニティ + ウェルネス */}
        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-ink-900">Lorem ipsum</h2>
              <button onClick={() => onNav('community')} className="text-sm font-semibold text-gold-600 hover:underline">
                Lorem →
              </button>
            </div>
            <Card>
              <p className="mb-2 text-xs font-semibold text-stone-500">Lorem ipsum dolor</p>
              {lunchMatches.map((l) => (
                <div key={l.name} className="flex items-center gap-3 border-b border-stone-100 py-2 last:border-0">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gold-500/20 text-sm font-bold text-gold-600">
                    {l.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink-900">{l.name}</p>
                    <p className="text-xs text-stone-500">{l.common}</p>
                  </div>
                  <button className="text-xs font-semibold text-gold-600">Lorem</button>
                </div>
              ))}
              <div className="mt-3 space-y-2">
                {feedItems.map((f) => (
                  <div key={f.text} className="rounded-lg bg-stone-50 p-2.5">
                    <p className="text-xs font-semibold text-ink-900">{f.user} <span className="text-gold-600">{f.group}</span></p>
                    <p className="mt-0.5 text-xs text-stone-600">{f.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-semibold text-ink-900">Lorem ipsum</h2>
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-3xl font-semibold text-ink-900">0,000<span className="font-sans text-sm font-normal text-stone-500"> lorem</span></p>
                  <p className="text-xs text-stone-500">Lorem ipsum</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-forest-600">Lorem ipsum 00</p>
                  <p className="text-xs text-stone-500">Lorem：00/00</p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" full onClick={() => onNav('city')}>
                  Lorem ipsum dolor
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 9. ロイヤリティ */}
      <div className="bg-gradient-to-r from-gold-600 to-gold-500">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-ink-900">
          <div>
            <p className="text-sm font-semibold">🏅 Lorem ipsum dolor</p>
            <p className="font-serif text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <Button variant="primary" onClick={() => onNav('city')}>
            Lorem ipsum dolor
          </Button>
        </div>
      </div>
    </div>
  )
}
