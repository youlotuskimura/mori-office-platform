import React, { useState } from 'react'
import { buildings } from './data'

export default function BuildingInfo() {
  const [selectedId, setSelectedId] = useState(buildings[0].id)
  const building = buildings.find(b => b.id === selectedId)!

  return (
    <div>
      {/* ビル選択スクロールタブ */}
      <div className="sticky top-[88px] z-20 overflow-x-auto border-b border-stone-200 bg-white">
        <div className="flex min-w-max gap-0">
          {buildings.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedId(b.id)}
              className={`border-b-2 px-4 py-3 text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedId === b.id
                  ? 'border-ink-900 text-ink-900'
                  : 'border-transparent text-stone-500 hover:text-stone-700'
              }`}
            >
              {b.shortName}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-4 p-4">
        {/* ヒーローカード */}
        <div className="archviz relative overflow-hidden rounded-2xl p-6 text-white">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-px w-6 bg-gold-400" />
            <span className="text-[10px] font-semibold uppercase tracking-brand text-gold-400">{building.ward}</span>
          </div>
          <h2 className="font-serif text-xl font-semibold leading-snug">{building.name}</h2>
          <p className="mt-1 text-xs text-white/60">
            {building.openYear}年竣工 / {building.totalFloors}階建て
          </p>
          <p className="mt-3 text-xs leading-relaxed text-white/75 max-w-md">{building.description}</p>

          {/* KPIバッジ */}
          <div className="mt-4 flex flex-wrap gap-3">
            <KPIBadge label="入居テナント" value={`${building.tenantCount}社`} />
            <KPIBadge label="ヒルズワーカー" value={`${building.workerCount.toLocaleString()}名`} />
            <KPIBadge label="最寄駅" value={building.nearestStation} />
          </div>
        </div>

        {/* アクセス */}
        <InfoCard title="🚇 交通アクセス">
          <ul className="space-y-2">
            {building.access.map(a => (
              <li key={a} className="flex items-start gap-2 text-sm text-stone-700">
                <span className="mt-0.5 shrink-0 text-forest-500">→</span>
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-stone-400">
            エリア再開発: {building.redevelopment}
          </p>
        </InfoCard>

        {/* テナント業種構成 */}
        <InfoCard title="🏢 入居テナント業種構成">
          <div className="space-y-2">
            {building.industries.map(ind => (
              <div key={ind.name} className="flex items-center gap-3">
                <span className="w-28 shrink-0 text-xs text-stone-700">{ind.name}</span>
                <div className="flex-1 overflow-hidden rounded-full bg-stone-100 h-3">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${ind.pct}%`, backgroundColor: ind.color }}
                  />
                </div>
                <span className="w-9 text-right text-xs font-semibold text-stone-800">{ind.pct}%</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-stone-400">
            ※ 入居テナント {building.tenantCount}社 / ヒルズワーカー {building.workerCount.toLocaleString()}名（架空データ）
          </p>
        </InfoCard>

        {/* 提供サービス・施設 */}
        <InfoCard title="✨ 提供サービス・施設">
          <ul className="space-y-1.5">
            {building.services.map(s => (
              <li key={s} className="flex items-start gap-2 text-sm text-stone-700">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {s}
              </li>
            ))}
          </ul>
        </InfoCard>

        {/* アメニティ */}
        <InfoCard title="🎯 主要アメニティ">
          <div className="flex flex-wrap gap-2">
            {building.amenities.map(a => (
              <span
                key={a}
                className="rounded-full border border-forest-500/30 bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700"
              >
                {a}
              </span>
            ))}
          </div>
        </InfoCard>

        {/* 営業トーク用差別化ポイント */}
        <InfoCard title="💬 営業トーク — 競合との差別化ポイント">
          <div className="rounded-lg border border-gold-500/20 bg-gold-500/5 p-1">
            <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-600">
              社内資料 / 顧客への直接転送不可
            </p>
          </div>
          <ul className="mt-3 space-y-2">
            {building.differentiators.map(d => (
              <li key={d} className="rounded-lg bg-stone-50 p-3 text-xs leading-relaxed text-stone-700">
                {d}
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </div>
  )
}

function KPIBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
      <p className="text-[10px] text-white/60">{label}</p>
      <p className="text-sm font-bold text-white">{value}</p>
    </div>
  )
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-card">
      <h3 className="mb-4 font-semibold text-sm text-ink-900">{title}</h3>
      {children}
    </div>
  )
}
