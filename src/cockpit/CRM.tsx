import React, { useState } from 'react'
import { customers, deals, Deal, TimelineEvent } from './data'

const STAGE_MAP = {
  inquiry: { label: '初回問い合わせ', color: 'bg-stone-100 text-stone-600', step: 1 },
  proposal: { label: '提案中', color: 'bg-blue-50 text-blue-700', step: 2 },
  tour: { label: '内見済み', color: 'bg-amber-50 text-amber-700', step: 3 },
  negotiation: { label: '交渉中', color: 'bg-purple-50 text-purple-700', step: 4 },
  closed: { label: '成約', color: 'bg-emerald-50 text-emerald-700', step: 5 },
}

const EVENT_ICON: Record<TimelineEvent['type'], string> = {
  inquiry: '📩',
  proposal: '📄',
  tour: '🏢',
  negotiation: '🤝',
  note: '📝',
  closed: '✅',
}

export default function CRM() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(customers[0].id)
  const [localDeals, setLocalDeals] = useState(deals)
  const [noteText, setNoteText] = useState('')
  const [showNoteInput, setShowNoteInput] = useState(false)

  const customer = customers.find(c => c.id === selectedCustomerId)!
  const deal = localDeals.find(d => d.customerId === selectedCustomerId)

  const addProposalLog = () => {
    if (!deal) return
    const newEvent: TimelineEvent = {
      date: new Date().toISOString().split('T')[0],
      type: 'proposal',
      title: '提案送付（コックピット生成）',
      detail: '区画提案書をコックピットから生成・送付しました。（デモ動作）',
    }
    setLocalDeals(prev =>
      prev.map(d =>
        d.id === deal.id
          ? { ...d, timeline: [...d.timeline, newEvent], stage: 'proposal' as Deal['stage'] }
          : d
      )
    )
  }

  const addNote = () => {
    if (!deal || !noteText.trim()) return
    const newEvent: TimelineEvent = {
      date: new Date().toISOString().split('T')[0],
      type: 'note',
      title: '営業メモ',
      detail: noteText,
    }
    setLocalDeals(prev =>
      prev.map(d =>
        d.id === deal.id ? { ...d, timeline: [...d.timeline, newEvent] } : d
      )
    )
    setNoteText('')
    setShowNoteInput(false)
  }

  const advanceStage = () => {
    if (!deal) return
    const stages: Deal['stage'][] = ['inquiry', 'proposal', 'tour', 'negotiation', 'closed']
    const currentIdx = stages.indexOf(deal.stage)
    if (currentIdx === stages.length - 1) return
    const nextStage = stages[currentIdx + 1]
    const stageLabel = STAGE_MAP[nextStage].label
    const newEvent: TimelineEvent = {
      date: new Date().toISOString().split('T')[0],
      type: nextStage,
      title: `ステージ更新: ${stageLabel}`,
      detail: 'ステータスを次フェーズへ更新しました。（デモ動作）',
    }
    setLocalDeals(prev =>
      prev.map(d =>
        d.id === deal.id
          ? { ...d, stage: nextStage, timeline: [...d.timeline, newEvent] }
          : d
      )
    )
  }

  return (
    <div className="flex h-full flex-col md:flex-row md:divide-x md:divide-stone-200">
      {/* 顧客リスト (左/上) */}
      <div className="shrink-0 overflow-y-auto md:w-64">
        <div className="border-b border-stone-200 bg-stone-50 px-4 py-2.5">
          <p className="text-xs font-semibold text-stone-500">担当顧客 {customers.length}件</p>
        </div>
        <ul className="divide-y divide-stone-100">
          {customers.map(c => {
            const d = localDeals.find(x => x.customerId === c.id)
            const stage = d ? STAGE_MAP[d.stage] : null
            return (
              <li key={c.id}>
                <button
                  onClick={() => setSelectedCustomerId(c.id)}
                  className={`w-full px-4 py-3 text-left transition-colors hover:bg-stone-50 ${
                    selectedCustomerId === c.id ? 'bg-ink-900/5 border-r-2 border-ink-900' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink-900">{c.name}</p>
                      <p className="truncate text-[11px] text-stone-500">{c.company}</p>
                    </div>
                    {stage && (
                      <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold ${stage.color}`}>
                        {stage.label}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[10px] text-stone-400">{c.industry}</p>
                  {d && (
                    <div className="mt-1.5">
                      <ProbabilityBar value={d.probability} />
                      <p className="mt-0.5 text-[9px] text-stone-400">確度 {d.probability}%</p>
                    </div>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* 商談詳細 (右/下) */}
      <div className="flex-1 overflow-y-auto">
        {/* 顧客情報ヘッダー */}
        <div className="border-b border-stone-200 bg-white px-4 py-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-serif text-lg font-semibold text-ink-900">{customer.name}</h2>
              <p className="text-sm text-stone-600">{customer.company}</p>
              <p className="mt-0.5 text-xs text-stone-400">
                {customer.industry} / 問い合わせ: {customer.inquiryDate}
              </p>
            </div>
            {deal && (
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${STAGE_MAP[deal.stage].color}`}>
                  {STAGE_MAP[deal.stage].label}
                </span>
                <span className="text-sm font-bold text-stone-700">確度 {deal.probability}%</span>
              </div>
            )}
          </div>

          {/* 要件サマリ */}
          {customer.requirements && (
            <div className="mt-3 rounded-lg bg-stone-50 p-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-stone-500">顧客要件</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
                <ReqItem label="人数" value={`${customer.requirements.headcount}名`} />
                <ReqItem
                  label="希望面積"
                  value={`${customer.requirements.areaMin}〜${customer.requirements.areaMax}坪`}
                />
                <ReqItem label="予算" value={`月${customer.requirements.budgetMax}万円`} />
                <ReqItem label="入居時期" value={customer.requirements.timeline} />
                <ReqItem label="希望エリア" value={customer.requirements.preferredArea.join('・')} />
                <ReqItem label="重視点" value={customer.requirements.priorities.slice(0, 2).join('・')} />
              </div>
            </div>
          )}
        </div>

        {/* ステージプログレス */}
        {deal && (
          <div className="border-b border-stone-200 bg-white px-4 py-3">
            <div className="flex items-center gap-1">
              {(['inquiry', 'proposal', 'tour', 'negotiation', 'closed'] as Deal['stage'][]).map(
                (stage, i, arr) => {
                  const current = STAGE_MAP[deal.stage].step
                  const thisStep = STAGE_MAP[stage].step
                  return (
                    <React.Fragment key={stage}>
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                          thisStep <= current
                            ? 'bg-ink-900 text-white'
                            : 'bg-stone-200 text-stone-400'
                        }`}
                      >
                        {thisStep <= current ? '✓' : thisStep}
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          className={`h-0.5 flex-1 rounded-full transition-colors ${
                            thisStep < current ? 'bg-ink-900' : 'bg-stone-200'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  )
                }
              )}
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] text-stone-400">
              <span>問い合わせ</span>
              <span>提案</span>
              <span>内見</span>
              <span>交渉</span>
              <span>成約</span>
            </div>
          </div>
        )}

        {/* アクションバー */}
        {deal && (
          <div className="border-b border-stone-200 bg-stone-50 px-4 py-2.5">
            <div className="mb-1.5 flex items-center gap-2 text-xs text-stone-500">
              <span className="font-medium">次アクション:</span>
              <span className="font-semibold text-ink-900">{deal.nextAction}</span>
              <span className="text-stone-400">({deal.nextActionDate})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={addProposalLog}
                className="rounded-md bg-ink-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-ink-700 transition-colors"
              >
                📄 提案送付をログ追加
              </button>
              <button
                onClick={advanceStage}
                disabled={deal.stage === 'closed'}
                className="rounded-md border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 disabled:opacity-40 transition-colors"
              >
                → ステージを進める
              </button>
              <button
                onClick={() => setShowNoteInput(v => !v)}
                className="rounded-md border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
              >
                📝 メモを追加
              </button>
            </div>
            {showNoteInput && (
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={noteText}
                  onChange={e => setNoteText(e.target.value)}
                  placeholder="営業メモを入力..."
                  className="flex-1 rounded-md border border-stone-200 px-3 py-1.5 text-sm"
                  onKeyDown={e => e.key === 'Enter' && addNote()}
                />
                <button
                  onClick={addNote}
                  disabled={!noteText.trim()}
                  className="rounded-md bg-ink-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40 hover:bg-ink-700 transition-colors"
                >
                  追加
                </button>
              </div>
            )}
            <p className="mt-1 text-[10px] text-stone-400">{deal.assignee}</p>
          </div>
        )}

        {/* タイムライン */}
        {deal ? (
          <div className="px-4 py-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-stone-500">
              商談タイムライン
            </h3>
            <ol className="relative border-l border-stone-200 pl-5 space-y-4">
              {[...deal.timeline].reverse().map((event, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[22px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-200 bg-white text-[13px]">
                    {EVENT_ICON[event.type]}
                  </span>
                  <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-ink-900">{event.title}</p>
                      <span className="shrink-0 text-[10px] text-stone-400">{event.date}</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-stone-600">{event.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="px-4 py-8 text-center text-stone-400">
            <p className="text-2xl">📋</p>
            <p className="mt-2 text-sm">この顧客の商談情報はまだありません</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ReqItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] text-stone-400">{label}</p>
      <p className="text-xs font-medium text-stone-700">{value}</p>
    </div>
  )
}

function ProbabilityBar({ value }: { value: number }) {
  const color =
    value >= 75 ? 'bg-emerald-400' :
    value >= 50 ? 'bg-amber-400' :
    'bg-stone-300'
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-stone-200">
      <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${value}%` }} />
    </div>
  )
}
