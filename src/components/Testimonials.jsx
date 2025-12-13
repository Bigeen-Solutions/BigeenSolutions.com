import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "./Testimonials.css"

function Testimonials() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle email submission
  }

  return (
    <section className="testimonials-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "Bigeen transformed how we manage our Business. We cut our
                monthly costs by 40% and improved team velocity."
              </blockquote>
              <div className="testimonial-author">
                <img
                  src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=6366f1&color=fff&size=48"
                  alt="Sarah Jenkins"
                  className="author-avatar"
                />
                <div className="author-info">
                  <div className="author-name">Sarah Jenkins</div>
                  <div className="author-title">Director of Sales</div>
                </div>
              </div>
              <div className="cta-section">
                <h3 className="cta-title">Ready to simplify your stack?</h3>
                <Form onSubmit={handleSubmit} className="email-form">
                  <div className="input-group">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="email-input"
                      required
                    />
                    <Button type="submit" className="submit-button">
                      Get Started
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
