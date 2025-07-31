import React, { useEffect, useState } from 'react'

const Career: React.FC = () => {
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
            <h1 className="page-title">Join Our Team</h1>
            <p className="page-subtitle">
              Build your career with a leading textile manufacturer
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`content-block ${isVisible ? 'visible' : ''}`}>
            <div className="career-content">
              <div className="content-text">
                <p>
                  We're looking for passionate individuals to join our dynamic textile operations. 
                  Apply now and grow with us in a company that values innovation, quality, and sustainability.
                </p>
              </div>
              
              <div className="career-benefits">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Growth Opportunities</h3>
                  <p>Advance your career with comprehensive training and development programs</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Safe Environment</h3>
                  <p>Work in a certified safe environment with modern facilities and equipment</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Team Culture</h3>
                  <p>Be part of a diverse, inclusive team committed to excellence and innovation</p>
                </div>
              </div>
              
              <div className="cta-section">
                <button className="btn btn-primary">
                  Apply Now
                </button>
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

        .career-content {
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

        .career-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .benefit-card {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .benefit-icon {
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

        .benefit-card h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .benefit-card p {
          color: var(--text);
          line-height: 1.6;
        }

        .cta-section {
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .career-benefits {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .benefit-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default Career