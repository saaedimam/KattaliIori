import React, { useEffect, useState } from 'react'

const News: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const newsItems = [
    {
      title: 'KTL crosses 1.8M exports in 2024',
      date: '2024-12-31',
      excerpt: 'Kattali Textile Ltd achieves record-breaking export volume of 1,872,564 pieces in 2024, marking significant growth in global market presence.'
    },
    {
      title: 'New sustainability policy published',
      date: '2024-10-15',
      excerpt: 'KTL announces comprehensive sustainability policy focusing on environmental protection, worker welfare, and ethical manufacturing practices.'
    }
  ]

  return (
    <div className="page-content">
      <section className="section hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <h1 className="page-title">News & Updates</h1>
            <p className="page-subtitle">
              Stay updated with our latest developments and achievements
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <article 
                key={index} 
                className={`news-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="news-date">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h2 className="news-title">{item.title}</h2>
                <p className="news-excerpt">{item.excerpt}</p>
                <button className="btn btn-outline news-cta">
                  Read More
                </button>
              </article>
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

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .news-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .news-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .news-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .news-date {
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .news-title {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 16px;
          font-weight: 600;
        }

        .news-excerpt {
          color: var(--text);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .news-cta {
          font-size: 0.9rem;
          padding: 10px 20px;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .news-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .news-card {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  )
}

export default News