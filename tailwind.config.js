/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 深いグリーン・チャコール（ヒルズの落ち着いた品格＝ダーク面・本文色）
        ink: {
          900: '#11211a',
          800: '#16291f',
          700: '#1e3a2c',
          600: '#2b5240',
        },
        // ブランドのシグネチャー・グリーン（自然・ウェルネス＝麻布台ヒルズ）
        forest: {
          700: '#2f5d45',
          600: '#3a6f54',
          500: '#4a8568',
          400: '#6aa589',
          50: '#eef3ef',
        },
        // 上質なブロンズ（ラグジュアリーのアクセント＝Hills House / 森リビング）
        // 既存コードとの互換のため名称は gold を踏襲。
        gold: {
          400: '#cdb084',
          500: '#b59461',
          600: '#9a794a',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Shippori Mincho"', '"Noto Serif JP"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        brand: '0.22em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17,33,26,0.04), 0 8px 24px -16px rgba(17,33,26,0.18)',
      },
    },
  },
  plugins: [],
}
