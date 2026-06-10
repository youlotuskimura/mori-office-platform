import type { Metadata } from 'next'
import { ButtonLink, Eyebrow, SectionHeading, Tag, Visual } from '@/components/ui'
import { properties, consultSteps, leasingStats, officeTypes } from '@/lib/data'

export const metadata: Metadata = {
  title: '入居をご検討の方 — HILLS OFFICE（社内検討用モックアップ）',
}

export default function LeasingPage() {
  return (
    <>
      {/* ページイントロ */}
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20">
          <Eyebrow>For Prospective Tenants</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.8rem]">
            最適な区画と働き方を、ひとつの窓口で。
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-ink-600">
            グローバル企業のニーズに応えるスペック、優れた制振性能と最新のセキュリティ。物件の比較からワークプレイスの設計、内覧まで、移転の意思決定を専任担当が伴走します。外資系企業の本国意向にも配慮した柔軟な対応が可能です。
          </p>
        </div>
      </section>

      {/* 物件ポートフォリオ概要 */}
      <section className="bg-paper">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading
            eyebrow="Portfolio"
            title="物件ポートフォリオ概要"
            lead="主要エリアのオフィス区画を、面積・基準階・特徴で比較いただけます。（掲載情報はすべて架空のサンプルです）"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <article key={p.name} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper">
                <Visual className="aspect-[16/10] w-full" label="Image placeholder" />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2">
                    {p.tag && <Tag>{p.tag}</Tag>}
                    <span className="text-xs font-medium text-ink-500">{p.vacancy}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-ink-950">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink-600">{p.feature}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 text-center">
                    {[
                      { k: '面積', v: p.area },
                      { k: 'フロア', v: p.floor },
                      { k: '賃料', v: p.rent },
                    ].map((d) => (
                      <div key={d.k}>
                        <dt className="text-[10px] uppercase tracking-[0.15em] text-ink-500">{d.k}</dt>
                        <dd className="mt-1 text-xs font-semibold text-ink-900">{d.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <ButtonLink href="/contact" variant="outline" className="mt-6 w-full">
                    内覧を予約
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 統計バンド */}
      <section className="bg-ink-950 text-white">
        <div className="container-x grid grid-cols-2 gap-8 py-16 lg:grid-cols-4">
          {leasingStats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl font-semibold sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 多様なオフィスの選択肢 */}
      <section className="border-b border-line bg-paper">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading
            eyebrow="Office Types"
            title="多様なオフィスの選択肢"
            lead="一般的なオフィスにとどまらず、業態・業容、そしてワーカーのワークスタイルに合わせたオフィススペースをご用意しています。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {officeTypes.map((o, i) => (
              <div key={o.t} className="rounded-2xl border border-line p-8">
                <span className="font-serif text-2xl font-semibold text-ink-400" style={{ color: '#9a978f' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink-950">{o.t}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ワークプレイスコンサル */}
      <section className="bg-paper">
        <div className="container-x grid gap-14 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Workplace Consulting"
              title="ワークプレイスコンサルティング"
              lead="「どの区画か」の前に、「どう働くか」から。事業計画と人員計画にもとづき、最適な面積とレイアウトを設計します。"
            />
            <ol className="mt-10 space-y-6">
              {consultSteps.map((s) => (
                <li key={s.no} className="flex gap-5">
                  <span className="font-serif text-2xl font-semibold text-ink-400" style={{ color: '#9a978f' }}>
                    {s.no}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-950">{s.t}</p>
                    <p className="mt-1 text-sm leading-7 text-ink-600">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Visual className="aspect-[4/5] w-full rounded-2xl lg:aspect-[3/4]" label="Workplace design" />
        </div>
      </section>

      {/* 内覧予約CTA */}
      <section className="border-t border-line bg-mist">
        <div className="container-x flex flex-col items-start gap-8 py-20 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading title="区画の内覧を、予約する" lead="オンラインでの区画ご案内も承ります。お気軽にご相談ください。" />
          <ButtonLink href="/contact" variant="solid" className="shrink-0">
            内覧・相談を予約
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
