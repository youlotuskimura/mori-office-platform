import { useState } from 'react'
import { properties, cases, stats } from './data'
import { Badge, Button, Card, Section, ProgressBar } from './ui'

export default function PublicHome({
  onContact,
  onNav,
}: {
  onContact: () => void
  onNav: (key: string) => void
}) {
  const tabs = [
    {
      key: 'exec',
      label: 'CEO・経営層',
      copy: 'オフィスは採用と文化の発信地。ヒルズのブランド力が、優秀人材との出会いと定着率向上を同時に実現します。',
    },
    {
      key: 'hr',
      label: 'HR・人事',
      copy: '入居と同時に、ウェルネスプログラム・コミュニティ・学習機会が整います。従業員エンゲージメントは着実に高まります。',
    },
    {
      key: 'worker',
      label: 'ワーカー個人',
      copy: '会議室予約からランチマッチング、アート鑑賞まで。HILLS ONEアプリで、街のすべてがワンタップになります。',
    },
  ]
  const [tab, setTab] = useState(0)

  const values = [
    { icon: '🏙️', t: '街の力をビジネスに', d: '虎ノ門・六本木・麻布台が持つ集積とブランド力が、採用・接待・パートナーシップで継続的に働き続けます。' },
    { icon: '🤝', t: 'コミュニティが生む偶発', d: '8万人のヒルズワーカーがつながるエコシステム。予期しない出会いが、次のプロジェクトに結晶します。' },
    { icon: '🏅', t: '入居後も進化するサポート', d: '物件引き渡しで終わりではありません。HILLS ONEが企業の成長と変化をフルサポートします。' },
  ]

  return (
    <div className="bg-stone-50">
      {/* ヒーロー */}
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
            <p className="text-[11px] font-semibold uppercase tracking-brand text-gold-400">
              HILLS ONE — INTEGRATED OFFICE PLATFORM
            </p>
          </div>
          <h1 className="font-serif text-[2.6rem] font-semibold leading-[1.18] tracking-tight sm:text-[4.2rem]">
            街が、競争力になる。
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            立地も、スペックも、そして街全体が。六本木・虎ノ門・麻布台に根ざした統合プラットフォームが、
            企業とワーカーの「働く」を根本から変えます。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="gold" onClick={onContact}>
              内覧を予約する
            </Button>
            <Button variant="outline" onClick={() => onNav('archive')}>
              <span className="text-white">動画アーカイブを見る</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 課題提起 × ターゲット切替タブ */}
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
        <p className="mt-8 max-w-3xl font-serif text-2xl font-medium leading-relaxed text-ink-900 sm:text-3xl">
          {tabs[tab].copy}
        </p>
      </Section>

      {/* 3つの提供価値 */}
      <Section eyebrow="VALUE PROPOSITION" title="なぜ、ヒルズなのか" className="border-y border-stone-200/70 bg-white">
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

      {/* 物件・拠点ショーケース */}
      <Section eyebrow="PROPERTIES" title="フラッグシップ物件" desc="虎ノ門・麻布台・六本木。三つの街が持つ固有の価値から、貴社の成長ステージに最適な拠点を選べます。">
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
                  内覧を予約する →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 導入事例 */}
      <Section eyebrow="CASE STUDIES" title="数字が語る、ヒルズ効果" className="border-y border-stone-200/70 bg-white">
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

      {/* ビジネスマッチング ティーザー */}
      <Section eyebrow="MATCHING" title="ヒルズ内ビジネスマッチング">
        <div className="overflow-hidden rounded-lg bg-ink-900 text-white shadow-card">
          <div className="grid items-center gap-6 p-8 sm:grid-cols-2 sm:p-10">
            <div>
              <h3 className="font-serif text-2xl font-semibold">エコシステムの中で、出会う</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                同じヒルズで働く企業同士だから、信頼構築のスピードが違います。HILLS ONEが業種・課題・規模でマッチングし、
                商談へのファーストステップを設けます。
              </p>
              <div className="mt-5 max-w-xs">
                <ProgressBar value={47} />
                <p className="mt-2 text-xs text-stone-400">マッチング成立件数 今月 +47件</p>
              </div>
              <div className="mt-6">
                <Button variant="gold" onClick={() => onNav('matching')}>
                  マッチングを見る
                </Button>
              </div>
            </div>
            <div className="archviz grid h-44 place-items-center rounded-lg text-5xl text-white/40">🤝</div>
          </div>
        </div>
      </Section>

      {/* 数字で見るHILLS */}
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

      {/* ミッドCTA + 導入の流れ */}
      <Section title="入居までの3ステップ">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { n: '01', t: '内覧予約・ご相談', d: 'オンラインまたは対面でご相談後、物件をご案内します。最短1週間で候補リストをご提案。' },
            { n: '02', t: '契約・入居準備', d: '法人契約・内装・回線・備品調達を一括サポート。スムーズな移転をコーディネートします。' },
            { n: '03', t: 'HILLS ONEで活用開始', d: '入居当日からアプリ・ポータルが利用可能。サービスフル活用でチームの生産性が上がります。' },
          ].map((s) => (
            <Card key={s.n}>
              <span className="font-serif text-3xl font-semibold text-gold-500">{s.n}</span>
              <h3 className="mt-3 font-semibold text-ink-900">{s.t}</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* フッター大型CTA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-ink-800 to-ink-700 text-white">
        <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">まず、話を聞いてみませんか。</h2>
          <p className="mt-4 text-stone-300">規模・予算・移転時期を問わず、オフィス探しの最初の一歩をHILLS ONEがサポートします。</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="gold" onClick={onContact}>
              内覧を予約する
            </Button>
            <Button variant="outline" onClick={onContact}>
              <span className="text-white">資料をダウンロード</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
