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
            <Eyebrow light>Office Tenant Service</Eyebrow>
          </div>
          <h1 className="mt-7 max-w-4xl animate-rise font-serif text-[2.4rem] font-semibold leading-[1.16] tracking-tight sm:text-[3.6rem] lg:text-[4.4rem]">
            入居前から、更新まで。
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-base leading-8 text-white/70 sm:text-lg">
            オフィスをめぐるすべての時間を、ひとつの窓口で。
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

      {/* サービス全体マップ（入居前 → 入居中 → 更新時） */}
      <section className="bg-paper">
        <div className="container-x py-20 sm:py-28">
          <SectionHeading
            eyebrow="Service Map"
            title="サービス全体マップ"
            lead="オフィスとの関係は、契約して終わりではありません。入居前・入居中・更新時の3つのフェーズで、ご提供するサービスの全体像をご覧いただけます。"
          />

          {/* 旅程インジケータ（入居前 — 入居中 — 更新時） */}
          <div className="mt-14 hidden grid-cols-3 lg:grid">
            {phases.map((p, i) => (
              <div key={p.key} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-950" />
                <span className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">{p.phase}</span>
                {i < phases.length - 1 && <span className="ml-3 h-px flex-1 bg-line" />}
              </div>
            ))}
          </div>

          {/* 3フェーズのサービス一覧 */}
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
                        <span className="text-ink-400" style={{ color: '#9a978f' }} aria-hidden>
                          ↗
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-950"
                >
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
          <SectionHeading
            title="まずは、ご相談から。"
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
