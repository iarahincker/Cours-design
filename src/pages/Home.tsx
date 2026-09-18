import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'
import HomeExplore from '../components/HomeExplore'

function Home() {
  return (
    <PageTransition>
      <Hero />
      <HomeExplore />
    </PageTransition>
  )
}

export default Home
