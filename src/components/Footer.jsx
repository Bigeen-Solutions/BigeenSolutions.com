//Footer.jsx
import React from "react"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row className="py-5">
          {/* Column 1: Spark Links */}
          <Col xs={6} md={3} lg={2} className="mb-4">
            <h5 className="fw-bold">Bigeen</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
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
          <Col xs={6} md={3} lg={2} className="mb-4">
            <h5 className="fw-bold">Support</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="footer-link">
                  Contact us
                </Link>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Online Chat
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Telegram
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 3: FAQ Links */}
          <Col xs={6} md={3} lg={2} className="mb-4">
            <h5 className="fw-bold">FAQ</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Payments
                </a>
              </li>
            </ul>
          </Col>

          {/* Spacer Column */}
          <Col md={1} lg={2} className="d-none d-lg-block"></Col>

          {/* Column 4: Newsletter */}
          <Col xs={12} md={5} lg={4} className="mb-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p>Be the first one to know about discounts, offers and events.</p>
            <Form>
              <InputGroup className="mb-3 newsletter-group">
                <Form.Control
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  type="email"
                />
                <Button variant="light" type="submit">
                  Submit
                </Button>
              </InputGroup>
            </Form>
            <div className="social-icons-footer mt-3">
              <a href="#" className="social-icon-footer">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon-footer">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon-footer">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
