import { archives, matches } from './data'
import { Badge, Button, Card, Section, ProgressBar } from './ui'

// 主要機能のディテール画面（ストック型施策の体現）。
// ナビゲーションのリンク先を成立させ、要件を画面で示す。

export function ArchivePage({ onContact, loggedIn }: { onContact: () => void; loggedIn: boolean }) {
  const filters = ['Lorem', 'IPSUM', 'DOLOR', 'AMET', 'ELIT']
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section
        eyebrow="Lorem ipsum"
        title="Lorem ipsum dolor sit amet"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      >
        <div className="mb-5 flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <span
              key={f}
              className={`rounded-full border px-3 py-1 text-sm ${i === 0 ? 'border-ink-900 bg-ink-900 text-white' : 'border-stone-300 text-stone-600'}`}
            >
              {f}
            </span>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {archives.map((a) => (
            <Card key={a.title}>
              <div className="archviz mb-3 grid h-28 place-items-center rounded-lg text-4xl text-white/70">
                ▶
              </div>
              <Badge>{a.tag}</Badge>
              <h3 className="mt-2 text-sm font-bold text-ink-900">{a.title}</h3>
              <p className="mt-1 text-xs text-stone-500">{a.speaker}・{a.len}</p>
              {loggedIn && a.progress > 0 && (
                <div className="mt-3">
                  <ProgressBar value={a.progress} />
                </div>
              )}
              {!loggedIn && (
                <p className="mt-3 text-xs text-gold-600">🔒 Lorem ipsum dolor sit amet</p>
              )}
            </Card>
          ))}
        </div>
        {!loggedIn && (
          <Card className="mt-8 border-0 bg-ink-900 text-center text-white">
            <h3 className="font-serif text-xl font-semibold">Lorem ipsum dolor sit amet.</h3>
            <p className="mt-2 text-sm text-stone-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</p>
            <div className="mt-4 flex justify-center gap-3">
              <Button variant="gold" onClick={onContact}>Lorem ipsum</Button>
            </div>
          </Card>
        )}
      </Section>
    </div>
  )
}

export function MatchingPage({ onContact }: { onContact: () => void }) {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section
        eyebrow="Lorem ipsum"
        title="Lorem ipsum dolor sit amet"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-ink-900">Lorem ipsum</h3>
            {matches.map((m) => (
              <Card key={m.company} className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
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
                <Button variant="outline" onClick={onContact}>Lorem</Button>
              </Card>
            ))}
          </div>
          <div className="space-y-4">
            <Card>
              <h3 className="font-bold text-ink-900">Lorem ipsum dolor</h3>
              <p className="mt-1 text-xs text-stone-500">Lorem ipsum dolor sit amet</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-600">
                <li className="border-l-2 border-gold-500 pl-2">00/00 Lorem ipsum dolor sit amet</li>
                <li className="border-l-2 border-stone-200 pl-2">00/00 Consectetur adipiscing elit</li>
                <li className="border-l-2 border-stone-200 pl-2">00/00 Sed do eiusmod tempor</li>
              </ul>
            </Card>
            <Card className="bg-ink-900 text-white">
              <h3 className="font-bold">Lorem ipsum</h3>
              <p className="mt-2 text-sm text-stone-300">Lorem ipsum dolor sit amet consectetur.</p>
              <div className="mt-3">
                <Button variant="gold" full onClick={onContact}>Lorem ipsum</Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}

export function HealthPage() {
  const depts = [
    { d: 'Lorem', s: 78 }, { d: 'Ipsum', s: 71 }, { d: 'Dolor', s: 84 }, { d: 'Amet', s: 69 },
  ]
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section
        eyebrow="Lorem ipsum"
        title="Lorem ipsum dolor sit"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          <Card><p className="text-sm text-stone-500">Lorem ipsum</p><p className="mt-2 font-serif text-4xl font-semibold text-ink-900">00</p><Badge tone="green">Lorem +0</Badge></Card>
          <Card><p className="text-sm text-stone-500">Dolor sit amet</p><p className="mt-2 font-serif text-4xl font-semibold text-ink-900">00%</p><Badge tone="green">Lorem ipsum</Badge></Card>
          <Card><p className="text-sm text-stone-500">Consectetur elit</p><p className="mt-2 font-serif text-4xl font-semibold text-ink-900">00%</p><Badge tone="green">+0pt</Badge></Card>
        </div>
        <Card className="mt-6">
          <p className="mb-4 text-sm font-semibold text-ink-900">Lorem ipsum dolor sit amet consectetur</p>
          <div className="space-y-3">
            {depts.map((h) => (
              <div key={h.d} className="flex items-center gap-3">
                <span className="w-16 text-sm text-ink-900">{h.d}</span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-stone-100">
                  <div className="h-full rounded-full bg-forest-600" style={{ width: `${h.s}%` }} />
                </div>
                <span className="w-8 text-right text-sm font-bold text-ink-900">{h.s}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            <Button variant="primary">Lorem ipsum dolor sit</Button>
            <Button variant="outline">Dolor sit amet</Button>
          </div>
        </Card>
      </Section>
    </div>
  )
}

// 軽量プレースホルダー（街を使う / コミュニティ / 探す / できること / カルチャー）
export function SimplePage({ title, desc, items }: { title: string; desc: string; items: { icon: string; t: string; d: string }[] }) {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section title={title} desc={desc}>
        <div className="grid gap-5 sm:grid-cols-3">
          {items.map((it) => (
            <Card key={it.t}>
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-bold text-ink-900">{it.t}</h3>
              <p className="mt-2 text-sm text-stone-600">{it.d}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
