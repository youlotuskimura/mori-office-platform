import { useState, useMemo } from 'react'
import { facilities, Facility, CATEGORY_LABEL, FacilityCategory } from './data'

const STATUS_CONFIG = {
  available:   { icon: '🟢', label: '空きあり',   cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  limited:     { icon: '🟡', label: '残りわずか', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
  reserved:    { icon: '🔴', label: '予約済み',   cls: 'bg-rose-50 text-rose-700 border-rose-200' },
  maintenance: { icon: '⚪', label: 'メンテ中',   cls: 'bg-stone-100 text-stone-500 border-stone-200' },
}

const HILLS_OPTIONS = ['虎ノ門', '麻布台', '六本木', 'アーク']
const CATEGORIES: FacilityCategory[] = ['event', 'culture', 'club', 'wellness', 'dining', 'hotel', 'outdoor', 'mobility']

interface Props {
  selectedFacilities: string[]
  onToggle: (id: string) => void
  onGoToProposal: () => void
}

export default function FacilityDashboard({ selectedFacilities, onToggle, onGoToProposal }: Props) {
  const [filterHills, setFilterHills] = useState<string[]>([])
  const [filterCategory, setFilterCategory] = useState<FacilityCategory | 'all'>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterCapacityMin, setFilterCapacityMin] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const toggleHills = (h: string) =>
    setFilterHills(prev => prev.includes(h) ? prev.filter(x => x !== h) : [...prev, h])

  const filtered = useMemo(() => {
    return facilities.filter(f => {
      if (filterHills.length > 0 && !filterHills.some(h => f.buildingShort.includes(h))) return false
      if (filterCategory !== 'all' && f.category !== filterCategory) return false
      if (filterStatus !== 'all' && f.status !== filterStatus) return false
      if (filterCapacityMin && f.capacity.max < Number(filterCapacityMin)) return false
      return true
    })
  }, [filterHills, filterCategory, filterStatus, filterCapacityMin])

  const activeCount = [
    filterHills.length > 0,
    filterCategory !== 'all',
    filterStatus !== 'all',
    filterCapacityMin,
  ].filter(Boolean).length

  return (
    <div>
      {/* 操作バー */}
      <div className="sticky top-[88px] z-30 border-b border-stone-200 bg-white/95 px-4 py-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(v => !v)}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              showFilters || activeCount > 0
                ? 'border-ink-900 bg-ink-900 text-white'
                : 'border-stone-300 text-stone-600 hover:border-stone-400'
            }`}
          >
            絞り込み
            {activeCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[9px] font-bold text-ink-900">
                {activeCount}
              </span>
            )}
          </button>
          {/* カテゴリ横スクロール */}
          <div className="flex gap-1.5 overflow-x-auto">
            {(['all', ...CATEGORIES] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  filterCategory === cat
                    ? 'bg-ink-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'all' ? '全カテゴリ' : CATEGORY_LABEL[cat]}
              </button>
            ))}
          </div>
          <div className="ml-auto shrink-0 text-xs text-stone-500">{filtered.length}件</div>
        </div>

        {showFilters && (
          <div className="mt-3 space-y-3">
            <div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-stone-500">ヒルズ</p>
              <div className="flex flex-wrap gap-1.5">
                {HILLS_OPTIONS.map(h => (
                  <button
                    key={h}
                    onClick={() => toggleHills(h)}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                      filterHills.includes(h)
                        ? 'border-ink-900 bg-ink-900 text-white'
                        : 'border-stone-300 text-stone-600'
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-stone-500">状況</p>
                <select
                  value={filterStatus}
                  onChange={e => setFilterStatus(e.target.value)}
                  className="rounded-md border border-stone-200 bg-stone-50 px-2 py-1.5 text-xs"
                >
                  <option value="all">すべて</option>
                  <option value="available">🟢 空きあり</option>
                  <option value="limited">🟡 残りわずか</option>
                  <option value="reserved">🔴 予約済み</option>
                </select>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-stone-500">最小定員 (名)</p>
                <input
                  type="number"
                  placeholder="例: 100"
                  value={filterCapacityMin}
                  onChange={e => setFilterCapacityMin(e.target.value)}
                  className="w-24 rounded-md border border-stone-200 bg-stone-50 px-2 py-1.5 text-xs"
                />
              </div>
              <div className="flex items-end pb-0.5">
                <button
                  onClick={() => { setFilterHills([]); setFilterCategory('all'); setFilterStatus('all'); setFilterCapacityMin('') }}
                  className="text-xs text-stone-400 underline underline-offset-2 hover:text-stone-600"
                >
                  クリア
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 選択中バナー */}
      {selectedFacilities.length > 0 && (
        <div className="mx-4 mt-3 flex items-center justify-between rounded-lg border border-gold-500/40 bg-gold-500/10 px-4 py-2.5">
          <span className="text-sm font-medium text-gold-600">{selectedFacilities.length}施設を選択中</span>
          <button
            onClick={onGoToProposal}
            className="rounded-md bg-gold-500 px-4 py-1.5 text-sm font-bold text-ink-900 hover:bg-gold-400 transition-colors"
          >
            提案書を生成 →
          </button>
        </div>
      )}

      {/* 施設カード */}
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(f => (
          <FacilityCard
            key={f.id}
            facility={f}
            selected={selectedFacilities.includes(f.id)}
            onToggle={() => onToggle(f.id)}
            onGoToProposal={onGoToProposal}
          />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-16 text-center text-stone-400">
            <p className="text-3xl">🔍</p>
            <p className="mt-2 text-sm">条件に合う施設が見つかりません</p>
          </div>
        )}
      </div>
    </div>
  )
}

function FacilityCard({
  facility: f,
  selected,
  onToggle,
  onGoToProposal,
}: {
  facility: Facility
  selected: boolean
  onToggle: () => void
  onGoToProposal: () => void
}) {
  const status = STATUS_CONFIG[f.status]
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`rounded-xl border bg-white shadow-card transition-all ${
      selected ? 'border-gold-500 ring-2 ring-gold-500/30' : 'border-stone-200 hover:border-stone-300'
    }`}>
      <div className="p-4">
        {/* ヘッダー */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium text-stone-500">
                {CATEGORY_LABEL[f.category]}
              </span>
              <span className="text-[10px] text-stone-400">{f.buildingShort} {f.floor}</span>
            </div>
            <p className="mt-1 text-sm font-semibold leading-snug text-ink-900">{f.name}</p>
          </div>
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${status.cls}`}>
            {status.icon} {status.label}
          </span>
        </div>

        {/* 定員・料金 */}
        <div className="mb-2.5 flex flex-wrap gap-3">
          <div>
            <p className="text-[10px] text-stone-400">定員</p>
            <p className="text-sm font-bold text-ink-900">{f.capacity.min}〜{f.capacity.max}<span className="text-xs font-normal text-stone-500">名</span></p>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] text-stone-400">料金目安</p>
            <p className="text-xs font-medium text-stone-700 leading-snug">{f.priceNote}</p>
          </div>
        </div>

        {/* 本日のスケジュール */}
        <div className="mb-3">
          <p className="mb-1 text-[10px] font-semibold text-stone-500">本日の空き状況</p>
          {f.todaySlots.length > 0 ? (
            <div className="space-y-1">
              {f.todaySlots.map((slot, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 shrink-0 rounded-full ${
                    slot.status === 'available' ? 'bg-emerald-400' :
                    slot.status === 'reserved' ? 'bg-rose-400' : 'bg-stone-300'
                  }`} />
                  <span className="text-[11px] text-stone-600 tabular-nums">{slot.from}–{slot.to}</span>
                  {slot.label && (
                    <span className={`text-[10px] truncate ${
                      slot.status === 'available' ? 'text-emerald-600' :
                      slot.status === 'reserved' ? 'text-rose-500' : 'text-stone-400'
                    }`}>{slot.label}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[11px] text-stone-400">本日の予定なし（要問い合わせ）</p>
          )}
        </div>

        {/* フィーチャータグ */}
        <div className="mb-3 flex flex-wrap gap-1">
          {f.features.slice(0, 3).map(feat => (
            <span key={feat} className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] text-stone-600 leading-tight">
              {feat}
            </span>
          ))}
          {f.features.length > 3 && (
            <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] text-stone-400">+{f.features.length - 3}</span>
          )}
        </div>

        {/* 営業トーク展開 */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="mb-2 text-[11px] text-forest-600 underline underline-offset-2 hover:text-forest-700"
        >
          {expanded ? '▲ 営業メモを閉じる' : '▼ 営業メモ（差別化ポイント）'}
        </button>
        {expanded && (
          <ul className="mb-2 space-y-1">
            {f.salesPoints.map((p, i) => (
              <li key={i} className="text-[11px] leading-relaxed text-stone-600">{p}</li>
            ))}
          </ul>
        )}

        {/* フッター */}
        <div className="flex items-center justify-between border-t border-stone-100 pt-2.5">
          <p className="text-[10px] text-stone-400">更新 {f.lastUpdated}</p>
          <div className="flex gap-2">
            <button
              onClick={onToggle}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                selected
                  ? 'bg-ink-900 text-white hover:bg-ink-700'
                  : 'border border-stone-300 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {selected ? '✓ 選択中' : '選択'}
            </button>
            {selected && (
              <button
                onClick={onGoToProposal}
                className="rounded-md bg-gold-500 px-3 py-1.5 text-xs font-bold text-ink-900 hover:bg-gold-400 transition-colors"
              >
                提案 →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
