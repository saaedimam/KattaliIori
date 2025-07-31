import React, { useState, useEffect } from 'react'

interface HeaderProps {
  currentPage: string
  onPageChange: (page: string) => void
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'clients', label: 'Clients' },
    { id: 'impact', label: 'Impact & CSR' },
    { id: 'career', label: 'Career' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => onPageChange('home')}>
            <h2>Kattali Textile Ltd</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map(item => (
              <a
                key={item.id}
                href="#"
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  onPageChange(item.id)
                  setIsMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(16, 47, 94, 0.1);
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
        }

        .logo {
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .logo h2 {
          color: var(--primary);
          font-size: 24px;
          font-weight: 700;
        }

        .nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          color: var(--text);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--accent);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .menu-toggle span {
          width: 24px;
          height: 2px;
          background: var(--primary);
          margin: 3px 0;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .menu-toggle {
            display: flex;
          }

          .logo h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </header>
  )
}

export default Header