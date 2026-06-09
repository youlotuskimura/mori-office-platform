# HILLS OFFICE — 社内検討用モックアップ

森ビル オフィステナント向けサービスサイトの **社内プレゼン用デモ**です。
入居前・入居中・更新時の3フェーズを一貫して支えるサービス構成を、インタラクティブなモックアップとして実装しています。

> ⚠️ これは社内検討用モックアップです。掲載の社名・数値・物件情報・コラムはすべて**架空のサンプル**であり、実在のサービスではありません。

## 技術スタック

- **Next.js 14（App Router）**
- **Tailwind CSS 3**
- TypeScript
- Vercel デプロイ前提
- 実画像は不使用（CSSグラデーション＋プレースホルダーで上質感を表現）

## ページ構成

| ルート | 内容 |
|---|---|
| `/` | トップ：ヒーロー＋サービス全体マップ（入居前 / 入居中 / 更新時の3フェーズ） |
| `/leasing` | 入居検討者向け：物件ポートフォリオ概要、ワークプレイスコンサル、内覧予約CTA |
| `/tenants` | 既存テナント向け：WORKERS BOARD、コミュニティイベント、ビル管理サポート、各種申請のデジタル窓口 |
| `/insights` | ワークスタイル知見：コラム一覧（ダミー記事3本） |
| `/contact` | お問い合わせ：フォームUI（見た目のみ・送信機能なし） |

```
mori-office-next/
├── app/
│   ├── layout.tsx          # 共通レイアウト（ヘッダー / フッター / フォント）
│   ├── globals.css         # デザインシステム（トークン・プレースホルダ）
│   ├── page.tsx            # トップ
│   ├── leasing/page.tsx    # 入居検討者向け
│   ├── tenants/page.tsx    # 既存テナント向け
│   ├── insights/page.tsx   # ワークスタイル知見
│   └── contact/page.tsx    # お問い合わせ
├── components/
│   ├── site-header.tsx     # グローバルヘッダー（レスポンシブ / モバイルメニュー）
│   ├── site-footer.tsx     # フッター（モックアップ注記を含む）
│   └── ui.tsx              # 共通UI部品
└── lib/
    └── data.ts             # ダミーデータ（すべて架空）
```

## ローカルで動かす

前提：Node.js 18.18 以上（推奨 20+）。

```bash
# 依存をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで **http://localhost:3000** を開きます。

本番ビルドの確認：

```bash
npm run build
npm start
```

## Vercel へデプロイする

このプロジェクトはリポジトリの **サブディレクトリ `mori-office-next/`** にあります。デプロイ時は **Root Directory** の指定がポイントです。

### 方法A：Vercel ダッシュボードから（推奨）

1. GitHub にこのリポジトリを push します。
2. [vercel.com/new](https://vercel.com/new) で対象リポジトリを **Import**。
3. **Root Directory** を `mori-office-next` に設定します。
4. Framework Preset が **Next.js** に自動認識されることを確認し、**Deploy**。
5. 以降、対象ブランチへの push で自動デプロイされます。

### 方法B：Vercel CLI から

```bash
npm i -g vercel

# このディレクトリ（mori-office-next/）の中で実行
cd mori-office-next
vercel          # 初回：プロジェクト作成 & プレビューデプロイ
vercel --prod   # 本番デプロイ
```

> リポジトリ直下に単体で配置する場合は Root Directory の指定は不要です。

## デザインについて

- トンマナ：黒×白基調・上質・ミニマル（ヒルズ感）。
- 書体：見出しに明朝（Shippori Mincho）、本文に Noto Sans JP（Google Fonts）。
- 画像：実写真は使わず、CSSグラデーションのプレースホルダーで質感を表現。実運用時は正式に許諾された素材へ差し替えてください。
- レスポンシブ対応（スマホ／タブレット／PC）。
