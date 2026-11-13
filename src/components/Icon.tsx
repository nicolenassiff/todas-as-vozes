import type { ReactNode } from 'react'

export function Icon({
  name,
  size = 20,
}: {
  name: 'arrow' | 'menu' | 'close' | 'plus' | 'voices' | 'check' | 'copy'
  size?: number
}) {
  const paths: Record<typeof name, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    plus: <path d="M12 5v14M5 12h14" />,
    voices: (
      <>
        <path d="M7 15c-2.2 0-4 1.3-4 3v1h8v-1c0-1.7-1.8-3-4-3Z" />
        <circle cx="7" cy="9" r="3" />
        <path d="M15 13c3.3 0 6 1.8 6 4v2h-7m1-12a3 3 0 1 1 0 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}