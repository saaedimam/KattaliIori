import React, { useEffect, useState } from 'react'

const Features: React.FC = () => {
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

    const element = document.querySelector('.features-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    'Internal quality audits + 3rd-party testing',
    'Minimum Order: 2,000 pcs/style/color',
    'R&D support in design & prototyping',
    'Automated cutting and sewing processes',
    '70–120 day lead time',
    'Global fire & safety standards (Accord/Alliance)'
  ]

  return (
    <section className="section features-section">
      <div className="container">
        <div className="features-header">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Why Partner with KTL?
          </h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="feature-text">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features-section {
          background: white;
        }

        .features-header {
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
          background: var(--light-background);
          border-radius: 12px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .feature-card.visible {
          opacity: 1;
          transform: translateY(0);
          animation: slideUp 0.6s ease forwards;
        }

        .feature-card:hover {
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .feature-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text);
          margin: 0;
          font-weight: 500;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-card {
            padding: 20px;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Features