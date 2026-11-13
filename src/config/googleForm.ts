
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdJp3gmNxazNLnIDYi-bt5D6WD349hvhXV2p0HZIjEPhBXPpw/viewform'

export const GOOGLE_FORM_FIELDS = {
  nome: 'entry.620507525',
  curso: 'entry.1111572026',
  assunto: 'entry.465113886',
  mensagem: 'entry.195992010',
}

export function createGoogleFormLink(data: {
  nome: string
  curso: string
  assunto: string
  mensagem: string
}) {
  const params = new URLSearchParams({
    usp: 'pp_url',
    [GOOGLE_FORM_FIELDS.nome]: data.nome,
    [GOOGLE_FORM_FIELDS.curso]: data.curso,
    [GOOGLE_FORM_FIELDS.assunto]: data.assunto,
    [GOOGLE_FORM_FIELDS.mensagem]: data.mensagem,
  })

  return `${GOOGLE_FORM_URL}?${params.toString()}`
}
