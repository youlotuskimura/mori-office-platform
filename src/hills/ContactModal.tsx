import { useState } from 'react'
import { Button } from './ui'

// BtoBリード獲得フォーム（EFO配慮：最小項目・相談種別でセグメント振り分け）
export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false)
  if (!open) return null

  const purposes = ['Lorem ipsum', 'Dolor sit', 'Amet elit', 'Consectetur']

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="p-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest-50 text-3xl text-forest-600">✓</div>
            <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900">Lorem ipsum dolor</h3>
            <p className="mt-2 text-sm text-stone-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className="mt-5 flex flex-col gap-2">
              <Button variant="gold" full onClick={onClose}>Lorem ipsum dolor</Button>
              <Button variant="ghost" full onClick={onClose}>Dolor sit amet</Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between bg-ink-900 px-6 py-4 text-white">
              <div>
                <p className="text-xs text-gold-400">Lorem ipsum dolor sit</p>
                <h3 className="font-serif text-lg font-semibold">Lorem ipsum dolor</h3>
              </div>
              <button onClick={onClose} className="text-2xl text-stone-300 hover:text-white">×</button>
            </div>
            <div className="space-y-4 p-6">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink-900">Lorem ipsum <span className="text-rose-500">*</span></label>
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
                <p className="mt-1 text-xs text-stone-400">※ Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              {[
                { l: 'Lorem ipsum', ph: 'Lorem ipsum' },
                { l: 'Dolor sit', ph: 'Dolor sit amet' },
                { l: 'Amet elit', ph: 'lorem@ipsum.com' },
                { l: 'Consectetur', ph: '00-0000-0000' },
              ].map((f) => (
                <div key={f.l}>
                  <label className="mb-1 block text-sm font-semibold text-ink-900">{f.l}</label>
                  <input
                    placeholder={f.ph}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-ink-900 focus:outline-none focus:ring-1 focus:ring-ink-900"
                  />
                </div>
              ))}
              <Button variant="gold" full onClick={() => setDone(true)}>
                Lorem ipsum dolor
              </Button>
              <p className="text-center text-xs text-stone-400">Lorem ipsum <span className="underline">dolor sit amet</span> consectetur.</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
