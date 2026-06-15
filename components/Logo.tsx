type LogoProps = {
  /** Show the "Suflo" wordmark next to the mark. */
  withText?: boolean
  /** Pixel size of the square mark. */
  size?: number
  className?: string
}

/** Suflo brand mark: a voice bubble with an equalizer — live speech turned into a prompt. */
export default function Logo({ withText = true, size = 32, className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Suflo"
      >
        <defs>
          <linearGradient id="sufloLogoG" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#sufloLogoG)" />
        <g fill="#ffffff">
          <rect x="12" y="16" width="40" height="26" rx="8" />
          <path d="M21 40 L21 51 L33 41 Z" />
        </g>
        <g fill="#3730a3">
          <rect x="21" y="25" width="4.5" height="8" rx="2.25" />
          <rect x="29.75" y="20" width="4.5" height="18" rx="2.25" />
          <rect x="38.5" y="25" width="4.5" height="8" rx="2.25" />
        </g>
      </svg>
      {withText && <span className="font-bold tracking-tight">Suflo</span>}
    </span>
  )
}
