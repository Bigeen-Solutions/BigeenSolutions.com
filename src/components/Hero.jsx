//components/Hero.jsx

import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import heroImage from "../assets/images/hero-image.png"
import "./Hero.css"

function Hero() {
  return (
    <div className="hero-section">
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={6} className="hero-text-col">
            <div className="hero-badge">
              ✦ V2.0 NOW AVAILABLE
            </div>
            <h1 className="hero-title">
              Scale Your{" "}
              <span className="hero-title-gradient">Micro-SaaS</span>{" "}
              Stack.
            </h1>
            <p className="hero-subtitle">
              Integrated tools for the modern founder. Automate workflows,
              analyze growth, and scale infrastructure without the enterprise bloat.
            </p>
            <div className="hero-buttons">
              <Button
                className="btn-hero btn-hero-primary"
                href="/contact"
                aria-label="Get early access to our platform"
              >
                Get Early Access →
              </Button>
              <Button
                className="btn-hero btn-hero-secondary"
                href="#demo"
                aria-label="View demo"
              >
                <span className="play-icon">▶</span> View Demo
              </Button>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)' }}></div>
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #14B8A6, #06B6D4)' }}></div>
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #F59E0B, #EF4444)' }}></div>
              </div>
              <span className="trust-text">Trusted by 2,000+ founders</span>
            </div>
          </Col>
          <Col lg={6} className="hero-image-col">
            <div className="hero-visual">
              <img
                src={heroImage}
                alt="Bigeen Platform Dashboard"
                className="hero-image"
                loading="eager"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
