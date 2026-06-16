import { useState } from 'react'
import { units, buildings } from './data'

interface Props {
  selectedUnits: string[]
  onClearUnits: () => void
}

const CASES = [
  { industry: 'IT・テック系スタートアップ', result: '移転後6ヶ月で採用応募数 +180%、内定承諾率 +34%', note: '「ヒルズアドレス」が学生・エンジニア採用のシグナルに。' },
  { industry: 'グローバル外資系企業', result: '人材定着率 +42%（移転後1年）', note: 'ウェルネス環境と生活利便性が離職防止に直結。外国人エグゼクティブの家族も高評価。' },
  { industry: '大手金融機関', result: 'オフィスコスト −28%（3拠点統合）', note: '可変区画と面積最適化により固定費を大幅圧縮しながら本社機能を強化。' },
]

const VALUE_ASSETS = [
  { icon: '🎨', label: '現代アート美術館', desc: '森美術館（六本木）/ 麻布台ヒルズ ギャラリーで接待・文化事業が完結' },
  { icon: '🌇', label: '東京シティビュー（展望台）', desc: '顧客招待・社内イベントとして活用。対外PR・エンゲージメント効果大' },
  { icon: '🥂', label: '会員制クラブ', desc: '六本木ヒルズクラブ。幹部・VIP接待の場として提供' },
  { icon: '🏃', label: 'ウェルネス施設', desc: 'フィットネス・ヨガ・クリニック。健康経営・離職防止に直結' },
  { icon: '🌿', label: '緑化・屋上庭園', desc: '麻布台ヒルズ 6万㎡の緑地空間。ESGレポートにも活用可' },
  { icon: '🤝', label: 'ビジネスマッチング', desc: '同ビル入居企業との共創機会。投資家・パートナーとの偶発的出会い' },
  { icon: '🚇', label: '交通アクセス', desc: '各線直結・徒歩圏内。採用面での地理的優位性' },
  { icon: '🏨', label: '国際ホテル隣接', desc: 'グランドハイアット・パーク ハイアット等でVIP接遇をシームレスに' },
]

