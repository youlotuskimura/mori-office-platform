export type Role = 'worker' | 'admin'

export const properties = [
  {
    name: '虎ノ門ヒルズ ステーションタワー',
    area: '100〜5,000坪',
    feature: '東京メトロ直結。国際水準グレードAのフルスペックビルが、企業イメージと生産性を同時に引き上げます。',
    vacancy: '空室あり',
    tag: '新築',
  },
  {
    name: '麻布台ヒルズ',
    area: '100〜2,000坪',
    feature: '緑・アート・ウェルネス施設と共存する次世代複合都市。従業員の健康と創造性を街が担います。',
    vacancy: '一部空室',
    tag: 'GREEN',
  },
  {
    name: '六本木ヒルズ',
    area: '50〜3,000坪',
    feature: '20年超の実績が生んだ成熟したエコシステム。多彩な業種が集まり、偶発的な共創が日常になります。',
    vacancy: 'お問い合わせ',
    tag: '',
  },
]

export const cases = [
  { company: 'テック系スタートアップ', metric: '採用応募数', value: '+180%', note: '六本木ヒルズ移転後、優秀人材への認知が急伸。内定承諾率も大幅に改善。' },
  { company: 'グローバル外資系企業', metric: '人材定着率', value: '+42%', note: '麻布台ヒルズ。ウェルネス環境と生活利便性の向上が離職防止に直結。' },
  { company: '大手金融機関', metric: 'オフィスコスト', value: '−28%', note: '虎ノ門ヒルズへの拠点統合と可変区画活用で、固定費を大幅圧縮。' },
]

export const stats = [
  { label: '入居企業数', value: '500+' },
  { label: 'ヒルズワーカー', value: '80,000+' },
  { label: '施設・サービス', value: '150+' },
  { label: 'テナント継続率', value: '95%' },
]

export const archives = [
  { title: '採用競争力を高めるオフィス戦略 ── ヒルズ移転3社の成長軌跡', speaker: '虎ノ門ヒルズ入居企業 3社', len: '52 min', tag: 'STRATEGY', progress: 40 },
  { title: 'ウェルネス経営の実践 × 麻布台ヒルズのグリーン設計', speaker: '山田 健太（HILLS ONE編集部）', len: '38 min', tag: 'WELLNESS', progress: 0 },
  { title: 'スタートアップのグローバル拠点戦略 ── 六本木から世界へ', speaker: '複数登壇者', len: '45 min', tag: 'GLOBAL', progress: 100 },
  { title: 'エンゲージメント経営2026 ── データが示す「働く場所」の選び方', speaker: 'HR Analytics Lab', len: '60 min', tag: 'DATA', progress: 0 },
]

export const matches = [
  { company: 'Summit Ventures', want: '日本市場進出を検討するグローバルスタートアップとの接点を求めています（投資・アドバイザリー）', tags: ['投資', 'グローバル'], status: '新着' },
  { company: 'GreenTech合同会社', want: 'ESGデータ可視化ソリューションの導入先を探しています（SaaS・コンサル）', tags: ['ESG', 'SaaS'], status: '商談中' },
  { company: '三星コンサルティング', want: 'M&A後の組織統合・空間設計の知見を提供できるパートナーを探索中', tags: ['M&A', '組織設計'], status: '成立' },
]

export const feedItems = [
  { user: '山田（ワークスタイルラボ）', group: '#hills_community', text: '先週の麻布台ヒルズのルーフトップイベント、最高でした。次回参加の方はぜひご連絡を！', time: '8分前' },
  { user: '佐藤（テックコア部）', group: '#dev_lounge', text: '虎ノ門のスタンディングエリア、集中できて最高。午後の作業場所として超おすすめです。', time: '23分前' },
  { user: '鈴木（チームHR）', group: '#wellness', text: '今週のヨガセッション、まだ空きあります！参加したい方はアプリから登録どうぞ。', time: '1時間前' },
]

export const lunchMatches = [
  { name: '田中 M.', dept: '営業推進部', common: '共通：ランニング / スタートアップ経営' },
  { name: 'Chen Y.', dept: 'グローバル事業部', common: '共通：コーヒー探求 / デザイン思考' },
]

export const workerQuickActions = [
  { icon: '🗓️', label: '会議室を予約' },
  { icon: '🍱', label: 'ランチマッチ' },
  { icon: '🎟️', label: 'イベントに参加' },
  { icon: '🎨', label: 'アートガイド' },
]

export const adminQuickActions = [
  { icon: '📊', label: '入居状況レポート' },
  { icon: '👥', label: 'ウェルネス状況' },
  { icon: '🏢', label: '契約・手続き' },
  { icon: '🧾', label: '請求・コスト管理' },
]

export const healthScores = [
  { dept: '営業部', score: 78, trend: '+3' },
  { dept: '企画部', score: 71, trend: '+2' },
  { dept: 'エンジニア', score: 84, trend: '+1' },
  { dept: 'バックオフィス', score: 69, trend: '−2' },
]

export const recommendations = [
  { icon: '☀️', title: '本日のヨガ（麻布台ヒルズ / 11:30〜）', cat: 'WELLNESS' },
  { icon: '🎤', title: 'スタートアップ交流会（虎ノ門ヒルズ / 18:00〜）', cat: 'EVENT' },
  { icon: '🪑', title: '集中ワーク向け穴場スポット3選', cat: 'GUIDE' },
]
