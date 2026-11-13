
import { useEffect, useState } from 'react'

export type Page =
  | 'inicio'
  | 'propostas'
  | 'perguntas'
  | 'sobre'
  | 'contato'

const validPages: Page[] = [
  'inicio',
  'propostas',
  'perguntas',
  'sobre',
  'contato',
]

function getCurrentPage(): Page {
  const hash = window.location.hash

  // Remove o #/ e ignora os parâmetros após ?
  const path = hash.replace(/^#\/?/, '').split('?')[0]

  if (validPages.includes(path as Page)) {
    return path as Page
  }

  return 'inicio'
}

export function useHashPage(): Page {
  const [page, setPage] = useState<Page>(getCurrentPage)

  useEffect(() => {
    function handleHashChange() {
      setPage(getCurrentPage())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return page
}
