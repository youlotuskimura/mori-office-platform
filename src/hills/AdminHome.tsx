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
    { label: 'サービス利用率', value: '74%', trend: '+6pt', good: true },
    { label: '健康経営スコア', value: '76', trend: '+3', good: true },
    { label: '従業員登録', value: '312 / 340', trend: '92%', good: true },
    { label: '契約更新まで', value: '88日', trend: '要対応', good: false },
  ]

  return (
    <div className="bg-stone-50">
      <div className="bg-ink-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-400/90">企業管理ポータル</p>
          <h1 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            株式会社サンプル <span className="font-sans text-base font-normal text-stone-400">/ 総務人事ご担当者さま</span>
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
      <Section eyebrow="Insights" title="法人ダッシュボード" className="!py-10">
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
            <h2 className="font-serif text-xl font-semibold text-ink-900">健康経営ダッシュボード</h2>
            <button onClick={() => onNav('health')} className="text-sm font-semibold text-gold-600 hover:underline">
              詳細・レポート出力 →
            </button>
          </div>
          <Card>
            <p className="mb-4 text-xs text-stone-500">部署別 健康経営スコア（前月比・個人特定不可の集計値）</p>
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
              💡 CS部のスコアが低下。運動系イベントの案内を自動提案できます。
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" onClick={() => onNav('health')}>健康経営優良法人 申請レポート</Button>
              <Button variant="ghost" onClick={() => onNav('health')}>同業ベンチマーク比較</Button>
            </div>
          </Card>
        </div>

        {/* ビジネスマッチング + アップセル */}
        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-ink-900">マッチング新着</h2>
              <button onClick={() => onNav('matching')} className="text-sm font-semibold text-gold-600 hover:underline">
                開く →
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
            <p className="text-sm font-bold text-ink-900">📈 担当コンシェルジュから</p>
            <p className="mt-2 text-sm text-stone-600">
              利用率が好調です。増床・健康経営プランの拡張をご提案できます。契約更新も近づいています。
            </p>
            <div className="mt-4">
              <Button variant="gold" full onClick={onContact}>
                担当に相談する
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
