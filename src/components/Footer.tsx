import { Wordmark } from './Wordmark'

export function Footer() {
  return (
    <footer className="border-t-2 border-[#073f3a] bg-[#a7c900] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <Wordmark />
        <p className="max-w-sm text-sm font-semibold leading-6 text-[#244b45]">
          Representação, participação, acolhimento e vida universitária.
        </p>
        <div className="text-left sm:text-right">
          <p className="font-black uppercase tracking-wider text-[#ef5b3f]">Chapa 2</p>
          <p className="mt-1 text-sm font-bold">DCE Univille</p>
        </div>
      </div>
    </footer>
  )
}