import { archives, matches } from './data'
import { Badge, Button, Card, Section, ProgressBar } from './ui'

export function ArchivePage({ onContact, loggedIn }: { onContact: () => void; loggedIn: boolean }) {
  const filters = ['すべて', 'STRATEGY', 'WELLNESS', 'GLOBAL', 'DATA']
  return (
    <div className="min-h-screen bg-stone-50">
      <Section
        eyebrow="HILLS ONE セミナー動画アーカイブ"
        title="知見が、戦略になる"
        desc="オフィス戦略・人材・ウェルネス・グローバル展開。ヒルズに集まる経営者・専門家が語る実践知を、いつでも視聴できます。"
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
              <div className="archviz mb-3 grid h-28 place-items-center rounded-lg text-4xl text-white/50">
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
                <p className="mt-3 text-xs text-gold-600">🔒 このコンテンツはHILLS ONEメンバー限定です</p>
              )}
            </Card>
          ))}
        </div>
        {!loggedIn && (
          <Card className="mt-8 border-0 bg-ink-900 text-center text-white">
            <h3 className="font-serif text-xl font-semibold">全コンテンツにアクセスするには</h3>
            <p className="mt-2 text-sm text-stone-300">
              ヒルズのテナント企業として入居後、HILLS ONEポータルが開放されます。
              入居ご検討中の方はまずはご相談ください。
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <Button variant="gold" onClick={onContact}>内覧を予約する</Button>
            </div>
          </Card>
        )}
      </Section>
    </div>
  )
}

export function MatchingPage({ onContact }: { onContact: () => void }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Section
        eyebrow="HILLS ONE ビジネスマッチング"
        title="エコシステムの中で、出会う"
        desc="同じヒルズで働く企業同士だから、信頼構築のスピードが違います。HILLS ONEが業種・課題・規模でマッチングし、商談へのファーストステップを設けます。"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <h3 className="font-bold text-ink-900">マッチング候補（あなたの企業との相性度順）</h3>
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
                <Button variant="outline" onClick={onContact}>詳細を見る</Button>
              </Card>
            ))}
          </div>
          <div className="space-y-4">
            <Card>
              <h3 className="font-bold text-ink-900">直近のマッチング履歴</h3>
              <p className="mt-1 text-xs text-stone-500">アクティビティ</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-600">
                <li className="border-l-2 border-gold-500 pl-2">6/10 Summit Ventures との商談が成立</li>
                <li className="border-l-2 border-stone-200 pl-2">6/05 GreenTech合同会社からコンタクト</li>
                <li className="border-l-2 border-stone-200 pl-2">5/28 三星コンサルティングとミーティング</li>
              </ul>
            </Card>
            <Card className="bg-ink-900 text-white">
              <h3 className="font-bold">プロフィールを充実させると精度が上がります</h3>
              <p className="mt-2 text-sm text-stone-300">
                現在のマッチング精度 68%。事業領域・求めるパートナー像を追記するとスコアが上がります。
              </p>
              <div className="mt-3">
                <Button variant="gold" full onClick={onContact}>プロフィールを編集する</Button>
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
    { d: '営業部', s: 78 }, { d: '企画部', s: 71 }, { d: 'エンジニア', s: 84 }, { d: 'バックオフィス', s: 69 },
  ]
  return (
    <div className="min-h-screen bg-stone-50">
      <Section
        eyebrow="HILLS ONE ウェルネスダッシュボード"
        title="組織の健康を、数値で見る"
        desc="ヒルズワーカーの活動データをもとに算出した組織ウェルネススコア。人事・経営層が持続的な改善アクションを取るための指標です。"
      >
        <div className="grid gap-5 sm:grid-cols-3">
          <Card>
            <p className="text-sm text-stone-500">組織全体スコア</p>
            <p className="mt-2 font-serif text-4xl font-semibold text-ink-900">75.5</p>
            <Badge tone="green">ゴールド水準 +2.5</Badge>
          </Card>
          <Card>
            <p className="text-sm text-stone-500">週次アクティブ率</p>
            <p className="mt-2 font-serif text-4xl font-semibold text-ink-900">78%</p>
            <Badge tone="green">先週比 +3pt</Badge>
          </Card>
          <Card>
            <p className="text-sm text-stone-500">エンゲージメント指数</p>
            <p className="mt-2 font-serif text-4xl font-semibold text-ink-900">82%</p>
            <Badge tone="green">全社過去最高</Badge>
          </Card>
        </div>
        <Card className="mt-6">
          <p className="mb-4 text-sm font-semibold text-ink-900">部門別ウェルネススコア（直近30日）</p>
          <p className="mb-4 text-xs text-stone-500">AIが各部門の傾向を分析し、改善提案を自動生成します。</p>
          <div className="space-y-3">
            {depts.map((h) => (
              <div key={h.d} className="flex items-center gap-3">
                <span className="w-24 text-sm text-ink-900">{h.d}</span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-stone-100">
                  <div className="h-full rounded-full bg-forest-600" style={{ width: `${h.s}%` }} />
                </div>
                <span className="w-8 text-right text-sm font-bold text-ink-900">{h.s}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-gold-500/20 bg-gold-500/[0.07] p-3 text-sm text-ink-700">
            💡「エンジニアリング部門」は先月比+1ptで全社最高。ランニングクラブへの参加増が寄与しています。
          </div>
          <div className="mt-5 flex gap-2">
            <Button variant="primary">詳細レポートをダウンロード</Button>
            <Button variant="outline">全ワーカーに通知する</Button>
          </div>
        </Card>
      </Section>
    </div>
  )
}

export function SimplePage({ title, desc, items }: { title: string; desc: string; items: { icon: string; t: string; d: string }[] }) {
  return (
    <div className="min-h-screen bg-stone-50">
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
