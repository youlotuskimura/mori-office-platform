// =====================================================================
// HILLS セールス・コックピット — すべてダミーデータ（架空）
// =====================================================================

export interface Building {
  id: string
  name: string
  shortName: string
  ward: string
  nearestStation: string
  access: string[]
  description: string
  totalFloors: number
  tenantCount: number
  workerCount: number
  openYear: number
  industries: { name: string; pct: number; color: string }[]
  services: string[]
  differentiators: string[]
  redevelopment: string
  amenities: string[]
}

export interface Unit {
  id: string
  buildingId: string
  floor: number
  area: number
  rentPerTsubo: number
  status: 'available' | 'negotiating' | 'closing'
  availableFrom: string
  lastUpdated: string
  features: string[]
  layoutType: string
}

export interface Customer {
  id: string
  name: string
  company: string
  industry: string
  phone: string
  inquiryDate: string
  requirements: {
    headcount: number
    areaMin: number
    areaMax: number
    budgetMax: number
    preferredArea: string[]
    timeline: string
    priorities: string[]
  }
}

export interface TimelineEvent {
  date: string
  type: 'inquiry' | 'proposal' | 'tour' | 'negotiation' | 'note' | 'closed'
  title: string
  detail: string
}

export interface Deal {
  id: string
  customerId: string
  stage: 'inquiry' | 'proposal' | 'tour' | 'negotiation' | 'closed'
  probability: number
  nextAction: string
  nextActionDate: string
  assignee: string
  timeline: TimelineEvent[]
}

// ── ビル ──────────────────────────────────────────────────────────────

