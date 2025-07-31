import React, { useEffect, useState } from 'react'

const About: React.FC = () => {
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
            <h1 className="page-title">About Kattali Textile Ltd</h1>
            <p className="page-subtitle">
              Leading B2B apparel manufacturer with 40+ years of excellence
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`content-block ${isVisible ? 'visible' : ''}`}>
            <h2 className="section-title">Company Overview</h2>
            <p className="content-text">
              Kattali Textile Ltd (KTL) is a leading B2B apparel manufacturer under Lucky Group (Est. 1947), 
              located in Chittagong, Bangladesh. With 40+ years of experience and a monthly capacity of 300,000 
              garments, we serve global clients with knitwear tops and woven bottoms, prioritizing compliance, 
              quality, and on-time delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={`split-content ${isVisible ? 'visible' : ''}`}>
            <h2 className="section-title">Infrastructure & Facilities</h2>
            <div className="split-grid">
              <div className="split-left">
                <h3>Locations</h3>
                <p>Head Office: Agrabad, Chittagong</p>
                <p>Factory: Colonel Jones Road, Uttar Kattali</p>
                <p>Showroom: BM Heights, Agrabad</p>
              </div>
              <div className="split-right">
                <h3>Manufacturing Capacity</h3>
                <p>Machines: 855+</p>
                <ul>
                  <li>346 Single Needle</li>
                  <li>57 Interlock</li>
                  <li>24 Bartack</li>
                  <li>32 Feed-of-Arm</li>
                  <li>+ CAD, Pattern Tracker, Fusing units</li>
                </ul>
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
          max-width: 800px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease 0.2s;
        }

        .content-block.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 24px;
          text-align: center;
        }

        .content-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text);
          text-align: center;
        }

        .split-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease 0.4s;
        }

        .split-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 40px;
        }

        .split-left h3,
        .split-right h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .split-left p,
        .split-right p {
          margin-bottom: 8px;
          font-size: 1rem;
          line-height: 1.6;
        }

        .split-right ul {
          list-style: none;
          padding: 0;
        }

        .split-right li {
          padding: 4px 0;
          position: relative;
          padding-left: 20px;
        }

        .split-right li::before {
          content: '•';
          color: var(--accent);
          position: absolute;
          left: 0;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .split-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  )
}

export default About