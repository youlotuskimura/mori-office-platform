import { useState, useMemo } from 'react'
import { OCCASIONS, customers, matchFacilities, FacilityMatchResult } from './data'

interface Props {
  selectedFacilities: string[]
  onToggle: (id: string) => void
  onGoToProposal: () => void
}

const PRIORITY_OPTIONS = [
  '眺望・夜景', 'アート感', '外国語対応', 'プライベート感',
  'アクセスの良さ', 'ウェルネス・健康', '緑・自然感', 'SNS映え',
  'ブランド・格式', 'スタートアップ感', 'PR・撮影向き', '若い人向け',
]

const HILLS_OPTIONS = ['虎ノ門', '麻布台', '六本木', 'アーク']

export default function OccasionSearch({ selectedFacilities, onToggle, onGoToProposal }: Props) {
  const [usePreset, setUsePreset] = useState(false)
  const [presetId, setPresetId] = useState('C001')
  const [occasion, setOccasion] = useState('')
  const [headcount, setHeadcount] = useState('')
  const [budgetRange, setBudgetRange] = useState('')
  const [preferredHills, setPreferredHills] = useState<string[]>([])
  const [priorities, setPriorities] = useState<string[]>([])
  const [dateNote, setDateNote] = useState('')
  const [searched, setSearched] = useState(false)

  const toggleHills = (h: string) =>
    setPreferredHills(prev => prev.includes(h) ? prev.filter(x => x !== h) : [...prev, h])
  const togglePriority = (p: string) =>
    setPriorities(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])

  const handlePresetLoad = () => {
    const c = customers.find(x => x.id === presetId)
    if (!c) return
    setOccasion(c.requirements.occasion)
    setHeadcount(String(c.requirements.headcount))
    setBudgetRange(c.requirements.budgetNote)
    setPreferredHills(c.requirements.preferredHills)
    setPriorities(c.requirements.priorities)
    setDateNote(c.requirements.dateNote)
  }

  const results: FacilityMatchResult[] = useMemo(() => {
    if (!searched) return []
    return matchFacilities({
      occasion: OCCASIONS.find(o => o.label === occasion)?.id ?? '',
      headcount: Number(headcount) || 0,
      budgetRange,
      preferredHills,
      priorities,
    })
  }, [searched, occasion, headcount, budgetRange, preferredHills, priorities])

  return (
    <div className="mx-auto max-w-3xl">
      {/* 入力フォーム */}
      <div className="m-4 rounded-xl border border-stone-200 bg-white p-5 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-base font-semibold text-ink-900">用途・要件を入力</h2>
          <button
            onClick={() => setUsePreset(v => !v)}
            className="text-xs text-forest-600 underline underline-offset-2"
          >
            {usePreset ? '手動入力' : '顧客から読み込む'}
          </button>
        </div>

        {usePreset && (
          <div className="mb-4 flex gap-2">
            <select
              value={presetId}
              onChange={e => setPresetId(e.target.value)}
              className="flex-1 rounded-md border border-stone-200 bg-stone-50 px-3 py-2 text-sm"
            >
              {customers.map(c => (
                <option key={c.id} value={c.id}>{c.name}（{c.company}）</option>
              ))}
            </select>
            <button
              onClick={handlePresetLoad}
              className="rounded-md bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-700 transition-colors"
            >
              読み込み
            </button>
          </div>
        )}

        {/* 用途 */}
        <div className="mb-4">
          <label className="mb-2 block text-xs font-semibold text-stone-600">用途（最重要）</label>
          <div className="flex flex-wrap gap-2">
            {OCCASIONS.map(o => (
              <button
                key={o.id}
                onClick={() => setOccasion(o.label)}
                className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  occasion === o.label
                    ? 'border-ink-900 bg-ink-900 text-white'
                    : 'border-stone-200 text-stone-600 hover:border-stone-400'
                }`}
              >
                <span>{o.icon}</span>
                <span>{o.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* 人数 */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">参加人数（名）</label>
            <input
              type="number"
              placeholder="例: 50"
              value={headcount}
              onChange={e => setHeadcount(e.target.value)}
              className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
            />
          </div>

          {/* 予算 */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">予算感</label>
            <input
              type="text"
              placeholder="例: 30〜50万円"
              value={budgetRange}
              onChange={e => setBudgetRange(e.target.value)}
              className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
            />
          </div>

          {/* 日時 */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">希望日時メモ</label>
            <input
              type="text"
              placeholder="例: 今週金曜夜、7月中旬"
              value={dateNote}
              onChange={e => setDateNote(e.target.value)}
              className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
            />
          </div>

          {/* ヒルズ */}
          <div>
            <label className="mb-2 block text-xs font-semibold text-stone-600">希望ヒルズ（複数可）</label>
            <div className="flex flex-wrap gap-1.5">
              {HILLS_OPTIONS.map(h => (
                <button
                  key={h}
                  onClick={() => toggleHills(h)}
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    preferredHills.includes(h)
                      ? 'border-ink-900 bg-ink-900 text-white'
                      : 'border-stone-300 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* こだわり */}
        <div className="mt-4">
          <label className="mb-2 block text-xs font-semibold text-stone-600">こだわり・雰囲気（複数可）</label>
          <div className="flex flex-wrap gap-1.5">
            {PRIORITY_OPTIONS.map(p => (
              <button
                key={p}
                onClick={() => togglePriority(p)}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  priorities.includes(p)
                    ? 'border-forest-600 bg-forest-600 text-white'
                    : 'border-stone-300 text-stone-600 hover:border-stone-400'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setSearched(true)}
          className="mt-5 w-full rounded-lg bg-ink-900 py-3 text-sm font-bold text-white hover:bg-ink-700 transition-colors"
        >
          施設をランキング表示
        </button>
      </div>

      {/* 結果 */}
      {searched && (
        <div className="mx-4 mb-4">
          <h3 className="mb-3 text-sm font-semibold text-stone-600">
            {results.length > 0
              ? `${results.length}施設（適合度順）`
              : '条件に合う施設が見つかりませんでした'}
          </h3>
          <div className="space-y-3">
            {results.map((r, i) => (
              <MatchCard
                key={r.facility.id}
                result={r}
                rank={i + 1}
                selected={selectedFacilities.includes(r.facility.id)}
                onToggle={() => onToggle(r.facility.id)}
                onGoToProposal={onGoToProposal}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MatchCard({
  result: r,
  rank,
  selected,
  onToggle,
  onGoToProposal,
}: {
  result: FacilityMatchResult
  rank: number
  selected: boolean
  onToggle: () => void
  onGoToProposal: () => void
}) {
  const [showReasons, setShowReasons] = useState(false)
  const f = r.facility
  const scoreColor =
    r.score >= 80 ? 'text-emerald-700 bg-emerald-50 border-emerald-200' :
    r.score >= 60 ? 'text-amber-700 bg-amber-50 border-amber-200' :
    'text-stone-600 bg-stone-50 border-stone-200'

  return (
    <div className={`rounded-xl border bg-white p-4 shadow-card transition-all ${
      selected ? 'border-gold-500 ring-2 ring-gold-500/30' : 'border-stone-200'
    }`}>
      <div className="flex items-start gap-3">
        {/* スコア */}
        <div className="flex flex-col items-center shrink-0">
          <span className="text-[10px] font-bold text-stone-400">#{rank}</span>
          <div className={`mt-1 rounded-lg border px-2 py-1 text-center ${scoreColor}`}>
            <p className="text-lg font-black leading-none">{r.score}</p>
            <p className="text-[9px] font-semibold">%適合</p>
          </div>
        </div>

        {/* 情報 */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-ink-900">{f.name}</p>
          <p className="text-xs text-stone-500">{f.buildingShort} {f.floor} / {f.capacity.min}〜{f.capacity.max}名</p>
          <p className="mt-0.5 text-xs text-stone-400">{f.priceNote}</p>

          <button
            onClick={() => setShowReasons(v => !v)}
            className="mt-1.5 text-[11px] text-forest-600 underline underline-offset-2"
          >
            {showReasons ? '▲ 閉じる' : '▼ 選ばれる理由'}
          </button>
          {showReasons && (
            <ul className="mt-1.5 space-y-0.5">
              {r.reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] text-stone-600">
                  <span className="mt-0.5 shrink-0 text-forest-500">✓</span>
                  {reason}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* アクション */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <button
            onClick={onToggle}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
              selected ? 'bg-ink-900 text-white' : 'border border-stone-300 text-stone-600 hover:bg-stone-50'
            }`}
          >
            {selected ? '✓' : '選択'}
          </button>
          {selected && (
            <button
              onClick={onGoToProposal}
              className="rounded-md bg-gold-500 px-3 py-1.5 text-xs font-bold text-ink-900 hover:bg-gold-400"
            >
              提案→
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
