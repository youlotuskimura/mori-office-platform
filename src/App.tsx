import { useState } from 'react'
import { Role } from './hills/data'
import Header from './hills/Header'
import Footer from './hills/Footer'
import PublicHome from './hills/PublicHome'
import WorkerHome from './hills/WorkerHome'
import AdminHome from './hills/AdminHome'
import ContactModal from './hills/ContactModal'
import { ArchivePage, MatchingPage, HealthPage, SimplePage } from './hills/FeaturePages'
import { Button } from './hills/ui'

// HILLS ONE — 森ビル オフィス事業向け統合プラットフォーム モックアップ
// 認証状態（loggedIn）とロール（worker/admin）で画面を出し分ける。
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [role, setRole] = useState<Role>('worker')
  const [page, setPage] = useState('home')
  const [contactOpen, setContactOpen] = useState(false)

  const go = (key: string) => {
    setPage(key)
    window.scrollTo({ top: 0 })
  }
  const openContact = () => setContactOpen(true)

  function renderPage() {
    // ホーム：認証状態とロールで出し分け
    if (page === 'home') {
      if (!loggedIn) return <PublicHome onContact={openContact} onNav={go} />
      return role === 'admin' ? (
        <AdminHome onContact={openContact} onNav={go} />
      ) : (
        <WorkerHome onNav={go} />
      )
    }
    if (page === 'archive') return <ArchivePage onContact={openContact} loggedIn={loggedIn} />
    if (page === 'matching') return <MatchingPage onContact={openContact} />
    if (page === 'health') return <HealthPage />
    if (page === 'city')
      return (
        <SimplePage
          title="Lorem ipsum dolor sit"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          items={[
            { icon: '🍽️', t: 'Lorem ipsum', d: 'Lorem ipsum dolor sit amet.' },
            { icon: '🖼️', t: 'Dolor sit amet', d: 'Consectetur adipiscing elit sed.' },
            { icon: '🧭', t: 'Consectetur elit', d: 'Ut enim ad minim veniam quis.' },
            { icon: '🏛️', t: 'Adipiscing sed', d: 'Duis aute irure dolor in.' },
            { icon: '🚶', t: 'Tempor incididunt', d: 'Excepteur sint occaecat cupidatat.' },
            { icon: '💳', t: 'Labore dolore', d: 'Sed do eiusmod tempor incididunt.' },
          ]}
        />
      )
    if (page === 'community')
      return (
        <SimplePage
          title="Lorem ipsum dolor"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          items={[
            { icon: '🏃', t: 'Lorem ipsum', d: 'Lorem ipsum dolor sit amet.' },
            { icon: '🍱', t: 'Dolor sit amet', d: 'Consectetur adipiscing elit.' },
            { icon: '💡', t: 'Consectetur', d: 'Ut enim ad minim veniam.' },
            { icon: '📣', t: 'Adipiscing elit', d: 'Duis aute irure dolor in.' },
          ]}
        />
      )
    if (page === 'search')
      return (
        <SimplePage
          title="Lorem ipsum dolor sit"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          items={[
            { icon: '🏙️', t: 'Lorem ipsum', d: 'Lorem ipsum dolor sit amet.' },
            { icon: '📐', t: 'Dolor sit amet', d: 'Consectetur adipiscing elit.' },
            { icon: '📈', t: 'Consectetur', d: 'Ut enim ad minim veniam.' },
          ]}
        />
      )
    if (page === 'features')
      return (
        <SimplePage
          title="Lorem ipsum dolor"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          items={[
            { icon: '👤', t: 'Lorem ipsum', d: 'Lorem ipsum dolor sit amet.' },
            { icon: '🧑‍💼', t: 'Dolor sit amet', d: 'Consectetur adipiscing elit.' },
            { icon: '🏢', t: 'Consectetur', d: 'Ut enim ad minim veniam.' },
          ]}
        />
      )
    if (page === 'culture')
      return (
        <SimplePage
          title="Lorem ipsum dolor sit"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          items={[
            { icon: '🎨', t: 'Lorem ipsum', d: 'Lorem ipsum dolor sit amet.' },
            { icon: '🌃', t: 'Dolor sit amet', d: 'Consectetur adipiscing elit.' },
            { icon: '🥂', t: 'Consectetur', d: 'Ut enim ad minim veniam.' },
          ]}
        />
      )
    return null
  }

  return (
    <div className="min-h-screen font-sans text-ink-900">
      <Header
        loggedIn={loggedIn}
        role={role}
        onLogin={() => {
          setLoggedIn(true)
          go('home')
        }}
        onLogout={() => {
          setLoggedIn(false)
          go('home')
        }}
        onRoleChange={(r) => {
          setRole(r)
          go('home')
        }}
        onContact={openContact}
        onNav={go}
      />

      {renderPage()}

      <Footer loggedIn={loggedIn} />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* モバイル固定CTA（未ログイン時のみ＝常時CV露出） */}
      {!loggedIn && (
        <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-stone-200 bg-white/95 p-3 backdrop-blur sm:hidden">
          <div className="flex-1">
            <Button variant="outline" full onClick={openContact}>Lorem</Button>
          </div>
          <div className="flex-1">
            <Button variant="gold" full onClick={openContact}>Ipsum</Button>
          </div>
        </div>
      )}

      {/* デモ操作ヒント（提案レビュー用） */}
      <DemoHint loggedIn={loggedIn} />
    </div>
  )
}

function DemoHint({ loggedIn }: { loggedIn: boolean }) {
  const [show, setShow] = useState(true)
  if (!show) return null
  return (
    <div className="fixed bottom-20 right-4 z-30 max-w-xs rounded-xl bg-ink-900 p-4 text-xs text-stone-200 shadow-xl sm:bottom-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-bold text-gold-400">モックアップ操作ガイド</p>
        <button onClick={() => setShow(false)} className="text-stone-400 hover:text-white">×</button>
      </div>
      <p className="mt-2 leading-relaxed">
        {loggedIn
          ? 'ヘッダー右の「ワーカー / 企業管理者」で出し分けを切替。ログアウトで新規検討層TOPに戻ります。'
          : '右上「ログイン」で既存テナント向けTOPに切替。ログイン後、ロール切替が可能です。'}
      </p>
    </div>
  )
}
