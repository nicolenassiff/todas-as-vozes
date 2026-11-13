
export const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScgtqQLZ4Z6441KgW_m3CV-ZmwMgTXipyEPSR5lQbOwdKObXA/viewform'

export const GOOGLE_FORM_FIELDS = {
  nome: 'entry.154179192',
  curso: 'entry.1417712739',
  assunto: 'entry.635694110',
  mensagem: 'entry.1984206356',
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
