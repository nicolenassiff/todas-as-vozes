
import type { Axis } from '../types'

export const axes: Axis[] = [
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
  {
    id: 'polo-sao-francisco-do-sul',
    number: '06',
    title: 'Polo São Francisco do Sul',
    subtitle: 'Representação estudantil e melhorias na infraestrutura do polo',
    color: '#024a43',
    proposals: [
      {
        number: 23,
        title: 'Representação do Polo São Francisco do Sul',
        summary:
          'O polo poderá eleger uma representação estudantil para fortalecer a busca por suas reivindicações.',
        details: [
          'Reivindicar o asfaltamento do estacionamento.',
          'Buscar a construção do auditório do polo.',
          'Reivindicar a cobertura do trajeto entre o estacionamento e as salas de aula, para proteger os estudantes nos dias de chuva.',
        ],
      },
    ],
  }

]
