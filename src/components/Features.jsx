//component/Features.jsx
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './Features.css'

// Import your feature images
import feature1Image from '../assets/images/features/feature1.jpg'
import feature2Image from '../assets/images/features/feature2.jpg'
import feature3Image from '../assets/images/features/feature3.jpg'

const featuresData = [
  {
    title: 'Multi-Language Expertise',
    description:
      'We build solutions using Node.js, Python, React, PHP, Go, Rust, .NET, and more. Choose your technology stack, and we deliver excellence.',
    imageUrl: feature1Image,
    icon: '💻',
  },
  {
    title: 'Smart Development Solutions',
    description:
      'Our modern development practices include code optimization, architectural best practices, and performance-first design principles.',
    imageUrl: feature2Image,
    icon: '⚡',
  },
  {
    title: 'Seamless Project Delivery',
    description:
      'Efficient collaboration tools, transparent communication, and organized workflows ensure your project stays on track and meets expectations.',
    imageUrl: feature3Image,
    icon: '🎯',
  },
]

function Features() {
  return (
    <div className="features-section-wrapper">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="features-title">
            Why Choose Bigeen Solutions
          </h2>
          <p className="features-subtitle">
            We combine technical excellence with strategic thinking to deliver
            software that creates real business value.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {featuresData.map((feature, index) => (
            <Col key={index}>
              <Card className="h-100 feature-card">
                <Card.Body>
                  <div className="feature-icon">{feature.icon}</div>
                  <Card.Title as="h3" className="feature-title fw-bold">
                    {feature.title}
                  </Card.Title>
                  <Card.Text className="feature-description">
                    {feature.description}
                  </Card.Text>
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
