import { asset } from '@/lib/asset'

type Props = {
  src: string
  title: string
  subtitle?: string
  caption?: string
}

export function VideoThumbnail({ src, title, subtitle, caption }: Props) {
  return (
    <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-ink-950/45 transition-colors duration-300 group-hover:bg-ink-950/55" />

      {/* 再生ボタン + タイトル */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white/75 bg-white/15 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-white/25">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8 text-white" aria-hidden>
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-serif text-xl font-semibold text-white drop-shadow">{title}</p>
          {subtitle && <p className="mt-1 text-sm text-white/70">{subtitle}</p>}
        </div>
      </div>

      {/* キャプション */}
      {caption && (
        <p className="absolute bottom-4 left-5 text-[10px] tracking-wide text-white/50">{caption}</p>
      )}
    </div>
  )
}