export default function Proposal({ selectedUnits, onClearUnits }: Props) {
  const [showModal, setShowModal] = useState<'tour' | 'consult' | null>(null)
  const [form, setForm] = useState({ name: '', company: '', date: '', note: '' })
  const [submitted, setSubmitted] = useState(false)

  const selectedData = selectedUnits
    .map(id => {
      const unit = units.find(u => u.id === id)
      if (!unit) return null
      const building = buildings.find(b => b.id === unit.buildingId)
      if (!building) return null
      return { unit, building }
    })
    .filter((x): x is { unit: typeof units[0]; building: typeof buildings[0] } => x !== null)

  if (selectedUnits.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-4xl">📄</p>
        <p className="mt-4 font-serif text-lg font-semibold text-ink-900">区画を選択してください</p>
        <p className="mt-2 max-w-xs text-sm text-stone-500">
          「空室ダッシュボード」または「マッチング」タブで区画を選択すると、ここに提案プレビューが生成されます。
        </p>
      </div>
    )
  }

  const handleSubmit = () => setSubmitted(true)

  return (
    <div className="mx-auto max-w-3xl px-4 pb-6">
      {/* コントロールバー */}
      <div className="sticky top-[88px] z-20 -mx-4 mb-4 flex items-center justify-between border-b border-stone-200 bg-white/95 px-4 py-2.5 backdrop-blur">
        <p className="text-sm font-semibold text-ink-900">
          提案プレビュー — {selectedData.length}区画
        </p>
        <div className="flex gap-2">
          <button
            onClick={onClearUnits}
            className="rounded-md border border-stone-200 px-3 py-1.5 text-xs text-stone-500 hover:bg-stone-50 transition-colors"
          >
            クリア
          </button>
          <button
            onClick={() => window.print()}
            className="rounded-md bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-200 transition-colors"
          >
            🖨️ 印刷
          </button>
        </div>
      </div>

      {/* 提案書プレビュー（PDF想定レイアウト） */}
      <div className="rounded-2xl border border-stone-200 bg-white shadow-card overflow-hidden">
        {/* 表紙風ヘッダー */}
        <div className="archviz px-8 py-10">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-[11px] font-semibold uppercase tracking-brand text-gold-400">
              HILLS OFFICE — PROPOSAL
            </span>
          </div>
          <h1 className="font-serif text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
            オフィス移転・拡張<br />ご提案書
          </h1>
          <p className="mt-3 text-sm text-white/60">
            作成日: {new Date().toLocaleDateString('ja-JP')} ／ 社内資料・架空データ
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* 候補区画一覧 */}
          <section>
            <SectionTitle eyebrow="01" title="候補区画 概要" />
            <div className="space-y-4">
              {selectedData.map(({ unit, building }) => {
                const monthlyRent = Math.round(unit.area * unit.rentPerTsubo)
                const annualRent = monthlyRent * 12
                return (
                  <div key={unit.id} className="rounded-xl border border-stone-200 p-5">
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-base font-semibold text-ink-900">{building.name}</p>
                        <p className="text-xs text-stone-500">{unit.floor}F / {unit.layoutType} / {building.ward}</p>
                      </div>
                      <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${
                        unit.status === 'available'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                          : unit.status === 'negotiating'
                          ? 'border-amber-200 bg-amber-50 text-amber-700'
                          : 'border-rose-200 bg-rose-50 text-rose-700'
                      }`}>
                        {unit.status === 'available' ? '🟢 即入居可' : unit.status === 'negotiating' ? '🟡 調整中' : '🔴 成約間近'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <Stat label="面積" value={`${unit.area}坪`} />
                      <Stat label="坪単価" value={`${unit.rentPerTsubo}万円/坪`} />
                      <Stat label="月額概算" value={`約${monthlyRent}万円`} highlight />
                      <Stat label="年額概算" value={`約${annualRent}万円`} />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {unit.features.map(f => (
                        <span key={f} className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] text-stone-600">
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-stone-500">
                      入居可能時期: <span className="font-medium text-stone-700">{unit.availableFrom}</span>
                    </p>

                    {/* レイアウトイメージ（プレースホルダー） */}
                    <div className="mt-4 flex h-24 items-center justify-center rounded-lg bg-stone-100 text-stone-400">
                      <div className="text-center">
                        <p className="text-2xl">📐</p>
                        <p className="text-[10px]">フロアプラン（内見時提供）</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ビルのアクセス */}
          <section>
            <SectionTitle eyebrow="02" title="アクセス・立地" />
            <div className="space-y-3">
              {[...new Set(selectedData.map(d => d.building.id))].map(bid => {
                const b = buildings.find(x => x.id === bid)!
                return (
                  <div key={bid} className="rounded-lg bg-stone-50 p-4">
                    <p className="text-sm font-semibold text-ink-900">{b.shortName} — {b.nearestStation}</p>
                    <ul className="mt-1.5 space-y-0.5">
                      {b.access.map(a => (
                        <li key={a} className="flex items-start gap-1.5 text-xs text-stone-600">
                          <span className="mt-0.5 shrink-0 text-forest-500">→</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>

          {/* 街のアセット価値 */}
          <section>
            <SectionTitle eyebrow="03" title="HILLSが提供する街の価値" />
            <p className="mb-4 text-xs text-stone-500">
              ヒルズは「オフィス」を超えた都市機能を提供します。以下の施設・サービスが移転企業の競争力を支えます。
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {VALUE_ASSETS.map(asset => (
                <div key={asset.label} className="flex items-start gap-3 rounded-lg border border-stone-100 bg-stone-50 p-3">
                  <span className="text-xl">{asset.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-ink-900">{asset.label}</p>
                    <p className="text-[11px] leading-relaxed text-stone-500">{asset.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 入居テナント構成（ビルのエコシステム） */}
          <section>
            <SectionTitle eyebrow="04" title="入居テナント構成" />
            {[...new Set(selectedData.map(d => d.building.id))].map(bid => {
              const b = buildings.find(x => x.id === bid)!
              return (
                <div key={bid} className="mb-4 last:mb-0">
                  <p className="mb-2 text-xs font-semibold text-stone-600">{b.name}</p>
                  <div className="space-y-1.5">
                    {b.industries.map(ind => (
                      <div key={ind.name} className="flex items-center gap-2">
                        <span className="w-24 shrink-0 text-[11px] text-stone-600">{ind.name}</span>
                        <div className="flex-1 overflow-hidden rounded-full bg-stone-100 h-2">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${ind.pct}%`, backgroundColor: ind.color }}
                          />
                        </div>
                        <span className="w-8 text-right text-[11px] font-medium text-stone-700">{ind.pct}%</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-1.5 text-[10px] text-stone-400">
                    入居テナント {b.tenantCount}社 / ヒルズワーカー {b.workerCount.toLocaleString()}名
                  </p>
                </div>
              )
            })}
          </section>

          {/* 導入事例 */}
          <section>
            <SectionTitle eyebrow="05" title="移転企業 導入事例" />
            <div className="space-y-3">
              {CASES.map((c, i) => (
                <div key={i} className="rounded-lg border border-stone-200 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-semibold text-ink-900">{c.industry}</p>
                    <span className="rounded-lg bg-forest-50 px-2.5 py-1 text-sm font-black text-forest-700">
                      {c.result.split('、')[0]}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-stone-500">{c.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <SectionTitle eyebrow="06" title="次のステップ" />
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => { setShowModal('tour'); setSubmitted(false); setForm({ name: '', company: '', date: '', note: '' }) }}
                className="flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-6 py-4 text-sm font-bold text-white hover:bg-ink-700 transition-colors"
              >
                <span className="text-xl">🏢</span>
                <span>内見を予約する</span>
              </button>
              <button
                onClick={() => { setShowModal('consult'); setSubmitted(false); setForm({ name: '', company: '', date: '', note: '' }) }}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-ink-900 bg-white px-6 py-4 text-sm font-bold text-ink-900 hover:bg-stone-50 transition-colors"
              >
                <span className="text-xl">💬</span>
                <span>オンライン相談を予約</span>
              </button>
            </div>
          </section>

          {/* 免責 */}
          <p className="rounded-lg bg-stone-50 px-4 py-3 text-[10px] leading-relaxed text-stone-400">
            ※ 本資料は社内向けデモ・架空データです。記載の賃料・面積・入居可能時期・事例はすべて架空であり、森ビルの公式情報ではありません。実際の情報は必ず担当者にご確認ください。
          </p>
        </div>
      </div>

      {/* モーダル */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
          <div className="w-full max-w-md rounded-t-2xl bg-white p-6 sm:rounded-2xl">
            {!submitted ? (
              <>
                <h3 className="mb-4 font-serif text-lg font-semibold text-ink-900">
                  {showModal === 'tour' ? '内見予約' : 'オンライン相談予約'}
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-stone-600">お名前</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="田中 勇介"
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-stone-600">会社名</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      placeholder="株式会社〇〇"
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-stone-600">
                      希望{showModal === 'tour' ? '内見' : '相談'}日時
                    </label>
                    <input
                      type="datetime-local"
                      value={form.date}
                      onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-stone-600">備考・ご要望</label>
                    <textarea
                      rows={2}
                      value={form.note}
                      onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm resize-none"
                    />
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setShowModal(null)}
                    className="flex-1 rounded-lg border border-stone-200 py-2.5 text-sm text-stone-600 hover:bg-stone-50 transition-colors"
                  >
                    キャンセル
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 rounded-lg bg-ink-900 py-2.5 text-sm font-bold text-white hover:bg-ink-700 transition-colors"
                  >
                    送信する
                  </button>
                </div>
                <p className="mt-3 text-center text-[10px] text-stone-400">
                  ※ デモ画面のため実際の送信は行われません
                </p>
              </>
            ) : (
              <div className="py-6 text-center">
                <p className="text-4xl">✅</p>
                <h3 className="mt-3 font-serif text-lg font-semibold text-ink-900">
                  {showModal === 'tour' ? '内見予約を受け付けました' : 'オンライン相談を受け付けました'}
                </h3>
                <p className="mt-2 text-sm text-stone-500">担当者より折り返しご連絡いたします。</p>
                <p className="mt-1 text-[10px] text-stone-400">（デモのため実際の送信は行われていません）</p>
                <button
                  onClick={() => setShowModal(null)}
                  className="mt-5 w-full rounded-lg bg-ink-900 py-2.5 text-sm font-bold text-white"
                >
                  閉じる
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[10px] font-bold text-white">
        {eyebrow}
      </span>
      <h2 className="font-serif text-base font-semibold text-ink-900">{title}</h2>
      <span className="flex-1 border-t border-stone-200" />
    </div>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-3 ${highlight ? 'bg-forest-50' : 'bg-stone-50'}`}>
      <p className="text-[10px] text-stone-500">{label}</p>
      <p className={`mt-0.5 text-sm font-bold ${highlight ? 'text-forest-700' : 'text-stone-800'}`}>{value}</p>
    </div>
  )
}
