
import { Wordmark } from './Wordmark'

export function Footer() {
  return (
    <footer className="border-t-2 border-[#073f3a] bg-[#a7c900] px-5 py-5 md:px-8">
      <div className="mx-auto max-w-[1280px]">

        {/* Primeira linha: logo e descrição */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <Wordmark />

          <p className="max-w-xs text-xs font-semibold leading-5 text-[#244b45] sm:text-right">
            Representação, participação, acolhimento e vida universitária.
          </p>
        </div>

        {/* Divisória */}
        <div className="my-4 border-t border-[#073f3a]/25" />

        {/* Segunda linha: contatos centralizados */}
        <div className="flex flex-col items-center justify-center gap-2 text-center text-xs font-semibold text-[#073f3a] sm:flex-row sm:flex-wrap sm:gap-6">

          <span className="font-black uppercase tracking-wider text-[#ef5b3f]">
            Chapa 2 · DCE Univille
          </span>

          <a
            href="mailto:todasasvozesuniville@gmail.com"
            className="break-all transition-colors hover:text-[#ef5b3f] hover:underline"
          >
            todasasvozesuniville@gmail.com
          </a>

          <a
            href="https://www.instagram.com/p/Dfp33NNPHl0/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#ef5b3f] hover:underline"
          >
            Instagram ↗
          </a>

        </div>
      </div>
    </footer>
  )
}
