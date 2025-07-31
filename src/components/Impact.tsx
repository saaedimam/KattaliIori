import React, { useEffect, useState } from 'react'

const Impact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-content">
      <section className="section hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <h1 className="page-title">Impact & CSR</h1>
            <p className="page-subtitle">
              Empowering communities and building a sustainable future
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`content-block ${isVisible ? 'visible' : ''}`}>
            <div className="impact-content">
              <div className="content-text">
                <p>
                  KTL supports education tours, eco-awareness, and worker wellbeing. 
                  Our CSR initiatives focus on empowering communities and building a sustainable future.
                </p>
              </div>
              
              <div className="impact-areas">
                <div className="impact-card">
                  <div className="impact-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 12v5c3 0 5-1 7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Education</h3>
                  <p>Supporting educational tours and skill development programs for local communities</p>
                </div>
                
                <div className="impact-card">
                  <div className="impact-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M3 6h18l-2 13H5L3 6zM3 6l-.5-3H1M7 10v4M17 10v4M12 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Environmental Awareness</h3>
                  <p>Promoting eco-awareness and sustainable practices throughout our operations</p>
                </div>
                
                <div className="impact-card">
                  <div className="impact-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Worker Wellbeing</h3>
                  <p>Ensuring safe working conditions and supporting the health and wellbeing of our workforce</p>
                </div>
              </div>
            </div>
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

        .content-block {
          max-width: 1000px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease 0.2s;
        }

        .content-block.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .impact-content {
          text-align: center;
        }

        .content-text {
          margin-bottom: 60px;
        }

        .content-text p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text);
          max-width: 800px;
          margin: 0 auto;
        }

        .impact-areas {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .impact-card {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .impact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .impact-icon {
          width: 80px;
          height: 80px;
          background: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: white;
        }

        .impact-card h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .impact-card p {
          color: var(--text);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .impact-areas {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .impact-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default Impact