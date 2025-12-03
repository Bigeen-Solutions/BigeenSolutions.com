import React from 'react'
import Team from '../components/Team.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutPage.css'

function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="about-hero">
        <Container>
          <div className="text-center">
            <h1 className="about-hero-title">About Bigeen Solutions</h1>
            <p className="about-hero-subtitle">
              Building exceptional software solutions that drive real business growth
            </p>
          </div>
        </Container>
      </div>

      {/* Our Story Section */}
      <section className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="about-section-title">Our Story</h2>
              <p className="about-text">
                Founded with a mission to revolutionize software development in Africa,
                Bigeen Solutions emerged from a simple belief: exceptional technology
                should be accessible, affordable, and delivered with uncompromising quality.
              </p>
              <p className="about-text">
                Today, we are proud to serve businesses across e-commerce, fintech,
                enterprise, and beyond—delivering solutions that don't just meet
                expectations, but exceed them.
              </p>
            </Col>
            <Col md={6}>
              <div className="about-image-placeholder">
                <p>Strategic Growth Partner</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="about-values-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Our Core Values</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-description">
                  We deliver premium-quality code and solutions that stand the test of time.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Transparency</h3>
                <p className="value-description">
                  Open communication and honest partnerships form the foundation of our work.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  We stay ahead of the curve, adopting best practices and cutting-edge technologies.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <Team />
    </>
  )
}

export default AboutPage
