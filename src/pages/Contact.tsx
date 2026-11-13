
import { useState, type FormEvent } from 'react'
import { PageIntro } from '../components/PageIntro'
import { createGoogleFormLink } from '../config/googleForm'

export function Contact() {
  const [nome, setNome] = useState('')
  const [curso, setCurso] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const link = createGoogleFormLink({
      nome: nome.trim(),
      curso: curso.trim(),
      assunto,
      mensagem: mensagem.trim(),
    })

    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full border-2 border-[#073f3a] bg-[#f8f7e8] px-4 py-3 text-[#073f3a] outline-none transition-colors placeholder:text-[#718078] focus:border-[#ef5b3f]'

  const labelClass =
    'mb-2 block text-sm font-black uppercase tracking-wide text-[#073f3a]'

  return (
    <main className="min-h-screen bg-[#f2eed2]">
      <PageIntro
        number="02"
        eyebrow="Participação estudantil"
        title="Sua voz também faz parte."
        text="Tem alguma ideia, dúvida ou sugestão? Queremos ouvir você. Participe da construção de uma universidade com mais diálogo e representação."
      />

      <section className="px-5 pt-6 pb-20 md:px-8 md:pt-8">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* APRESENTAÇÃO E CONTATOS */}
          <div>
            <div className="border-l-[6px] border-[#ef5b3f] pl-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ef5b3f]">
                Fale com a gente
              </p>

              <h2 className="font-poster mt-4 text-4xl uppercase leading-none tracking-[-0.04em] text-[#073f3a] md:text-5xl">
                Todas as vozes merecem ser ouvidas.
              </h2>
            </div>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#53655e]">
              Nosso compromisso começa com a escuta.
              Compartilhe suas ideias, apresente propostas
              ou envie suas dúvidas.
            </p>

            {/* CONTATOS DIRETOS */}
            <div className="mt-10">
              <h3 className="font-poster text-2xl uppercase tracking-[-0.03em] text-[#073f3a]">
                Nossos canais
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#53655e]">
                Prefere falar diretamente com a gente?
                Entre em contato pelos nossos canais oficiais.
              </p>

              <div className="mt-5 space-y-3">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/todasasvozesuniville/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-2 border-[#073f3a] bg-[#f8f7e8] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#a7c900]"
                >
                  <span className="grid size-12 shrink-0 place-items-center bg-[#ef5b3f] text-[#fff6dc]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                      />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-black uppercase tracking-wider text-[#ef5b3f]">
                      Instagram
                    </span>

                    <span className="mt-1 block break-all text-sm font-bold text-[#073f3a]">
                      @todasasvozesuniville
                    </span>
                  </span>

                  <span
                    className="text-xl font-black text-[#073f3a] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>

                {/* E-MAIL */}
                <a
                  href="mailto:todasasvozesuniville@gmail.com"
                  className="group flex items-center gap-4 border-2 border-[#073f3a] bg-[#f8f7e8] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#a7c900]"
                >
                  <span className="grid size-12 shrink-0 place-items-center bg-[#073f3a] text-[#f1f4d0]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect
                        x="2"
                        y="4"
                        width="20"
                        height="16"
                        rx="2"
                      />
                      <path d="m2 6 10 7 10-7" />
                    </svg>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-black uppercase tracking-wider text-[#ef5b3f]">
                      E-mail
                    </span>

                    <span className="mt-1 block break-all text-sm font-bold text-[#073f3a]">
                      todasasvozesuniville@gmail.com
                    </span>
                  </span>

                  <span
                    className="text-xl font-black text-[#073f3a] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* BLOCO DA CHAPA */}
            <div className="mt-8 border-2 border-[#073f3a] bg-[#a7c900] p-6">
              <span className="font-poster text-5xl text-[#073f3a]">
                02
              </span>

              <p className="mt-3 font-black uppercase leading-relaxed text-[#073f3a]">
                Uma chapa construída com a participação
                de todas as vozes.
              </p>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="border-2 border-[#073f3a] bg-[#f8f7e8] p-6 md:p-10">
            <div className="mb-8 border-b-2 border-[#073f3a] pb-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ef5b3f]">
                Canal de participação
              </p>

              <h2 className="font-poster mt-3 text-3xl uppercase text-[#073f3a] md:text-4xl">
                Envie sua mensagem
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className={labelClass}>
                  Nome
                </label>

                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  placeholder="Seu nome"
                  maxLength={150}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="curso" className={labelClass}>
                  Curso
                </label>

                <input
                  id="curso"
                  type="text"
                  value={curso}
                  onChange={(event) => setCurso(event.target.value)}
                  placeholder="Qual é o seu curso?"
                  maxLength={150}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="assunto" className={labelClass}>
                  Assunto
                </label>

                <select
                  id="assunto"
                  value={assunto}
                  onChange={(event) => setAssunto(event.target.value)}
                  required
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecione um assunto
                  </option>

                  <option value="Quero enviar uma proposta">
                    Quero enviar uma proposta
                  </option>

                  <option value="Tenho uma dúvida">
                    Tenho uma dúvida
                  </option>

                  <option value="Quero deixar uma sugestão">
                    Quero deixar uma sugestão
                  </option>

                  <option value="Outro assunto">
                    Outro assunto
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className={labelClass}>
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  value={mensagem}
                  onChange={(event) => setMensagem(event.target.value)}
                  placeholder="Sua voz importa. Conte para a gente!"
                  rows={6}
                  maxLength={5000}
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="w-full border-2 border-[#073f3a] bg-[#073f3a] px-6 py-4 font-black uppercase tracking-wide text-[#f1f4d0] transition-colors hover:bg-[#a7c900] hover:text-[#073f3a]"
              >
                Continuar para o formulário ↗
              </button>

              <p className="text-sm leading-relaxed text-[#63716a]">
                Você será direcionado ao Google Forms para
                revisar suas respostas e confirmar o envio.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
