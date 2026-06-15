import { useState } from 'react'
import { Button } from './ui'

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false)
  if (!open) return null

  const purposes = ['物件内覧のご依頼', '移転・増床のご相談', 'サービス全般のご質問', 'その他']

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="p-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest-50 text-3xl text-forest-600">✓</div>
            <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900">ありがとうございました</h3>
            <p className="mt-2 text-sm text-stone-600">
              担当者より翌営業日以内にご連絡いたします。<br />
              お急ぎの場合はお電話でもお受けしております。
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Button variant="gold" full onClick={onClose}>閉じる</Button>
              <Button variant="ghost" full onClick={onClose}>動画アーカイブを見る</Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between bg-ink-900 px-6 py-4 text-white">
              <div>
                <p className="text-xs text-gold-400">HILLS ONE — お問い合わせ</p>
                <h3 className="font-serif text-lg font-semibold">まずはお気軽にご相談を</h3>
              </div>
              <button onClick={onClose} className="text-2xl text-stone-300 hover:text-white">×</button>
            </div>
            <div className="space-y-4 p-6">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink-900">
                  ご相談の種別 <span className="text-rose-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {purposes.map((p, i) => (
                    <button
                      key={p}
                      className={`rounded-full border px-3 py-1.5 text-sm ${i === 0 ? 'border-ink-900 bg-ink-900 text-white' : 'border-stone-300 text-stone-600 hover:border-ink-900'}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <p className="mt-1 text-xs text-stone-400">※ 内容に応じて担当者が対応いたします。</p>
              </div>
              {[
                { l: '会社名', ph: '株式会社〇〇', req: true },
                { l: 'ご担当者名', ph: '山田 太郎', req: true },
                { l: 'メールアドレス', ph: 'yamada@example.com', req: true },
                { l: '電話番号', ph: '03-xxxx-xxxx', req: false },
              ].map((f) => (
                <div key={f.l}>
                  <label className="mb-1 block text-sm font-semibold text-ink-900">
                    {f.l} {f.req && <span className="text-rose-500">*</span>}
                  </label>
                  <input
                    placeholder={f.ph}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-ink-900 focus:outline-none focus:ring-1 focus:ring-ink-900"
                  />
                </div>
              ))}
              <Button variant="gold" full onClick={() => setDone(true)}>
                送信する（無料・翌営業日以内にご連絡）
              </Button>
              <p className="text-center text-xs text-stone-400">
                送信後、確認メールをお送りします。
                <span className="underline">プライバシーポリシー</span>に同意の上、送信してください。
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
