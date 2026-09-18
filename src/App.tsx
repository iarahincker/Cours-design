import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Cours from './pages/Cours'
import Projets from './pages/Projets'
import Ressources from './pages/Ressources'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/ressources" element={<Ressources />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
