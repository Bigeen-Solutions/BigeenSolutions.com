//components/faq.jsx
import React from "react"
import { Container, Row, Col, Accordion, Image } from "react-bootstrap"
import "./Faq.css"

// Import your decorative image
import faqImage from "../assets/images/faq-img.jpg"

const faqData = [
  {
    eventKey: "0",
    question: "What technologies does Bigeen use?",
    answer:
      "We specialize in a wide range of technologies including React, Vue, Angular, Node.js, Python, PHP, Go, Rust, .NET, and more. Our team stays current with industry trends to recommend the best technology stack for your specific project requirements.",
  },
  {
    eventKey: "1",
    question: "How do you ensure code quality?",
    answer:
      "We follow industry best practices including code reviews, automated testing, continuous integration, and performance monitoring. All code undergoes rigorous testing before deployment to production to ensure reliability and maintainability.",
  },
  {
    eventKey: "2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website might take 4-8 weeks, while complex applications can take 3-6 months or longer. We provide detailed project estimates and keep you updated throughout the development process.",
  },
  {
    eventKey: "3",
    question: "Is my data secure?",
    answer:
      "Security is paramount. We implement industry-standard security practices including data encryption, secure authentication, regular security audits, and compliance with GDPR and other regulations. Your data is never shared with third parties without consent.",
  },
  {
    eventKey: "4",
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer comprehensive post-launch support including bug fixes, updates, performance optimization, and feature enhancements. We can discuss support packages tailored to your needs.",
  },
  {
    eventKey: "5",
    question: "Can you scale an existing system?",
    answer:
      "Absolutely. We specialize in modernizing, optimizing, and scaling existing applications. Whether you need performance improvements or architectural changes to support growth, we have the expertise to help.",
  },
]

function Faq() {
  return (
    <div className="faq-section-wrapper">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={7}>
            <h2 className="faq-title fw-bold mb-5">
              Frequently Asked Questions
            </h2>
            <Accordion defaultActiveKey="0" flush>
              {faqData.map((item) => (
                <Accordion.Item
                  eventKey={item.eventKey}
                  key={item.eventKey}
                  className="faq-item mb-3"
                >
                  <Accordion.Header className="faq-question">
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col md={5} className="d-none d-md-block ps-4">
            <Image src={faqImage} fluid className="faq-image" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq
