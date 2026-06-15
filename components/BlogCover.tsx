/**
 * Decorative blog cover: an on-brand "voice waveform" illustration on a gradient.
 * Deterministic (seeded by post id) so it stays variable per post but stable
 * across SSR/CSR. No logo, no text — just cover art.
 */
export default function BlogCover({
  gradient,
  seed = 0,
  className = '',
}: {
  gradient: string
  seed?: number
  className?: string
}) {
  const bars = 34
  const heights = Array.from({ length: bars }, (_, i) => {
    const t = i * 0.45 + seed * 1.3
    const v = 0.5 + 0.5 * Math.sin(t) * Math.cos(t * 0.5 + seed)
    return 12 + Math.round(Math.abs(v) * 76) // 12..88 within a 100-tall band
  })

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      {/* soft glow + subtle dark veil for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_20%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-black/10" />

      <svg
        viewBox="0 0 400 140"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g fill="#ffffff">
          {heights.map((h, i) => {
            const w = 6
            const gap = (400 - bars * w) / (bars + 1)
            const x = gap + i * (w + gap)
            const y = (140 - h) / 2
            const opacity = 0.18 + (i % 5) * 0.07
            return <rect key={i} x={x} y={y} width={w} height={h} rx={3} opacity={opacity} />
          })}
        </g>
      </svg>
    </div>
  )
}
