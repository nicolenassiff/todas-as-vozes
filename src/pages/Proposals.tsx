
import { useEffect, useState } from 'react'
import { axes } from '../data/proposals'
import type { Proposal } from '../types'
import { Icon } from '../components/Icon'
import { PageIntro } from '../components/PageIntro'

// Identifica o eixo selecionado pela URL
function getAxisFromUrl(): string {
  const hash = window.location.hash
  const query = hash.split('?')[1] ?? ''
  const params = new URLSearchParams(query)
  const requestedAxis = params.get('eixo')

  return (
    axes.find((axis) => axis.id === requestedAxis)?.id ??
    axes[0].id
  )
}

// Card individual de cada proposta
export function ProposalCard({
  proposal,
}: {
  proposal: Proposal
}) {
  const [open, setOpen] = useState(false)

  return (
    <article
      className={`proposal ${open ? 'proposal-open' : ''}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="font-poster text-3xl text-[#ef5b3f]">
            {String(proposal.number).padStart(2, '0')}
          </span>

          <span
            className={`grid size-10 shrink-0 place-items-center border-2 border-[#073f3a] transition ${
              open
                ? 'rotate-45 bg-[#073f3a] text-white'
                : ''
            }`}
          >
            <Icon name="plus" size={18} />
          </span>
        </div>

        <h3 className="font-poster mt-10 text-2xl uppercase leading-[0.95] tracking-[-0.03em] text-[#073f3a] md:text-3xl">
          {proposal.title}
        </h3>

        <p className="mt-4 leading-6 text-[#5b6963]">
          {proposal.summary}
        </p>
      </button>

      {/* Detalhes expansíveis */}
      <div
        className={`details-grid ${
          open ? 'details-grid-open' : ''
        }`}
      >
        <ul className="space-y-3 overflow-hidden pt-0">
          {proposal.details.map((detail) => (
            <li
              key={detail}
              className="flex gap-3 text-sm leading-6 text-[#304e47]"
            >
              <span className="mt-2 size-2 shrink-0 bg-[#a7c900]" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

// Página de propostas
export function Proposals() {
  const [activeAxis, setActiveAxis] = useState(getAxisFromUrl)

  const active =
    axes.find((axis) => axis.id === activeAxis) ??
    axes[0]

  // Atualiza a seleção e a URL ao clicar em outro eixo
  function handleAxisChange(axisId: string) {
    setActiveAxis(axisId)

    const url = `#/propostas?eixo=${encodeURIComponent(axisId)}`

    window.history.replaceState(null, '', url)
  }

  // Sincroniza o eixo com a URL
  useEffect(() => {
    function syncAxisWithUrl() {
      setActiveAxis(getAxisFromUrl())
    }

    window.addEventListener('hashchange', syncAxisWithUrl)

    return () => {
      window.removeEventListener(
        'hashchange',
        syncAxisWithUrl
      )
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#f2eed2]">
      {/* Introdução da página */}
      <PageIntro
        number="02"
        eyebrow="Plano de gestão"
        title="Propostas para todas as vozes."
        text="Um plano construído para representar, acolher e transformar a experiência universitária."
      />

      {/* Eixos e propostas */}
      <section className="bg-[#f2eed2] px-5 pb-16 pt-6 md:px-8 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-[1280px]">

          {/* Botões de navegação dos eixos */}
          <div
            className="flex flex-wrap justify-center gap-2 pb-4"
            role="tablist"
            aria-label="Eixos do plano"
          >
            {axes.map((axis) => (
              <button
                key={axis.id}
                type="button"
                onClick={() => handleAxisChange(axis.id)}
                className={`axis-tab ${
                  axis.id === active.id
                    ? 'axis-tab-active'
                    : ''
                }`}
                role="tab"
                aria-selected={axis.id === active.id}
              >
                {axis.number}. {axis.title}
              </button>
            ))}
          </div>

          {/* Informações do eixo selecionado */}
          <div className="my-8 border-l-[6px] border-[#ef5b3f] pl-5 md:my-10">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ef5b3f]">
              Eixo {active.number}
            </p>

            <h2 className="font-poster mt-2 text-4xl uppercase tracking-[-0.04em] text-[#073f3a] md:text-6xl">
              {active.title}
            </h2>

            <p className="mt-3 text-lg font-semibold text-[#53655e]">
              {active.subtitle}
            </p>
          </div>

          {/* Cards das propostas do eixo */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {active.proposals.map((proposal) => (
              <ProposalCard
                key={proposal.number}
                proposal={proposal}
              />
            ))}
          </div>

          {/* Instrução para o visitante */}
          <p className="mt-8 text-sm font-semibold text-[#63716a]">
            Clique em cada proposta para conferir os principais
            encaminhamentos.
          </p>
        </div>
      </section>
    </main>
  )
}
