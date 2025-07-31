import React, { useEffect, useState } from 'react'

const Stats: React.FC = () => {
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

    const element = document.querySelector('.stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: 'Experience', value: '40+ Years' },
    { label: 'Employees', value: '850+' },
    { label: 'Monthly Capacity', value: '300,000 pcs' },
    { label: 'Export Volume (2024)', value: '1,872,564 pcs' },
    { label: 'Delivery On-Time', value: '95%' },
    { label: 'DHU Rate', value: '0.5%' }
  ]

  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-header">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Key Metrics
          </h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          background: var(--light-background);
        }

        .stats-header {
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

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-card {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .stat-card.visible {
          opacity: 1;
          transform: translateY(0);
          animation: slideUp 0.6s ease forwards;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 8px;
          font-family: var(--font-heading);
        }

        .stat-label {
          font-size: 1rem;
          color: var(--text);
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
          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 24px;
          }

          .stat-card {
            padding: 30px 20px;
          }

          .stat-value {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Stats