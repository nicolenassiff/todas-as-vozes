
interface PageIntroProps {
  number?: string
  eyebrow: string
  title: string
  text: string
}

export function PageIntro({
  number,
  eyebrow,
  title,
  text,
}: PageIntroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-12 pb-8">
      <div className="mb-4 flex items-center gap-3">
        {number && (
          <span className="bg-[#ef5b3f] px-3 py-1 text-sm font-black text-[#f1f4d0]">
            {number}
          </span>
        )}

        <span className="text-sm font-bold uppercase tracking-widest text-[#073b32]">
          {eyebrow}
        </span>
      </div>

      <h1 className="mb-5 text-4xl font-black leading-tight text-[#073b32] md:text-6xl">
        {title}
      </h1>

      <p className="max-w-3xl text-lg leading-relaxed text-[#073b32]">
        {text}
      </p>
    </section>
  )
}
