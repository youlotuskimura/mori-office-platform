// public/ 配下の静的ファイルへのパスに basePath を付与するヘルパー。
// GitHub Pages のサブパス配信でも <img src> が正しく解決される。
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
