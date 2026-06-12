/** @type {import('next').NextConfig} */

// 静的書き出しの切替：
//  - DEPLOY_TARGET=gh-pages … GitHub Pages 用（サブパス /mori-office-platform/next を付与）
//  - STATIC_EXPORT=1         … 任意の静的ホスト用（ルート配信・サブパスなし）
//  - 何も指定なし            … Vercel など通常デプロイ（ルート配信）
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages'
const isStaticExport = isGhPages || process.env.STATIC_EXPORT === '1'
const basePath = isGhPages ? '/mori-office-platform/next' : ''

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  ...(isStaticExport ? { output: 'export', trailingSlash: true } : {}),
  ...(isGhPages ? { basePath } : {}),
  env: {
    // <img src> など手書きパスにも basePath を効かせるための公開値
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
