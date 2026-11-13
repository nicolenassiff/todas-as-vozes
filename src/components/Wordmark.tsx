
export function Wordmark({
  compact = false,
}: {
  compact?: boolean
}) {
  return (
    <span className="flex items-center gap-2">
      <span className="grid size-10 -rotate-3 place-items-center bg-[#ef5b3f] font-black text-[#f1f4d0]">
        2
      </span>

      <span
        className={`font-poster uppercase leading-[0.8] tracking-[-0.05em] ${
          compact ? 'text-[15px]' : 'text-[18px]'
        }`}
      >
        Todas as
        <br />
        Vozes
      </span>
    </span>
  )
}
