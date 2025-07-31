import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Clients from './components/Clients'
import ContactCTA from './components/ContactCTA'
import About from './components/About'
import Certifications from './components/Certifications'
import Sustainability from './components/Sustainability'
import ClientsPage from './components/ClientsPage'
import Impact from './components/Impact'
import Career from './components/Career'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = React.useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'certifications':
        return <Certifications />
      case 'sustainability':
        return <Sustainability />
      case 'clients':
        return <ClientsPage />
      case 'impact':
        return <Impact />
      case 'career':
        return <Career />
      case 'news':
        return <News />
      case 'contact':
        return <Contact />
      default:
        return (
          <>
            <Hero />
            <Stats />
            <Features />
            <Gallery />
            <Clients />
            <ContactCTA onContactClick={() => setCurrentPage('contact')} />
          </>
        )
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  )
}

export default App