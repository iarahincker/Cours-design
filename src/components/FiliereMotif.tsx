import type { Motif } from '../data/filieres'

interface FiliereMotifProps {
  motif: Motif
  className?: string
}

function FiliereMotif({ motif, className }: FiliereMotifProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {motif === 'gear' && (
        <>
          <circle cx="32" cy="32" r="13" />
          <circle cx="32" cy="32" r="4.5" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const x1 = 32 + Math.cos(angle) * 15
            const y1 = 32 + Math.sin(angle) * 15
            const x2 = 32 + Math.cos(angle) * 21
            const y2 = 32 + Math.sin(angle) * 21
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
        </>
      )}

      {motif === 'ribbon' && (
        <path d="M6 20 C 20 10, 28 34, 42 24 C 52 17, 56 28, 58 34 M6 34 C 20 24, 28 48, 42 38 C 52 31, 56 42, 58 48" />
      )}

      {motif === 'circles' && (
        <>
          <circle cx="24" cy="30" r="15" />
          <circle cx="40" cy="34" r="11" />
        </>
      )}

      {motif === 'chevrons' && (
        <>
          <path d="M14 44 L32 26 L50 44" />
          <path d="M14 30 L32 12 L50 30" />
        </>
      )}

      {motif === 'arches' && (
        <>
          <path d="M12 48 V32 a20 20 0 0 1 40 0 v16" />
          <path d="M22 48 V34 a10 10 0 0 1 20 0 v14" />
        </>
      )}
    </svg>
  )
}

export default FiliereMotif
