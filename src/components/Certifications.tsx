import React, { useEffect, useState } from 'react'

const Certifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const certifications = [
    'Nirapon Worker Safety',
    'Alliance Structural Safety',
    'Walmart Supply Chain Security',
    'Walmart Responsible Sourcing',
    'Disney Approved',
    'SEDEX (SMETA Audit)'
  ]

  return (
    <div className="page-content">
      <section className="section hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <h1 className="page-title">Certifications & Compliance</h1>
            <p className="page-subtitle">
              Committed to the highest standards of safety, quality, and ethical manufacturing
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="badges-grid">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`badge-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="badge-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="badge-title">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-content {
          margin-top: 80px;
        }

        .hero-section {
          background: linear-gradient(135deg, var(--primary) 0%, #1a4480 100%);
          color: white;
          text-align: center;
          padding: 120px 0 80px;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .page-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .page-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .badges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .badge-card {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          border: 2px solid transparent;
        }

        .badge-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .badge-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border-color: var(--accent);
        }

        .badge-icon {
          width: 64px;
          height: 64px;
          background: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
        }

        .badge-title {
          font-size: 1.25rem;
          color: var(--primary);
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .badges-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .badge-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default Certifications