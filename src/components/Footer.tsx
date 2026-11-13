
import { Wordmark } from './Wordmark'

export function Footer() {
  return (
    <footer className="border-t-2 border-[#073f3a] bg-[#a7c900] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Identidade da chapa */}
        <div>
          <Wordmark />
        </div>

        {/* Descrição */}
        <p className="max-w-sm text-sm font-semibold leading-6 text-[#244b45]">
          Representação, participação, acolhimento e vida universitária.
        </p>

        {/* Informações e contatos */}
        <div className="flex flex-col gap-3 text-left sm:items-end sm:text-right">
          <div>
            <p className="font-black uppercase tracking-wider text-[#ef5b3f]">
              Chapa 2
            </p>
            <p className="mt-1 text-sm font-bold text-[#073f3a]">
              DCE Univille
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:todasasvozesuniville@gmail.com"
              className="break-all text-sm font-semibold text-[#073f3a] transition-colors hover:text-[#ef5b3f] hover:underline"
            >
              todasasvozesuniville@gmail.com
            </a>

            <a
              href="https://www.instagram.com/p/Dfp33NNPHl0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#073f3a] transition-colors hover:text-[#ef5b3f] hover:underline"
            >
              Instagram da Chapa 2 ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
