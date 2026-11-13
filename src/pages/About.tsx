
import { PageIntro } from '../components/PageIntro'

export function About() {
  return (
    <>
      <PageIntro
        number="02"
        eyebrow="Chapa Todas as Vozes"
        title="Uma representação que cabe todo mundo."
        text="Queremos aproximar o DCE dos estudantes e construir uma gestão presente em toda a vida universitária."
      />

      {/* MANIFESTO */}
      <section className="bg-[#f2eed2] px-5 pb-16 pt-4 md:px-8 md:pb-24 md:pt-6">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid border-2 border-[#073f3a] lg:grid-cols-2">

            {/* Imagem da chapa */}
            <img
              src="/todas-as-vozes.jpg"
              alt="Identidade visual da Chapa 2 Todas as Vozes"
              className="h-full min-h-[480px] w-full object-cover"
            />

            {/* Texto do manifesto */}
            <div className="flex flex-col justify-between border-t-2 border-[#073f3a] bg-[#ef5b3f] p-8 text-[#fff4d3] lg:border-l-2 lg:border-t-0 lg:p-12">
              <span className="font-black uppercase tracking-[0.15em]">
                Manifesto
              </span>

              <div>
                <p className="font-poster text-4xl uppercase leading-[1.02] tracking-[-0.04em] md:text-5xl">
                  A universidade se fortalece quando todas as vozes encontram espaço para ser ouvidas.
                </p>

                <p className="mt-7 max-w-xl text-lg leading-7 text-[#ffe0c4]">
                  Nosso plano reúne iniciativas para representação estudantil,
                  permanência, convivência, produção acadêmica, cultura e
                  participação nos processos institucionais.
                </p>
              </div>
            </div>
          </div>

          {/* COMO VAMOS FAZER */}
          <div className="grid gap-8 py-20 md:grid-cols-[0.4fr_0.6fr]">
            <h2 className="font-poster text-5xl uppercase tracking-[-0.05em] text-[#073f3a] md:text-6xl">
              Como vamos fazer
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [
                  'Planejamento',
                  'Definição de prioridades, prazos e responsáveis para cada iniciativa.',
                ],
                [
                  'Articulação',
                  'Diálogo com os setores e parceiros necessários para cada proposta.',
                ],
                [
                  'Participação',
                  'Consulta permanente aos estudantes e representações dos cursos.',
                ],
                [
                  'Monitoramento',
                  'Acompanhamento público dos encaminhamentos e resultados.',
                ],
                [
                  'Transparência',
                  'Divulgação periódica das atividades e prestação de contas.',
                ],
              ].map(([title, text], index) => (
                <article
                  key={title}
                  className={`value-card ${
                    index === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="font-poster text-2xl text-[#ef5b3f]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="font-poster mt-10 text-2xl uppercase text-[#073f3a]">
                    {title}
                  </h3>

                  <p className="mt-3 leading-6 text-[#5b6963]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
