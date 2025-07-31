import React, { useEffect, useState } from 'react'

const Gallery: React.FC = () => {
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

    const element = document.querySelector('.gallery-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      name: "Women's Wear",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Men's Wear",
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Children's Wear",
      image: "https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Sportswear",
      image: "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ]

  return (
    <section className="section gallery-section section-alt">
      <div className="container">
        <div className="gallery-header">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Product Range
          </h2>
        </div>
        <div className="gallery-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`gallery-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="gallery-image">
                <img src={product.image} alt={product.name} />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-header {
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

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .gallery-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .gallery-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
        }

        .gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 40px 24px 24px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-card:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-card:hover .gallery-image img {
          transform: scale(1.05);
        }

        .gallery-title {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Gallery