export const buildings: Building[] = [
  {
    id: 'ST',
    name: '虎ノ門ヒルズ ステーションタワー',
    shortName: 'ST',
    ward: '港区虎ノ門',
    nearestStation: '虎ノ門ヒルズ駅',
    access: ['東京メトロ日比谷線 直結', '銀座線 虎ノ門駅 徒歩3分', '神谷町駅 徒歩5分'],
    description: '2023年竣工。東京メトロ日比谷線直結、地上49階建て。国際基準グレードA仕様のフルスペックビル。スタートアップから大手外資・国内大企業まで幅広く入居。',
    totalFloors: 49,
    tenantCount: 142,
    workerCount: 22000,
    openYear: 2023,
    industries: [
      { name: 'IT・テック', pct: 32, color: '#4a8568' },
      { name: '金融・投資', pct: 24, color: '#b59461' },
      { name: 'コンサル・専門職', pct: 18, color: '#6aa589' },
      { name: 'グローバル企業', pct: 16, color: '#2f5d45' },
      { name: 'その他', pct: 10, color: '#c8bfb0' },
    ],
    services: [
      '24時間セキュリティ対応',
      'TOKYO NODE（会議・イベント施設、地上45F）',
      'コンシェルジュサービス',
      'フィットネスジム（入居者専用）',
      '保育施設 Hills Kids',
      '地下直結ショッピング・飲食45店舗',
      'HeloPORT（空飛ぶクルマ離発着実証）',
    ],
    differentiators: [
      '✦ 東京メトロ直結で雨に濡れずアクセス可。ワーカー採用力が直結',
      '✦ TOKYO NODEで大型イベント・株主総会・記者会見まで対応',
      '✦ スタートアップ〜大手が混在するエコシステム：偶発的共創が起きやすい',
      '✦ 竣工2023年：設備・BCP・ZEB水準が最新',
      '✦ HeloPORTで近未来の移動手段と接続（話題性・PR効果）',
    ],
    redevelopment: '虎ノ門〜麻布台エリアの再開発計画が継続中。周辺地価・人材吸引力は中長期的に上昇見込み。',
    amenities: ['展望施設', '美術館スペース', '国際ホテル隣接', '医療クリニック', 'コンビニ・薬局'],
  },
  {
    id: 'BT',
    name: '虎ノ門ヒルズ ビジネスタワー',
    shortName: 'BT',
    ward: '港区虎ノ門',
    nearestStation: '虎ノ門ヒルズ駅',
    access: ['東京メトロ日比谷線 徒歩1分', '銀座線 虎ノ門駅 徒歩5分'],
    description: '2020年竣工。地上36階建て。スタートアップ支援施設「ARCH」を核に、成長フェーズの企業が集積するイノベーションタワー。',
    totalFloors: 36,
    tenantCount: 88,
    workerCount: 14000,
    openYear: 2020,
    industries: [
      { name: 'スタートアップ', pct: 38, color: '#4a8568' },
      { name: 'IT・テック', pct: 26, color: '#6aa589' },
      { name: 'ベンチャーキャピタル', pct: 20, color: '#b59461' },
      { name: 'メディア・PR', pct: 10, color: '#2f5d45' },
      { name: 'その他', pct: 6, color: '#c8bfb0' },
    ],
    services: [
      'ARCH（森ビル公認スタートアップ支援施設）',
      '起業家・投資家ネットワークイベント（月4回以上）',
      '共有ラウンジ・ミーティングポッド',
      '24時間セキュリティ',
      '飲食・コンビニ（低層階）',
    ],
    differentiators: [
      '✦ ARCHによる公式スタートアップ採択制度：VCとの接点が生まれやすい',
      '✦ 「スタートアップが集まる場所」としてのブランド価値が採用力に直結',
      '✦ STより賃料帯が低め：成長フェーズ企業のコスト最適解',
      '✦ STと同一エリアで将来のSTへの移転・拡張シナリオが描きやすい',
    ],
    redevelopment: '虎ノ門地区再開発の中心的役割。商業・住宅・ホテル複合の整備が進行中。',
    amenities: ['スタートアップイベントホール', 'ウォークインクロゼット', '保育所連携', '飲食テラス'],
  },
  {
    id: 'AZABU',
    name: '麻布台ヒルズ マーケット',
    shortName: '麻布台',
    ward: '港区麻布台',
    nearestStation: '神谷町駅',
    access: ['東京メトロ日比谷線 神谷町駅 徒歩5分', '六本木一丁目駅 徒歩7分'],
    description: '2023年竣工。地上64階建て（タワーA）。「緑に包まれた都市」をコンセプトに、オフィス・住宅・ホテル・学校・美術館が共存する次世代型複合開発。',
    totalFloors: 64,
    tenantCount: 106,
    workerCount: 20000,
    openYear: 2023,
    industries: [
      { name: 'グローバル企業', pct: 30, color: '#4a8568' },
      { name: 'ライフサイエンス・医療', pct: 22, color: '#2f5d45' },
      { name: 'IT・テック', pct: 20, color: '#6aa589' },
      { name: 'コンサル・法務', pct: 16, color: '#b59461' },
      { name: 'その他', pct: 12, color: '#c8bfb0' },
    ],
    services: [
      '麻布台ヒルズ ギャラリー（現代アート）',
      'インターナショナルスクール（British School in Tokyo）',
      'スーパー・マーケット（ドン・ドン・ドンキ）',
      'Accor旗艦ホテル（パーク ハイアット 東京隣接）',
      'ウェルネス施設・クリニックモール',
      '屋上庭園・緑化面積60,000㎡',
      '会員制クラブラウンジ（上層階）',
    ],
    differentiators: [
      '✦ 「緑・アート・ウェルネス」が最強のリテンション材料。離職防止効果あり',
      '✦ ギャラリー・展望施設をそのまま接待・顧客招待に使える',
      '✦ インターナショナルスクール隣接：外国人エグゼクティブのファミリー誘致に最適',
      '✦ ライフサイエンス・グローバル企業の集積：業種シナジーが高い',
      '✦ 竣工2023年：ZEB対応・LCA設計で対外ESG報告が強化できる',
    ],
    redevelopment: '周辺の麻布台1丁目地区の整備が継続。六本木一丁目との連続した歩行者デッキ計画あり。',
    amenities: ['現代アート美術館', '屋上庭園', 'インターナショナルスクール', 'クリニックモール', '会員制ラウンジ'],
  },
  {
    id: 'MORI',
    name: '六本木ヒルズ 森タワー',
    shortName: '六本木',
    ward: '港区六本木',
    nearestStation: '六本木駅',
    access: ['東京メトロ日比谷線 六本木駅 直結', '都営大江戸線 六本木駅 徒歩4分'],
    description: '2003年竣工。地上54階建て。20年超の成熟エコシステム。森美術館・東京シティビュー・会員制六本木ヒルズクラブが同居し、文化・ビジネス・接待の三位一体を実現。',
    totalFloors: 54,
    tenantCount: 230,
    workerCount: 35000,
    openYear: 2003,
    industries: [
      { name: '大手事業会社', pct: 28, color: '#2f5d45' },
      { name: 'メディア・広告', pct: 22, color: '#b59461' },
      { name: 'IT・テック', pct: 20, color: '#4a8568' },
      { name: '金融・保険', pct: 18, color: '#6aa589' },
      { name: 'その他', pct: 12, color: '#c8bfb0' },
    ],
    services: [
      '森美術館（世界有数の現代アート美術館）',
      '東京シティビュー（展望台）',
      '六本木ヒルズクラブ（会員制倶楽部）',
      'グランドハイアット東京（隣接ホテル）',
      'テレビ朝日・ショッピング施設200店舗以上',
      '映画館TOHOシネマズ',
      '24時間セキュリティ・コンシェルジュ',
    ],
    differentiators: [
      '✦ 20年超の実績：「六本木ヒルズ入居」ブランドが対外信用力・採用力に直結',
      '✦ 森美術館・クラブで接待・文化事業がその場で完結',
      '✦ テナント密度No.1：異業種との偶発的共創が最も起きやすい環境',
      '✦ 竣工物件のため賃料は新築比で割安感がある（コスト面での優位）',
      '✦ ヒルズ内イベント・コミュニティが最多：エンゲージメント施策に活用しやすい',
    ],
    redevelopment: '六本木ヒルズ ノースタワー構想（計画中）。追加開発で商業・文化機能の拡張を予定。',
    amenities: ['森美術館', '展望台', '会員制クラブ', '映画館', '国際ホテル', 'TV局'],
  },
  {
    id: 'KEYAKI',
    name: '六本木ヒルズ けやき坂コンプレックス',
    shortName: 'けやき坂',
    ward: '港区六本木',
    nearestStation: '六本木駅',
    access: ['東京メトロ日比谷線 六本木駅 徒歩5分', '都営大江戸線 六本木駅 徒歩5分'],
    description: '六本木ヒルズの低層棟群。ブランドショップ・レストラン街が並ぶけやき坂に面し、クリエイティブ系・ブランド企業が集積。小〜中規模区画が中心。',
    totalFloors: 10,
    tenantCount: 64,
    workerCount: 9000,
    openYear: 2003,
    industries: [
      { name: 'クリエイティブ・デザイン', pct: 35, color: '#b59461' },
      { name: 'ファッション・リテール', pct: 28, color: '#6aa589' },
      { name: 'PR・マーケティング', pct: 22, color: '#4a8568' },
      { name: 'エンタメ・音楽', pct: 10, color: '#2f5d45' },
      { name: 'その他', pct: 5, color: '#c8bfb0' },
    ],
    services: [
      'けやき坂の高級ブランドショッピング',
      'レストラン街（ミシュラン掲載店含む）',
      '六本木ヒルズアリーナ（野外イベント）',
      'グランドハイアット東京 徒歩1分',
    ],
    differentiators: [
      '✦ クリエイティブ・ブランド業界の集積地：業種シナジーが最高',
      '✦ けやき坂のブランド景観が採用面接・接客に際立った印象を与える',
      '✦ 小〜中規模区画：コスト最適化しながら六本木ヒルズアドレスを取得',
    ],
    redevelopment: '六本木ヒルズ全体の回遊動線整備計画が進行中。',
    amenities: ['野外アリーナ', 'ブランドショッピング', 'ミシュラン飲食店'],
  },
  {
    id: 'ARK',
    name: 'アーク森ビル',
    shortName: 'アーク',
    ward: '港区赤坂',
    nearestStation: '六本木一丁目駅',
    access: ['東京メトロ南北線 六本木一丁目駅 直結', '銀座線 溜池山王駅 徒歩6分'],
    description: '1986年竣工（リニューアル継続実施）。南北線直結アクセスが強み。霞が関・永田町に近く、政府機関・官公庁との連携が必要な企業に支持されている。賃料コスパが高い。',
    totalFloors: 38,
    tenantCount: 110,
    workerCount: 18000,
    openYear: 1986,
    industries: [
      { name: 'コンサル・シンクタンク', pct: 30, color: '#b59461' },
      { name: '商社・製造', pct: 24, color: '#2f5d45' },
      { name: '法務・会計', pct: 20, color: '#4a8568' },
      { name: 'IT・テック', pct: 16, color: '#6aa589' },
      { name: 'その他', pct: 10, color: '#c8bfb0' },
    ],
    services: [
      '六本木一丁目駅直結（雨天対応）',
      'アークヒルズサウスタワー等と連結する低層商業',
      'カフェ・レストラン・コンビニ',
      '会議室レンタルサービス',
    ],
    differentiators: [
      '✦ 霞が関・永田町へ地下鉄1駅：省庁との打ち合わせが多い業種に最適',
      '✦ ヒルズ物件の中で最もコスパが高い：スペック対賃料比に優れる',
      '✦ 安定した大企業・コンサル集積：業種シナジーが高い',
      '✦ 駅直結で天候リスクなし：ワーカーの移動快適性が高い',
    ],
    redevelopment: 'アーク都市軸整備計画：六本木ヒルズ・麻布台ヒルズとの歩行者ネットワーク整備が2027年完成予定。',
    amenities: ['地下鉄直結', '低層商業施設', 'カフェ・飲食'],
  },
]

