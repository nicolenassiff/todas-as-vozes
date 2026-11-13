import { useState } from 'react'
import { faqs } from '../data/faqs'
import { Icon } from '../components/Icon'
import { PageIntro } from '../components/PageIntro'

export function Questions() {
  const [open, setOpen] = useState(0)
    return (
      <>
        <PageIntro
          number="?"
          eyebrow="Perguntas frequentes"
          title="Informação também é participação."
          text="Entenda o papel do DCE, como nosso plano será executado e como cada estudante poderá participar."
        />
        <section className="px-5 pt-6 pb-16 md:px-8 md:pt-8 md:pb-20">
          <div className="mx-auto grid max-w-[1150px] gap-10 md:grid-cols-[0.35fr_0.65fr]">
            <aside className="h-fit bg-[#073f3a] p-7 text-[#f2eed2] md:sticky md:top-28">
              <Icon name="voices" size={34} />
              <h2 className="font-poster mt-8 text-3xl uppercase leading-none">Ainda tem dúvidas?</h2>
              <p className="mt-4 leading-6 text-[#cbd5bd]">A chapa quer ouvir você. Envie sua pergunta ou sugestão.</p>
              <a href="#/contato" className="mt-6 inline-flex items-center gap-2 font-black uppercase text-[#a7c900]">
                Fale com a gente <Icon name="arrow" size={17} />
              </a>
            </aside>
            <div className="border-t-2 border-[#073f3a]">
              {faqs.map((faq, index) => {
                const isOpen = open === index
                return (
                  <div key={faq.question} className="border-b-2 border-[#073f3a]">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-5 py-7 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-poster text-xl uppercase leading-tight text-[#073f3a] md:text-2xl">
                        {faq.question}
                      </span>
                      <span className={`grid size-10 shrink-0 place-items-center border-2 border-[#073f3a] transition ${isOpen ? 'rotate-45 bg-[#ef5b3f] text-white' : ''}`}>
                        <Icon name="plus" size={18} />
                      </span>
                    </button>
                    <div className={`details-grid ${isOpen ? 'details-grid-open' : ''}`}>
                      <p className="max-w-2xl overflow-hidden pb-7 leading-7 text-[#52625c]">{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </>
    )
}