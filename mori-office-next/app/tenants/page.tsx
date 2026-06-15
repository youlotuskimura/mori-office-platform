import type { Metadata } from 'next'
import { ButtonLink, Eyebrow, SectionHeading, Tag } from '@/components/ui'
import { workersBoard, events, supports, applications, tenantKpis, rooftopForm } from '@/lib/data'
import { asset } from '@/lib/asset'

export const metadata: Metadata = {
  title: 'ご入居中の方 — HILLS OFFICE（社内検討用モックアップ）',
}

export default function TenantsPage() {
  return (
    <>
      {/* ページイントロ */}
      <section className="relative overflow-hidden border-b border-line bg-ink-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset('/brochure/tokyo-node-dining.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/80 to-ink-950/55" />
        <div className="container-x relative py-16 sm:py-20">
          <Eyebrow light>For Current Tenants</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.8rem]">
            日々の運用を、ひとつの窓口に。
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-white/65">
            ワーカーの情報基盤から、総務の各種申請、コミュニティ形成まで。ご入居中の体験を統合するテナントポータルです。
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {tenantKpis.map((k) => (
              <div key={k.label} className="border-l border-white/15 pl-4">
                <p className="font-serif text-3xl font-semibold">{k.value}</p>
                <p className="mt-1 text-sm text-white/70">{k.label}</p>
                <p className="text-xs text-white/45">{k.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKERS BOARD + イベント */}
      <section className="bg-paper">
        <div className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.5fr_1fr]">
          {/* WORKERS BOARD */}
          <div>
            <SectionHeading eyebrow="Tenant Service" title="WORKERS BOARD" lead="館内のお知らせ・サービス更新・イベント情報を、ワーカーへ届ける情報基盤。" />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {workersBoard.map((b) => (
                <li key={b.title} className="flex items-start gap-4 py-5">
                  <Tag>{b.tag}</Tag>
                  <div className="flex-1">
                    <p className="text-[15px] font-medium leading-7 text-ink-900">
                      {b.pin && <span className="mr-2 align-middle text-xs font-bold text-ink-950">●</span>}
                      {b.title}
                    </p>
                    <p className="mt-1 text-xs text-ink-500">{b.date}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-6 link-underline text-ink-950" type="button">
              すべてのお知らせ <span aria-hidden>→</span>
            </button>
          </div>

          {/* コミュニティイベント */}
          <div>
            <SectionHeading eyebrow="Community" title="コミュニティイベント" />
            <div className="mt-10 space-y-4">
              {events.map((e) => (
                <div key={e.title} className="rounded-2xl border border-line p-6">
                  <div className="flex items-center justify-between">
                    <Tag>{e.cat}</Tag>
                    <span className="text-xs font-semibold text-ink-500">{e.seats}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-ink-950">{e.title}</h3>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ink-600">
                    <span>{e.date}</span>
                    <span className="h-3 w-px bg-line" />
                    <span>{e.place}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ビル管理サポート */}
      <section className="border-y border-line bg-mist">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading eyebrow="Building Support" title="ビル管理サポート" lead="設備・セキュリティ・防災まで。建物の運用に関わる窓口をひとつにまとめます。" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supports.map((s) => (
              <div key={s.t} className="rounded-2xl border border-line bg-paper p-7">
                <span className="font-serif text-2xl text-ink-950">{s.icon}</span>
                <h3 className="mt-5 font-semibold text-ink-950">{s.t}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* デジタル申請窓口 */}
      <section className="bg-paper">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading
            eyebrow="Digital Desk"
            title="各種申請のデジタル窓口"
            lead="紙とメールでばらばらだった総務の申請を、ひとつの画面に。受付から進捗確認までをオンラインで完結します。"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((a) => (
              <button
                key={a}
                type="button"
                className="group flex items-center justify-between rounded-xl border border-line bg-paper px-5 py-5 text-left transition-colors hover:border-ink-950"
              >
                <span className="text-sm font-medium text-ink-900">{a}</span>
                <span className="text-ink-400 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </button>
            ))}
          </div>
          {/* 申請の一例：ルーフガーデン貸切予約（新虎通りCORE） */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <div className="flex flex-col gap-1 border-b border-line bg-mist/50 px-7 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">申請の一例</p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink-950">{rooftopForm.title}</h3>
              </div>
              <span className="text-xs text-ink-500">{rooftopForm.place}</span>
            </div>

            <div className="grid gap-px bg-line sm:grid-cols-2">
              {/* プラン選択 */}
              <div className="bg-paper p-7">
                <p className="text-sm font-semibold text-ink-900">ご利用プラン</p>
                <div className="mt-4 space-y-2">
                  {rooftopForm.plans.map((p, i) => (
                    <label
                      key={p.t}
                      className={`flex cursor-default items-center justify-between rounded-xl border px-4 py-3 ${
                        i === 0 ? 'border-ink-950 bg-ink-950/[0.03]' : 'border-line'
                      }`}
                    >
                      <span className="flex items-center gap-3 text-sm text-ink-900">
                        <span
                          className={`grid h-4 w-4 place-items-center rounded-full border ${
                            i === 0 ? 'border-ink-950' : 'border-ink-400'
                          }`}
                        >
                          {i === 0 && <span className="h-2 w-2 rounded-full bg-ink-950" />}
                        </span>
                        {p.t}
                      </span>
                      <span className="text-sm font-semibold text-ink-900">{p.price}</span>
                    </label>
                  ))}
                </div>

                <p className="mt-6 text-sm font-semibold text-ink-900">ご利用可能時間</p>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-600">
                  {rooftopForm.hours.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-ink-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 詳細入力 */}
              <div className="bg-paper p-7">
                <div className="grid grid-cols-2 gap-4">
                  {['利用日', '利用人数'].map((l) => (
                    <div key={l}>
                      <label className="mb-2 block text-xs font-semibold text-ink-700">{l}</label>
                      <div className="h-10 rounded-lg border border-line bg-mist/40" />
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm font-semibold text-ink-900">貸出し備品</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {rooftopForm.equipment.map((e) => (
                    <Tag key={e}>{e}</Tag>
                  ))}
                </div>

                <p className="mt-6 text-sm font-semibold text-ink-900">お支払い方法</p>
                <div className="mt-3 flex gap-2">
                  {rooftopForm.pay.map((p, i) => (
                    <span
                      key={p}
                      className={`rounded-full border px-4 py-1.5 text-sm ${
                        i === 0 ? 'border-ink-950 bg-ink-950 text-white' : 'border-line text-ink-600'
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-7 w-full rounded-full bg-ink-950 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-700"
                >
                  この内容で申請する
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="solid">
              担当に相談する
            </ButtonLink>
            <ButtonLink href="/insights" variant="outline">
              ワークスタイル知見を読む
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
