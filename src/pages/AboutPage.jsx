import React from "react"
import Team from "../components/Team.jsx"
import { Container, Row, Col } from "react-bootstrap"

function AboutPage() {
  return (
    <>
      <div className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="fw-bold">About Bigeen Solutions</h1>
            <p className="lead text-muted">
              Driven by purpose, guided by simplicity.
            </p>
          </div>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <p className="mb-4">
                We are builders with depth—crafting full-stack web applications,
                strategic products, and entrepreneurial solutions. From modest
                fashion e-commerce to local market digitisation, we don’t follow
                trends, we anticipate needs.
              </p>
              <p>
                We believe in simplicity over noise, clarity over ego, and
                listening over assuming. We stay grounded in purpose, crafting
                solutions that speak louder than words ever could.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Team />
    </>
  )
}

export default AboutPage
