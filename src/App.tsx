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
          title="街のポテンシャルを、仕事に活かす"
          desc="六本木・虎ノ門・麻布台。それぞれの街が持つ固有の価値が、日々の仕事とキャリアを豊かにします。"
          items={[
            { icon: '🍽️', t: 'グルメ & ダイニング', d: 'ミシュランシェフから日常使いまで、300以上の飲食店が歩ける圏内に集積しています。' },
            { icon: '🖼️', t: 'アート & カルチャー', d: '世界クラスの展覧会と現代アートがオフィスの隣に常設。創造性を刺激し続ける環境です。' },
            { icon: '🧭', t: 'おもてなし & ホスピタリティ', d: '国際的な来客へのホスピタリティを、街そのものが担います。接待の質が格段に上がります。' },
            { icon: '🏛️', t: '歴史 & 知見の蓄積', d: '江戸から続く文化的蓄積が、企業ブランドに奥行きと信頼感を与えます。' },
            { icon: '🚶', t: 'アクセス & モビリティ', d: '複数路線直結・羽田成田近接で、国内外の移動コストとタイムロスを最小化。' },
            { icon: '💳', t: 'ヒルズカード特典', d: 'テナント企業従業員向けの優待・割引が各施設で利用可能。福利厚生が即日充実します。' },
          ]}
        />
      )
    if (page === 'community')
      return (
        <SimplePage
          title="ヒルズのコミュニティに、つながる"
          desc="同じ街で働く8万人のワーカーと、アイデア・協業・人脈をオープンに交換する場所がここにあります。"
          items={[
            { icon: '🏃', t: 'ランニングクラブ', d: '週3回、朝6:30。港区の街並みを走りながら異業種の仲間と自然な接点を作れます。' },
            { icon: '🍱', t: 'ランチマッチング', d: 'AIが日替わりで「共通点のある隣のビルの人」をご縁でつなぎます。偶発的な出会いが生まれます。' },
            { icon: '💡', t: 'スタートアップ交流', d: '月次のピッチナイトとコラボレーションセッションで共創機会を探索できます。' },
            { icon: '📣', t: 'イベントカレンダー', d: '講演・ワークショップ・社会貢献活動など、週10件以上が常時開催されています。' },
          ]}
        />
      )
    if (page === 'search')
      return (
        <SimplePage
          title="港区の中心に、最適なオフィスを"
          desc="虎ノ門・六本木・麻布台。グレードAの候補物件とフロアプランを、すべてオンラインで確認できます。"
          items={[
            { icon: '🏙️', t: '立地から探す', d: '駅徒歩分数・路線・エリアで絞り込み。移動コストと採用圏を考慮した最適立地を提案します。' },
            { icon: '📐', t: '面積・間取りから探す', d: '10坪〜5,000坪以上、自由区画から小割まで。成長フェーズに合わせた柔軟な選択肢があります。' },
            { icon: '📈', t: '成長プランから探す', d: '1年後の増床・移転も想定したロードマップ提案。将来コストを先読みしてオフィスを選べます。' },
          ]}
        />
      )
    if (page === 'features')
      return (
        <SimplePage
          title="入居後も、進化し続けるサービス"
          desc="物件の引き渡しはスタートにすぎません。HILLS ONEは入居から退去まで、企業の成長を継続的にサポートします。"
          items={[
            { icon: '👤', t: 'ワーカー向けアプリ', d: '会議室予約・ランチマッチング・イベント参加をワンストップで。通勤から退社まで街を使い倒せます。' },
            { icon: '🧑‍💼', t: '管理者ポータル', d: '請求・契約・ウェルネスダッシュボードを総務チームが一括管理。ペーパーレスで手続きが完結します。' },
            { icon: '🏢', t: '増床・移転プランニング', d: '事業成長に合わせた再配置をHILLS ONEチームが並走します。移転コストと業務影響を最小化。' },
          ]}
        />
      )
    if (page === 'culture')
      return (
        <SimplePage
          title="カルチャーが、採用とブランドを変える"
          desc="六本木ヒルズで働くことは、それ自体がブランドステートメントです。文化・芸術・多様性がオフィスの隣に存在します。"
          items={[
            { icon: '🎨', t: 'アート & 創造性', d: '森美術館・ギャラリーが徒歩圏内。企業クライアントへのエンタメ接待にも活用できます。' },
            { icon: '🌃', t: '夜景 & ホスピタリティ', d: 'スカイラウンジや展望台で、国際的な来賓を最高の体験でもてなせます。会食の記憶が価値を生みます。' },
            { icon: '🥂', t: 'メンバーズラウンジ', d: 'テナント企業専用の交流スペース。採用・接待・社内キックオフイベントに最適な場所です。' },
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

      {/* モバイル固定CTA（未ログイン時のみ） */}
      {!loggedIn && (
        <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-stone-200 bg-white/95 p-3 backdrop-blur sm:hidden">
          <div className="flex-1">
            <Button variant="outline" full onClick={openContact}>お問い合わせ</Button>
          </div>
          <div className="flex-1">
            <Button variant="gold" full onClick={openContact}>内覧を予約する</Button>
          </div>
        </div>
      )}

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
          ? 'ヘッダー右の「ワーカー / 企業管理者」でロール切替。ログアウトで新規検討層TOPへ戻ります。'
          : '右上「ログイン」で既存テナント向けTOPへ切替。ログイン後はロール切替も可能です。'}
      </p>
    </div>
  )
}
