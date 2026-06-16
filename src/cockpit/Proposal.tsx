import { useState } from 'react'
import { facilities, CATEGORY_LABEL } from './data'

interface Props {
  selectedFacilities: string[]
  onClear: () => void
}

export default function Proposal({ selectedFacilities, onClear }: Props) {
  const [showModal, setShowModal] = useState<'tour' | 'consult' | null>(null)
  const [form, setForm] = useState({ name: '', company: '', date: '', note: '' })
  const [submitted, setSubmitted] = useState(false)

  const selected = selectedFacilities
    .map(id => facilities.find(f => f.id === id))
    .filter(Boolean) as typeof facilities

  if (selected.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-4xl">📄</p>
        <p className="mt-4 font-serif text-lg font-semibold text-ink-900">施設を選択してください</p>
        <p className="mt-2 max-w-xs text-sm text-stone-500">
          「施設状況」または「用途検索」タブで施設を選択すると、ここに提案書プレビューが生成されます。
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-6">
      {/* コントロールバー */}
      <div className="sticky top-[88px] z-20 -mx-4 mb-4 flex items-center justify-between border-b border-stone-200 bg-white/95 px-4 py-2.5 backdrop-blur">
        <p className="text-sm font-semibold text-ink-900">提案書プレビュー — {selected.length}施設</p>
        <div className="flex gap-2">
          <button
            onClick={onClear}
            className="rounded-md border border-stone-200 px-3 py-1.5 text-xs text-stone-500 hover:bg-stone-50 transition-colors"
          >
            クリア
          </button>
          <button
            onClick={() => window.print()}
            className="rounded-md bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-200 transition-colors"
          >
            🖨️ 印刷
          </button>
        </div>
      </div>

      {/* 提案書本体 */}
      <div className="rounded-2xl border border-stone-200 bg-white shadow-card overflow-hidden">
        {/* 表紙風ヘッダー */}
        <div className="archviz px-8 py-10">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-[11px] font-semibold uppercase tracking-brand text-gold-400">
              HILLS FACILITIES — PROPOSAL
            </span>
          </div>
          <h1 className="font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl">
            ヒルズ施設<br />ご活用提案書
          </h1>
          <p className="mt-3 text-sm text-white/60">
            作成日: {new Date().toLocaleDateString('ja-JP')} ／ 社内資料・架空データ
          </p>
        </div>

        <div className="space-y-8 p-6 sm:p-8">
          {/* 施設一覧 */}
          <section>
            <SectionTitle num="01" title="提案施設 概要" />
            <div className="space-y-5">
              {selected.map(f => (
                <FacilityBlock key={f.id} facility={f} />
              ))}
            </div>
          </section>

          {/* 施設コンビネーション提案 */}
          {selected.length >= 2 && (
            <section>
              <SectionTitle num="02" title="コンビネーション活用例" />
              <div className="rounded-xl border border-forest-500/20 bg-forest-50 p-5">
                <p className="mb-3 text-xs font-semibold text-forest-700">
                  選択した {selected.length}施設を組み合わせた1日プログラム例
                </p>
                <ol className="space-y-2">
                  {selected.map((f, i) => (
                    <li key={f.id} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-600 text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{f.name}</p>
                        <p className="text-xs text-stone-600">{f.buildingShort} / {f.capacity.min}〜{f.capacity.max}名 / {f.priceNote}</p>
                        {f.todaySlots.filter(s => s.status === 'available').slice(0, 1).map((slot, j) => (
                          <p key={j} className="text-[11px] text-emerald-600">🟢 {slot.from}〜{slot.to} 空き</p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* ヒルズの特徴 */}
          <section>
            <SectionTitle num={selected.length >= 2 ? '03' : '02'} title="ヒルズ施設を使う理由" />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: '🏛️', title: '都市内完結', desc: 'オフィス・ホテル・美術館・飲食が徒歩圏内に集積。移動ゼロでフルプログラムが組める' },
                { icon: '🌆', title: '唯一無二の眺望', desc: '展望台・高層クラブ・TOKYO NODEから東京を独占。他では絶対に得られないロケーション' },
                { icon: '🎨', title: 'アート×文化', desc: '森美術館・麻布台ギャラリーをバックに接待できるのはヒルズだけ。文化的格が段違い' },
                { icon: '🌿', title: 'ウェルネス環境', desc: '麻布台の6万㎡緑地・スパ施設がスタッフ体験・接待の差別化ポイントに直結' },
                { icon: '🤝', title: 'ビジネスエコシステム', desc: '入居企業500社以上のネットワーク。イベントをきっかけにした偶発的共創が起きやすい' },
                { icon: '🌍', title: '多言語対応', desc: '英語対応スタッフ常駐・インターナショナルスクール隣接。外国人ゲストも安心' },
              ].map(item => (
                <div key={item.title} className="flex gap-3 rounded-lg border border-stone-100 bg-stone-50 p-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-ink-900">{item.title}</p>
                    <p className="text-[11px] leading-relaxed text-stone-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 導入・実績事例 */}
          <section>
            <SectionTitle num={selected.length >= 2 ? '04' : '03'} title="活用事例（架空）" />
            <div className="space-y-3">
              {[
                { company: 'グローバル外資系企業 役員接待', facility: '東京シティビュー → ヒルズクラブ個室ディナー', result: '外国人CEOに「Tokyoで最高の夜だった」と評価。翌月に本社からの追加投資が決定。' },
                { company: '大手IT企業 採用説明会', facility: 'ARCHホール（150名）', result: '「ヒルズで説明会」のブランド効果で応募者が前年比2.3倍。内定承諾率も大幅改善。' },
                { company: '外資製薬 チームウェルネスデー', facility: '麻布台ヒルズ スパ → 屋上テラスランチ', result: '30名の参加者満足度98%。「翌月もやってほしい」の声が相次ぎ、四半期定例化。' },
              ].map((c, i) => (
                <div key={i} className="rounded-lg border border-stone-200 p-4">
                  <p className="text-xs font-semibold text-ink-900">{c.company}</p>
                  <p className="mt-0.5 text-[11px] text-stone-500">利用施設: {c.facility}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-stone-700 italic">"…{c.result}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* 次のステップ */}
          <section>
            <SectionTitle num={selected.length >= 2 ? '05' : '04'} title="次のステップ" />
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => { setShowModal('tour'); setSubmitted(false); setForm({ name: '', company: '', date: '', note: '' }) }}
                className="flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-6 py-4 text-sm font-bold text-white hover:bg-ink-700 transition-colors"
              >
                <span className="text-xl">🏛️</span>
                <span>施設見学を申し込む</span>
              </button>
              <button
                onClick={() => { setShowModal('consult'); setSubmitted(false); setForm({ name: '', company: '', date: '', note: '' }) }}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-ink-900 bg-white px-6 py-4 text-sm font-bold text-ink-900 hover:bg-stone-50 transition-colors"
              >
                <span className="text-xl">💬</span>
                <span>プランニング相談を予約</span>
              </button>
            </div>
          </section>

          <p className="rounded-lg bg-stone-50 px-4 py-3 text-[10px] leading-relaxed text-stone-400">
            ※ 本資料は社内向けデモ・架空データです。記載の料金・事例・施設状況はすべて架空であり、森ビルの公式情報ではありません。実際の情報は必ず担当者にご確認ください。
          </p>
        </div>
      </div>

      {/* モーダル */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
          <div className="w-full max-w-md rounded-t-2xl bg-white p-6 sm:rounded-2xl">
            {!submitted ? (
              <>
                <h3 className="mb-4 font-serif text-lg font-semibold text-ink-900">
                  {showModal === 'tour' ? '施設見学 申し込み' : 'プランニング相談 予約'}
                </h3>
                <div className="space-y-3">
                  {(['name', 'company'] as const).map(key => (
                    <div key={key}>
                      <label className="mb-1 block text-xs font-semibold text-stone-600">
                        {key === 'name' ? 'お名前' : '会社名'}
                      </label>
                      <input
                        type="text"
                        value={form[key]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        placeholder={key === 'name' ? '田中 勇介' : '株式会社〇〇'}
                        className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-stone-600">希望日時</label>
                    <input
                      type="datetime-local"
                      value={form.date}
                      onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-stone-600">ご要望</label>
                    <textarea
                      rows={2}
                      value={form.note}
                      onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                      className="w-full resize-none rounded-md border border-stone-200 px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setShowModal(null)}
                    className="flex-1 rounded-lg border border-stone-200 py-2.5 text-sm text-stone-600 hover:bg-stone-50"
                  >
                    キャンセル
                  </button>
                  <button
                    onClick={() => setSubmitted(true)}
                    className="flex-1 rounded-lg bg-ink-900 py-2.5 text-sm font-bold text-white hover:bg-ink-700"
                  >
                    送信する
                  </button>
                </div>
                <p className="mt-2 text-center text-[10px] text-stone-400">
                  ※ デモ画面のため実際の送信は行われません
                </p>
              </>
            ) : (
              <div className="py-6 text-center">
                <p className="text-4xl">✅</p>
                <h3 className="mt-3 font-serif text-lg font-semibold text-ink-900">申し込みを受け付けました</h3>
                <p className="mt-2 text-sm text-stone-500">担当者より折り返しご連絡いたします。</p>
                <p className="mt-1 text-[10px] text-stone-400">（デモのため実際の送信は行われていません）</p>
                <button onClick={() => setShowModal(null)} className="mt-5 w-full rounded-lg bg-ink-900 py-2.5 text-sm font-bold text-white">
                  閉じる
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function FacilityBlock({ facility: f }: { facility: typeof facilities[0] }) {
  const availableSlots = f.todaySlots.filter(s => s.status === 'available')
  return (
    <div className="rounded-xl border border-stone-200 p-5">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <span className="rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium text-stone-500">
            {CATEGORY_LABEL[f.category]}
          </span>
          <h3 className="mt-1 font-serif text-base font-semibold text-ink-900">{f.name}</h3>
          <p className="text-xs text-stone-500">{f.buildingShort} {f.floor}</p>
        </div>
        {availableSlots.length > 0 && (
          <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
            🟢 本日空きあり
          </span>
        )}
      </div>

      <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Stat label="定員" value={`${f.capacity.min}〜${f.capacity.max}名`} />
        <Stat label="料金目安" value={f.priceNote} highlight />
        {f.areaSqm && <Stat label="面積" value={`約${f.areaSqm.toLocaleString()}㎡`} />}
      </div>

      <p className="mb-3 text-[11px] leading-relaxed text-stone-600">{f.description}</p>

      {/* 特徴タグ */}
      <div className="mb-3 flex flex-wrap gap-1">
        {f.features.map(feat => (
          <span key={feat} className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] text-stone-600">{feat}</span>
        ))}
      </div>

      {/* 本日のスケジュール */}
      {f.todaySlots.length > 0 && (
        <div className="rounded-lg bg-stone-50 p-3">
          <p className="mb-1.5 text-[10px] font-semibold text-stone-500">本日の空き状況</p>
          <div className="space-y-1">
            {f.todaySlots.map((slot, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px]">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  slot.status === 'available' ? 'bg-emerald-400' : slot.status === 'reserved' ? 'bg-rose-400' : 'bg-stone-300'
                }`} />
                <span className="tabular-nums text-stone-600">{slot.from}–{slot.to}</span>
                {slot.label && <span className={`truncate ${slot.status === 'available' ? 'text-emerald-600' : 'text-rose-500'}`}>{slot.label}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-2 text-[10px] text-stone-400">問い合わせ先: {f.contact}</p>
    </div>
  )
}

function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[10px] font-bold text-white">
        {num}
      </span>
      <h2 className="font-serif text-base font-semibold text-ink-900">{title}</h2>
      <span className="flex-1 border-t border-stone-200" />
    </div>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-3 ${highlight ? 'bg-forest-50' : 'bg-stone-50'}`}>
      <p className="text-[10px] text-stone-500">{label}</p>
      <p className={`mt-0.5 text-xs font-bold leading-snug ${highlight ? 'text-forest-700' : 'text-stone-800'}`}>{value}</p>
    </div>
  )
}
