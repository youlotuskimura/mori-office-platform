import { useState } from 'react'
import { facilities, Facility, CATEGORY_LABEL, FacilityCategory } from './data'

const CATEGORIES: { id: FacilityCategory | 'all'; label: string; icon: string }[] = [
  { id: 'all',      label: 'すべて',     icon: '📋' },
  { id: 'event',    label: 'イベント・会議', icon: '🎪' },
  { id: 'culture',  label: '文化・エンタメ', icon: '🎨' },
  { id: 'club',     label: '会員制・接待',  icon: '🥂' },
  { id: 'wellness', label: 'ウェルネス',    icon: '🧘' },
  { id: 'dining',   label: 'ダイニング',    icon: '🍽️' },
  { id: 'hotel',    label: 'ホテル・連携',  icon: '🏨' },
  { id: 'outdoor',  label: '屋外・テラス',  icon: '🌿' },
  { id: 'mobility', label: 'モビリティ',    icon: '🚁' },
]

export default function FacilityDetail() {
  const [filterCategory, setFilterCategory] = useState<FacilityCategory | 'all'>('all')
  const [selectedId, setSelectedId] = useState<string | null>(facilities[0].id)

  const displayFacilities = filterCategory === 'all'
    ? facilities
    : facilities.filter(f => f.category === filterCategory)

  const selected = facilities.find(f => f.id === selectedId) ?? facilities[0]

  return (
    <div className="flex flex-col md:flex-row md:divide-x md:divide-stone-200">
      {/* 左ペイン: カテゴリ + 施設リスト */}
      <div className="shrink-0 md:w-64">
        {/* カテゴリフィルタ */}
        <div className="overflow-x-auto border-b border-stone-200 bg-stone-50">
          <div className="flex min-w-max gap-0 p-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setFilterCategory(cat.id); if (displayFacilities.length > 0 && cat.id !== 'all') { const first = facilities.find(f => f.category === cat.id); if (first) setSelectedId(first.id) } }}
                className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  filterCategory === cat.id
                    ? 'bg-ink-900 text-white'
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 施設リスト */}
        <ul className="divide-y divide-stone-100">
          {displayFacilities.map(f => (
            <li key={f.id}>
              <button
                onClick={() => setSelectedId(f.id)}
                className={`w-full px-4 py-3 text-left transition-colors ${
                  selectedId === f.id
                    ? 'border-r-2 border-ink-900 bg-ink-900/5'
                    : 'hover:bg-stone-50'
                }`}
              >
                <div className="flex items-start justify-between gap-1.5">
                  <p className="text-xs font-semibold leading-snug text-ink-900">{f.name}</p>
                  <span className={`shrink-0 text-[10px] ${
                    f.status === 'available' ? 'text-emerald-500' :
                    f.status === 'limited' ? 'text-amber-500' :
                    f.status === 'reserved' ? 'text-rose-400' : 'text-stone-400'
                  }`}>
                    {f.status === 'available' ? '🟢' : f.status === 'limited' ? '🟡' : f.status === 'reserved' ? '🔴' : '⚪'}
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] text-stone-500">{f.buildingShort} / {f.capacity.max}名まで</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 右ペイン: 施設詳細 */}
      <div className="flex-1 overflow-y-auto">
        {selected && <FacilityDetailPane facility={selected} />}
      </div>
    </div>
  )
}

function FacilityDetailPane({ facility: f }: { facility: Facility }) {
  const availableToday = f.todaySlots.filter(s => s.status === 'available')

  return (
    <div>
      {/* ヒーロー */}
      <div className="archviz relative p-6 text-white">
        <div className="mb-1 flex items-center gap-2">
          <span className="h-px w-5 bg-gold-400" />
          <span className="text-[10px] font-semibold uppercase tracking-brand text-gold-400">
            {CATEGORY_LABEL[f.category]}
          </span>
        </div>
        <h2 className="font-serif text-xl font-semibold leading-snug">{f.name}</h2>
        <p className="mt-0.5 text-xs text-white/60">{f.buildingShort} {f.floor}</p>
        <p className="mt-3 max-w-md text-xs leading-relaxed text-white/75">{f.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge label={`定員 ${f.capacity.min}〜${f.capacity.max}名`} />
          {f.areaSqm && <Badge label={`約${f.areaSqm.toLocaleString()}㎡`} />}
          <Badge label={f.priceNote} />
          {availableToday.length > 0 && (
            <span className="rounded-lg border border-emerald-400/40 bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
              🟢 本日空きあり
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4 p-4">
        {/* 本日のスケジュール */}
        <InfoBlock title="📅 本日の空き状況">
          {f.todaySlots.length > 0 ? (
            <div className="space-y-2">
              {f.todaySlots.map((slot, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  slot.status === 'available' ? 'bg-emerald-50' :
                  slot.status === 'reserved' ? 'bg-rose-50' : 'bg-stone-50'
                }`}>
                  <span className={`h-2 w-2 shrink-0 rounded-full ${
                    slot.status === 'available' ? 'bg-emerald-400' :
                    slot.status === 'reserved' ? 'bg-rose-400' : 'bg-stone-300'
                  }`} />
                  <span className="tabular-nums text-sm font-medium text-stone-800">{slot.from}–{slot.to}</span>
                  {slot.label ? (
                    <span className={`text-xs ${slot.status === 'available' ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {slot.label}
                    </span>
                  ) : (
                    <span className="text-xs text-stone-400">
                      {slot.status === 'available' ? '利用可能' : 'メンテナンス'}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-stone-500">本日の予定なし（要問い合わせ）</p>
          )}
          <p className="mt-2 text-[10px] text-stone-400">更新: {f.lastUpdated}</p>
        </InfoBlock>

        {/* 設備・特徴 */}
        <InfoBlock title="✨ 設備・特徴">
          <ul className="space-y-1.5">
            {f.features.map(feat => (
              <li key={feat} className="flex items-start gap-2 text-sm text-stone-700">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {feat}
              </li>
            ))}
          </ul>
        </InfoBlock>

        {/* 向いている用途 */}
        <InfoBlock title="🎯 おすすめ用途">
          <div className="flex flex-wrap gap-2">
            {f.occasions.map(occ => {
              const label = {
                vip_dinner: '🥂 VIP接待', large_event: '🎪 大規模イベント',
                small_meeting: '📊 少人数会議', wellness: '🧘 ウェルネス',
                ceremony: '🎖️ 式典', media: '🎥 メディア対応',
                recruitment: '👥 採用イベント', teambuilding: '🏆 チームビルディング',
                culture: '🎨 文化体験', client_tour: '🌆 顧客招待',
              }[occ] ?? occ
              return (
                <span key={occ} className="rounded-full border border-forest-500/30 bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700">
                  {label}
                </span>
              )
            })}
          </div>
        </InfoBlock>

        {/* 営業トーク（社内資料） */}
        <div className="rounded-xl border border-gold-500/20 bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center gap-2">
            <h3 className="text-sm font-semibold text-ink-900">💬 営業トーク — 差別化ポイント</h3>
            <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-2 py-0.5 text-[9px] font-bold text-gold-600">
              社内資料 / 顧客直送不可
            </span>
          </div>
          <ul className="space-y-2">
            {f.salesPoints.map((point, i) => (
              <li key={i} className="rounded-lg bg-stone-50 p-3 text-xs leading-relaxed text-stone-700">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* 問い合わせ先 */}
        <div className="rounded-lg bg-ink-900/5 p-3">
          <p className="text-[10px] font-semibold text-stone-500">問い合わせ・予約窓口</p>
          <p className="mt-1 text-xs font-medium text-stone-700">{f.contact}</p>
        </div>
      </div>
    </div>
  )
}

function Badge({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 backdrop-blur">
      <p className="text-xs font-medium text-white">{label}</p>
    </div>
  )
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink-900">{title}</h3>
      {children}
    </div>
  )
}