// ── 区画（空室ユニット）─────────────────────────────────────────────

export const units: Unit[] = [
  // ST
  { id: 'ST-22A', buildingId: 'ST', floor: 22, area: 350, rentPerTsubo: 10.5, status: 'available', availableFrom: '即入居可', lastUpdated: '2分前', features: ['角部屋', '自然採光', 'OAフロア'], layoutType: 'オープン' },
  { id: 'ST-31B', buildingId: 'ST', floor: 31, area: 180, rentPerTsubo: 11.2, status: 'negotiating', availableFrom: '2026年8月', lastUpdated: '45分前', features: ['高層眺望', '既存間仕切あり'], layoutType: 'ゾーニング' },
  { id: 'ST-38A', buildingId: 'ST', floor: 38, area: 500, rentPerTsubo: 12.0, status: 'closing', availableFrom: '2026年10月', lastUpdated: '1時間前', features: ['超高層', '2フロア連結可', 'テラス付'], layoutType: 'スケルトン' },
  { id: 'ST-15C', buildingId: 'ST', floor: 15, area: 220, rentPerTsubo: 9.8, status: 'available', availableFrom: '即入居可', lastUpdated: '12分前', features: ['スタンダード', 'OAフロア'], layoutType: 'オープン' },

  // BT
  { id: 'BT-15A', buildingId: 'BT', floor: 15, area: 240, rentPerTsubo: 9.8, status: 'available', availableFrom: '即入居可', lastUpdated: '15分前', features: ['スタートアップ向け', 'ARCHフロア近接'], layoutType: 'オープン' },
  { id: 'BT-19B', buildingId: 'BT', floor: 19, area: 120, rentPerTsubo: 10.2, status: 'available', availableFrom: '即入居可', lastUpdated: '8分前', features: ['小規模向け', '眺望良好'], layoutType: 'オープン' },
  { id: 'BT-22A', buildingId: 'BT', floor: 22, area: 300, rentPerTsubo: 10.5, status: 'negotiating', availableFrom: '2026年9月', lastUpdated: '2時間前', features: ['角部屋', '2面採光'], layoutType: 'ゾーニング' },

  // AZABU
  { id: 'AZABU-8A', buildingId: 'AZABU', floor: 8, area: 160, rentPerTsubo: 11.5, status: 'negotiating', availableFrom: '2026年8月', lastUpdated: '30分前', features: ['緑地ビュー', 'ウェルネス階'], layoutType: 'オープン' },
  { id: 'AZABU-12B', buildingId: 'AZABU', floor: 12, area: 420, rentPerTsubo: 12.8, status: 'available', availableFrom: '即入居可', lastUpdated: '5分前', features: ['超広い', 'スケルトン引渡可', '美術館同フロア'], layoutType: 'スケルトン' },
  { id: 'AZABU-14C', buildingId: 'AZABU', floor: 14, area: 280, rentPerTsubo: 13.0, status: 'negotiating', availableFrom: '2026年9月', lastUpdated: '2時間前', features: ['高層', '港区全景'], layoutType: 'ゾーニング' },
  { id: 'AZABU-20A', buildingId: 'AZABU', floor: 20, area: 380, rentPerTsubo: 14.2, status: 'closing', availableFrom: '2026年11月', lastUpdated: '20分前', features: ['超高層', '東京タワービュー'], layoutType: 'スケルトン' },

  // MORI
  { id: 'MORI-25A', buildingId: 'MORI', floor: 25, area: 300, rentPerTsubo: 8.9, status: 'available', availableFrom: '即入居可', lastUpdated: '1分前', features: ['六本木一等地', '標準仕様'], layoutType: 'オープン' },
  { id: 'MORI-30B', buildingId: 'MORI', floor: 30, area: 450, rentPerTsubo: 9.5, status: 'negotiating', availableFrom: '2026年9月', lastUpdated: '20分前', features: ['超広い', '美術館近接'], layoutType: 'ゾーニング' },
  { id: 'MORI-33C', buildingId: 'MORI', floor: 33, area: 150, rentPerTsubo: 9.8, status: 'available', availableFrom: '即入居可', lastUpdated: '10分前', features: ['高層', '採光良好'], layoutType: 'オープン' },
  { id: 'MORI-40A', buildingId: 'MORI', floor: 40, area: 200, rentPerTsubo: 10.5, status: 'closing', availableFrom: '2026年7月', lastUpdated: '3分前', features: ['超高層', '展望台同フロア'], layoutType: 'スケルトン' },

  // KEYAKI
  { id: 'KEYAKI-6A', buildingId: 'KEYAKI', floor: 6, area: 90, rentPerTsubo: 8.5, status: 'available', availableFrom: '即入居可', lastUpdated: '40分前', features: ['けやき坂ビュー', 'コンパクト'], layoutType: 'オープン' },
  { id: 'KEYAKI-8B', buildingId: 'KEYAKI', floor: 8, area: 110, rentPerTsubo: 8.8, status: 'negotiating', availableFrom: '2026年8月', lastUpdated: '55分前', features: ['クリエイティブ向け', 'ブランド環境'], layoutType: 'オープン' },

  // ARK
  { id: 'ARK-5A', buildingId: 'ARK', floor: 5, area: 200, rentPerTsubo: 7.5, status: 'available', availableFrom: '即入居可', lastUpdated: '25分前', features: ['コスパ最高', '駅直結'], layoutType: 'オープン' },
  { id: 'ARK-7B', buildingId: 'ARK', floor: 7, area: 350, rentPerTsubo: 7.8, status: 'available', availableFrom: '即入居可', lastUpdated: '12分前', features: ['広め', '2面採光'], layoutType: 'ゾーニング' },
  { id: 'ARK-9C', buildingId: 'ARK', floor: 9, area: 150, rentPerTsubo: 7.2, status: 'negotiating', availableFrom: '2026年8月', lastUpdated: '3時間前', features: ['小規模向け', '霞が関近接'], layoutType: 'オープン' },
  { id: 'ARK-12A', buildingId: 'ARK', floor: 12, area: 280, rentPerTsubo: 8.0, status: 'available', availableFrom: '即入居可', lastUpdated: '18分前', features: ['中層', '標準仕様'], layoutType: 'オープン' },
]

