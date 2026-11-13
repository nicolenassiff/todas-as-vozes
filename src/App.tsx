import { FormEvent, ReactNode, useEffect, useState } from 'react'
import campaignImage from './assets/todas-as-vozes.jpg'

type Page = 'inicio' | 'propostas' | 'perguntas' | 'sobre' | 'contato'

type Proposal = {
  number: number
  title: string
  summary: string
  details: string[]
}

type Axis = {
  id: string
  number: string
  title: string
  subtitle: string
  color: string
  proposals: Proposal[]
}

const navigation: { id: Page; label: string }[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'propostas', label: 'Propostas' },
  { id: 'perguntas', label: 'Perguntas' },
  { id: 'sobre', label: 'A chapa' },
  { id: 'contato', label: 'Fale com a gente' },
]

const axes: Axis[] = [
  {
    id: 'presente',
    number: '01',
    title: 'DCE Presente',
    subtitle: 'Escuta, acolhimento e representação estudantil',
    color: '#ef5b3f',
    proposals: [
      {
        number: 1,
        title: 'Central de Escuta Estudantil',
        summary: 'Um canal oficial para receber e acompanhar as demandas dos estudantes.',
        details: [
          'Receber solicitações, reclamações, sugestões e denúncias.',
          'Encaminhar cada demanda aos setores responsáveis.',
          'Acompanhar as solicitações até a obtenção de devolutivas.',
          'Produzir levantamentos periódicos sobre as principais demandas.',
        ],
      },
      {
        number: 2,
        title: 'DCE integrado à vida institucional',
        summary: 'Diálogo permanente e participação ativa nos espaços de decisão da universidade.',
        details: [
          'Manter diálogo com a Reitoria e os setores administrativos.',
          'Participar das discussões sobre políticas acadêmicas, infraestrutura e assistência.',
          'Acompanhar as demandas apresentadas pela representação estudantil.',
        ],
      },
      {
        number: 3,
        title: 'Acolhimento e escuta psicológica',
        summary: 'Projeto de extensão em parceria com Psicologia, com supervisão docente.',
        details: [
          'Propor a participação de estudantes do 4º e 5º anos.',
          'Acolher questões emocionais, conflitos acadêmicos e situações de violência.',
          'Articular o projeto com a CRE e serviços existentes, respeitando o sigilo.',
        ],
      },
      {
        number: 4,
        title: 'Observatório da Vida Universitária',
        summary: 'Dados reais para fundamentar as reivindicações do movimento estudantil.',
        details: [
          'Realizar levantamentos semestrais sobre a realidade estudantil.',
          'Mapear dificuldades de alimentação, transporte, infraestrutura, saúde e acessibilidade.',
          'Produzir e compartilhar relatórios com a comunidade acadêmica.',
        ],
      },
      {
        number: 5,
        title: 'DCE Itinerante',
        summary: 'A gestão presente nos blocos, cursos, turnos e campi.',
        details: [
          'Organizar visitas periódicas e momentos de escuta presencial.',
          'Aproximar a gestão de quem não frequenta habitualmente o espaço do DCE.',
          'Divulgar os encaminhamentos realizados a partir das visitas.',
        ],
      },
    ],
  },
  {
    id: 'para-todos',
    number: '02',
    title: 'Universidade para Todos',
    subtitle: 'Permanência estudantil, direitos e qualidade de vida',
    color: '#024a43',
    proposals: [
      {
        number: 6,
        title: 'Restaurante Universitário',
        summary: 'Campanha por alimentação acessível, nutritiva e de qualidade na Univille.',
        details: [
          'Organizar abaixo-assinado para apresentação à Reitoria.',
          'Levantar os custos de alimentação dos estudantes.',
          'Construir uma proposta com preço acessível e sustentabilidade financeira.',
        ],
      },
      {
        number: 7,
        title: 'Mobilidade e tarifa zero',
        summary: 'Defesa da tarifa zero no transporte público para universitários.',
        details: [
          'Protocolar documento de reivindicação na Câmara de Vereadores de Joinville.',
          'Dialogar com vereadores, movimentos sociais e organizações estudantis.',
          'Levantar informações sobre os custos de deslocamento dos estudantes.',
        ],
      },
      {
        number: 8,
        title: 'Permanência e assistência estudantil',
        summary: 'Mais apoio para que nenhum estudante precise abandonar a universidade.',
        details: [
          'Identificar dificuldades financeiras, sociais e acadêmicas.',
          'Defender a ampliação das políticas de assistência.',
          'Acompanhar demandas sobre bolsas, auxílios e acessibilidade.',
        ],
      },
      {
        number: 9,
        title: 'Universidade Acessível',
        summary: 'Acesso e participação com dignidade para estudantes com deficiência.',
        details: [
          'Mapear barreiras físicas, comunicacionais e pedagógicas.',
          'Encaminhar solicitações de adequação e acompanhar as condições de acesso.',
          'Promover conscientização sobre acessibilidade e inclusão.',
        ],
      },
      {
        number: 10,
        title: 'Calendário de Saúde e Bem-estar',
        summary: 'Prevenção, saúde mental e qualidade de vida durante todo o ano.',
        details: [
          'Organizar campanhas de prevenção e promoção da saúde.',
          'Construir parcerias com cursos da área da saúde.',
          'Promover rodas de conversa e atividades educativas.',
        ],
      },
    ],
  },
  {
    id: 'viva',
    number: '03',
    title: 'Universidade Viva',
    subtitle: 'Cultura, extensão, pesquisa e convivência',
    color: '#ef5b3f',
    proposals: [
      {
        number: 11,
        title: 'DCE como espaço de extensão e pesquisa',
        summary: 'Um ponto de encontro para projetos, conhecimento e troca entre cursos.',
        details: [
          'Estabelecer parcerias com professores, cursos e departamentos.',
          'Abrir espaço para projetos de extensão, pesquisa e exposições.',
          'Incentivar encontros interdisciplinares.',
        ],
      },
      {
        number: 12,
        title: 'Reforma e revitalização do DCE',
        summary: 'Um espaço mais confortável, acessível e aberto à convivência.',
        details: [
          'Construir a proposta de reforma em diálogo com a universidade.',
          'Criar espaços adequados para estudo, reuniões e convivência.',
          'Ampliar o uso para atividades culturais e acadêmicas.',
        ],
      },
      {
        number: 13,
        title: 'Agenda cultural e acadêmica',
        summary: 'Atividades permanentes feitas com e para a comunidade acadêmica.',
        details: [
          'Promover feiras, exposições, conversas e apresentações artísticas.',
          'Incentivar artistas e produtores culturais da universidade.',
          'Organizar um calendário permanente de atividades.',
        ],
      },
      {
        number: 14,
        title: 'Semana de Integração Universitária',
        summary: 'Acolhimento para calouros e integração entre todos os estudantes.',
        details: [
          'Apresentar serviços, direitos e oportunidades da universidade.',
          'Promover integração entre veteranos e ingressantes.',
          'Realizar atividades culturais, esportivas e acadêmicas.',
        ],
      },
      {
        number: 15,
        title: 'Banco de Oportunidades',
        summary: 'Estágios, bolsas, editais e projetos reunidos em um só canal.',
        details: [
          'Divulgar oportunidades acadêmicas e profissionais.',
          'Reunir estágios, bolsas, iniciação científica e extensão.',
          'Facilitar o acesso a eventos, cursos e atividades de formação.',
        ],
      },
    ],
  },
  {
    id: 'portas-abertas',
    number: '04',
    title: 'DCE de Portas Abertas',
    subtitle: 'Modernização, integração institucional e transparência',
    color: '#024a43',
    proposals: [
      {
        number: 16,
        title: 'Integração ao Portal do Aluno e RM',
        summary: 'Registro e acompanhamento digital das demandas estudantis.',
        details: [
          'Propor um menu específico do DCE no Portal do Aluno.',
          'Criar mecanismo de solicitações pelo RM.',
          'Identificar problemas recorrentes com proteção de dados e confidencialidade.',
        ],
      },
      {
        number: 17,
        title: 'Transparência e prestação de contas',
        summary: 'Ações, decisões e uso dos recursos acessíveis para todos.',
        details: [
          'Divulgar periodicamente as ações realizadas.',
          'Apresentar relatórios de atividades e encaminhamentos.',
          'Dar transparência aos recursos, reuniões e decisões da diretoria.',
        ],
      },
      {
        number: 18,
        title: 'Participação estudantil nas decisões',
        summary: 'Prioridades definidas com consulta e presença dos estudantes.',
        details: [
          'Promover assembleias e reuniões abertas.',
          'Incentivar centros acadêmicos e representantes de turma.',
          'Criar espaços de consulta sobre as prioridades da gestão.',
        ],
      },
      {
        number: 19,
        title: 'Fórum dos Centros Acadêmicos',
        summary: 'Uma agenda compartilhada para fortalecer as representações dos cursos.',
        details: [
          'Organizar reuniões periódicas com representantes.',
          'Construir uma agenda coletiva de reivindicações.',
          'Trocar experiências e articular demandas comuns.',
        ],
      },
    ],
  },
  {
    id: 'transforma',
    number: '05',
    title: 'Universidade que Transforma',
    subtitle: 'Integração entre universidade, cidade e sociedade',
    color: '#ef5b3f',
    proposals: [
      {
        number: 20,
        title: 'DCE na Câmara de Vereadores',
        summary: 'A voz dos estudantes também presente no Legislativo municipal.',
        details: [
          'Protocolar pautas de interesse da comunidade universitária.',
          'Acompanhar discussões sobre educação, juventude e mobilidade.',
          'Promover diálogo com representantes públicos.',
        ],
      },
      {
        number: 21,
        title: 'Universidade e comunidade',
        summary: 'Extensão, solidariedade e cidadania conectando a Univille a Joinville.',
        details: [
          'Aproximar a universidade dos bairros e comunidades.',
          'Incentivar projetos de extensão ligados às necessidades sociais.',
          'Apoiar iniciativas e parcerias com organizações da sociedade civil.',
        ],
      },
      {
        number: 22,
        title: 'Universidade segura',
        summary: 'Acolhimento e resposta efetiva contra assédio, violência e discriminação.',
        details: [
          'Desenvolver normativas e cursos de prevenção e combate ao assédio.',
          'Formar equipes e núcleos independentes de acolhimento.',
          'Criar protocolos antirrevictimização, com sigilo e proteção contra retaliações.',
          'Defender medidas cautelares ágeis durante a apuração dos casos.',
        ],
      },
    ],
  },
]

const faqs = [
  {
    question: 'O que é o DCE?',
    answer:
      'O Diretório Central dos Estudantes é a entidade que representa o conjunto dos estudantes da universidade. Seu papel é defender direitos, encaminhar demandas e ampliar a participação estudantil nas decisões da instituição.',
  },
  {
    question: 'O que é a chapa Todas as Vozes?',
    answer:
      'Somos a Chapa 2 na eleição do DCE Univille. Nossa proposta de gestão se baseia em quatro compromissos: representação, participação, acolhimento e vida universitária.',
  },
  {
    question: 'Como as propostas serão colocadas em prática?',
    answer:
      'Cada iniciativa terá prioridades, prazos e responsáveis. A execução será articulada com Reitoria, coordenações, professores, funcionários, centros acadêmicos, representantes de turma e demais setores envolvidos.',
  },
  {
    question: 'Como os estudantes vão participar?',
    answer:
      'Por meio de assembleias, reuniões abertas, consultas, visitas do DCE Itinerante, diálogo com os centros acadêmicos e um canal permanente de escuta estudantil.',
  },
  {
    question: 'Como a gestão prestará contas?',
    answer:
      'As ações, encaminhamentos, reuniões, decisões e o uso dos recursos serão divulgados periodicamente. O plano também prevê relatórios de atividades e monitoramento dos resultados.',
  },
  {
    question: 'O plano pode evoluir durante a gestão?',
    answer:
      'Sim. Este plano estabelece compromissos, mas sua implementação depende da construção coletiva e da escuta contínua dos estudantes ao longo de toda a gestão.',
  },
]

function Icon({
  name,
  size = 20,
}: {
  name: 'arrow' | 'menu' | 'close' | 'plus' | 'voices' | 'check' | 'copy'
  size?: number
}) {
  const paths: Record<typeof name, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    plus: <path d="M12 5v14M5 12h14" />,
    voices: (
      <>
        <path d="M7 15c-2.2 0-4 1.3-4 3v1h8v-1c0-1.7-1.8-3-4-3Z" />
        <circle cx="7" cy="9" r="3" />
        <path d="M15 13c3.3 0 6 1.8 6 4v2h-7m1-12a3 3 0 1 1 0 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function useHashPage() {
  const getPage = (): Page => {
    const hash = window.location.hash.replace('#/', '') as Page
    return navigation.some((item) => item.id === hash) ? hash : 'inicio'
  }
  const [page, setPage] = useState<Page>(getPage)
  useEffect(() => {
    const onHash = () => setPage(getPage())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return page
}

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="grid size-10 -rotate-3 place-items-center bg-[#ef5b3f] font-black text-[#f1f4d0]">
        2
      </span>
      <span className={`font-poster uppercase leading-[0.8] tracking-[-0.05em] ${compact ? 'text-[15px]' : 'text-[18px]'}`}>
        Todas as
        <br />
        Vozes
      </span>
    </span>
  )
}

function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [page])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#073f3a] bg-[#a7c900]">
      <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        <a href="#/inicio" aria-label="Chapa 2 Todas as Vozes — início">
          <Wordmark compact />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#/${item.id}`}
              className={`px-3 py-2 text-sm font-black uppercase tracking-[0.04em] transition ${
                page === item.id
                  ? 'bg-[#073f3a] text-[#d9e782]'
                  : 'text-[#073f3a] hover:bg-[#c4da48]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#/propostas" className="button-coral hidden lg:inline-flex">
          Ver plano <Icon name="arrow" size={17} />
        </a>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center border-2 border-[#073f3a] text-[#073f3a] lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      {open && (
        <nav className="border-t-2 border-[#073f3a] bg-[#a7c900] p-4 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#/${item.id}`}
              className={`block border-b border-[#073f3a]/30 px-3 py-4 font-black uppercase ${
                page === item.id ? 'bg-[#073f3a] text-[#d9e782]' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function PageIntro({
  number,
  eyebrow,
  title,
  text,
}: {
  number: string
  eyebrow: string
  title: string
  text: string
}) {
  return (
    <section className="bg-[#a7c900] px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center gap-3 font-black uppercase tracking-[0.12em] text-[#ef5b3f]">
          <span className="text-2xl">{number}</span>
          <span className="h-[3px] w-10 bg-[#ef5b3f]" />
          <span className="text-xs">{eyebrow}</span>
        </div>
        <div className="mt-7 grid gap-7 md:grid-cols-[1.25fr_0.55fr] md:items-end">
          <h1 className="font-poster max-w-[930px] text-[clamp(3.2rem,8vw,7.6rem)] uppercase leading-[0.85] tracking-[-0.065em] text-[#073f3a]">
            {title}
          </h1>
          <p className="max-w-md border-l-4 border-[#ef5b3f] pl-5 text-lg font-semibold leading-7 text-[#173f39]">
            {text}
          </p>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <section className="paper-texture relative overflow-hidden bg-[#a7c900] px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.12fr_0.72fr]">
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
                Conheça as 22 propostas <Icon name="arrow" size={18} />
              </a>
              <a href="#/sobre" className="button-outline">Conheça a chapa</a>
            </div>
          </div>
          <div className="relative mx-auto max-w-[500px] lg:mx-0">
            <div className="absolute -inset-3 rotate-3 bg-[#ef5b3f]" />
            <img
              src={campaignImage}
              alt="Arte da Chapa 2 Todas as Vozes"
              className="relative aspect-[4/5] w-full -rotate-2 object-cover object-center shadow-[12px_12px_0_#073f3a]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#073f3a] px-5 py-20 text-[#f5f1d4] md:px-8 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 md:grid-cols-[0.65fr_1.1fr]">
            <div>
              <p className="stamp">Nosso compromisso</p>
              <h2 className="font-poster mt-6 text-5xl uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Um DCE que escuta, representa e faz junto.
              </h2>
            </div>
            <div className="md:pt-14">
              <p className="max-w-2xl text-xl leading-8 text-[#d7dfc3]">
                O DCE deve ser um espaço de representação, escuta, participação e integração da comunidade
                acadêmica. Nosso plano transforma essa visão em ações concretas.
              </p>
              <div className="mt-10 grid grid-cols-3 border-2 border-[#a7c900]">
                {[['22', 'propostas'], ['05', 'eixos'], ['01', 'voz coletiva']].map(([value, label]) => (
                  <div key={label} className="border-r-2 border-[#a7c900] p-4 last:border-r-0 md:p-7">
                    <strong className="font-poster block text-4xl text-[#a7c900] md:text-6xl">{value}</strong>
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

      <section className="bg-[#f2eed2] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="section-kicker">Plano de gestão</span>
              <h2 className="font-poster mt-3 text-5xl uppercase tracking-[-0.05em] text-[#073f3a] md:text-7xl">
                Cinco eixos
              </h2>
            </div>
            <a href="#/propostas" className="link-arrow">
              Explorar o plano completo <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {axes.map((axis, index) => (
              <article
                key={axis.id}
                className={`axis-card ${index === axes.length - 1 ? 'md:col-span-2' : ''}`}
                style={{ '--accent': axis.color } as React.CSSProperties}
              >
                <span className="font-poster text-4xl text-[var(--accent)]">{axis.number}</span>
                <div className="mt-14">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#63716a]">{axis.subtitle}</p>
                  <h3 className="font-poster mt-3 text-4xl uppercase leading-[0.9] tracking-[-0.04em] text-[#073f3a]">
                    {axis.title}
                  </h3>
                  <p className="mt-5 font-bold text-[#ef5b3f]">{axis.proposals.length} propostas</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ProposalCard({ proposal }: { proposal: Proposal }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`proposal ${open ? 'proposal-open' : ''}`}>
      <button type="button" onClick={() => setOpen(!open)} className="w-full text-left" aria-expanded={open}>
        <div className="flex items-start justify-between gap-4">
          <span className="font-poster text-3xl text-[#ef5b3f]">{String(proposal.number).padStart(2, '0')}</span>
          <span className={`grid size-10 shrink-0 place-items-center border-2 border-[#073f3a] transition ${open ? 'rotate-45 bg-[#073f3a] text-white' : ''}`}>
            <Icon name="plus" size={18} />
          </span>
        </div>
        <h3 className="font-poster mt-10 text-2xl uppercase leading-[0.95] tracking-[-0.03em] text-[#073f3a] md:text-3xl">
          {proposal.title}
        </h3>
        <p className="mt-4 leading-6 text-[#5b6963]">{proposal.summary}</p>
      </button>
      <div className={`details-grid ${open ? 'details-grid-open' : ''}`}>
        <ul className="space-y-3 overflow-hidden pt-0">
          {proposal.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-sm leading-6 text-[#304e47]">
              <span className="mt-2 size-2 shrink-0 bg-[#a7c900]" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function Proposals() {
  const [activeAxis, setActiveAxis] = useState(axes[0].id)
  const active = axes.find((axis) => axis.id === activeAxis) ?? axes[0]

  return (
    <>
      <PageIntro
        number="22"
        eyebrow="Plano de gestão"
        title="Propostas para todas as vozes."
        text="Um plano construído para representar, acolher e transformar a experiência universitária."
      />
      <section className="bg-[#f2eed2] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex gap-2 overflow-x-auto pb-4" role="tablist" aria-label="Eixos do plano">
            {axes.map((axis) => (
              <button
                key={axis.id}
                type="button"
                onClick={() => setActiveAxis(axis.id)}
                className={`axis-tab ${axis.id === active.id ? 'axis-tab-active' : ''}`}
                role="tab"
                aria-selected={axis.id === active.id}
              >
                {axis.number}. {axis.title}
              </button>
            ))}
          </div>
          <div className="my-10 border-l-[6px] border-[#ef5b3f] pl-5 md:my-14">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ef5b3f]">Eixo {active.number}</p>
            <h2 className="font-poster mt-2 text-4xl uppercase tracking-[-0.04em] text-[#073f3a] md:text-6xl">
              {active.title}
            </h2>
            <p className="mt-3 text-lg font-semibold text-[#53655e]">{active.subtitle}</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {active.proposals.map((proposal) => <ProposalCard key={proposal.number} proposal={proposal} />)}
          </div>
          <p className="mt-8 text-sm font-semibold text-[#63716a]">
            Clique em cada proposta para conferir os principais encaminhamentos.
          </p>
        </div>
      </section>
    </>
  )
}

function Questions() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <PageIntro
        number="?"
        eyebrow="Perguntas frequentes"
        title="Informação também é participação."
        text="Entenda o papel do DCE, como nosso plano será executado e como cada estudante poderá participar."
      />
      <section className="bg-[#f2eed2] px-5 py-16 md:px-8 md:py-24">
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

function About() {
  return (
    <>
      <PageIntro
        number="02"
        eyebrow="Chapa Todas as Vozes"
        title="Uma representação que cabe todo mundo."
        text="Queremos aproximar o DCE dos estudantes e construir uma gestão presente em toda a vida universitária."
      />
      <section className="bg-[#f2eed2] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid border-2 border-[#073f3a] lg:grid-cols-2">
            <img
              src={campaignImage}
              alt="Identidade visual da Chapa 2 Todas as Vozes"
              className="h-full min-h-[480px] w-full object-cover"
            />
            <div className="flex flex-col justify-between border-t-2 border-[#073f3a] bg-[#ef5b3f] p-8 text-[#fff4d3] lg:border-l-2 lg:border-t-0 lg:p-12">
              <span className="font-black uppercase tracking-[0.15em]">Manifesto</span>
              <div>
                <p className="font-poster text-4xl uppercase leading-[1.02] tracking-[-0.04em] md:text-5xl">
                  A universidade se fortalece quando todas as vozes encontram espaço para ser ouvidas.
                </p>
                <p className="mt-7 max-w-xl text-lg leading-7 text-[#ffe0c4]">
                  Nosso plano reúne iniciativas para representação estudantil, permanência, convivência,
                  produção acadêmica, cultura e participação nos processos institucionais.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-8 py-20 md:grid-cols-[0.4fr_0.6fr]">
            <h2 className="font-poster text-5xl uppercase tracking-[-0.05em] text-[#073f3a] md:text-6xl">
              Como vamos fazer
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Planejamento', 'Definição de prioridades, prazos e responsáveis para cada iniciativa.'],
                ['Articulação', 'Diálogo com os setores e parceiros necessários para cada proposta.'],
                ['Participação', 'Consulta permanente aos estudantes e representações dos cursos.'],
                ['Monitoramento', 'Acompanhamento público dos encaminhamentos e resultados.'],
                ['Transparência', 'Divulgação periódica das atividades e prestação de contas.'],
              ].map(([title, text], index) => (
                <article key={title} className={`value-card ${index === 4 ? 'sm:col-span-2' : ''}`}>
                  <span className="font-poster text-2xl text-[#ef5b3f]">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="font-poster mt-10 text-2xl uppercase text-[#073f3a]">{title}</h3>
                  <p className="mt-3 leading-6 text-[#5b6963]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = `Olá, Chapa Todas as Vozes!\n\nNome: ${form.get('nome')}\nCurso: ${form.get('curso')}\nAssunto: ${form.get('assunto')}\n\n${form.get('mensagem')}`
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Mensagem para Todas as Vozes', text: message })
        setStatus('Mensagem compartilhada!')
      } else {
        await navigator.clipboard.writeText(message)
        setStatus('Mensagem copiada. Cole no canal oficial da chapa.')
      }
    } catch {
      setStatus('A mensagem está pronta. Tente compartilhar novamente.')
    }
  }

  return (
    <>
      <PageIntro
        number="01"
        eyebrow="Cada voz importa"
        title="Queremos ouvir você."
        text="Mande uma proposta, conte uma demanda ou diga como você quer participar dessa construção."
      />
      <section className="bg-[#073f3a] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="text-[#f2eed2]">
            <p className="stamp">Escuta aberta</p>
            <h2 className="font-poster mt-7 text-5xl uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
              O plano também é seu.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-7 text-[#cbd5bd]">
              Compartilhe esta mensagem pelo seu canal preferido ou leve sua demanda às ações da chapa nos blocos,
              cursos, turnos e campi.
            </p>
            <div className="mt-10 border-l-4 border-[#a7c900] pl-5">
              <p className="font-bold text-[#a7c900]">DCE Itinerante</p>
              <p className="mt-2 text-sm leading-6 text-[#cbd5bd]">
                A proposta prevê visitas periódicas e momentos de escuta presencial em toda a universidade.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-[#f2eed2] p-6 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="field">
                <span>Seu nome</span>
                <input name="nome" required placeholder="Como podemos chamar você?" />
              </label>
              <label className="field">
                <span>Seu curso</span>
                <input name="curso" required placeholder="Qual é o seu curso?" />
              </label>
            </div>
            <label className="field mt-6">
              <span>Assunto</span>
              <select name="assunto" required defaultValue="">
                <option value="" disabled>Selecione uma opção</option>
                <option>Quero enviar uma proposta</option>
                <option>Quero participar</option>
                <option>Tenho uma dúvida</option>
                <option>Quero relatar uma demanda</option>
              </select>
            </label>
            <label className="field mt-6">
              <span>Mensagem</span>
              <textarea name="mensagem" required rows={5} placeholder="Escreva sua mensagem..." />
            </label>
            <div className="mt-7 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <button type="submit" className="button-coral">
                Compartilhar mensagem <Icon name="copy" size={18} />
              </button>
              {status && <span className="flex max-w-xs items-center gap-2 text-sm font-bold text-[#073f3a]"><Icon name="check" size={18} /> {status}</span>}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

function Footer() {
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

export default function App() {
  const page = useHashPage()
  useEffect(() => {
    document.title = `${navigation.find((item) => item.id === page)?.label} — Todas as Vozes`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const pages: Record<Page, ReactNode> = {
    inicio: <Home />,
    propostas: <Proposals />,
    perguntas: <Questions />,
    sobre: <About />,
    contato: <Contact />,
  }

  return (
    <div className="min-h-screen bg-[#f2eed2] text-[#073f3a]">
      <Header page={page} />
      <main>{pages[page]}</main>
      <Footer />
    </div>
  )
}
