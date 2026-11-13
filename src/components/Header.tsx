import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation'
import type { Page } from '../types'
import { Icon } from './Icon'
import { Wordmark } from './Wordmark'

export function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [page])

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#073f3a] bg-[#a7c900]">
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