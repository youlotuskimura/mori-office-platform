// =====================================================================
// HILLS セールス・コックピット — 施設提案ツール（非オフィス施設）
// すべてダミーデータ（架空）
// =====================================================================

export type FacilityCategory =
  | 'event'      // イベント・会議施設
  | 'culture'    // 文化・エンタメ
  | 'club'       // 会員制・接待
  | 'wellness'   // ウェルネス・フィットネス
  | 'dining'     // 飲食・ダイニング
  | 'hotel'      // ホテル・宿泊
  | 'outdoor'    // 屋外・テラス
  | 'mobility'   // モビリティ

export interface TimeSlot {
  from: string
  to: string
  status: 'available' | 'reserved' | 'closed'
  label?: string
}

export interface Facility {
  id: string
  name: string
  buildingId: string
  buildingShort: string
  category: FacilityCategory
  capacity: { min: number; max: number }
  areaSqm?: number
  floor: string
  priceNote: string
  status: 'available' | 'limited' | 'reserved' | 'maintenance'
  todaySlots: TimeSlot[]
  features: string[]
  occasions: string[]
  description: string
  salesPoints: string[]
  contact: string
  lastUpdated: string
}

export interface Occasion {
  id: string
  label: string
  icon: string
}

export const OCCASIONS: Occasion[] = [
  { id: 'vip_dinner', label: 'VIP接待・ラグジュアリーディナー', icon: '🥂' },
  { id: 'large_event', label: '大規模イベント・カンファレンス', icon: '🎪' },
  { id: 'small_meeting', label: '少人数会議・取締役会', icon: '📊' },
  { id: 'wellness', label: 'ウェルネス体験・福利厚生', icon: '🧘' },
  { id: 'ceremony', label: '式典・株主総会・発表会', icon: '🎖️' },
  { id: 'media', label: 'メディア対応・PR・撮影', icon: '🎥' },
  { id: 'recruitment', label: '採用イベント・会社説明会', icon: '👥' },
  { id: 'teambuilding', label: 'チームビルディング', icon: '🏆' },
  { id: 'culture', label: 'アート・文化体験', icon: '🎨' },
  { id: 'client_tour', label: '顧客招待・施設ツアー', icon: '🌆' },
]

export const CATEGORY_LABEL: Record<FacilityCategory, string> = {
  event:    'イベント・会議',
  culture:  '文化・エンタメ',
  club:     '会員制・接待',
  wellness: 'ウェルネス',
  dining:   'ダイニング',
  hotel:    'ホテル',
  outdoor:  '屋外・テラス',
  mobility: 'モビリティ',
}

// ── 施設データ ──────────────────────────────────────────────────────

