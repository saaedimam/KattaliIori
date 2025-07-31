import React from 'react'

interface FooterProps {
  onPageChange: (page: string) => void
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Kattali Textile Ltd</h3>
            <p className="footer-description">
              Excellence in ethical garment manufacturing with 40+ years of global expertise.
            </p>
            <div className="footer-contact">
              <p>Colonel Jones Road, Uttar Kattali</p>
              <p>Chittagong, Bangladesh</p>
              <p>info@ktlbd.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Company</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('about'); }}>About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('certifications'); }}>Certifications</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('sustainability'); }}>Sustainability</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('career'); }}>Career</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('clients'); }}>Our Clients</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('impact'); }}>Impact & CSR</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('news'); }}>News</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onPageChange('contact'); }}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="footer-social">
              <p>Phone: +8801717436667</p>
              <p>Phone: +8801730597576</p>
              <p>Email: info@ktlbd.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kattali Textile Ltd. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--primary);
          color: white;
          padding: 60px 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 20px;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
        }

        .footer-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .footer-description {
          margin-bottom: 20px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .footer-contact p {
          margin-bottom: 4px;
          opacity: 0.9;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.9;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          opacity: 1;
          color: var(--accent);
        }

        .footer-social p {
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 20px;
          text-align: center;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer {
            padding: 40px 0 20px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer