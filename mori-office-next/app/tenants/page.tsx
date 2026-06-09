import type { Metadata } from 'next'
import { ButtonLink, Eyebrow, SectionHeading, Tag } from '@/components/ui'
import { workersBoard, events, supports, applications, tenantKpis } from '@/lib/data'

export const metadata: Metadata = {
  title: 'ご入居中の方 — HILLS OFFICE（社内検討用モックアップ）',
}

export default function TenantsPage() {
  return (
    <>
      {/* ページイントロ */}
      <section className="border-b border-line bg-ink-950 text-white">
        <div className="container-x py-16 sm:py-20">
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
            <SectionHeading eyebrow="Workers Board" title="WORKERS BOARD" lead="館内のお知らせ・サービス更新・イベント情報を、ワーカーへ届ける情報基盤。" />
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
                <span className="text-ink-400 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#9a978f' }} aria-hidden>
                  →
                </span>
              </button>
            ))}
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
