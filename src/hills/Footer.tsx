export default function Footer({ loggedIn }: { loggedIn: boolean }) {
  const publicCols = [
    { h: 'OFFICE', items: ['オフィスを探す', '物件一覧', 'エリアガイド', '内覧を予約する'] },
    { h: 'SERVICES', items: ['入居サービス', 'ウェルネス', 'コミュニティ', 'マッチング'] },
    { h: 'ABOUT', items: ['HILLS ONEとは', 'ニュース', '採用情報', '会社情報'] },
  ]
  const memberCols = [
    { h: 'MEMBER', items: ['ホーム', '会議室を予約', 'イベント', 'マイページ'] },
    { h: 'SERVICES', items: ['動画アーカイブ', 'コミュニティ', 'マッチング', 'ウェルネス'] },
    { h: 'SUPPORT', items: ['よくある質問', 'お問い合わせ', '契約・手続き', 'ご請求'] },
  ]
  const cols = loggedIn ? memberCols : publicCols

  return (
    <footer className="bg-ink-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 text-white">
            <span className="grid h-8 w-8 place-items-center rounded border border-gold-500/50 font-serif text-lg font-semibold text-gold-400">H</span>
            <span className="font-serif text-lg font-semibold tracking-wide">HILLS <span className="text-gold-400">ONE</span></span>
          </div>
          <p className="mt-4 font-serif text-xs italic tracking-wide text-stone-400">Work Life, Beyond the Office.</p>
          <div className="mt-5 flex gap-2 text-xs">
            <span className="rounded border border-white/15 px-2 py-1">虎ノ門</span>
            <span className="rounded border border-white/15 px-2 py-1">麻布台</span>
            <span className="rounded border border-white/15 px-2 py-1">六本木</span>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500/90">{c.h}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.items.map((i) => (
                <li key={i} className="cursor-pointer text-stone-300/90 transition-colors hover:text-gold-400">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-stone-500">
        © 2026 HILLS ONE（モックアップ）. これは提案用の架空デモであり、森ビル株式会社の公式サービスではありません。
      </div>
    </footer>
  )
}
