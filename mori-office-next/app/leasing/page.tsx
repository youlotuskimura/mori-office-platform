import type { Metadata } from 'next'
import { ButtonLink, Eyebrow, SectionHeading, Tag } from '@/components/ui'
import { VideoThumbnail } from '@/components/video-thumbnail'
import { properties, consultSteps, leasingStats, officeTypes, sOffice } from '@/lib/data'
import { asset } from '@/lib/asset'

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
            lead="主要なヒルズと、進行中の大規模プロジェクト。（社内検討用デモにつき、掲載情報は簡略化しています）"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <article key={p.name} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(p.img)} alt={p.name} className="aspect-[16/10] w-full object-cover" />
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

      {/* バーチャル内覧 */}
      <section className="border-b border-line bg-mist">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading
            eyebrow="Virtual Tour"
            title="バーチャル内覧"
            lead="主要物件の空間・環境をご検討前に映像でご確認いただけます。オンラインでの内覧もお気軽にご相談ください。"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <VideoThumbnail
              src="/brochure/tokyo-node.jpg"
              title="虎ノ門ヒルズ ステーションタワー"
              subtitle="TOKYO NODE / B1–49F"
              caption="駅直結の国際新都心"
            />
            <VideoThumbnail
              src="/brochure/hills-house.jpg"
              title="麻布台ヒルズ 森JPタワー"
              subtitle="Hills House / B4–64F"
              caption="HILLS HOUSE 街区ラウンジ 33・34F"
            />
          </div>
          <div className="mt-5">
            <VideoThumbnail
              src="/brochure/roppongi5-aerial.jpg"
              title="六本木五丁目プロジェクト"
              subtitle="計画中 — 延床約106万m²"
              caption="六本木五丁目西地区 計画区域 ※ 完成イメージ（計画中につき変更の場合があります）"
            />
          </div>
          <p className="mt-6 text-xs text-ink-500">※ 動画コンテンツは準備中です。内覧のご予約・オンライン相談はお問い合わせよりご連絡ください。</p>
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
                <span className="font-serif text-2xl font-semibold text-ink-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink-950">{o.t}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{o.d}</p>
              </div>
            ))}
          </div>

          {/* セットアップオフィスの実例：麻布台ヒルズ S-Office */}
          <div className="mt-8 grid items-stretch gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-[1fr_1.1fr]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(sOffice.img)} alt={sOffice.name} className="h-full min-h-[240px] w-full object-cover" />
            <div className="bg-paper p-8 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">Setup Office</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink-950">{sOffice.name}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-600">{sOffice.desc}</p>
              <dl className="mt-7 space-y-3 border-t border-line pt-6">
                {sOffice.points.map((pt) => (
                  <div key={pt.k} className="flex gap-5 text-sm">
                    <dt className="w-12 shrink-0 font-semibold text-ink-500">{pt.k}</dt>
                    <dd className="text-ink-900">{pt.v}</dd>
                  </div>
                ))}
              </dl>
              <ButtonLink href="/contact" variant="outline" className="mt-8">
                S-Office の空き区画を問い合わせる
              </ButtonLink>
            </div>
          </div>

          {/* S-Office フォトギャラリー */}
          <div className="mt-4 grid grid-cols-3 gap-2 overflow-hidden rounded-2xl">
            {[
              { src: '/brochure/s-office-lounge.jpg', alt: 'S-Office ラウンジ' },
              { src: '/brochure/s-office-meeting.jpg', alt: 'S-Office ミーティングルーム' },
              { src: '/brochure/s-office.jpg', alt: 'S-Office ワークスペース' },
            ].map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.src} src={asset(p.src)} alt={p.alt} className="aspect-[4/3] w-full object-cover" />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-ink-500">麻布台ヒルズ S-Office 室内写真</p>
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
                  <span className="font-serif text-2xl font-semibold text-ink-400">
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
          <figure className="relative overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/brochure/arch.jpg')}
              alt="ARCH Toranomon Hills"
              className="aspect-[4/5] w-full object-cover lg:aspect-[3/4]"
            />
            <figcaption className="absolute bottom-4 left-5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
              ARCH Toranomon Hills
            </figcaption>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink-950/55 to-transparent" />
          </figure>
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
