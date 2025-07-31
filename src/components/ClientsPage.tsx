import React, { useEffect, useState } from 'react'

const ClientsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const clients = [
    'Walmart',
    'Disney', 
    'C&A',
    'Zara',
    'Calvin Klein'
  ]

  return (
    <div className="page-content">
      <section className="section hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <h1 className="page-title">Global Clients</h1>
            <p className="page-subtitle">
              Trusted by leading brands worldwide
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className={`client-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="client-logo">
                  {client}
                </div>
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

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .client-card {
          background: white;
          padding: 60px 40px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .client-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .client-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .client-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-heading);
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .clients-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }

          .client-card {
            padding: 40px 30px;
          }
        }
      `}</style>
    </div>
  )
}

export default ClientsPage