import Link from 'next/link'
import { ButtonLink, Eyebrow, SectionHeading } from '@/components/ui'
import { phases } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(120% 100% at 80% 0%, rgba(255,255,255,0.12), rgba(255,255,255,0) 50%), linear-gradient(160deg, #1c1b19 0%, #0a0a0a 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="container-x relative py-28 sm:py-36 lg:py-44">
          <div className="animate-rise">
            <Eyebrow light>Office Service Platform</Eyebrow>
          </div>
          <h1 className="mt-7 max-w-4xl animate-rise font-serif text-[2.4rem] font-semibold leading-[1.16] tracking-tight sm:text-[3.6rem] lg:text-[4.4rem]">
            街が、競争力になる。
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-base leading-8 text-white/70 sm:text-lg">
            入居前・入居中・更新時を、ひとつの窓口で。
            <br className="hidden sm:block" />
            森ビルのオフィステナント向け統合サービス。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="solid-light">
              内覧を予約する
            </ButtonLink>
            <ButtonLink href="/leasing" variant="outline-light">
              物件を見る
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* サービス全体マップ（3フェーズ） */}
      <section className="bg-paper">
        <div className="container-x py-20 sm:py-28">
          <SectionHeading
            eyebrow="Service Map"
            title="入居前から更新まで、途切れない一つの体験"
            lead="オフィスとの関係は、契約して終わりではありません。検討から運用、そして次の成長まで。3つのフェーズを一貫して支えます。"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {phases.map((p) => (
              <Link
                key={p.key}
                href={p.href}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(10,10,10,0.04),0_30px_60px_-36px_rgba(10,10,10,0.4)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-semibold text-ink-950">{p.no}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">{p.phase}</span>
                </div>
                <div className="mt-6 rule" />
                <h3 className="mt-6 font-serif text-xl font-semibold leading-snug text-ink-950">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{p.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm text-ink-700">
                      <span className="h-1 w-1 rounded-full bg-ink-400" style={{ background: '#9a978f' }} />
                      {it}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-950">
                  詳しく見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* クロージングCTA */}
      <section className="border-t border-line bg-mist">
        <div className="container-x flex flex-col items-start gap-8 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-24">
          <SectionHeading
            title={
              <>
                まずは、ご相談から。
              </>
            }
            lead="移転のご検討も、ご入居中のご相談も。専任の担当がうかがいます。"
          />
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