// ── 顧客・商談 ────────────────────────────────────────────────────────

export const customers: Customer[] = [
  {
    id: 'C001',
    name: '田中 勇介',
    company: '株式会社テックスタート',
    industry: 'IT・スタートアップ',
    phone: '090-XXXX-0001',
    inquiryDate: '2026-06-10',
    requirements: {
      headcount: 80,
      areaMin: 120,
      areaMax: 250,
      budgetMax: 280,
      preferredArea: ['虎ノ門', '六本木'],
      timeline: '2026年8〜9月',
      priorities: ['採用力', 'スタートアップ環境', 'ブランド'],
    },
  },
  {
    id: 'C002',
    name: '佐藤 由美',
    company: 'グローバル投資顧問株式会社',
    industry: '金融・投資',
    phone: '090-XXXX-0002',
    inquiryDate: '2026-06-08',
    requirements: {
      headcount: 200,
      areaMin: 300,
      areaMax: 500,
      budgetMax: 600,
      preferredArea: ['麻布台', '虎ノ門'],
      timeline: '2026年10〜12月',
      priorities: ['立地・アクセス', '格式・ブランド', 'セキュリティ'],
    },
  },
  {
    id: 'C003',
    name: '鈴木 一郎',
    company: 'ライフサイエンス合同会社',
    industry: '医療・バイオ',
    phone: '090-XXXX-0003',
    inquiryDate: '2026-06-12',
    requirements: {
      headcount: 50,
      areaMin: 80,
      areaMax: 160,
      budgetMax: 180,
      preferredArea: ['麻布台', '六本木'],
      timeline: '即入居〜2026年8月',
      priorities: ['ウェルネス環境', 'グリーン設計', '研究者採用'],
    },
  },
  {
    id: 'C004',
    name: '山田 花子',
    company: 'Creative Studio Japan株式会社',
    industry: 'クリエイティブ・広告',
    phone: '090-XXXX-0004',
    inquiryDate: '2026-06-14',
    requirements: {
      headcount: 35,
      areaMin: 60,
      areaMax: 120,
      budgetMax: 100,
      preferredArea: ['六本木'],
      timeline: '2026年8月',
      priorities: ['デザイン環境', 'クリエイター採用', 'エリアのブランド'],
    },
  },
  {
    id: 'C005',
    name: 'Kim Jae-won',
    company: 'KR Asia Holdings',
    industry: '外資・グローバル',
    phone: '090-XXXX-0005',
    inquiryDate: '2026-06-13',
    requirements: {
      headcount: 120,
      areaMin: 180,
      areaMax: 380,
      budgetMax: 500,
      preferredArea: ['麻布台', '虎ノ門'],
      timeline: '2026年9〜11月',
      priorities: ['外国人エグゼクティブ受入', 'インターナショナル環境', 'ホテル近接'],
    },
  },
]

