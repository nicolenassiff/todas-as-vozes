
import { Wordmark } from './Wordmark'

export function Footer() {
  return (
    <footer className="border-t-2 border-[#073f3a] bg-[#a7c900] px-5 py-5 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">

        {/* Logo */}
        <div className="shrink-0">
          <Wordmark />
        </div>

        {/* Descrição */}
        <p className="max-w-xs text-xs font-semibold leading-5 text-[#244b45]">
          Representação, participação, acolhimento e vida universitária.
        </p>

        {/* Contatos */}
        <div className="flex flex-col gap-1 text-left md:items-end md:text-right">
          <p className="text-sm font-black uppercase tracking-wider text-[#ef5b3f]">
            Chapa 2
          </p>

          <p className="text-xs font-bold text-[#073f3a]">
            DCE Univille
          </p>

          <a
            href="mailto:todasasvozesuniville@gmail.com"
            className="mt-1 break-all text-xs font-semibold text-[#073f3a] hover:text-[#ef5b3f] hover:underline"
          >
            todasasvozesuniville@gmail.com
          </a>

          <a
            href="https://www.instagram.com/p/Dfp33NNPHl0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#073f3a] hover:text-[#ef5b3f] hover:underline"
          >
            Instagram da Chapa 2 ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
