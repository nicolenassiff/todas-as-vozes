
import type { CSSProperties } from 'react'
import { Icon } from '../components/Icon'
import { axes } from '../data/proposals'

export function Home() {
  return (
    <>
      {/* SEÇÃO PRINCIPAL */}
      <section className="paper-texture relative overflow-hidden bg-[#a7c900] px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 lg:grid-cols-[1.12fr_0.72fr]">

          {/* Texto principal */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex rotate-[-2deg] bg-[#ef5b3f] px-4 py-2 font-black uppercase tracking-[0.13em] text-[#fff6dc]">
              Chapa 2 • DCE Univille
            </div>

            <h1 className="font-poster text-[clamp(4.1rem,10vw,9.5rem)] uppercase leading-[0.78] tracking-[-0.075em] text-[#073f3a]">
              Todas
              <br />
              as vozes
            </h1>

            <p className="mt-8 max-w-2xl text-xl font-bold leading-8 text-[#153f3a] md:text-2xl">
              Representação, participação, acolhimento e vida universitária.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#/propostas" className="button-dark">
                Conheça as 22 propostas
                <Icon name="arrow" size={18} />
              </a>

              <a href="#/sobre" className="button-outline">
                Conheça a chapa
              </a>
            </div>
          </div>

          {/* Imagem da campanha */}
          <div className="relative mx-auto w-full max-w-[500px] lg:mx-0">
            <div className="absolute -inset-3 rotate-3 bg-[#ef5b3f]" />

            <img
              src="/todas-as-vozes.jpg"
              alt="Arte da Chapa 2 Todas as Vozes"
              className="relative aspect-[4/5] w-full -rotate-2 object-cover object-center shadow-[12px_12px_0_#073f3a]"
            />
          </div>
        </div>
      </section>

      {/* NOSSO COMPROMISSO */}
      <section className="bg-[#073f3a] px-5 py-20 text-[#f5f1d4] md:px-8 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 md:grid-cols-[0.65fr_1.1fr]">

            {/* Título */}
            <div>
              <p className="stamp">
                Nosso compromisso
              </p>

              <h2 className="font-poster mt-6 text-5xl uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Um DCE que escuta, representa e faz junto.
              </h2>
            </div>

            {/* Descrição e números */}
            <div className="md:pt-14">
              <p className="max-w-2xl text-xl leading-8 text-[#d7dfc3]">
                O DCE deve ser um espaço de representação, escuta,
                participação e integração da comunidade acadêmica.
                Nosso plano transforma essa visão em ações concretas.
              </p>

              <div className="mt-10 grid grid-cols-3 border-2 border-[#a7c900]">
                {[
                  ['22', 'propostas'],
                  ['05', 'eixos'],
                  ['01', 'voz coletiva'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-r-2 border-[#a7c900] p-4 last:border-r-0 md:p-7"
                  >
                    <strong className="font-poster block text-4xl text-[#a7c900] md:text-6xl">
                      {value}
                    </strong>

                    <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[#d7dfc3] md:text-sm">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CINCO EIXOS */}
      <section className="bg-[#f2eed2] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1280px]">

          {/* Cabeçalho da seção */}
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="section-kicker">
                Plano de gestão
              </span>

              <h2 className="font-poster mt-3 text-5xl uppercase tracking-[-0.05em] text-[#073f3a] md:text-7xl">
                Cinco eixos
              </h2>
            </div>

            <a href="#/propostas" className="link-arrow">
              Explorar o plano completo
              <Icon name="arrow" size={18} />
            </a>
          </div>

          
          {/* Cards dos eixos */}
          <div className="grid gap-3 md:grid-cols-2">
            {axes.map((axis, index) => (
              <a
                key={axis.id}
                href={`#/propostas?eixo=${encodeURIComponent(axis.id)}`}
                className={`axis-card group block cursor-pointer transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#ef5b3f] ${
                  index === axes.length - 1 ? 'md:col-span-2' : ''
                }`}
                style={{ '--accent': axis.color } as CSSProperties}
                aria-label={`Ver propostas do eixo ${axis.title}`}
              >
                <span className="font-poster text-4xl text-[var(--accent)]">
                  {axis.number}
                </span>

                <div className="mt-14">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#63716a]">
                    {axis.subtitle}
                  </p>

                  <h3 className="font-poster mt-3 text-4xl uppercase leading-[0.9] tracking-[-0.04em] text-[#073f3a]">
                    {axis.title}
                  </h3>

                  <p className="mt-5 font-bold text-[#ef5b3f]">
                    {axis.proposals.length} propostas
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-[#073f3a] group-hover:underline">
                    Ver propostas
                    <Icon name="arrow" size={18} />
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
