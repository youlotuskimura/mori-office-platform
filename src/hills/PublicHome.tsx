import { useState } from 'react'
import { properties, cases, stats } from './data'
import { Badge, Button, Card, Section, ProgressBar } from './ui'

// 未ログイン時トップ（新規検討層向け＝リード獲得最優先）
export default function PublicHome({
  onContact,
  onNav,
}: {
  onContact: () => void
  onNav: (key: string) => void
}) {
  const tabs = [
    { key: 'exec', label: 'Lorem ipsum dolor sit', copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
    { key: 'hr', label: 'Consectetur adipiscing', copy: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { key: 'worker', label: 'Tempor incididunt', copy: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  ]
  const [tab, setTab] = useState(0)
  const values = [
    { icon: '🎨', t: 'Lorem', d: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.' },
    { icon: '🤝', t: 'Ipsum', d: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { icon: '🏅', t: 'Dolor', d: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  ]

  return (
    <div className="bg-stone-50">
      {/* 1. ヒーロー */}
      <div className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-800 via-ink-900 to-ink-900" />
        <div className="absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-forest-500/15 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36">
          <div className="mb-6 flex items-center gap-3">
            <span className="rule-bronze" />
            <p className="text-[11px] font-semibold uppercase tracking-brand text-gold-400">Lorem ipsum dolor</p>
          </div>
          <h1 className="font-serif text-[2.6rem] font-semibold leading-[1.18] tracking-tight sm:text-[4.2rem]">
            街が、競争力になる。
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="gold" onClick={onContact}>
              Lorem ipsum dolor
            </Button>
            <Button variant="outline" onClick={() => onNav('archive')}>
              <span className="text-white">Lorem ipsum</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 2. 課題提起 × ターゲット切替タブ */}
      <Section className="!py-14">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setTab(i)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                tab === i ? 'border-ink-900 bg-ink-900 text-white' : 'border-stone-300 text-stone-600 hover:border-ink-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="mt-8 max-w-3xl font-serif text-2xl font-medium leading-relaxed text-ink-900 sm:text-3xl">{tabs[tab].copy}</p>
      </Section>

      {/* 3. 3つの提供価値 */}
      <Section eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit amet" className="border-y border-stone-200/70 bg-white">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <Card key={v.t}>
              <div className="text-3xl">{v.icon}</div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900">{v.t}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">{v.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. 物件・拠点ショーケース */}
      <Section eyebrow="Ipsum" title="Lorem ipsum dolor sit" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.">
        <div className="grid gap-6 sm:grid-cols-3">
          {properties.map((p) => (
            <Card key={p.name} className="flex flex-col !p-0">
              <div className="archviz h-36 w-full rounded-t-lg" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  {p.tag && <Badge>{p.tag}</Badge>}
                  <span className="text-xs font-medium text-forest-600">{p.vacancy}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold text-ink-900">{p.name}</h3>
                <p className="mt-1 text-sm text-stone-500">{p.area}</p>
                <p className="mt-2 flex-1 text-sm leading-7 text-stone-600">{p.feature}</p>
                <button onClick={onContact} className="mt-4 text-sm font-semibold text-gold-600 hover:underline">
                  Lorem ipsum →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. 導入事例 */}
      <Section eyebrow="Dolor sit" title="Lorem ipsum dolor" className="border-y border-stone-200/70 bg-white">
        <div className="grid gap-6 sm:grid-cols-3">
          {cases.map((c) => (
            <Card key={c.company}>
              <p className="text-sm text-stone-500">{c.company}</p>
              <p className="mt-3 font-serif text-4xl font-semibold text-ink-900">{c.value}</p>
              <p className="text-sm font-semibold text-stone-700">{c.metric}</p>
              <p className="mt-2 text-xs leading-6 text-stone-500">{c.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6. ビジネスマッチング ティーザー */}
      <Section eyebrow="Amet elit" title="Lorem ipsum dolor sit amet consectetur">
        <div className="overflow-hidden rounded-lg bg-ink-900 text-white shadow-card">
          <div className="grid items-center gap-6 p-8 sm:grid-cols-2 sm:p-10">
            <div>
              <h3 className="font-serif text-2xl font-semibold">Lorem ipsum dolor sit</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="mt-5 max-w-xs">
                <ProgressBar value={30} />
                <p className="mt-2 text-xs text-stone-400">Lorem ipsum 00%</p>
              </div>
              <div className="mt-6">
                <Button variant="gold" onClick={onContact}>
                  Lorem ipsum dolor
                </Button>
              </div>
            </div>
            <div className="archviz grid h-44 place-items-center rounded-lg text-5xl text-white/70">▶</div>
          </div>
        </div>
      </Section>

      {/* 7. 数字で見るHILLS */}
      <div className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-forest-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-16 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl font-semibold text-gold-400 sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-stone-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. ミッドCTA + 導入の流れ */}
      <Section title="Lorem ipsum dolor sit amet">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { n: '01', t: 'Lorem ipsum', d: 'Lorem ipsum dolor sit amet, consectetur.' },
            { n: '02', t: 'Dolor sit amet', d: 'Sed do eiusmod tempor incididunt ut labore.' },
            { n: '03', t: 'Consectetur elit', d: 'Ut enim ad minim veniam quis nostrud.' },
          ].map((s) => (
            <Card key={s.n}>
              <span className="font-serif text-3xl font-semibold text-gold-500">{s.n}</span>
              <h3 className="mt-3 font-semibold text-ink-900">{s.t}</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 9. フッター大型CTA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-ink-800 to-ink-700 text-white">
        <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit.</h2>
          <p className="mt-4 text-stone-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="gold" onClick={onContact}>
              Lorem ipsum
            </Button>
            <Button variant="outline" onClick={onContact}>
              <span className="text-white">Dolor sit amet</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
