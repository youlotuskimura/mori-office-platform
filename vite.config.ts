import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// GitHub Pages で https://<user>.github.io/mori-office-platform/ に公開する想定。
// リポジトリ名を変える場合は base も合わせて変更してください。
// ルート直下（独自ドメイン等）で公開するなら base: '/' にします。
export default defineConfig({
  plugins: [react()],
  base: '/mori-office-platform/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cockpit: resolve(__dirname, 'cockpit/index.html'),
      },
    },
  },
})
