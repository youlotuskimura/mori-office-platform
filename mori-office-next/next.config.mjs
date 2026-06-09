/** @type {import('next').NextConfig} */

// GitHub Pages 向けビルド時のみ静的書き出し＋サブパスを適用。
// （Vercel など通常のデプロイでは何も付与せず、ルート配信のまま動作する）
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages'

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  ...(isGhPages
    ? {
        output: 'export',
        basePath: '/mori-office-platform/next',
        trailingSlash: true,
      }
    : {}),
}

export default nextConfig
