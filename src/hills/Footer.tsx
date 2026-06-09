// フッター。会員/非会員で導線の重心は変わるが、モックでは共通表示。
export default function Footer({ loggedIn }: { loggedIn: boolean }) {
  const cols = loggedIn
    ? [
        { h: 'サービス', items: ['街を使う', 'イベント', 'コミュニティ', 'ウェルネス'] },
        { h: '管理', items: ['従業員管理', '健康経営', 'ファシリティ', '請求・契約'] },
        { h: 'サポート', items: ['ヘルプ', '担当に相談', '設定', 'HILLS ID'] },
      ]
    : [
        { h: 'オフィス', items: ['拠点一覧', '区画検索', '導入事例', '料金'] },
        { h: 'プラットフォーム', items: ['できること', '街・カルチャー', 'マッチング', '資料DL'] },
        { h: '会社情報', items: ['森ビルについて', '採用', 'お問い合わせ', 'プライバシー'] },
      ]
  return (
    <footer className="bg-ink-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 text-white">
            <span className="grid h-8 w-8 place-items-center rounded border border-gold-500/50 font-serif text-lg font-semibold text-gold-400">H</span>
            <span className="font-serif text-lg font-semibold tracking-wide">HILLS <span className="text-gold-400">ONE</span></span>
          </div>
          <p className="mt-4 font-serif text-xs italic tracking-wide text-stone-400">One ID, One City, One Network.</p>
          <div className="mt-5 flex gap-2 text-xs">
            <span className="rounded border border-white/15 px-2 py-1">日本語</span>
            <span className="rounded border border-white/15 px-2 py-1">EN</span>
            <span className="rounded border border-white/15 px-2 py-1">中文</span>
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
