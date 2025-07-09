//components/Hero.jsx

import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./Hero.css" // Import the custom CSS

function Hero() {
  return (
    <div className="hero-section">
      <Container className="text-white text-center">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <p className="text-uppercase small-caps-pill">
              We just Started the first batch of our Local Marketplace E
              commerce platform
            </p>
            <h1 className="display-3 fw-bold my-4">
              Accelerate high-quality software development
            </h1>
            <p className="lead mb-5">
              Our Team of experience Developers bring Your dream to life with
              code
            </p>
            <div>
              <Button
                variant="light"
                size="lg"
                className="me-3"
                href="/contact"
              >
                Get in Touch
              </Button>
              <Button variant="outline-light" size="lg" href="/contact">
                Talk to an expert
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
