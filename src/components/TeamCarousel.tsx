
import { useRef } from 'react'

type Member = {
  nome: string
  cargo: string
  curso: string
}

// integrantes da chapa
const members: Member[] = [
  {
    nome: 'Elis revi Agne',
    cargo: 'Presidenta',
    curso: 'Psicologia',
  },
  {
    nome: 'Letícia Alvez Gaião',
    cargo: '1ª Vice-Presidenta',
    curso: 'Direito',
  },
  {
    nome: 'Kassielly L. Brizola',
    cargo: '2ª Vice-Presidenta',
    curso: 'Medicina',
  },
  {
    nome: 'Nicole N. Bineck',
    cargo: '1ª Secretária',
    curso: 'Eng. de Software',
  },
  {
    nome: 'Claudio H. da Silva J.',
    cargo: '2º Secretário',
    curso: 'Direito',
  },
  {
    nome: 'Nicolas M. Raitz',
    cargo: '1º Tesoureiro',
    curso: 'Psicologia',
  },
  {
    nome: 'Júlia Garcia',
    cargo: '2ª Tesoureira',
    curso: 'Psicologia',
  },
  {
    nome: 'Ana L. Santhiago',
    cargo: 'Diretoria de Saúde',
    curso: 'Odontologia',
  },
  {
    nome: 'Lucas Beyer',
    cargo: 'Diretoria de Meio Ambiente',
    curso: 'Biologia',
  },
  {
    nome: 'Maria J. Evaristo',
    cargo: 'Diretoria de Mulheres',
    curso: 'Biologia',
  },
  {
    nome: 'Natalia M. de Oliveira',
    cargo: 'Diretoria Jurídica',
    curso: 'Direito',
  },
  {
    nome: 'Breno M. Berthi',
    cargo: 'Diretoria de Cultura',
    curso: 'Direito',
  },
  {
    nome: 'Salem S. Seger',
    cargo: 'Diversidade e Inclusão',
    curso: 'Biologia',
  },
  {
    nome: 'Evelin Jantsc',
    cargo: 'Diretoria Campus SFS',
    curso: 'Direito',
  },
  {
    nome: 'Cássia P. Mallon',
    cargo: 'Relações Institucionais',
    curso: 'Psicologia',
  },
  {
    nome: 'Iza Mylla M. Faria',
    cargo: 'Diretoria de Extensão',
    curso: 'Biologia',
  },
  {
    nome: 'Fernanda L. de Souza',
    cargo: 'Diretoria de Comunicação',
    curso: 'Eng. de Software',
  }
  
]

export function TeamCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  function scroll(direction: number) {
    const container = carouselRef.current
    if (!container) return

    const card = container.querySelector<HTMLElement>(
      '[data-member]'
    )
    if (!card) return

    const gap = 16

    container.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-[#f2eed2] px-5 pt-4 pb-16 md:px-8 md:pt-6 md:pb-20">
      <div className="mx-auto max-w-[1280px]">

        {/* CABEÇALHO */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ef5b3f]">
              Chapa 2 · Todas as Vozes
            </p>

            <h2 className="font-poster mt-3 text-5xl uppercase tracking-[-0.05em] text-[#073f3a] md:text-7xl">
              Quem faz parte?
            </h2>

            <p className="mt-3 text-[#53655e]">
              Conheça as pessoas que constroem a nossa chapa.
            </p>
          </div>

          {/* SETAS */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Ver integrantes anteriores"
              className="grid size-12 place-items-center border-2 border-[#073f3a] bg-[#a7c900] text-2xl font-black text-[#073f3a] transition-colors hover:bg-[#073f3a] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Ver próximos integrantes"
              className="grid size-12 place-items-center border-2 border-[#073f3a] bg-[#a7c900] text-2xl font-black text-[#073f3a] transition-colors hover:bg-[#073f3a] hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        {/* CARROSSEL */}
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pt-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Integrantes da Chapa 2"
        >
          
            {members.map((member, index) => (
            <article
                key={index}
                data-member
                className="flex min-h-[260px] shrink-0 basis-full snap-start flex-col justify-between border-2 border-[#073f3a] bg-[#f8f7e8] p-6 shadow-[6px_6px_0_#ef5b3f] sm:basis-[calc((100%-16px)/2)] lg:basis-[calc((100%-32px)/3)]"
            >
                {/* Cargo */}
                <span className="font-poster text-2xl uppercase text-[#ef5b3f]">
                {member.cargo}
                </span>

                {/* Nome e curso */}
                <div className="mt-10">
                <h3 className="font-poster break-words text-3xl uppercase leading-[0.95] tracking-[-0.03em] text-[#073f3a] md:text-4xl">
                    {member.nome}
                </h3>

                <p className="mt-4 text-base font-semibold leading-6 text-[#5b6963]">
                    {member.curso}
                </p>
                </div>
            </article>
            ))}

        </div>

        <p className="mt-3 text-sm font-semibold text-[#53655e]">
          Deslize para o lado ou use as setas para conhecer
          os integrantes.
        </p>
      </div>
    </section>
  )
}
