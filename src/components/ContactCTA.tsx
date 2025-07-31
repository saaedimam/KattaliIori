import React, { useEffect, useState } from 'react'

interface ContactCTAProps {
  onContactClick: () => void
}

const ContactCTA: React.FC<ContactCTAProps> = ({ onContactClick }) => {
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

    const element = document.querySelector('.cta-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section cta-section">
      <div className="container">
        <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
          <h2 className="cta-title">
            Partner with a Compliant, Scalable Manufacturer
          </h2>
          <button 
            className="btn btn-primary cta-button"
            onClick={onContactClick}
          >
            Contact Us
          </button>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: linear-gradient(135deg, var(--primary) 0%, #1a4480 100%);
          color: white;
          text-align: center;
        }

        .cta-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .cta-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          font-size: 1.1rem;
          padding: 16px 32px;
          background: var(--accent);
          border: none;
        }

        .cta-button:hover {
          background: #00B570;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: 2rem;
          }

          .cta-button {
            padding: 14px 28px;
          }
        }
      `}</style>
    </section>
  )
}

export default ContactCTA