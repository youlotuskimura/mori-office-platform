import type { Metadata } from 'next'
import { Eyebrow } from '@/components/ui'

export const metadata: Metadata = {
  title: 'お問い合わせ — HILLS OFFICE（社内検討用モックアップ）',
}

const PURPOSES = ['オフィス移転・新規入居', '増床・レイアウト変更', '入居中サービスのご相談', '取材・その他']

const FIELDS: { label: string; placeholder: string; required?: boolean; type?: string }[] = [
  { label: '会社名', placeholder: '株式会社サンプル', required: true },
  { label: '部署・役職', placeholder: '総務部 / 経営企画部 など' },
  { label: 'お名前', placeholder: '山田 太郎', required: true },
  { label: 'メールアドレス', placeholder: 'taro.yamada@example.com', required: true, type: 'email' },
  { label: '電話番号', placeholder: '03-0000-0000', type: 'tel' },
]

export default function ContactPage() {
  return (
    <section className="bg-paper">
      <div className="container-x grid gap-14 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        {/* 左：イントロ */}
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-serif text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
            まずは、ご相談から。
          </h1>
          <p className="mt-5 text-[15px] leading-8 text-ink-600">
            移転のご検討も、ご入居中のご相談も。内容に応じて、最適な担当チームよりご連絡します。
          </p>
          <dl className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">受付時間</dt>
              <dd className="mt-2 text-sm text-ink-800">平日 9:00 – 18:00（土日祝・年末年始を除く）</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">お電話</dt>
              <dd className="mt-2 font-serif text-2xl font-semibold text-ink-950">03-0000-0000</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-brand text-ink-500">回答の目安</dt>
              <dd className="mt-2 text-sm text-ink-800">2営業日以内に担当よりご連絡します。</dd>
            </div>
          </dl>
        </div>

        {/* 右：フォームUI（見た目のみ・送信機能なし） */}
        <div className="rounded-2xl border border-line bg-mist/40 p-7 sm:p-10">
          <div className="space-y-7">
            <div>
              <label className="mb-3 block text-sm font-semibold text-ink-900">
                ご相談内容 <span className="text-ink-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {PURPOSES.map((p, i) => (
                  <span
                    key={p}
                    className={`cursor-default rounded-full border px-4 py-2 text-sm ${
                      i === 0 ? 'border-ink-950 bg-ink-950 text-white' : 'border-line text-ink-600'
                    }`}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {FIELDS.map((f) => (
              <div key={f.label}>
                <label className="mb-2 block text-sm font-semibold text-ink-900">
                  {f.label} {f.required && <span className="text-ink-500">*</span>}
                </label>
                <input
                  type={f.type ?? 'text'}
                  placeholder={f.placeholder}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-ink-950 focus:outline-none focus:ring-1 focus:ring-ink-950"
                />
              </div>
            ))}

            <div>
              <label className="mb-2 block text-sm font-semibold text-ink-900">ご相談の詳細</label>
              <textarea
                rows={4}
                placeholder="ご検討の背景や、希望時期・規模などをご記入ください。"
                className="w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-ink-950 focus:outline-none focus:ring-1 focus:ring-ink-950"
              />
            </div>

            <label className="flex items-start gap-3 text-xs leading-6 text-ink-600">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border border-ink-400 text-[10px]" style={{ borderColor: '#9a978f' }}>
                ✓
              </span>
              <span>
                プライバシーポリシーに同意のうえ送信します。（本フォームはモックアップのため送信は行われません）
              </span>
            </label>

            <button
              type="button"
              className="w-full rounded-full bg-ink-950 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-ink-700"
            >
              この内容で送信する
            </button>
            <p className="text-center text-xs text-ink-400">※ これは社内検討用モックアップです。送信機能は実装されていません。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
