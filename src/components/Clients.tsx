import React, { useEffect, useState } from 'react'

const Clients: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.querySelector('.clients-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const clients = ['Walmart', 'Disney', 'SEDEX', 'Nirapon', 'Alliance']

  return (
    <section className="section clients-section">
      <div className="container">
        <div className="clients-header">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Trusted By
          </h2>
        </div>
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

      <style jsx>{`
        .clients-section {
          background: white;
        }

        .clients-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--primary);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .client-card {
          background: var(--light-background);
          padding: 40px 20px;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .client-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .client-card:hover {
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .client-logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary);
          font-family: var(--font-heading);
        }

        @media (max-width: 768px) {
          .clients-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
          }

          .client-card {
            padding: 30px 15px;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Clients