export const deals: Deal[] = [
  {
    id: 'D001',
    customerId: 'C001',
    stage: 'proposal',
    probability: 60,
    nextAction: '提案書フォローアップ・BT内見日程調整',
    nextActionDate: '2026-06-18',
    assignee: '担当: 森川 洋介',
    timeline: [
      { date: '2026-06-10', type: 'inquiry', title: '初回問い合わせ', detail: 'ウェブフォームより受信。「スタートアップが集まる環境重視」の旨。' },
      { date: '2026-06-12', type: 'note', title: '電話ヒアリング実施', detail: '人数80名、2026年秋入居希望。予算感は月額280万円前後。虎ノ門BTのARCH環境に強い関心。' },
      { date: '2026-06-15', type: 'proposal', title: 'BT-19B・BT-15A を提案送付', detail: 'HILLS Office概要 + 2区画の提案書を送付済み。先方レビュー中。' },
    ],
  },
  {
    id: 'D002',
    customerId: 'C002',
    stage: 'tour',
    probability: 75,
    nextAction: 'AZABU-12B 内見（6/20 14:00 予定）・条件確認',
    nextActionDate: '2026-06-20',
    assignee: '担当: 田村 美里',
    timeline: [
      { date: '2026-06-08', type: 'inquiry', title: '初回問い合わせ', detail: '代表取締役秘書より連絡。移転先として麻布台ヒルズを第一希望。' },
      { date: '2026-06-10', type: 'note', title: '対面ヒアリング（本社）', detail: '200名規模、セキュリティ要件高め。麻布台ヒルズのブランドと緑環境を高評価。' },
      { date: '2026-06-13', type: 'proposal', title: 'AZABU-12B・AZABU-14C 提案', detail: '2区画の比較提案書を提出。先方からAZABU-12Bに絞りたいとの回答。' },
      { date: '2026-06-17', type: 'tour', title: '現地内見（予定）', detail: 'AZABU-12B の内見を設定中。意思決定者2名参加予定。' },
    ],
  },
  {
    id: 'D003',
    customerId: 'C003',
    stage: 'inquiry',
    probability: 40,
    nextAction: '麻布台ヒルズのウェルネス機能詳細資料を追加送付',
    nextActionDate: '2026-06-16',
    assignee: '担当: 佐々木 健太',
    timeline: [
      { date: '2026-06-12', type: 'inquiry', title: '初回問い合わせ', detail: 'ライフサイエンス系スタートアップ。「ウェルネス・緑環境」に強いこだわり。麻布台ヒルズを希望。' },
      { date: '2026-06-14', type: 'note', title: '電話確認', detail: '予算は月180万円上限。50名。早ければ即入居希望。AZABU-8A が面積感マッチ。' },
    ],
  },
  {
    id: 'D004',
    customerId: 'C004',
    stage: 'proposal',
    probability: 50,
    nextAction: 'KEYAKI-6A 見積・KEYAKI内覧のアレンジ',
    nextActionDate: '2026-06-19',
    assignee: '担当: 森川 洋介',
    timeline: [
      { date: '2026-06-14', type: 'inquiry', title: '初回問い合わせ', detail: '代表より直接連絡。「けやき坂のブランド感が欲しい」。コンパクト区画希望。' },
      { date: '2026-06-15', type: 'proposal', title: 'KEYAKI-6A 提案', detail: '90坪でコスト感もマッチ。先方のCOOが確認中。' },
    ],
  },
  {
    id: 'D005',
    customerId: 'C005',
    stage: 'negotiation',
    probability: 85,
    nextAction: '最終条件確認・契約書ドラフト送付',
    nextActionDate: '2026-06-17',
    assignee: '担当: 田村 美里',
    timeline: [
      { date: '2026-06-13', type: 'inquiry', title: '初回問い合わせ', detail: 'ソウル本社から日本拠点設立を検討。外資系エグゼクティブの受入環境を重視。' },
      { date: '2026-06-14', type: 'proposal', title: 'AZABU-12B・ST-22A 提案', detail: '英語対応資料を作成し提案。インターナショナルスクールとホテル近接を強調。' },
      { date: '2026-06-15', type: 'tour', title: 'AZABU-12B 内見完了', detail: 'エグゼクティブ2名が来日し内見。即日「AZABU-12Bで進めたい」と回答。' },
      { date: '2026-06-16', type: 'negotiation', title: '条件交渉開始', detail: 'フリーレント・IT工事サポートについて交渉中。大筋合意に近い状況。' },
    ],
  },
]

