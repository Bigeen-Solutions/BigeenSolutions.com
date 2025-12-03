//components/Hero.jsx

import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./Hero.css" // Import the custom CSS

function Hero() {
  return (
    <div className="hero-section">
      <Container className="hero-content">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="hero-badge">
              🚀 Launching Our New E-Commerce Marketplace Platform
            </div>
            <h1 className="hero-title">
              Build High-Quality Software That Drives Growth
            </h1>
            <p className="hero-subtitle">
              Our experienced team of developers transforms your vision into
              reality. From concept to deployment, we deliver strategic,
              scalable solutions tailored to your business needs.
            </p>
            <div className="hero-buttons">
              <Button
                className="btn-hero btn-hero-primary"
                href="/contact"
                aria-label="Start your project with us"
              >
                Start Your Project
              </Button>
              <Button
                className="btn-hero btn-hero-secondary"
                href="/contact"
                aria-label="Schedule a consultation"
              >
                Schedule a Consultation
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
