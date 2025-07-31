import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Excellence in Ethical Garment Manufacturing
          </h1>
          <p className="hero-subtitle">
            40+ years of global apparel expertise. Reliable, sustainable, and compliant 
            textile production from Chittagong, Bangladesh.
          </p>
          <button className="btn btn-primary hero-cta">
            Explore More
          </button>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--primary) 0%, #1a4480 100%);
          z-index: -1;
        }

        .hero-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop') center/cover;
          opacity: 0.1;
          z-index: -1;
        }

        .hero-content {
          text-align: center;
          color: white;
          max-width: 800px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 32px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-cta {
          font-size: 1.1rem;
          padding: 16px 32px;
          transform: translateY(20px);
          animation: fadeInUp 1s ease 0.5s forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-cta {
            padding: 14px 28px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero