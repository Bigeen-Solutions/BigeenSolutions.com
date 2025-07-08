//component/Features.jsx
import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./Features.css"

// Import your feature images
import feature1Image from "../assets/images/features/feature1.jpg"
import feature2Image from "../assets/images/features/feature2.jpg"
import feature3Image from "../assets/images/features/feature3.jpg"

const featuresData = [
  {
    title: "Any language",
    description:
      "Bigeen Solutions are built in Node.js, Python, React, PHP, Go, Rust, .NET, and more. Build, test, and deploy applications in your language of choice.",
    imageUrl: feature1Image,
  },
  {
    title: "Get AI-based suggestions",
    description:
      "Effortlessly navigate code lines, access ready-made function suggestions, and make swift decisions on whether to adopt, decline, or modify them.",
    imageUrl: feature2Image,
  },
  {
    title: "Move conversations forward",
    description:
      "Efficiently organize by assigning contributors and teams, or integrating them into milestones and projects - all seamlessly integrated within a unified timeline.",
    imageUrl: feature3Image,
  },
]

function Features() {
  return (
    <div className="features-section-wrapper">
      <Container className="py-5 text-white">
        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Features That Make Our Solutions Stand Out
          </h1>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {featuresData.map((feature, index) => (
            <Col key={index}>
              <Card className="h-100 feature-card">
                <Card.Img
                  variant="top"
                  src={feature.imageUrl}
                  className="p-4"
                />
                <Card.Body>
                  <Card.Title as="h4" className="fw-bold">
                    {feature.title}
                  </Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Features
