import type { Metadata } from 'next'
import { Eyebrow, SectionHeading, Tag, Visual } from '@/components/ui'
import { articles, labOverview, labStats, labKeywords, labProgram, labActivities, labVoices } from '@/lib/data'

export const metadata: Metadata = {
  title: 'ワークスタイル知見 — HILLS OFFICE（社内検討用モックアップ）',
}

export default function InsightsPage() {
  // 社内（限定公開）版でのみ資料写真を表示。公開版はプレースホルダのまま。
  const usePhotos = process.env.NEXT_PUBLIC_LAB_PHOTOS === '1'

  return (
    <>
      {/* ヒーロー：MORIワークスタイルラボ */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        {usePhotos ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/lab/lab-community.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/75 to-ink-950/55" />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(120% 100% at 15% 0%, rgba(255,255,255,0.1), rgba(255,255,255,0) 50%), linear-gradient(160deg, #1b1a18 0%, #0a0a0a 70%)',
            }}
          />
        )}
        <div className="container-x relative py-20 sm:py-28">
          <Eyebrow light>MORI Workstyle Lab</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-[2rem] font-semibold leading-tight tracking-tight sm:text-[3rem]">
            つづける変革、みんなと。
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/70">{labOverview.concept}</p>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {labStats.map((s) => (
              <div key={s.label} className="border-l border-white/15 pl-4">
                <p className="font-serif text-3xl font-semibold">{s.value}</p>
                <p className="mt-1 text-sm text-white/65">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* テーマ + キーワード */}
      <section className="border-b border-line bg-paper">
        <div className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Theme"
            title={
              <>
                企業カルチャーを
                <br />
                体現する、場づくり・人づくり。
              </>
            }
            lead="ワークスタイルの根幹は、企業カルチャーの体現にあります。他社を知ることで自社の理解を深め、カルチャーをどのような施策に落とし込むかを共に考えます。"
          />
          <div className="flex flex-wrap gap-2.5">
            {labKeywords.map((k) => (
              <span key={k} className="rounded-full border border-line px-4 py-2 text-sm text-ink-700">
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* プログラム（全9回／約8か月） */}
      <section className="bg-mist">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading
            eyebrow="Program"
            title="第1期プログラム"
            lead="チームビルドから最終発表まで。約8か月・全9回を、5つのフェーズで構成しました。"
          />
          <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {labProgram.map((p) => (
              <li key={p.no} className="grid gap-3 bg-paper p-6 sm:grid-cols-[auto_8rem_1fr] sm:items-baseline sm:gap-6 sm:p-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl font-semibold text-ink-400" style={{ color: '#9a978f' }}>
                    {p.no}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">{p.phase}</span>
                </div>
                <span className="text-sm font-semibold text-ink-900">{p.period}</span>
                <div>
                  <p className="font-semibold text-ink-950">{p.t}</p>
                  <p className="mt-1 text-sm leading-7 text-ink-600">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-2">
            {labActivities.map((a) => (
              <Tag key={a}>{a}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* 参加者の声 */}
      <section className="bg-paper">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading eyebrow="Voices" title="参加者の声" lead="第1期に参加されたテナント企業のご担当者からのコメント（一部・要約）。" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {labVoices.map((v, i) => (
              <blockquote key={i} className="rounded-2xl border border-line p-7">
                <span className="font-serif text-3xl leading-none text-ink-300" style={{ color: '#cfccc4' }} aria-hidden>
                  &ldquo;
                </span>
                <p className="mt-2 text-[15px] leading-8 text-ink-800">{v}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 活動の様子（社内版のみ：資料写真） */}
      {usePhotos && (
        <section className="border-t border-line bg-mist">
          <div className="container-x py-20 sm:py-24">
            <SectionHeading eyebrow="Gallery" title="活動の様子" lead="第1期プログラムの様子（社内資料より）。" />
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {['lab-01.jpg', 'lab-02.jpg', 'lab-03.jpg'].map((f) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={f} src={`/lab/${f}`} alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 関連コラム */}
      <section className="border-t border-line bg-paper">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading eyebrow="Columns" title="関連コラム" lead="働き方とオフィスをめぐる知見を、リサーチと実例から発信しています。" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {articles.map((a) => (
              <article key={a.slug} className="group flex flex-col">
                <Visual className="aspect-[16/10] w-full rounded-2xl" label={a.cat} />
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
