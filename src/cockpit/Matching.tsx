import { useState, useMemo } from 'react'
import { units, customers, calcMatch, calcRecommendedArea, MatchResult } from './data'

interface Props {
  selectedUnits: string[]
  onToggleUnit: (id: string) => void
  onGoToProposal: () => void
}

const PRIORITY_OPTIONS = [
  '採用力', 'スタートアップ環境', 'ブランド', '立地・アクセス',
  '格式', 'セキュリティ', 'ウェルネス環境', 'グリーン設計',
  '研究者採用', 'クリエイター採用', 'デザイン環境',
  '外国人エグゼクティブ受入', 'インターナショナル環境', 'ホテル近接',
]

const INDUSTRY_OPTIONS = [
  'IT・スタートアップ', '金融・投資', '医療・バイオ', 'クリエイティブ・広告',
  '外資・グローバル', 'コンサル・専門職', '商社・製造', 'メディア',
]

const AREA_OPTIONS = ['虎ノ門', '麻布台', '六本木', '赤坂', 'エリア不問']
const TIMELINE_OPTIONS = ['即入居', '2026年7〜8月', '2026年9〜10月', '2026年11月以降']

export default function Matching({ selectedUnits, onToggleUnit, onGoToProposal }: Props) {
  const [usePreset, setUsePreset] = useState(false)
  const [presetCustomerId, setPresetCustomerId] = useState('C001')
  const [headcount, setHeadcount] = useState('')
  const [areaMin, setAreaMin] = useState('')
  const [areaMax, setAreaMax] = useState('')
  const [budgetMax, setBudgetMax] = useState('')
  const [timeline, setTimeline] = useState('即入居')
  const [industry, setIndustry] = useState('')
  const [preferredArea, setPreferredArea] = useState<string[]>([])
  const [priorities, setPriorities] = useState<string[]>([])
  const [searched, setSearched] = useState(false)

  // 人数から推奨面積を自動換算
  const recArea = headcount ? calcRecommendedArea(Number(headcount)) : null

  const handleAutoFill = () => {
    const rec = calcRecommendedArea(Number(headcount))
    setAreaMin(String(rec.min))
    setAreaMax(String(rec.max))
  }

  const handlePresetLoad = () => {
    const c = customers.find(c => c.id === presetCustomerId)
    if (!c) return
    setHeadcount(String(c.requirements.headcount))
    setAreaMin(String(c.requirements.areaMin))
    setAreaMax(String(c.requirements.areaMax))
    setBudgetMax(String(c.requirements.budgetMax))
    setTimeline(c.requirements.timeline)
    setIndustry(c.industry)
    setPreferredArea(c.requirements.preferredArea)
    setPriorities(c.requirements.priorities)
  }

  const togglePriority = (p: string) =>
    setPriorities(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])
  const toggleArea = (a: string) =>
    setPreferredArea(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a])

  const results: MatchResult[] = useMemo(() => {
    if (!searched) return []
    const fakeCustomer = {
      id: 'temp',
      name: '', company: '', industry, phone: '', inquiryDate: '',
      requirements: {
        headcount: Number(headcount) || 50,
        areaMin: Number(areaMin) || 0,
        areaMax: Number(areaMax) || 9999,
        budgetMax: Number(budgetMax) || 9999,
        preferredArea: preferredArea.length > 0 ? preferredArea : ['虎ノ門', '麻布台', '六本木', '赤坂'],
        timeline,
        priorities,
      },
    }
    return units
      .map(u => calcMatch(fakeCustomer as any, u))
      .filter((r): r is MatchResult => r !== null && r.score >= 10)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
  }, [searched, headcount, areaMin, areaMax, budgetMax, timeline, industry, preferredArea, priorities])

  const handleSearch = () => setSearched(true)

  return (
    <div className="mx-auto max-w-3xl">
      {/* 入力フォーム */}
      <div className="m-4 rounded-xl border border-stone-200 bg-white p-5 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-base font-semibold text-ink-900">顧客要件入力</h2>
          <button
            onClick={() => setUsePreset(v => !v)}
            className="text-xs text-forest-600 underline underline-offset-2 hover:text-forest-700"
          >
            {usePreset ? '手動入力に戻す' : '顧客から呼び出す'}
          </button>
        </div>

        {/* プリセット読み込み */}
        {usePreset && (
          <div className="mb-4 flex gap-2">
            <select
              value={presetCustomerId}
              onChange={e => setPresetCustomerId(e.target.value)}
              className="flex-1 rounded-md border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700"
            >
              {customers.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}（{c.company}）
                </option>
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

        <div className="grid gap-4 sm:grid-cols-2">
          {/* 人数 */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">
              人数（名）→ 推奨面積を自動換算
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="例: 80"
                value={headcount}
                onChange={e => setHeadcount(e.target.value)}
                className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
              />
              <button
                onClick={handleAutoFill}
                disabled={!headcount}
                className="whitespace-nowrap rounded-md border border-stone-300 px-3 py-2 text-xs font-medium text-stone-600 hover:bg-stone-50 disabled:opacity-40 transition-colors"
              >
                換算
              </button>
            </div>
            {recArea && (
              <p className="mt-1 text-[11px] text-forest-600">
                → 推奨面積: {recArea.min}〜{recArea.max}坪（1名あたり3〜4坪換算）
              </p>
            )}
          </div>

          {/* 面積レンジ */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">希望面積（坪）</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="下限"
                value={areaMin}
                onChange={e => setAreaMin(e.target.value)}
                className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
              />
              <span className="text-stone-400">〜</span>
              <input
                type="number"
                placeholder="上限"
                value={areaMax}
                onChange={e => setAreaMax(e.target.value)}
                className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* 予算 */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">予算上限（月額・万円）</label>
            <input
              type="number"
              placeholder="例: 280"
              value={budgetMax}
              onChange={e => setBudgetMax(e.target.value)}
              className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
            />
          </div>

          {/* 入居時期 */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">希望入居時期</label>
            <select
              value={timeline}
              onChange={e => setTimeline(e.target.value)}
              className="w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm"
            >
              {TIMELINE_OPTIONS.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* 業種 */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">業種</label>
            <select
              value={industry}
              onChange={e => setIndustry(e.target.value)}
              className="w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm"
            >
              <option value="">選択してください</option>
              {INDUSTRY_OPTIONS.map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          {/* 希望エリア */}
          <div>
            <label className="mb-2 block text-xs font-semibold text-stone-600">希望エリア（複数可）</label>
            <div className="flex flex-wrap gap-1.5">
              {AREA_OPTIONS.map(a => (
                <button
                  key={a}
                  onClick={() => toggleArea(a)}
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    preferredArea.includes(a)
                      ? 'border-ink-900 bg-ink-900 text-white'
                      : 'border-stone-300 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 重視点 */}
        <div className="mt-4">
          <label className="mb-2 block text-xs font-semibold text-stone-600">重視点（複数可）</label>
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
          onClick={handleSearch}
          className="mt-5 w-full rounded-lg bg-ink-900 py-3 text-sm font-bold text-white hover:bg-ink-700 transition-colors"
        >
          候補区画をランキング表示
        </button>
      </div>

      {/* 結果 */}
      {searched && (
        <div className="mx-4 mb-4">
          <h3 className="mb-3 text-sm font-semibold text-stone-600">
            {results.length > 0
              ? `${results.length}件の候補区画（スコア順）`
              : '条件に合う区画が見つかりませんでした'}
          </h3>
          <div className="space-y-3">
            {results.map((r, i) => (
              <MatchCard
                key={r.unit.id}
                result={r}
                rank={i + 1}
                selected={selectedUnits.includes(r.unit.id)}
                onToggle={() => onToggleUnit(r.unit.id)}
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
  result,
  rank,
  selected,
  onToggle,
  onGoToProposal,
}: {
  result: MatchResult
  rank: number
  selected: boolean
  onToggle: () => void
  onGoToProposal: () => void
}) {
  const { unit, building, score, reasons, monthlyRent } = result
  const [showReasons, setShowReasons] = useState(false)

  const scoreColor =
    score >= 80 ? 'text-emerald-700 bg-emerald-50 border-emerald-200' :
    score >= 60 ? 'text-amber-700 bg-amber-50 border-amber-200' :
    'text-stone-600 bg-stone-50 border-stone-200'

  return (
    <div
      className={`rounded-xl border bg-white p-4 shadow-card transition-all ${
        selected ? 'border-gold-500 ring-2 ring-gold-500/30' : 'border-stone-200'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* ランク & スコア */}
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold text-stone-400">#{rank}</span>
          <div className={`mt-1 rounded-lg border px-2.5 py-1 text-center ${scoreColor}`}>
            <p className="text-lg font-black leading-none">{score}</p>
            <p className="text-[9px] font-semibold">%適合</p>
          </div>
        </div>

        {/* 情報 */}
        <div className="flex-1 min-w-0">
          <p className="truncate text-sm font-semibold text-ink-900">{building.name}</p>
          <p className="text-xs text-stone-500">{unit.floor}F / {unit.area}坪 / {unit.layoutType}</p>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="font-semibold text-forest-700">月額約{monthlyRent}万円</span>
            <span className="text-stone-400">{unit.rentPerTsubo}万/坪</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
              unit.status === 'available' ? 'bg-emerald-50 text-emerald-700' :
              unit.status === 'negotiating' ? 'bg-amber-50 text-amber-700' :
              'bg-rose-50 text-rose-700'
            }`}>
              {unit.status === 'available' ? '🟢 即入居可' : unit.status === 'negotiating' ? '🟡 調整中' : '🔴 成約間近'}
            </span>
          </div>
          <button
            onClick={() => setShowReasons(v => !v)}
            className="mt-1.5 text-[11px] text-forest-600 underline underline-offset-2 hover:text-forest-700"
          >
            {showReasons ? '▲ 適合理由を閉じる' : '▼ 適合理由を見る'}
          </button>
          {showReasons && (
            <ul className="mt-2 space-y-1">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] text-stone-600">
                  <span className="mt-0.5 shrink-0 text-forest-500">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* アクション */}
        <div className="flex flex-col gap-1.5">
          <button
            onClick={onToggle}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
              selected
                ? 'bg-ink-900 text-white'
                : 'border border-stone-300 text-stone-600 hover:bg-stone-50'
            }`}
          >
            {selected ? '✓' : '選択'}
          </button>
          {selected && (
            <button
              onClick={onGoToProposal}
              className="rounded-md bg-gold-500 px-3 py-1.5 text-xs font-bold text-ink-900 hover:bg-gold-400 transition-colors"
            >
              提案→
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
