import React from "react"
import { Container, Row, Col, Image, Tabs, Tab } from "react-bootstrap"
import "./ServicesPage.css"

// Import your service images
import service1Image from "../assets/images/service1.jpg"
import service2Image from "../assets/images/service2.svg"
import service3Image from "../assets/images/service3.jpg"
import service4Image from "../assets/images/service4.jpg"

const servicesList = [
  {
    title: "Master Your Software Product",
    description:
      "Need tag deletion steps? Get Spark guidance in your terminal. Stuck with shell commands? Voice intentions for help.",
    imageUrl: service1Image,
    align: "left",
  },
  {
    title: "Focus On Solving Bigger Problems",
    description:
      "Automate the mundane tasks of software development so your team can focus on innovation and tackling the challenges that truly matter.",
    imageUrl: service2Image,
    align: "right",
  },
  {
    title: "Facilitate and Expedite Results",
    description:
      "Our AI-driven platform fosters innovation through tools that enhance speed and efficiency from start to finish.",
    imageUrl: service3Image,
    align: "left",
  },
  {
    title: "Customized Documentation",
    description:
      "Generate and maintain project documentation that is always up-to-date, clear, and tailored to your technology stack and standards.",
    imageUrl: service4Image,
    align: "right",
  },
]

function ServicesPage() {
  return (
    <div className="services-page-wrapper">
      {/* Hero Section */}
      <Container className="text-center text-white py-5">
        <h1 className="display-4 fw-bold">Our AI-Driven Platform</h1>
        <p className="lead text-white-50">
          We provide a suite of tools designed to enhance developer speed,
          foster innovation, and create top-notch software.
        </p>
      </Container>

      {/* Services Grid */}
      <Container className="py-5">
        {servicesList.map((service, index) => (
          <Row key={index} className="align-items-center mb-5">
            <Col
              md={6}
              className={service.align === "right" ? "order-md-2" : ""}
            >
              <h2 className="text-white fw-bold">{service.title}</h2>
              <p className="text-white-50">{service.description}</p>
            </Col>
            <Col
              md={6}
              className={service.align === "right" ? "order-md-1" : ""}
            >
              <Image src={service.imageUrl} fluid rounded />
            </Col>
          </Row>
        ))}
      </Container>

      {/* Tabs Section */}
      <Container className="py-5 text-center">
        <Tabs
          defaultActiveKey="productivity"
          id="service-tabs"
          className="justify-content-center service-tabs mb-4"
          variant="pills"
        >
          <Tab eventKey="productivity" title="Productivity">
            <p className="text-white-50 mt-3">
              Tools and workflows designed to eliminate bottlenecks and
              accelerate your development lifecycle.
            </p>
          </Tab>
          <Tab eventKey="collaboration" title="Collaboration">
            <p className="text-white-50 mt-3">
              Seamlessly integrated features that keep your team in sync, from
              code reviews to project milestones.
            </p>
          </Tab>
          <Tab eventKey="security" title="Security">
            <p className="text-white-50 mt-3">
              Automated security checks and best practices integrated into every
              step of the development process.
            </p>
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default ServicesPage
