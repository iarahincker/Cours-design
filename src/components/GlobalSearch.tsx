import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { classes } from '../data/classes'
import { portfolioProjects } from '../data/portfolio'
import { resources } from '../data/resources'
import './GlobalSearch.css'

interface SearchResult {
  id: string
  title: string
  meta: string
  to: string
  kind: string
}

function buildIndex(): SearchResult[] {
  return [
    ...classes.map((c) => ({
      id: `class-${c.id}`,
      title: c.name,
      meta: c.tagline,
      to: `/mes-cours/${c.id}`,
      kind: 'Classe',
    })),
    ...portfolioProjects.map((p) => ({
      id: `pf-${p.id}`,
      title: p.title,
      meta: `${p.classLabel} · ${p.domain}`,
      to: `/portfolio/${p.id}`,
      kind: 'Portfolio',
    })),
    ...resources.map((r) => ({
      id: `res-${r.id}`,
      title: r.title,
      meta: r.category,
      to: '/ressources',
      kind: 'Ressource',
    })),
  ]
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

interface GlobalSearchProps {
  open: boolean
  onClose: () => void
}

function GlobalSearch({ open, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const index = useMemo(buildIndex, [])

  useEffect(() => {
    if (!open) return
    setQuery('')
    const id = window.setTimeout(() => inputRef.current?.focus(), 60)
    return () => window.clearTimeout(id)
  }, [open])

  useEffect(() => {
    if (!open) return
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  const q = normalize(query.trim())
  const results = q ? index.filter((r) => normalize(`${r.title} ${r.meta}`).includes(q)).slice(0, 8) : []

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="global-search"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="global-search__panel"
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <input
              ref={inputRef}
              type="search"
              className="global-search__input"
              placeholder="Rechercher une classe, un projet, une ressource…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Recherche globale"
            />

            <div className="global-search__results">
              {q && results.length === 0 && (
                <p className="global-search__empty">Aucun résultat pour « {query} ».</p>
              )}
              {results.map((result) => (
                <Link key={result.id} to={result.to} onClick={onClose} className="global-search__result">
                  <span className="global-search__kind">{result.kind}</span>
                  <span className="global-search__title">{result.title}</span>
                  <span className="global-search__meta">{result.meta}</span>
                </Link>
              ))}
              {!q && (
                <p className="global-search__hint">
                  Parcourez les classes, le portfolio et les ressources en un seul endroit.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GlobalSearch
