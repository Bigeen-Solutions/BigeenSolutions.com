import React, { useState } from "react"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"
import "./ProjectsPage.css"

// Project data organized by status
const projectsData = {
  legacy: [
    {
      id: 1,
      title: "Enterprise CRM System",
      description:
        "Successfully deployed a comprehensive customer relationship management system handling 50K+ users with real-time analytics.",
      status: "Completed",
      date: "Q2 2024",
      tech: ["React", "Node.js", "PostgreSQL"],
      impact: "300% increase in customer engagement",
    },
    {
      id: 2,
      title: "Financial Analytics Dashboard",
      description:
        "Built a sophisticated dashboard for real-time financial data visualization and predictive analytics for Fortune 500 client.",
      status: "Completed",
      date: "Q1 2024",
      tech: ["Python", "React", "MongoDB"],
      impact: "Reduced reporting time by 80%",
    },
  ],
  current: [
    {
      id: 3,
      title: "Integrated Business Suite",
      description:
        "Our flagship micro-SaaS platform combining automation, analytics, and workflow management into one seamless experience.",
      status: "Live",
      date: "Now",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      features: [
        "Real-time collaboration",
        "AI-powered insights",
        "Custom workflows",
      ],
      users: "2,500+ active users",
    },
    {
      id: 4,
      title: "API Gateway & Integration Hub",
      description:
        "Unified API layer connecting multiple business tools and services with intelligent routing and monitoring.",
      status: "Beta",
      date: "Q4 2024",
      tech: ["Go", "GraphQL", "Docker"],
      features: ["99.9% uptime", "Rate limiting", "OAuth 2.0"],
    },
  ],
  upcoming: [
    {
      id: 5,
      title: "AI-Powered Automation Engine",
      description:
        "Next-generation automation platform using machine learning to optimize business processes and predict outcomes.",
      status: "In Development",
      date: "Q1 2026",
      tech: ["Python", "TensorFlow", "FastAPI"],
      votes: 245,
      progress: 40,
    },
    {
      id: 6,
      title: "Mobile-First Companion App",
      description:
        "Native mobile experience bringing our full suite of tools to iOS and Android with offline capabilities.",
      status: "Planned",
      date: "Q2 2026",
      tech: ["React Native", "TypeScript"],
      votes: 189,
      progress: 15,
    },
    {
      id: 7,
      title: "Advanced Security & Compliance Module",
      description:
        "Enterprise-grade security features including SOC 2 compliance, advanced encryption, and audit trails.",
      status: "Planned",
      date: "Q3 2026",
      tech: ["Rust", "Kubernetes"],
      votes: 156,
      progress: 10,
    },
  ],
}

function ProjectsPage() {
  const [votedProjects, setVotedProjects] = useState(new Set())

  const handleVote = (projectId) => {
    if (!votedProjects.has(projectId)) {
      setVotedProjects(new Set([...votedProjects, projectId]))
      // In a real app, this would send a vote to the backend
    }
  }

  const renderProjectCard = (project, category) => {
    const isUpcoming = category === "upcoming"
    const hasVoted = votedProjects.has(project.id)

    return (
      <Card key={project.id} className={`project-card project-${category}`}>
        <Card.Body>
          <div className="project-header">
            <div>
              <Badge
                bg={
                  project.status === "Live"
                    ? "success"
                    : project.status === "Beta"
                    ? "info"
                    : project.status === "Completed"
                    ? "secondary"
                    : "warning"
                }
                className="project-badge"
              >
                {project.status}
              </Badge>
              <span className="project-date">{project.date}</span>
            </div>
            {isUpcoming && (
              <Button
                variant={hasVoted ? "outline-secondary" : "outline-primary"}
                size="sm"
                className="vote-button"
                onClick={() => handleVote(project.id)}
                disabled={hasVoted}
              >
                {hasVoted ? "✓ Voted" : "🗳️ Vote"}{" "}
                {project.votes + (hasVoted ? 1 : 0)}
              </Button>
            )}
          </div>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-tech">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {project.features && (
            <div className="project-features">
              {project.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  ✓ {feature}
                </div>
              ))}
            </div>
          )}

          {project.impact && (
            <div className="project-impact">
              <strong>Impact:</strong> {project.impact}
            </div>
          )}

          {project.users && (
            <div className="project-users">
              <strong>👥 {project.users}</strong>
            </div>
          )}

          {project.progress !== undefined && (
            <div className="project-progress">
              <div className="progress-label">
                <span>Development Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    )
  }

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <Container>
          <div className="text-center">
            <h1 className="projects-main-title">Our Journey & Roadmap</h1>
            <p className="projects-subtitle">
              Transparent insights into our past achievements, current
              innovations, and exciting future developments. Vote on features
              you'd like to see next.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-5">
        {/* Legacy Projects */}
        <section className="project-section">
          <div className="section-header">
            <div className="section-icon">📚</div>
            <div>
              <h2 className="section-title">Legacy Projects</h2>
              <p className="section-description">
                Battle-tested solutions that demonstrate our expertise and track
                record
              </p>
            </div>
          </div>
          <Row xs={1} md={2} className="g-4">
            {projectsData.legacy.map((project) => (
              <Col key={project.id}>{renderProjectCard(project, "legacy")}</Col>
            ))}
          </Row>
        </section>

        {/* Current Projects */}
        <section className="project-section">
          <div className="section-header">
            <div className="section-icon">🚀</div>
            <div>
              <h2 className="section-title">Current Projects</h2>
              <p className="section-description">
                Live products and services available now
              </p>
            </div>
          </div>
          <Row xs={1} md={2} className="g-4">
            {projectsData.current.map((project) => (
              <Col key={project.id}>
                {renderProjectCard(project, "current")}
              </Col>
            ))}
          </Row>
        </section>

        {/* Upcoming Projects */}
        <section className="project-section">
          <div className="section-header">
            <div className="section-icon">🔮</div>
            <div>
              <h2 className="section-title">Upcoming & In Development</h2>
              <p className="section-description">
                Future innovations on our public roadmap - vote for your
                favorites!
              </p>
            </div>
          </div>
          <Row xs={1} md={2} lg={3} className="g-4">
            {projectsData.upcoming.map((project) => (
              <Col key={project.id}>
                {renderProjectCard(project, "upcoming")}
              </Col>
            ))}
          </Row>
        </section>

        {/* CTA Section */}
        <section className="roadmap-cta">
          <Card className="cta-card">
            <Card.Body className="text-center">
              <h2>Want to Influence Our Roadmap?</h2>
              <p>Join our community and get early access to new features</p>
              <Button variant="primary" size="lg" href="/contact">
                Get Early Access
              </Button>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  )
}

export default ProjectsPage
