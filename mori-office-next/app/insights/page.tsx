import type { Metadata } from 'next'
import { ButtonLink, Eyebrow, SectionHeading, Tag } from '@/components/ui'
import { articles, labOverview, labStats, labKeywords, labProgram, labActivities, labVoices } from '@/lib/data'
import { asset } from '@/lib/asset'

export const metadata: Metadata = {
  title: 'ワークスタイル知見 — HILLS OFFICE（社内検討用モックアップ）',
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-ink-400" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}

const AVATAR_COLORS = ['#eceae4', '#f5f4f1', '#e2dfd8', '#eceae4']

export default function InsightsPage() {
  const usePhotos = process.env.NEXT_PUBLIC_LAB_PHOTOS === '1'

  return (
    <>
      {/* ヒーロー：写真モザイク背景 */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        {usePhotos ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/lab/lab-community.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/80 to-ink-950/55" />
          </>
        ) : (
          <>
            {/* 右半分を写真モザイクで埋める */}
            <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:grid" style={{ gridTemplateRows: '1fr 1fr', gap: '3px' }}>
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset('/brochure/hills-house.jpg')} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="grid gap-[3px]" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset('/brochure/s-office-meeting.jpg')} alt="" className="h-full w-full object-cover" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset('/brochure/tokyo-node-dining.jpg')} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
            {/* オーバーレイ：左から右へグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 from-40% via-ink-950/90 to-ink-950/30 lg:via-ink-950/85 lg:to-ink-950/15" />
          </>
        )}

        <div className="container-x relative py-24 sm:py-32 lg:py-40">
          <Eyebrow light>MORI Workstyle Lab</Eyebrow>
          <h1 className="mt-6 max-w-xl font-serif text-[2rem] font-semibold leading-tight tracking-tight sm:text-[3rem]">
            つづける変革、みんなと。
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-8 text-white/70">{labOverview.concept}</p>
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
              <span key={k} className="rounded-full border border-line px-4 py-2 text-sm text-ink-700 transition-colors hover:border-ink-400 hover:text-ink-950">
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ラボの現場から：活動内容 + 写真 */}
      <section className="border-b border-line bg-mist">
        <div className="container-x grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title={
                <>
                  現場の「対話」が、
                  <br />
                  変革の力になる。
                </>
              }
              lead="参加者は、立場を超えてフラットに語り合います。他社の事例からヒントを得て、自社の課題に向き合い、仲間とともに一歩を踏み出す。理論ではなく、実践の場です。"
            />
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { icon: '⌕', t: '他社オフィス見学', d: '実際の空間を見て、発想を広げる' },
                { icon: '◇', t: 'インスピレーショントーク', d: '多様な視点から学ぶ短時間の対話' },
                { icon: '◈', t: 'Culture Design Canvas', d: '自社カルチャーを構造的に可視化' },
                { icon: '○', t: 'アクション宣言', d: '8か月の集大成を全参加者の前で発表' },
              ].map((a) => (
                <div key={a.t} className="rounded-xl border border-line bg-paper p-5">
                  <span className="font-serif text-xl text-ink-400">{a.icon}</span>
                  <p className="mt-3 text-sm font-semibold text-ink-950">{a.t}</p>
                  <p className="mt-1 text-xs leading-5 text-ink-600">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/brochure/arch.jpg')}
              alt="ARCH Toranomon Hills"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/60 to-transparent" />
            <figcaption className="absolute bottom-4 left-5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
              ARCH — 虎ノ門ヒルズ
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ラボが生まれる場所：フォトギャラリー */}
      <section className="border-b border-line bg-paper">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading
            eyebrow="Venues"
            title="ラボが生まれる場所"
            lead="各回のセッションは、ヒルズの多様な空間を舞台に行われます。ラウンジ、会議室、ダイニング——場の力が、対話の質を変えます。"
          />
          {/* 上段：大＋小2枚 */}
          <div className="mt-12 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
            <div className="row-span-2 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset('/brochure/hills-house.jpg')}
                alt="Hills House — 麻布台ヒルズ"
                className="h-full w-full object-cover"
                style={{ minHeight: '280px' }}
              />
            </div>
            <div className="grid gap-3">
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset('/brochure/s-office-meeting.jpg')} alt="ミーティングルーム" className="aspect-[16/9] w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset('/brochure/tokyo-node-dining.jpg')} alt="TOKYO NODE Dining" className="aspect-[16/9] w-full object-cover" />
              </div>
            </div>
          </div>
          {/* 下段：3枚横並び */}
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {[
              { src: '/brochure/s-office-lounge.jpg', alt: 'S-Office ラウンジ' },
              { src: '/brochure/s-office.jpg', alt: 'S-Office ワークスペース' },
              { src: '/brochure/s-office-meeting.jpg', alt: 'カンファレンスルーム' },
            ].map((p) => (
              <div key={p.src} className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(p.src)} alt={p.alt} className="aspect-[4/3] w-full object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-ink-500">
            虎ノ門ヒルズ・麻布台ヒルズ 各施設写真（一部）
          </p>
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
                  <span className="font-serif text-2xl font-semibold text-ink-400">{p.no}</span>
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
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {labVoices.map((v, i) => (
              <blockquote key={i} className="flex flex-col rounded-2xl border border-line p-7">
                <span className="font-serif text-4xl leading-none text-ink-300" aria-hidden>&ldquo;</span>
                <p className="mt-3 flex-1 text-[15px] leading-8 text-ink-800">{v.text}</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ background: AVATAR_COLORS[i] }}
                  >
                    <PersonIcon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink-700">{v.role}</p>
                    <p className="text-[11px] text-ink-500">参加テナント企業</p>
                  </div>
                </footer>
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
                <img key={f} src={asset(`/lab/${f}`)} alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 関連コラム */}
      <section className="border-t border-line bg-paper">
        <div className="container-x py-20 sm:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Columns" title="関連コラム" lead="働き方とオフィスをめぐる知見を、リサーチと実例から発信しています。" />
            <ButtonLink href="/contact" variant="outline" className="shrink-0 self-start sm:self-auto">
              知見についてご相談
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {articles.map((a) => (
              <article key={a.slug} className="group flex cursor-pointer flex-col">
                <div className="overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(a.img)} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Tag>{a.cat}</Tag>
                  <span className="text-xs text-ink-500">
                    {a.date} ・ {a.read}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-ink-950 transition-colors duration-200 group-hover:text-ink-600">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink-600">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-ink-500">{a.author}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink-950 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    続きを読む <span aria-hidden>→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
