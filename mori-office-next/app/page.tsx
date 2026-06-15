import Link from 'next/link'
import { ButtonLink, Eyebrow, SectionHeading } from '@/components/ui'
import { phases, corpStats, streetPillars, roppongiStats } from '@/lib/data'
import { asset } from '@/lib/asset'

export default function HomePage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/brochure/roppongi5.jpg')}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/60 to-ink-950/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950/80 to-transparent" />
        <div className="container-x relative py-28 sm:py-36 lg:py-44">
          <div className="animate-rise [animation-delay:0ms]">
            <Eyebrow light>Work Life, beyond the Office</Eyebrow>
          </div>
          <h1 className="mt-7 max-w-4xl animate-rise [animation-delay:120ms] font-serif text-[2.4rem] font-semibold leading-[1.16] tracking-tight sm:text-[3.6rem] lg:text-[4.4rem]">
            オフィスにとどまらない、
            <br className="hidden sm:block" />
            ワークライフを。
          </h1>
          <p className="mt-7 max-w-xl animate-rise [animation-delay:260ms] text-base leading-8 text-white/70 sm:text-lg">
            立地も、スペックも、そして街全体が。
            <br className="hidden sm:block" />
            企業とワーカーの「働く」を支え、企業価値の向上と持続的成長に寄与します。
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-rise [animation-delay:380ms]">
            <ButtonLink href="/contact" variant="solid-light">
              内覧を予約する
            </ButtonLink>
            <ButtonLink href="/leasing" variant="outline-light">
              物件を見る
            </ButtonLink>
          </div>
        </div>
        <p className="absolute bottom-4 right-5 text-[10px] tracking-wide text-white/45">
          六本木五丁目プロジェクト 完成イメージ（計画中につき変更の場合があります）
        </p>
      </section>

      {/* コンセプト：企業の課題を、街が支える */}
      <section className="bg-paper">
        <div className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <SectionHeading
            eyebrow="Concept"
            title={
              <>
                企業の課題を、
                <br />
                街が支える。
              </>
            }
            lead="恒常的な利益に加え、SDGsへの配慮、人材のための健康と快適性、そして「集まり協働する価値」の再認識。これまで企業が個別に向き合ってきた課題に、街全体で応えられる部分があると私たちは考えます。"
          />
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:pb-2">
            {corpStats.map((s) => (
              <div key={s.label} className="border-t border-line pt-4">
                <p className="font-serif text-3xl font-semibold text-ink-950 sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm leading-6 text-ink-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 次のプロジェクト：六本木五丁目 */}
      <section className="border-t border-line bg-mist">
        <div className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/brochure/roppongi5-aerial.jpg')} alt="六本木五丁目プロジェクト 計画区域" className="aspect-[16/10] w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Next Project"
              title={
                <>
                  都市は、
                  <br />
                  まだ進化する。
                </>
              }
              lead="六本木五丁目プロジェクト（六本木五丁目西地区）。六本木ヒルズを超えるスケールで、文化・交流・BCP・環境のすべてを束ねる次の都心が動き出しています。いま選ぶ場所が、これからも古びない理由です。"
            />
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7">
              {roppongiStats.map((s) => (
                <div key={s.label} className="border-t border-line pt-3">
                  <dd className="font-serif text-2xl font-semibold text-ink-950 sm:text-3xl">{s.value}</dd>
                  <dt className="mt-1 text-xs leading-5 text-ink-600">{s.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[10px] text-ink-500">※ 計画中につき、数値・内容は変更となる場合があります。</p>
          </div>
        </div>
      </section>

      {/* HILLS LIFE フォトストリップ */}
      <section className="overflow-hidden border-t border-line bg-paper">
        <div className="container-x pb-6 pt-14 sm:pt-18">
          <Eyebrow>Hills Life</Eyebrow>
          <p className="mt-4 text-sm leading-7 text-ink-600">
            ロビー、ラウンジ、ダイニング、ワークスペース。街全体がひとつのキャンパスオフィスです。
          </p>
        </div>
        <div className="pb-12 pl-6 sm:pl-8 lg:pl-12">
          <div className="flex gap-4 overflow-x-auto pr-6 pb-1 sm:pr-8 lg:pr-12">
            {[
              { src: '/brochure/hills-house.jpg', cap: 'Hills House — 麻布台ヒルズ' },
              { src: '/brochure/tokyo-node-dining.jpg', cap: 'TOKYO NODE Dining — 虎ノ門ヒルズ ステーションタワー' },
              { src: '/brochure/s-office.jpg', cap: 'S-Office — 麻布台ヒルズ' },
              { src: '/brochure/arch.jpg', cap: 'ARCH — 虎ノ門ヒルズ' },
              { src: '/brochure/s-office-lounge.jpg', cap: 'S-Office ラウンジ' },
              { src: '/brochure/s-office-meeting.jpg', cap: 'ミーティングルーム' },
            ].map((p) => (
              <figure key={p.src} className="relative flex-none w-[260px] overflow-hidden rounded-2xl sm:w-[340px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(p.src)}
                  alt={p.cap}
                  className="h-[190px] w-full object-cover sm:h-[240px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-950/70 to-transparent" />
                <figcaption className="absolute bottom-0 inset-x-0 px-4 py-3 text-[10px] tracking-wide text-white/80">
                  {p.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 街ができること */}
      <section className="bg-ink-950 text-white">
        <div className="container-x py-20 sm:py-28">
          <SectionHeading
            eyebrow="What the City Offers"
            title="街ができること"
            lead="オフィスフロアの提供にとどまらず、街全体をひとつのキャンパスオフィスとして。企業とワーカーの働き方を、4つの側面から支えます。"
            light
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {streetPillars.map((p) => (
              <div key={p.t} className="bg-ink-950 p-8">
                <span className="font-serif text-2xl text-white/80">{p.icon}</span>
                <h3 className="mt-6 font-serif text-lg font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス全体マップ（入居前 → 入居中 → 更新時） */}
      <section className="bg-paper">
        <div className="container-x py-20 sm:py-28">
          <SectionHeading
            eyebrow="Service Map"
            title="サービス全体マップ"
            lead="検討から、入居後の運用、契約更新まで。ご提供するサービスの全体像を3つのフェーズでご覧いただけます。"
          />

          {/* 旅程インジケータ */}
          <div className="mt-14 hidden grid-cols-3 lg:grid">
            {phases.map((p, i) => (
              <div key={p.key} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-950" />
                <span className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">{p.phase}</span>
                {i < phases.length - 1 && <span className="ml-3 h-px flex-1 bg-line" />}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {phases.map((p) => (
              <div key={p.key} className="flex flex-col rounded-2xl border border-line bg-paper p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl font-semibold text-ink-950">{p.no}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-brand text-ink-500 lg:hidden">
                    {p.phase}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-ink-950">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{p.desc}</p>

                <ul className="mt-7 flex-1 space-y-px overflow-hidden rounded-xl border border-line">
                  {p.items.map((it) => (
                    <li key={it}>
                      <Link
                        href={p.href}
                        className="flex items-center justify-between gap-3 bg-mist/40 px-4 py-3 text-sm text-ink-800 transition-colors hover:bg-mist"
                      >
                        <span>{it}</span>
                        <span className="text-ink-400" aria-hidden>
                          ↗
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link href={p.href} className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-950">
                  {p.phase}のサービスへ
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* クロージングCTA */}
      <section className="border-t border-line bg-mist">
        <div className="container-x flex flex-col items-start gap-8 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-24">
          <SectionHeading title="まずは、ご相談から。" lead="移転のご検討も、ご入居中のご相談も。専任の担当がうかがいます。" />
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href="/contact" variant="solid">
              お問い合わせ
            </ButtonLink>
            <ButtonLink href="/leasing" variant="outline">
              物件ポートフォリオ
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
