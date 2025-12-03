//Footer.jsx
import React, { useState } from "react"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setEmail("")
        setSubscribed(false)
      }, 3000)
    }
  }

  return (
    <footer className="footer-wrapper">
      <Container>
        <Row className="py-5">
          {/* Column 1: Company Links */}
          <Col xs={12} sm={6} md={3} lg={2} className="mb-4">
            <h5 className="fw-bold footer-section-title">Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Column 2: Support Links */}
          <Col xs={12} sm={6} md={3} lg={2} className="mb-4">
            <h5 className="fw-bold footer-section-title">Support</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@bigeensolutions.com"
                  className="footer-link"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/your-number"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/your-channel"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 3: Resources */}
          <Col xs={12} sm={6} md={3} lg={2} className="mb-4">
            <h5 className="fw-bold footer-section-title">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Sitemap
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 4: Newsletter */}
          <Col xs={12} md={12} lg={5} className="mb-4">
            <h5 className="fw-bold footer-section-title">Stay Updated</h5>
            <p className="footer-newsletter-text">
              Subscribe to our newsletter for updates, tips, and industry
              insights.
            </p>
            <Form onSubmit={handleSubscribe}>
              <InputGroup className="newsletter-group mb-3">
                <Form.Control
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <Button
                  variant="light"
                  type="submit"
                  className="newsletter-button"
                >
                  Subscribe
                </Button>
              </InputGroup>
            </Form>
            {subscribed && (
              <p className="footer-success-message">
                Thank you for subscribing!
              </p>
            )}
            <div className="social-icons-footer mt-3">
              <a
                href="#"
                className="social-icon-footer"
                aria-label="Facebook"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="social-icon-footer"
                aria-label="Twitter"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="social-icon-footer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom border-top pt-4">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Bigeen Solutions. All rights
              reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="footer-location">Made with ❤️ in Abuja, Nigeria</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