export const facilities: Facility[] = [
  // ── 虎ノ門ヒルズ ─────────────────────────────────────────────────
  {
    id: 'TOKYO_NODE',
    name: 'TOKYO NODE',
    buildingId: 'ST',
    buildingShort: '虎ノ門ST',
    category: 'event',
    capacity: { min: 10, max: 1500 },
    areaSqm: 4300,
    floor: '45〜49F',
    priceNote: '120万円〜（規模・利用時間による）',
    status: 'limited',
    lastUpdated: '5分前',
    todaySlots: [
      { from: '09:00', to: '12:00', status: 'available' },
      { from: '12:00', to: '18:00', status: 'reserved', label: '某IT企業 製品発表会' },
      { from: '18:00', to: '22:00', status: 'available' },
    ],
    features: ['360°東京パノラマビュー', '国際会議対応（同時通訳ブース）', 'モジュール型フレキシブル空間', '最新AV設備一式', 'ケータリング手配可'],
    occasions: ['large_event', 'ceremony', 'media', 'recruitment', 'client_tour'],
    description: '地上45〜49階に広がる多機能複合施設。フォーラム（1500名）、スタジオ、ガーデンが一体的に構成され、カンファレンスから展示会、音楽ライブまで対応。東京タワー・富士山を望む唯一無二のロケーション。',
    salesPoints: [
      '✦ 1500名収容・分割利用で〜150名まで対応：スケール感が全く違う',
      '✦ 「TOKYO NODE でやった」というブランド価値がそのままPRになる',
      '✦ 発表会・記者会見の映像バックに東京夜景が映える→メディア露出効果大',
      '✦ 入居テナント企業は優先予約・特別料金で利用可能',
      '✦ HeloPORT（空飛ぶクルマ）との連携で近未来感を演出',
    ],
    contact: '虎ノ門ヒルズ TOKYO NODE 事務局（内線: 内7100）',
  },
  {
    id: 'BT_ARCH_HALL',
    name: 'ARCHホール',
    buildingId: 'BT',
    buildingShort: '虎ノ門BT',
    category: 'event',
    capacity: { min: 20, max: 200 },
    areaSqm: 580,
    floor: '5F',
    priceNote: '15万円〜（半日）',
    status: 'available',
    lastUpdated: '12分前',
    todaySlots: [
      { from: '09:00', to: '13:00', status: 'reserved', label: 'スタートアップ説明会' },
      { from: '13:00', to: '22:00', status: 'available' },
    ],
    features: ['ピッチ登壇ステージ', 'スクリーン3面', '可動式客席', 'スタートアップエコシステム'],
    occasions: ['large_event', 'recruitment', 'teambuilding', 'small_meeting'],
    description: 'スタートアップ支援拠点ARCHに設けられたイベントホール。起業家・投資家ネットワークの中心地として、ピッチイベント・採用説明会・研究発表に最適。',
    salesPoints: [
      '✦ 「スタートアップが集まる場所」の熱量がそのまま場の空気になる',
      '✦ 投資家・起業家を招いた合同イベントとの連動が組みやすい',
      '✦ STのTOKYO NODEより小規模・低コストで虎ノ門アドレスを使いたいときに最適',
    ],
    contact: 'ARCH事務局（内線: 内3210）',
  },
  {
    id: 'HELOPORT',
    name: 'HeloPORT 虎ノ門',
    buildingId: 'ST',
    buildingShort: '虎ノ門ST',
    category: 'mobility',
    capacity: { min: 1, max: 4 },
    floor: '屋上',
    priceNote: '体験フライト: 8万円〜/回（要事前申込）',
    status: 'limited',
    lastUpdated: '30分前',
    todaySlots: [
      { from: '10:00', to: '11:00', status: 'available', label: '体験フライト' },
      { from: '13:00', to: '14:00', status: 'available', label: '体験フライト' },
      { from: '16:00', to: '17:00', status: 'reserved', label: '予約済み' },
    ],
    features: ['空飛ぶクルマ（eVTOL）実証離発着', '都心〜羽田・横浜ルート検討中', 'PR・撮影対応可'],
    occasions: ['media', 'client_tour', 'vip_dinner'],
    description: '東京初の都市型エアモビリティ拠点。空飛ぶクルマ（eVTOL）の体験フライトや実証実験が行われており、社内イベント・顧客招待での話題性は抜群。',
    salesPoints: [
      '✦ 「空飛ぶクルマ体験」は商談・接待・PR問わず最強の話題提供',
      '✦ テレビ取材・雑誌撮影と連動したPRイベントの企画に最適',
      '✦ 2027年以降の都市間移動商用化を見据えた先行PR効果',
    ],
    contact: 'HeloPORT 運営事務局（内線: 内7200）',
  },

  // ── 麻布台ヒルズ ──────────────────────────────────────────────────
  {
    id: 'AZABU_GALLERY',
    name: '麻布台ヒルズ ギャラリー',
    buildingId: 'AZABU',
    buildingShort: '麻布台',
    category: 'culture',
    capacity: { min: 10, max: 400 },
    areaSqm: 1500,
    floor: 'B1〜1F',
    priceNote: 'アフター時間貸し: 50万円〜（要相談）',
    status: 'available',
    lastUpdated: '8分前',
    todaySlots: [
      { from: '10:00', to: '20:00', status: 'available', label: '通常営業中（一般公開）' },
      { from: '20:00', to: '23:00', status: 'available', label: 'プライベートレンタル可' },
    ],
    features: ['国際レベルの照明・温湿度管理', 'アート作品込みの空間貸し', '専任キュレーターによる解説', 'ケータリング可（要調整）'],
    occasions: ['vip_dinner', 'culture', 'client_tour', 'media', 'ceremony'],
    description: '麻布台ヒルズの中核文化施設。国内外の現代アーティストの企画展を年間通じて開催。閉館後のプライベートレンタルでは、アート作品に囲まれた唯一無二の接待・イベントが実現。',
    salesPoints: [
      '✦ アート空間での接待は会食だけでは差別化できない「体験価値」を提供',
      '✦ キュレーターによる個人ガイドツアーをセットにした顧客招待が最も評判良い',
      '✦ ESG・文化支援の観点で協賛企業としての対外PRにも活用可能',
      '✦ 撮影可能なアート作品を背景にしたVIP記念撮影も人気',
    ],
    contact: 'ギャラリー事業部（内線: 内5100）',
  },
  {
    id: 'AZABU_ROOFTOP',
    name: '麻布台ヒルズ 屋上庭園テラス',
    buildingId: 'AZABU',
    buildingShort: '麻布台',
    category: 'outdoor',
    capacity: { min: 20, max: 500 },
    areaSqm: 6000,
    floor: '低層棟屋上',
    priceNote: '30万円〜（2時間・規模による）',
    status: 'available',
    lastUpdated: '15分前',
    todaySlots: [
      { from: '11:00', to: '14:00', status: 'available' },
      { from: '14:00', to: '17:00', status: 'reserved', label: 'グリーンイベント' },
      { from: '18:00', to: '22:00', status: 'available' },
    ],
    features: ['緑化面積6万㎡の一部', 'BBQ設備設置可', '東京タワービュー', 'ウェルカムドリンク設置可', 'ペット同伴可（要調整）'],
    occasions: ['teambuilding', 'client_tour', 'wellness', 'recruitment'],
    description: '6万㎡の緑地空間に設けられた麻布台ヒルズの屋上テラス。都心とは思えない緑の圧倒感の中でBBQ・ウェルカムパーティ・オープンエアセミナーが開催できる。',
    salesPoints: [
      '✦ 都心のビルの屋上とは全く違う「緑に包まれた体験」が他ビルとの最大差別化',
      '✦ チームビルディング・BBQパーティは申込から即日手配しやすい',
      '✦ 東京タワーをバックにした夕暮れパーティは感動度が群を抜く',
      '✦ SDGs・ウェルネス文脈でのイベントPRに最適なロケーション',
    ],
    contact: 'グリーン施設管理部（内線: 内5200）',
  },
  {
    id: 'AZABU_SPA',
    name: 'Hills Spa & Fitness',
    buildingId: 'AZABU',
    buildingShort: '麻布台',
    category: 'wellness',
    capacity: { min: 1, max: 60 },
    areaSqm: 2800,
    floor: '3F',
    priceNote: '1day利用: 25,000円〜/人（法人契約あり）',
    status: 'available',
    lastUpdated: '22分前',
    todaySlots: [
      { from: '07:00', to: '10:00', status: 'available', label: '朝のプログラム（残3枠）' },
      { from: '10:00', to: '17:00', status: 'available' },
      { from: '17:00', to: '21:00', status: 'available', label: '夕方人気帯（残5枠）' },
    ],
    features: ['温浴施設（サウナ・水風呂・浴槽）', '個室トリートメント5室', 'ピラティス・ヨガスタジオ', '栄養士監修ウェルネスドリンク', '法人専用タイム相談可'],
    occasions: ['wellness', 'vip_dinner', 'teambuilding', 'client_tour'],
    description: '麻布台ヒルズ3Fに位置する都市型スパ。温浴・スパトリートメント・フィットネスが一体となった施設。VIP接待前の準備やウェルネス体験ギフトとして法人利用が増加中。',
    salesPoints: [
      '✦ 接待前に相手をスパでもてなしてから夕食へという「フルコース接待」が最高評価',
      '✦ 健康経営・ウェルネス施策の一環として法人契約（月額固定）で手配しやすい',
      '✦ 英語対応スタッフ常駐：外国人エグゼクティブのVIP対応に安心',
    ],
    contact: 'Hills Spa 予約センター（内線: 内5300）',
  },
  {
    id: 'BRITISH_SCHOOL',
    name: 'British School in Tokyo',
    buildingId: 'AZABU',
    buildingShort: '麻布台',
    category: 'hotel', // 教育だが近接施設として
    capacity: { min: 1, max: 1 },
    floor: '低層棟',
    priceNote: '入学相談は学校直接',
    status: 'available',
    lastUpdated: '1時間前',
    todaySlots: [],
    features: ['英国式インターナショナル教育', '3〜18歳対象', '麻布台ヒルズに直結'],
    occasions: ['client_tour'],
    description: '麻布台ヒルズに隣接するインターナショナルスクール。外国人エグゼクティブの家族受入環境として、入居提案時の差別化ポイントとして紹介可能。',
    salesPoints: [
      '✦ 「子供の学校がオフィスに直結」は外国人幹部家族の日本赴任決め手になる',
      '✦ 麻布台ヒルズを選ぶ外資系企業のHR部門への提案で必ず触れるべきポイント',
    ],
    contact: 'British School in Tokyo（代表 03-XXXX-XXXX）',
  },

  // ── 六本木ヒルズ ──────────────────────────────────────────────────
  {
    id: 'MORI_MUSEUM',
    name: '森美術館',
    buildingId: 'MORI',
    buildingShort: '六本木',
    category: 'culture',
    capacity: { min: 10, max: 300 },
    areaSqm: 2500,
    floor: '53F',
    priceNote: 'プライベート貸切: 80万円〜（アフター）',
    status: 'available',
    lastUpdated: '1分前',
    todaySlots: [
      { from: '10:00', to: '22:00', status: 'available', label: '通常営業中（一般公開）' },
      { from: '22:00', to: '24:00', status: 'available', label: 'アフター貸切枠' },
    ],
    features: ['国際現代アート 53F特設展示', '専任キュレーターによる解説', '閉館後プライベート鑑賞', '東京タワー・スカイライン一望', 'ケータリング設置可'],
    occasions: ['vip_dinner', 'culture', 'client_tour', 'media', 'ceremony'],
    description: '53階、地上238mに位置する世界有数の現代アート美術館。企画展は常にアジアトップクラスのクオリティ。閉館後の貸切では夜景と現代アートを独占するという、東京で唯一の体験が提供できる。',
    salesPoints: [
      '✦ 世界のビジネスエリートが「Tokyo, Mori Art Museum」を知っている→外国人VIP接待に最強',
      '✦ 閉館後の夜景×アート独占は「お金では普通買えない体験」→記憶に残る接待',
      '✦ 六本木ヒルズ入居企業は招待状配布の優遇制度あり→年間通じた顧客関係構築に活用',
    ],
    contact: '森美術館 法人担当（内線: 内8100）',
  },
  {
    id: 'CITY_VIEW',
    name: '東京シティビュー（展望台）',
    buildingId: 'MORI',
    buildingShort: '六本木',
    category: 'culture',
    capacity: { min: 1, max: 400 },
    areaSqm: 3600,
    floor: '52F',
    priceNote: 'プライベート貸切: 60万円〜 / 通常: 2,000円/人',
    status: 'available',
    lastUpdated: '3分前',
    todaySlots: [
      { from: '10:00', to: '23:00', status: 'available', label: '通常営業' },
      { from: '23:00', to: '25:00', status: 'available', label: 'ナイト貸切可' },
    ],
    features: ['360°東京パノラマ（地上250m）', 'スカイデッキ（屋外）', 'ウェルカムドリンクカウンター', 'フォトスポット複数', '音楽・照明演出可'],
    occasions: ['client_tour', 'vip_dinner', 'teambuilding', 'media', 'recruitment'],
    description: '地上250mから東京の全景を一望。富士山・東京タワー・お台場を一度に見渡せる関東屈指の展望スポット。法人貸切では乾杯セレモニーやカクテルパーティを組み合わせた特別演出が可能。',
    salesPoints: [
      '✦ 「まず展望台で乾杯を」——外国人ゲストへの東京紹介として鉄板の人気',
      '✦ 新任幹部の歓迎会・プロジェクト打ち上げに非日常感を添えやすい',
      '✦ 採用イベントで「入社したらこんな環境で働く」を体感させる効果大',
    ],
    contact: '東京シティビュー 法人窓口（内線: 内8200）',
  },
  {
    id: 'HILLS_CLUB',
    name: '六本木ヒルズクラブ',
    buildingId: 'MORI',
    buildingShort: '六本木',
    category: 'club',
    capacity: { min: 2, max: 120 },
    floor: '51F',
    priceNote: '会員制（入居企業は優待あり）/ 個室: 10万円〜',
    status: 'limited',
    lastUpdated: '10分前',
    todaySlots: [
      { from: '11:30', to: '14:00', status: 'available', label: 'ランチ（残3テーブル）' },
      { from: '18:00', to: '23:00', status: 'available', label: 'ディナー（残2個室）' },
    ],
    features: ['会員制倶楽部（51F・高層）', '個室ダイニング7室', 'バー・ラウンジ', '専属ソムリエ', '秘書サービス連携'],
    occasions: ['vip_dinner', 'small_meeting', 'client_tour'],
    description: '地上51階、六本木ヒルズクラブは経営者・エグゼクティブのための会員制倶楽部。六本木ヒルズ入居企業は優待制度を通じて利用しやすく、重要接待・取締役会後のディナーに使われる。',
    salesPoints: [
      '✦ 「ヒルズクラブのメンバーシップ」は経営者層への訴求力が絶大',
      '✦ 他社の役員を招いた接待で「格が伝わる」—— 金額以上のブランド効果',
      '✦ 入居テナント向け優待プログラムで月次利用をアレンジしやすい',
    ],
    contact: '六本木ヒルズクラブ（内線: 内8300）',
  },
  {
    id: 'GRAND_HYATT',
    name: 'グランドハイアット東京',
    buildingId: 'MORI',
    buildingShort: '六本木',
    category: 'hotel',
    capacity: { min: 2, max: 1000 },
    floor: '1〜13F',
    priceNote: '宿泊: 6万円〜/泊 / 宴会場: 50万円〜',
    status: 'available',
    lastUpdated: '20分前',
    todaySlots: [
      { from: '07:00', to: '23:00', status: 'available', label: '宿泊・宴会受付中' },
    ],
    features: ['六本木ヒルズ徒歩30秒', '世界レベルのラグジュアリーホテル', '大宴会場（1000名）', '多言語スタッフ', 'VIPスイート'],
    occasions: ['vip_dinner', 'ceremony', 'large_event', 'client_tour'],
    description: '六本木ヒルズ内に直結するラグジュアリーホテル。シームレスな移動でオフィス→ディナー→宿泊が完結。国際会議や株主総会後の宴会手配に多く使われる。',
    salesPoints: [
      '✦ ヒルズ内でホテル手配まで完結→外国人ゲストの移動ストレスゼロ',
      '✦ 宴会場×展望台×美術館の三点セット提案が他のエリアでは絶対真似できない',
      '✦ ホテルコンシェルジュとの連携で「おまかせVIPプロデュース」が可能',
    ],
    contact: 'グランドハイアット東京 イベント部（03-XXXX-1234）',
  },
  {
    id: 'KEYAKI_DINING',
    name: 'けやき坂プレミアムダイニング群',
    buildingId: 'KEYAKI',
    buildingShort: '六本木KZ',
    category: 'dining',
    capacity: { min: 2, max: 80 },
    floor: '1〜3F',
    priceNote: '1名: 15,000〜50,000円（店舗による）',
    status: 'available',
    lastUpdated: '7分前',
    todaySlots: [
      { from: '11:30', to: '14:30', status: 'available', label: 'ランチ席あり（複数店舗）' },
      { from: '18:00', to: '23:00', status: 'available', label: 'ディナー（混雑予想・早めに）' },
    ],
    features: ['ミシュラン掲載3店舗を含む', '個室完備の店舗複数あり', 'ブランドショップに囲まれたけやき坂', 'VIPルーム相談可', '駐車場バレー手配可'],
    occasions: ['vip_dinner', 'small_meeting', 'client_tour'],
    description: 'けやき坂沿いに並ぶ六本木ヒルズの飲食フロア。フレンチ・鉄板焼き・日本料理などミシュラン掲載店を含む高級レストランが集積。商談後のディナーをシームレスにアレンジできる。',
    salesPoints: [
      '✦ 「打ち合わせの後、けやき坂でディナーに」—— 商談→接待を一つのヒルズ体験として完結',
      '✦ 複数店の個室を押さえておけば人数変更に対応しやすい',
      '✦ 夜のけやき坂の景観（イルミネーション）がゲストに特別感を与える',
    ],
    contact: 'テナント管理部 飲食担当（内線: 内8500）',
  },

  // ── アーク森ビル ──────────────────────────────────────────────────
  {
    id: 'ARK_HILLS_CLUB',
    name: 'アークヒルズ クラブ',
    buildingId: 'ARK',
    buildingShort: 'アーク',
    category: 'club',
    capacity: { min: 2, max: 80 },
    floor: '37F',
    priceNote: '法人会員制 / ゲスト利用: 要相談',
    status: 'available',
    lastUpdated: '35分前',
    todaySlots: [
      { from: '11:30', to: '14:00', status: 'available', label: 'ランチ空きあり' },
      { from: '18:00', to: '22:00', status: 'available', label: 'ディナー受付中' },
    ],
    features: ['37F からの眺望', 'ビジネスラウンジ', 'プライベートダイニング', '秘書サービス連携', '霞が関・溜池山王エリア'],
    occasions: ['vip_dinner', 'small_meeting', 'client_tour'],
    description: 'アーク森ビル37階のクラブラウンジ。コンサル・法務・官公庁系テナントが多く利用する静かな接待空間。六本木ヒルズクラブと比べると落ち着いた雰囲気で、実務系の重要会食に好評。',
    salesPoints: [
      '✦ 「六本木よりも落ち着いた雰囲気で使いたい」というニーズに最適',
      '✦ 霞が関・永田町との距離感が官公庁・コンサル系の接待に刺さる',
      '✦ アーク入居テナントは優待利用可能',
    ],
    contact: 'アークヒルズクラブ担当（内線: 内2100）',
  },
  {
    id: 'SUNTORY_HALL',
    name: 'サントリーホール（連携施設）',
    buildingId: 'ARK',
    buildingShort: 'アーク隣接',
    category: 'culture',
    capacity: { min: 50, max: 2006 },
    floor: '1〜3F',
    priceNote: '法人貸切: 200万円〜（アフター）/ 企業協賛制度あり',
    status: 'available',
    lastUpdated: '45分前',
    todaySlots: [
      { from: '14:00', to: '18:00', status: 'reserved', label: '公演（一般販売）' },
      { from: '19:00', to: '21:00', status: 'reserved', label: '公演（一般販売）' },
    ],
    features: ['世界屈指のクラシック音楽ホール', '2006席のワインヤード形式', '企業協賛・貸切プログラム', 'フォワイエ（ロビー）レセプション可'],
    occasions: ['vip_dinner', 'ceremony', 'client_tour', 'media'],
    description: 'アーク森ビル隣接の世界的コンサートホール。演奏会チケット法人取りまとめ・VIPシート手配・公演後のレセプションなど、文化的な接待の最高峰を組み立てられる。',
    salesPoints: [
      '✦ クラシック音楽×一流ホール×アーク近接——文化的接待の格が段違い',
      '✦ 企業協賛プログラムを通じた対外ブランディング（プログラムへの社名掲載等）',
      '✦ 公演後にアークヒルズクラブでディナー——コンサート接待の黄金パターン',
    ],
    contact: '（外部連携）サントリーホール 法人担当（03-3505-XXXX）',
  },
]

// ── 顧客・商談 ────────────────────────────────────────────────────────

export interface Customer {
  id: string
  name: string
  company: string
  industry: string
  phone: string
  inquiryDate: string
  requirements: {
    occasion: string
    headcount: number
    budgetNote: string
    preferredHills: string[]
    dateNote: string
    priorities: string[]
  }
}

export interface TimelineEvent {
  date: string
  type: 'inquiry' | 'proposal' | 'tour' | 'negotiation' | 'note' | 'booked'
  title: string
  detail: string
}

export interface Deal {
  id: string
  customerId: string
  stage: 'inquiry' | 'proposal' | 'tour' | 'negotiation' | 'booked'
  probability: number
  nextAction: string
  nextActionDate: string
  assignee: string
  relatedFacilities: string[]
  timeline: TimelineEvent[]
}

export const customers: Customer[] = [
  {
    id: 'C001',
    name: '田中 勇介',
    company: '株式会社テックスタート',
    industry: 'IT・スタートアップ',
    phone: '090-XXXX-0001',
    inquiryDate: '2026-06-10',
    requirements: {
      occasion: '採用イベント・会社説明会',
      headcount: 150,
      budgetNote: '30〜50万円',
      preferredHills: ['虎ノ門'],
      dateNote: '7月中旬、平日夕方',
      priorities: ['スタートアップ感', 'アクセスの良さ', '若い人向けの空間'],
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
      occasion: 'VIP接待・ラグジュアリーディナー',
      headcount: 8,
      budgetNote: '50万円以上',
      preferredHills: ['六本木', '麻布台'],
      dateNote: '今週金曜夜',
      priorities: ['格式', '眺望', 'プライベート感', '外国人ゲスト対応'],
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
      occasion: 'ウェルネス体験・福利厚生',
      headcount: 30,
      budgetNote: '10〜25万円',
      preferredHills: ['麻布台'],
      dateNote: '来月、土曜午前',
      priorities: ['ウェルネス・健康', '緑・自然感', 'スタッフエンゲージメント'],
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
      occasion: 'メディア対応・PR・撮影',
      headcount: 20,
      budgetNote: '20〜80万円',
      preferredHills: ['六本木', '虎ノ門'],
      dateNote: '7〜8月、フレキシブル',
      priorities: ['映える空間', 'アート感', '夜景・眺望', 'SNS映え'],
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
      occasion: '顧客招待・施設ツアー',
      headcount: 12,
      budgetNote: '特になし（質重視）',
      preferredHills: ['麻布台', '六本木'],
      dateNote: '今月末',
      priorities: ['外国語対応', '文化体験', 'ビジネスマッチング', 'ハイエンド'],
    },
  },
]

export const deals: Deal[] = [
  {
    id: 'D001',
    customerId: 'C001',
    stage: 'proposal',
    probability: 65,
    nextAction: 'ARCHホール 施設見学の日程調整',
    nextActionDate: '2026-06-18',
    assignee: '担当: 森川 洋介',
    relatedFacilities: ['BT_ARCH_HALL'],
    timeline: [
      { date: '2026-06-10', type: 'inquiry', title: '初回問い合わせ', detail: '「150名規模の採用説明会を虎ノ門でやりたい」とウェブから問い合わせ。' },
      { date: '2026-06-12', type: 'note', title: '電話ヒアリング', detail: 'スタートアップ感を重視。TOKYO NODEは規模感が大きすぎる→ARCHホールを提案する方向で合意。' },
      { date: '2026-06-14', type: 'proposal', title: 'ARCHホール 提案書送付', detail: '施設概要・料金・過去採用イベント事例を添付して送付。先方確認中。' },
    ],
  },
  {
    id: 'D002',
    customerId: 'C002',
    stage: 'tour',
    probability: 80,
    nextAction: '森美術館アフター貸切 + クラブ個室 最終確認',
    nextActionDate: '2026-06-20',
    assignee: '担当: 田村 美里',
    relatedFacilities: ['MORI_MUSEUM', 'HILLS_CLUB'],
    timeline: [
      { date: '2026-06-08', type: 'inquiry', title: '初回問い合わせ', detail: '「8名でVIP接待。東京で最高の場所を使いたい」との依頼。外国人ゲスト2名含む。' },
      { date: '2026-06-10', type: 'proposal', title: '2案提案送付', detail: 'A案: 森美術館アフター貸切→ヒルズクラブ個室ディナー / B案: 東京シティビュー→グランドハイアット宴会室。' },
      { date: '2026-06-14', type: 'tour', title: '施設下見（先方担当者）', detail: 'A案の施設を下見。「美術館のアフター貸切からクラブへの流れが完璧」と高評価。' },
      { date: '2026-06-18', type: 'negotiation', title: '最終条件確認（予定）', detail: '6/20に先方責任者への最終プレゼン予定。' },
    ],
  },
  {
    id: 'D003',
    customerId: 'C003',
    stage: 'inquiry',
    probability: 45,
    nextAction: '麻布台ヒルズ スパ＋屋上テラスの複合プラン提案',
    nextActionDate: '2026-06-16',
    assignee: '担当: 佐々木 健太',
    relatedFacilities: ['AZABU_SPA', 'AZABU_ROOFTOP'],
    timeline: [
      { date: '2026-06-12', type: 'inquiry', title: '初回問い合わせ', detail: '「社員30名へのウェルネス体験をプレゼントしたい。緑のある環境で」との依頼。' },
      { date: '2026-06-14', type: 'note', title: '予算・日程ヒアリング', detail: '予算は10〜25万円。来月土曜午前希望。スパ+屋上テラスのセット案を検討中。' },
    ],
  },
  {
    id: 'D004',
    customerId: 'C004',
    stage: 'proposal',
    probability: 55,
    nextAction: '東京シティビュー撮影プランの詳細資料送付',
    nextActionDate: '2026-06-19',
    assignee: '担当: 森川 洋介',
    relatedFacilities: ['CITY_VIEW', 'AZABU_GALLERY'],
    timeline: [
      { date: '2026-06-14', type: 'inquiry', title: '初回問い合わせ', detail: '新商品発表に使う映像・静止画の撮影ロケ地を探している。「東京の夜景×アート」が軸。' },
      { date: '2026-06-15', type: 'proposal', title: '2施設提案', detail: '①東京シティビュー（夜景撮影） ②麻布台ヒルズギャラリー（アート空間撮影）の両施設を提案。' },
    ],
  },
  {
    id: 'D005',
    customerId: 'C005',
    stage: 'negotiation',
    probability: 88,
    nextAction: '最終ツアープログラム確定・請求書発行',
    nextActionDate: '2026-06-17',
    assignee: '担当: 田村 美里',
    relatedFacilities: ['AZABU_GALLERY', 'AZABU_SPA', 'MORI_MUSEUM'],
    timeline: [
      { date: '2026-06-13', type: 'inquiry', title: '初回問い合わせ', detail: '「ソウルから役員12名が来日。麻布台と六本木を軸にフルデイのVIPツアーを組んでほしい」。' },
      { date: '2026-06-14', type: 'proposal', title: 'VIPツアープログラム提案', detail: '麻布台ヒルズギャラリー見学→SPA体験→六本木森美術館アフター貸切→ヒルズクラブディナーの1日コース。' },
      { date: '2026-06-15', type: 'tour', title: '事前下見対応', detail: '先方担当者が下見。スパとギャラリーを特に高評価。「このプランで進める」と内諾。' },
      { date: '2026-06-16', type: 'negotiation', title: '最終条件調整中', detail: '全施設との調整が9割完了。予算・タイムラインを最終確認中。' },
    ],
  },
]

// ── マッチングロジック ─────────────────────────────────────────────────

export interface FacilityMatchResult {
  facility: Facility
  score: number
  reasons: string[]
}

export function matchFacilities(params: {
  occasion: string
  headcount: number
  budgetRange: string
  preferredHills: string[]
  priorities: string[]
}): FacilityMatchResult[] {
  return facilities
    .map(f => {
      let score = 0
      const reasons: string[] = []

      // 用途マッチ (35点)
      if (f.occasions.includes(params.occasion)) {
        score += 35
        const occ = OCCASIONS.find(o => o.id === params.occasion)
        if (occ) reasons.push(`用途「${occ.label}」に対応`)
      }

      // 定員マッチ (25点)
      if (params.headcount >= f.capacity.min && params.headcount <= f.capacity.max) {
        score += 25
        reasons.push(`定員 ${f.capacity.min}〜${f.capacity.max}名 → ${params.headcount}名に対応`)
      } else if (params.headcount <= f.capacity.max * 1.2) {
        score += 12
        reasons.push(`定員上限に若干近いが対応可能な場合あり`)
      }

      // エリアマッチ (20点)
      const areaMatch = params.preferredHills.length === 0 ||
        params.preferredHills.some(a => f.buildingShort.includes(a) || f.buildingId.includes(a))
      if (areaMatch) {
        score += 20
        reasons.push(`希望エリアに合致`)
      }

      // 今日の空き (10点)
      const hasAvailToday = f.todaySlots.some(s => s.status === 'available')
      if (f.status === 'available' || hasAvailToday) {
        score += 10
        reasons.push('本日空き枠あり')
      }

      // 優先事項マッチ (10点)
      const priorityHit = params.priorities.filter(p => {
        const allText = [...f.salesPoints, ...f.features, f.description].join(' ')
        return allText.includes(p)
      })
      if (priorityHit.length > 0) {
        score += Math.min(10, priorityHit.length * 4)
        reasons.push(`「${priorityHit[0]}」などのニーズに対応する施設特性あり`)
      }

      return { facility: f, score: Math.min(score, 99), reasons }
    })
    .filter(r => r.score >= 10)
    .sort((a, b) => b.score - a.score)
}
