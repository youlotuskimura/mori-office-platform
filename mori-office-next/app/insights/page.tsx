import type { Metadata } from 'next'
import { Eyebrow, SectionHeading, Tag, Visual } from '@/components/ui'
import { articles } from '@/lib/data'

export const metadata: Metadata = {
  title: 'ワークスタイル知見 — HILLS OFFICE（社内検討用モックアップ）',
}

export default function InsightsPage() {
  const [featured, ...rest] = articles

  return (
    <>
      {/* ページイントロ */}
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20">
          <Eyebrow>Workstyle Lab</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.8rem]">
            働き方の問いを、データと事例で。
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-ink-600">
            オフィスと働き方をめぐる知見を、リサーチと実例から発信するコラム。意思決定のヒントになる視点をお届けします。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['ALL', 'WORKPLACE', 'RESILIENCE', 'TALENT', 'CULTURE'].map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide ${
                  i === 0 ? 'bg-ink-950 text-white' : 'border border-line text-ink-600'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 注目記事 */}
      <section className="bg-paper">
        <div className="container-x py-16 sm:py-20">
          <article className="group grid gap-8 lg:grid-cols-2 lg:items-center">
            <Visual className="aspect-[16/10] w-full rounded-2xl" label={featured.cat} />
            <div>
              <div className="flex items-center gap-3">
                <Tag>{featured.cat}</Tag>
                <span className="text-xs text-ink-500">
                  {featured.date} ・ {featured.read}
                </span>
              </div>
              <h2 className="mt-5 font-serif text-[26px] font-semibold leading-snug tracking-tight text-ink-950 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-ink-600">{featured.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-ink-500">{featured.author}</span>
                <span className="link-underline text-ink-950">
                  記事を読む <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="border-t border-line bg-paper">
        <div className="container-x py-16 sm:py-20">
          <SectionHeading eyebrow="Latest" title="最新のコラム" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {rest.map((a) => (
              <article key={a.slug} className="group flex flex-col">
                <Visual className="aspect-[16/9] w-full rounded-2xl" label={a.cat} />
                <div className="mt-6 flex items-center gap-3">
                  <Tag>{a.cat}</Tag>
                  <span className="text-xs text-ink-500">
                    {a.date} ・ {a.read}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-ink-950">{a.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{a.excerpt}</p>
                <span className="mt-5 text-xs text-ink-500">{a.author}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
