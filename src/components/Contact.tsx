import React, { useEffect, useState } from 'react'

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="page-content">
      <section className="section hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Get in touch with our team for partnership opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className={`info-card ${isVisible ? 'visible' : ''}`}>
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Address</h3>
                <p>Colonel Jones Road, Uttar Kattali<br />Chittagong, Bangladesh</p>
              </div>

              <div className={`info-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Email</h3>
                <p>info@ktlbd.com</p>
              </div>

              <div className={`info-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Phone</h3>
                <p>+8801717436667<br />+8801730597576</p>
              </div>
            </div>

            <div className={`contact-form-container ${isVisible ? 'visible' : ''}`}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a message</h3>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                </button>
              </form>
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: flex-start;
          gap: 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .info-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          background: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .info-card h3 {
          font-size: 1.25rem;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .info-card p {
          color: var(--text);
          line-height: 1.6;
          margin: 0;
        }

        .contact-form-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease 0.3s;
        }

        .contact-form-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-form {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .contact-form h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 30px;
          text-align: center;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e5e5;
          border-radius: 8px;
          font-size: 1rem;
          font-family: var(--font-body);
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: 14px;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-form {
            padding: 30px;
          }

          .info-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact