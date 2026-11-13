
export type Page =
  | 'inicio'
  | 'propostas'
  | 'perguntas'
  | 'sobre'
  | 'contato'

export type Proposal = {
  number: number
  title: string
  summary: string
  details: string[]
}

export type Axis = {
  id: string
  number: string
  title: string
  subtitle: string
  color: string
  proposals: Proposal[]
}
