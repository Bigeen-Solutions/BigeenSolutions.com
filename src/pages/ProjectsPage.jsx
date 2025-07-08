import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

// Import your project images
import project1Image from "../assets/images/project1.png"
import project2Image from "../assets/images/project2.jpg"
import project3Image from "../assets/images/project3.png"

const projectData = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce website built with React, Node.js, and MongoDB. Includes product listings, a shopping cart, and a Stripe payment integration.",
    imageUrl: project1Image,
    liveUrl: "#", // Replace with your live project URL
    repoUrl: "#", // Replace with your GitHub repository URL
  },
  {
    title: "Fitness Tracking App",
    description:
      "A mobile-responsive web app for logging workouts and tracking fitness progress, built with a modern tech stack. Features data visualization with charts.",
    imageUrl: project2Image,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Company Landing Page",
    description:
      "A sleek and professional landing page for a local business, designed to be fast, SEO-friendly, and to generate leads through a contact form.",
    imageUrl: project3Image,
    liveUrl: "#",
    repoUrl: "#",
  },
]

function ProjectsPage() {
  return (
    <div className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Work</h1>
          <p className="lead text-muted">
            A selection of projects that showcase our skills and passion.
          </p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {projectData.map((project, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.imageUrl} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h4" className="fw-bold">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      href={project.liveUrl}
                      target="_blank"
                      className="me-2"
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href={project.repoUrl}
                      target="_blank"
                    >
                      Source Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProjectsPage
