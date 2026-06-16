import { useState } from 'react'
import Dashboard from './Dashboard'
import Matching from './Matching'
import Proposal from './Proposal'
import BuildingInfo from './BuildingInfo'
import CRM from './CRM'

type Tab = 'dashboard' | 'matching' | 'proposal' | 'building' | 'crm'

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'dashboard', label: '空室', icon: '🏢' },
  { id: 'matching', label: 'マッチング', icon: '🎯' },
  { id: 'proposal', label: '提案生成', icon: '📄' },
  { id: 'building', label: 'ビル情報', icon: '🗺️' },
  { id: 'crm', label: '商談管理', icon: '📋' },
]

export default function App() {
  const [tab, setTab] = useState<Tab>('dashboard')
  const [selectedUnits, setSelectedUnits] = useState<string[]>([])
  const now = new Date().toLocaleString('ja-JP', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const toggleUnit = (id: string) =>
    setSelectedUnits(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )

  const goToProposal = () => setTab('proposal')

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* ヘッダー */}
      <header className="sticky top-0 z-40 bg-ink-900 text-white shadow-lg">
        <div className="flex items-center justify-between px-4 py-2.5">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-[15px] font-semibold tracking-tight">
                HILLS セールス・コックピット
              </span>
              <span className="rounded-full border border-gold-500/40 bg-gold-500/15 px-2 py-0.5 text-[10px] font-bold text-gold-400">
                社内限定
              </span>
            </div>
            <p className="mt-0.5 text-[10px] leading-none text-white/45">
              架空データ・デモ専用 — 森ビルの公式サービスではありません
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/50">データ取得</p>
            <p className="text-[11px] font-medium text-white/75">{now}</p>
          </div>
        </div>

        {/* タブバー */}
        <div className="flex border-t border-white/10">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative flex min-w-0 flex-1 flex-col items-center gap-0.5 px-1 pb-2.5 pt-2 text-[11px] font-medium transition-colors ${
                tab === t.id
                  ? 'text-gold-400'
                  : 'text-white/55 hover:text-white/85'
              }`}
            >
              {tab === t.id && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gold-400" />
              )}
              <span className="text-[15px] leading-none">{t.icon}</span>
              <span className="whitespace-nowrap">{t.label}</span>
              {t.id === 'proposal' && selectedUnits.length > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[9px] font-bold text-ink-900">
                  {selectedUnits.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </header>

      {/* コンテンツ */}
      <main className="pb-10">
        {tab === 'dashboard' && (
          <Dashboard
            selectedUnits={selectedUnits}
            onToggleUnit={toggleUnit}
            onGoToProposal={goToProposal}
          />
        )}
        {tab === 'matching' && (
          <Matching
            selectedUnits={selectedUnits}
            onToggleUnit={toggleUnit}
            onGoToProposal={goToProposal}
          />
        )}
        {tab === 'proposal' && (
          <Proposal selectedUnits={selectedUnits} onClearUnits={() => setSelectedUnits([])} />
        )}
        {tab === 'building' && <BuildingInfo />}
        {tab === 'crm' && <CRM />}
      </main>
    </div>
  )
}
