import { Role } from './data'
import { Button } from './ui'

// グローバルヘッダー。
// モック操作用に「ログイン状態」「ロール（ワーカー/管理者）」を切り替えるトグルを内蔵。
export default function Header({
  loggedIn,
  role,
  onLogin,
  onLogout,
  onRoleChange,
  onContact,
  onNav,
}: {
  loggedIn: boolean
  role: Role
  onLogin: () => void
  onLogout: () => void
  onRoleChange: (r: Role) => void
  onContact: () => void
  onNav: (key: string) => void
}) {
  const publicNav = [
    { key: 'search', label: 'Lorem' },
    { key: 'features', label: 'Ipsum' },
    { key: 'culture', label: 'Dolor' },
    { key: 'matching', label: 'Sit amet' },
    { key: 'archive', label: 'Elit' },
  ]
  const memberNav =
    role === 'admin'
      ? [
          { key: 'home', label: 'Lorem' },
          { key: 'health', label: 'Ipsum' },
          { key: 'matching', label: 'Dolor' },
          { key: 'archive', label: 'Sit amet' },
        ]
      : [
          { key: 'home', label: 'Lorem' },
          { key: 'city', label: 'Ipsum' },
          { key: 'community', label: 'Dolor' },
          { key: 'archive', label: 'Sit amet' },
        ]
  const nav = loggedIn ? memberNav : publicNav

  return (
    <header className="sticky top-0 z-40 border-b border-gold-500/20 bg-ink-900/90 backdrop-blur supports-[backdrop-filter]:bg-ink-900/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-5">
        <button onClick={() => onNav('home')} className="flex items-center gap-2.5 text-white">
          <span className="grid h-8 w-8 place-items-center rounded border border-gold-500/50 font-serif text-lg font-semibold text-gold-400">
            H
          </span>
          <span className="font-serif text-lg font-semibold tracking-wide">
            HILLS <span className="text-gold-400">ONE</span>
          </span>
        </button>

        <nav className="hidden flex-1 items-center gap-7 lg:flex">
          {nav.map((n) => (
            <button
              key={n.key}
              onClick={() => onNav(n.key)}
              className="text-sm font-medium tracking-wide text-stone-200/90 transition-colors hover:text-gold-400"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          {loggedIn ? (
            <>
              {/* ロール切替（モック用） */}
              <div className="hidden items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs sm:flex">
                <button
                  onClick={() => onRoleChange('worker')}
                  className={`rounded-full px-3 py-1 font-semibold transition-colors ${role === 'worker' ? 'bg-gold-500 text-ink-900' : 'text-stone-300'}`}
                >
                  Lorem
                </button>
                <button
                  onClick={() => onRoleChange('admin')}
                  className={`rounded-full px-3 py-1 font-semibold transition-colors ${role === 'admin' ? 'bg-gold-500 text-ink-900' : 'text-stone-300'}`}
                >
                  Ipsum
                </button>
              </div>
              <button className="relative text-stone-200 hover:text-white" title="Lorem">
                <span className="text-lg">🔔</span>
                <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-gold-400" />
              </button>
              <button onClick={onLogout} className="text-sm font-medium text-stone-300 hover:text-white">
                Lorem
              </button>
              <div className="grid h-9 w-9 place-items-center rounded-full border border-gold-500/50 font-serif font-semibold text-gold-400">L</div>
            </>
          ) : (
            <>
              <button onClick={() => onNav('archive')} className="hidden text-sm font-medium text-stone-200/90 hover:text-gold-400 sm:block">
                Lorem ipsum
              </button>
              <button onClick={onLogin} className="text-sm font-medium text-stone-200/90 hover:text-white">
                Lorem
              </button>
              <Button variant="gold" onClick={onContact}>
                Ipsum
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