// ── マッチングスコア計算ロジック ──────────────────────────────────────

export interface MatchResult {
  unit: Unit
  building: Building
  score: number
  reasons: string[]
  monthlyRent: number
}

export function calcMatch(customer: Customer, unit: Unit): MatchResult | null {
  const building = buildings.find(b => b.id === unit.buildingId)
  if (!building) return null

  let score = 0
  const reasons: string[] = []

  // 面積マッチ (30点)
  if (unit.area >= customer.requirements.areaMin && unit.area <= customer.requirements.areaMax) {
    score += 30
    reasons.push(`面積 ${unit.area}坪が要件範囲内（${customer.requirements.areaMin}〜${customer.requirements.areaMax}坪）`)
  } else if (unit.area >= customer.requirements.areaMin * 0.8 && unit.area <= customer.requirements.areaMax * 1.2) {
    score += 15
    reasons.push(`面積は若干オーバー/アンダーだが許容範囲内の可能性あり`)
  }

  // 予算マッチ (25点)
  const monthlyRent = Math.round(unit.area * unit.rentPerTsubo)
  if (monthlyRent <= customer.requirements.budgetMax) {
    score += 25
    reasons.push(`月額 ${monthlyRent}万円 ≤ 予算上限 ${customer.requirements.budgetMax}万円`)
  } else if (monthlyRent <= customer.requirements.budgetMax * 1.15) {
    score += 10
    reasons.push(`月額 ${monthlyRent}万円（予算超過 ${Math.round((monthlyRent / customer.requirements.budgetMax - 1) * 100)}%）`)
  }

  // エリアマッチ (20点)
  const areaMatch = customer.requirements.preferredArea.some(a =>
    building.name.includes(a) || building.ward.includes(a)
  )
  if (areaMatch) {
    score += 20
    reasons.push(`希望エリア「${customer.requirements.preferredArea.join('・')}」に合致`)
  }

  // 即入居 / 入居時期マッチ (15点)
  if (unit.status === 'available') {
    score += 15
    reasons.push('即入居可能')
  } else if (unit.status === 'negotiating') {
    score += 8
  }

  // 優先事項マッチ (10点)
  const priorityMatch = customer.requirements.priorities.filter(p => {
    const combined = [...building.services, ...building.differentiators, ...building.amenities].join(' ')
    return combined.includes(p) || building.description.includes(p)
  })
  if (priorityMatch.length > 0) {
    score += Math.min(10, priorityMatch.length * 4)
    reasons.push(`優先事項「${priorityMatch.slice(0, 2).join('・')}」に対応する施設あり`)
  }

  return { unit, building, score: Math.min(score, 98), reasons, monthlyRent }
}

// 人数 → 推奨面積換算（1名あたり3〜4坪）
export function calcRecommendedArea(headcount: number): { min: number; max: number } {
  return { min: Math.round(headcount * 3), max: Math.round(headcount * 4) }
}
