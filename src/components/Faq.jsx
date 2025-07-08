//components/faq.jsx
import React from "react"
import { Container, Row, Col, Accordion, Image } from "react-bootstrap"
import "./Faq.css"

// Import your decorative image
import faqImage from "../assets/images/faq-img.jpg"

const faqData = [
  {
    eventKey: "0",
    question: "What languages does Bigeen code with?",
    answer:
      "Bigeen supports a wide range of languages including Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, and more, allowing you to work in your preferred environment.",
  },
  {
    eventKey: "1",
    question: "Does Bigeen write perfect code?",
    answer:
      "While Bigeen is a powerful AI assistant that generates high-quality code, it's designed to be a co-pilot. All code should be reviewed and tested by a human developer to ensure it meets your specific requirements and quality standards.",
  },
  {
    eventKey: "2",
    question: "How does a customer get the most out of Bigeen?",
    answer:
      "The best way to get the most out of Spark is to integrate it deeply into your workflow. Use it for everything from boilerplate code and function suggestions to debugging and learning new patterns. The more you use it, the more it adapts to your style.",
  },
  {
    eventKey: "3",
    question: "Will my code be shared with other users?",
    answer:
      "No. Your code is your own. We have strict privacy policies in place, and your proprietary code is never shared with other users or used to train our models in a way that would expose your data.",
  },
]

function Faq() {
  return (
    <div className="faq-section-wrapper">
      <Container className="py-5 text-white">
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="fw-bold mb-5">FAQs</h1>
            <Accordion defaultActiveKey="0" flush>
              {faqData.map((item) => (
                <Accordion.Item
                  eventKey={item.eventKey}
                  key={item.eventKey}
                  className="faq-item mb-3"
                >
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col md={5} className="d-none d-md-block">
            <Image src={faqImage} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq
