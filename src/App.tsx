import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import MesCours from './pages/MesCours'
import ClassDetail from './pages/ClassDetail'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Projets from './pages/Projets'
import Ressources from './pages/Ressources'
import MonEspace from './pages/MonEspace'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/mes-cours" element={<MesCours />} />
          <Route path="/mes-cours/:classId" element={<ClassDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<PortfolioDetail />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/mon-espace" element={<MonEspace />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
