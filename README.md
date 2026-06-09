# HILLS ONE — モックアップ

森ビル オフィス事業向け統合プラットフォーム「HILLS ONE」の構成案・ワイヤーフレームを、
React + Vite + Tailwind CSS のインタラクティブなモックアップとして実装したものです。

> ⚠️ これは提案用の架空デモであり、森ビル株式会社の公式サービスではありません。

## ローカルで動かす

```bash
npm install
npm run dev
```

表示された `http://localhost:5173/mori-office-platform/` をブラウザで開きます。

## 操作（出し分けデモ）

- 右上「**ログイン**」… 既存テナント向けTOP（会員ダッシュボード）に切替
- ログイン後、ヘッダーの「**ワーカー / 企業管理者**」トグル… ロール別ダッシュボードを出し分け
- 右下に操作ガイドを表示

## 構成

| 要件 | 実装 |
|---|---|
| ① コンセプト / サイトマップ | コンセプト「HILLS ONE」をヘッダー・フッターのナビ構造に反映 |
| ② TOPの出し分け | `PublicHome`（新規検討層）と `WorkerHome` / `AdminHome`（既存テナント）を認証状態で出し分け |
| ③ ストック型主要機能 | アーカイブ / ビジネスマッチング / 健康経営ダッシュボード / HILLS ID ウォレット |
| ④ BtoB CTA導線 | 常時追従CTA・モバイル固定バー・アーカイブのロック・相談種別で振り分ける問い合わせフォーム |

```
src/
├── App.tsx              # 認証状態・ロールで画面を出し分けるルート
└── hills/
    ├── data.ts          # ダミーデータ
    ├── ui.tsx           # 共通UI部品
    ├── Header.tsx       # グローバルヘッダー（ログイン/ロール切替）
    ├── Footer.tsx
    ├── PublicHome.tsx   # 未ログインTOP（リード獲得）
    ├── WorkerHome.tsx   # ワーカー個人ダッシュボード
    ├── AdminHome.tsx    # 企業管理ダッシュボード
    ├── FeaturePages.tsx # ストック型機能の詳細画面
    └── ContactModal.tsx # 問い合わせ（CV）フォーム
```

## GitHub Pages へ公開する

1. このプロジェクトを新しいリポジトリ（例: `mori-office-platform`）にpush
2. リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定
3. `main` への push で `.github/workflows/deploy.yml` が自動デプロイ
4. 公開URL: `https://<ユーザー名>.github.io/mori-office-platform/`

※ リポジトリ名を変える場合は `vite.config.ts` の `base` を合わせて変更してください。
```
