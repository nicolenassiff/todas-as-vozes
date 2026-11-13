
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { Proposals } from './pages/Proposals'
import { Questions } from './pages/Questions'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

import { useHashPage } from './hooks/useHashPage'
import { useEffect } from 'react'

export default function App() {
  const page = useHashPage()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [page])

  function renderPage() {
    switch (page) {
      case 'inicio':
        return <Home />

      case 'propostas':
        return <Proposals />

      case 'perguntas':
        return <Questions />

      case 'sobre':
        return <About />

      case 'contato':
        return <Contact />

      default:
        return <Home />
    }
  }

  return (
  <div className="flex min-h-screen flex-col">
    <Header page={page} />

    <main className="flex-1">
      {renderPage()}
    </main>

    <Footer />
  </div>
)
}
