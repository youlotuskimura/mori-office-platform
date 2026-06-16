import { useState, useMemo } from 'react'
import { units, buildings, Unit } from './data'

const STATUS_MAP = {
  available: { icon: '🟢', label: '即入居可', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  negotiating: { icon: '🟡', label: '調整中', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
  closing: { icon: '🔴', label: '成約間近', cls: 'bg-rose-50 text-rose-700 border-rose-200' },
}

interface Props {
  selectedUnits: string[]
  onToggleUnit: (id: string) => void
  onGoToProposal: () => void
}

export default function Dashboard({ selectedUnits, onToggleUnit, onGoToProposal }: Props) {
  const [filterBuilding, setFilterBuilding] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterAreaMin, setFilterAreaMin] = useState<string>('')
  const [filterAreaMax, setFilterAreaMax] = useState<string>('')
  const [filterRentMax, setFilterRentMax] = useState<string>('')
  const [onlyImmediate, setOnlyImmediate] = useState(false)
  const [sortKey, setSortKey] = useState<'area' | 'rent' | 'floor'>('area')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let list = [...units]
    if (filterBuilding !== 'all') list = list.filter(u => u.buildingId === filterBuilding)
    if (filterStatus !== 'all') list = list.filter(u => u.status === filterStatus)
    if (filterAreaMin) list = list.filter(u => u.area >= Number(filterAreaMin))
    if (filterAreaMax) list = list.filter(u => u.area <= Number(filterAreaMax))
    if (filterRentMax) list = list.filter(u => u.rentPerTsubo <= Number(filterRentMax))
    if (onlyImmediate) list = list.filter(u => u.status === 'available')
    list.sort((a, b) =>
      sortKey === 'area' ? b.area - a.area :
      sortKey === 'rent' ? a.rentPerTsubo - b.rentPerTsubo :
      b.floor - a.floor
    )
    return list
  }, [filterBuilding, filterStatus, filterAreaMin, filterAreaMax, filterRentMax, onlyImmediate, sortKey])

  const activeFiltersCount = [
    filterBuilding !== 'all',
    filterStatus !== 'all',
    filterAreaMin || filterAreaMax,
    filterRentMax,
    onlyImmediate,
  ].filter(Boolean).length

  return (
    <div>
      {/* 操作バー */}
      <div className="sticky top-[88px] z-30 border-b border-stone-200 bg-white/95 px-4 py-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(v => !v)}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              showFilters || activeFiltersCount > 0
                ? 'border-ink-900 bg-ink-900 text-white'
                : 'border-stone-300 text-stone-600 hover:border-stone-400'
            }`}
          >
            <span>絞り込み</span>
            {activeFiltersCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[9px] font-bold text-ink-900">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-1 overflow-x-auto">
            <span className="text-xs text-stone-500 whitespace-nowrap">並び:</span>
            {(['area', 'rent', 'floor'] as const).map(k => (
              <button
                key={k}
                onClick={() => setSortKey(k)}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                  sortKey === k ? 'bg-ink-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {k === 'area' ? '面積順' : k === 'rent' ? '賃料順' : 'フロア順'}
              </button>
            ))}
          </div>

          <div className="ml-auto text-xs text-stone-500 whitespace-nowrap">
            {filtered.length}件
          </div>
        </div>

        {/* フィルタパネル */}
        {showFilters && (
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-2 sm:col-span-1">
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-stone-500">ビル</label>
              <select
                value={filterBuilding}
                onChange={e => setFilterBuilding(e.target.value)}
                className="w-full rounded-md border border-stone-200 bg-stone-50 px-2 py-1.5 text-xs text-stone-700"
              >
                <option value="all">全ビル</option>
                {buildings.map(b => (
                  <option key={b.id} value={b.id}>{b.shortName}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-stone-500">面積 (坪)</label>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="下限"
                  value={filterAreaMin}
                  onChange={e => setFilterAreaMin(e.target.value)}
                  className="w-full rounded-md border border-stone-200 bg-stone-50 px-2 py-1.5 text-xs"
                />
                <input
                  type="number"
                  placeholder="上限"
                  value={filterAreaMax}
                  onChange={e => setFilterAreaMax(e.target.value)}
                  className="w-full rounded-md border border-stone-200 bg-stone-50 px-2 py-1.5 text-xs"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-stone-500">賃料上限 (万/坪)</label>
              <input
                type="number"
                placeholder="例: 10.0"
                value={filterRentMax}
                onChange={e => setFilterRentMax(e.target.value)}
                className="w-full rounded-md border border-stone-200 bg-stone-50 px-2 py-1.5 text-xs"
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-stone-500">ステータス</label>
              <select
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="w-full rounded-md border border-stone-200 bg-stone-50 px-2 py-1.5 text-xs"
              >
                <option value="all">すべて</option>
                <option value="available">🟢 即入居可</option>
                <option value="negotiating">🟡 調整中</option>
                <option value="closing">🔴 成約間近</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={onlyImmediate}
                  onChange={e => setOnlyImmediate(e.target.checked)}
                  className="h-4 w-4 accent-ink-900"
                />
                <span className="text-xs font-medium text-stone-700">即入居のみ</span>
              </label>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilterBuilding('all')
                  setFilterStatus('all')
                  setFilterAreaMin('')
                  setFilterAreaMax('')
                  setFilterRentMax('')
                  setOnlyImmediate(false)
                }}
                className="text-xs text-stone-400 underline underline-offset-2 hover:text-stone-600"
              >
                クリア
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 選択中の提案ボタン */}
      {selectedUnits.length > 0 && (
        <div className="mx-4 mt-3 flex items-center justify-between rounded-lg border border-gold-500/40 bg-gold-500/10 px-4 py-2.5">
          <span className="text-sm font-medium text-gold-600">
            {selectedUnits.length}区画を選択中
          </span>
          <button
            onClick={onGoToProposal}
            className="rounded-md bg-gold-500 px-4 py-1.5 text-sm font-bold text-ink-900 hover:bg-gold-400 transition-colors"
          >
            提案を生成 →
          </button>
        </div>
      )}

      {/* ユニットカードグリッド */}
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(unit => (
          <UnitCard
            key={unit.id}
            unit={unit}
            selected={selectedUnits.includes(unit.id)}
            onToggle={() => onToggleUnit(unit.id)}
            onGoToProposal={onGoToProposal}
          />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-16 text-center text-stone-400">
            <p className="text-3xl">🔍</p>
            <p className="mt-2 text-sm">条件に合う区画が見つかりません</p>
          </div>
        )}
      </div>
    </div>
  )
}

function UnitCard({
  unit,
  selected,
  onToggle,
  onGoToProposal,
}: {
  unit: Unit
  selected: boolean
  onToggle: () => void
  onGoToProposal: () => void
}) {
  const building = buildings.find(b => b.id === unit.buildingId)!
  const status = STATUS_MAP[unit.status]
  const monthlyRent = Math.round(unit.area * unit.rentPerTsubo)

  return (
    <div
      className={`rounded-xl border bg-white p-4 shadow-card transition-all ${
        selected
          ? 'border-gold-500 ring-2 ring-gold-500/30'
          : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
      }`}
    >
      {/* ヘッダー行 */}
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-ink-900">{building.name}</p>
          <p className="text-[11px] text-stone-500">{unit.floor}F / {unit.layoutType}</p>
        </div>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${status.cls}`}>
          {status.icon} {status.label}
        </span>
      </div>

      {/* 数値行 */}
      <div className="mb-3 grid grid-cols-2 gap-x-3 gap-y-1">
        <div>
          <p className="text-[10px] text-stone-400">面積</p>
          <p className="text-lg font-bold leading-tight text-ink-900">
            {unit.area}<span className="text-xs font-normal text-stone-500"> 坪</span>
          </p>
        </div>
        <div>
          <p className="text-[10px] text-stone-400">坪単価</p>
          <p className="text-lg font-bold leading-tight text-ink-900">
            {unit.rentPerTsubo}<span className="text-xs font-normal text-stone-500"> 万/坪</span>
          </p>
        </div>
        <div>
          <p className="text-[10px] text-stone-400">月額概算</p>
          <p className="text-sm font-semibold text-forest-700">
            約{monthlyRent}万円
          </p>
        </div>
        <div>
          <p className="text-[10px] text-stone-400">入居可能</p>
          <p className="text-sm font-medium text-stone-700">{unit.availableFrom}</p>
        </div>
      </div>

      {/* フィーチャータグ */}
      <div className="mb-3 flex flex-wrap gap-1">
        {unit.features.map(f => (
          <span key={f} className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] text-stone-600">
            {f}
          </span>
        ))}
      </div>

      {/* フッター行 */}
      <div className="flex items-center justify-between border-t border-stone-100 pt-2.5">
        <p className="text-[10px] text-stone-400">更新 {unit.lastUpdated}</p>
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
  )
}
