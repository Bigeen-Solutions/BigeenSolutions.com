import React, { useState } from "react"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"
import "./ProjectsPage.css"

// Current Focus Project
const currentFocusData = {
  title: "Bigeen Core",
  status: "LIVE v2.5",
  description:
    "The All-in-One Integrator seamlessly connecting your business tools. Currently serving 500+ businesses with automated workflows and real-time analytics.",
  actions: [
    { label: "Try for free", variant: "dark" },
    { label: "View Changelog", variant: "outline-secondary" },
  ],
}

// Roadmap Projects
const roadmapProjects = [
  {
    id: 1,
    title: "AI Analytics Integration",
    badge: "InDesign",
    badgeColor: "purple",
    description:
      "Predictive modeling for flight trends directly within the Bigeen dashboard.",
    votes: 422,
    quarter: "Q3 2025",
  },
  {
    id: 2,
    title: "Mobile Companion App",
    badge: "Coming Q2",
    badgeColor: "warning",
    description:
      "Native iOS and Android apps for managing dashboards on mobile integrations.",
    votes: 340,
    quarter: "Q2 2026",
  },
  {
    id: 3,
    title: "Public API Gateway",
    badge: "Planned",
    badgeColor: "info",
    description:
      "Opening our endpoints for developers to build custom integrations.",
    votes: 189,
    quarter: "Q3 2026",
  },
  {
    id: 4,
    title: "Dark Mode v2",
    badge: null,
    description: null,
    votes: null,
    isDarkMode: true,
  },
]

// Legacy Projects
const legacyProjects = [
  {
    id: 1,
    title: "Project Alpha CRM",
    year: "2021",
    category: "Logistics",
    description:
      "A legacy CRM solution for a mid-sized firm that increased efficiency by 40%.",
    cta: "Read case study",
    image: "/src/assets/images/alphaproject.png",
  },
  {
    id: 2,
    title: "Omni-POS System",
    year: "2022",
    category: "Retail",
    description:
      "Integrated point-of-sale system connecting physical inventory with e-commerce platforms.",
    cta: "Read case study",
    image: "/src/assets/images/omni-pos.jpg",
  },
]

// Stats data
const statsData = {
  totalProjects: 12,
  inDevelopment: 4,
  completed: 8,
}

function ProjectsPage() {
  const [votedProjects, setVotedProjects] = useState(new Set())

  const handleVote = (projectId) => {
    if (!votedProjects.has(projectId)) {
      setVotedProjects(new Set([...votedProjects, projectId]))
    }
  }

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <div className="projects-hero">
        <Container>
          <div className="text-center">
            <div className="hero-label">🚀 Live Roadmap & Projects</div>
            <h1 className="projects-main-title">
              Building the Future of <br />
              <span className="highlight-text">Business Tools</span>
            </h1>
            <p className="projects-subtitle">
              Transparency at our core. Explore our journey from legacy systems
              to our flagship
              <br />
              Micro-SaaS Integrator. Vote on what we build next.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-5">
        {/* Current Focus Section */}
        <section className="current-focus-section">
          <h2 className="section-title-simple">Current Focus</h2>

          <Row className="g-4">
            <Col lg={5}>
              <Card className="focus-main-card">
                <Card.Body>
                  <div className="focus-visual">
                    <div className="dashboard-mockup">
                      <div className="mockup-header">
                        <div className="mockup-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="mockup-content">
                        <div className="mockup-sidebar"></div>
                        <div className="mockup-main">
                          <div className="mockup-charts">
                            <div className="chart-circle"></div>
                            <div className="chart-circle"></div>
                            <div className="chart-circle"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="focus-info-card">
                <Card.Body>
                  <Badge bg="success" className="live-badge">
                    {currentFocusData.status}
                  </Badge>
                  <h3 className="focus-title">{currentFocusData.title}</h3>
                  <p className="focus-description">
                    {currentFocusData.description}
                  </p>
                  <div className="focus-actions">
                    {currentFocusData.actions.map((action, idx) => (
                      <Button
                        key={idx}
                        variant={action.variant}
                        className="focus-btn"
                      >
                        {action.label} →
                      </Button>
                    ))}
                  </div>
                  <a href="#" className="focus-link">
                    View Changelog
                  </a>
                </Card.Body>
              </Card>
            </Col>
            {/* Stats Row */}
            <Col lg={3}>
              <Card className="stats-card">
                <Card.Body>
                  <div className="stats-header">
                    <h4>Total Projects</h4>
                    <div className="stats-number">
                      {statsData.totalProjects}
                    </div>
                  </div>
                  <div className="stats-bars">
                    <div className="stat-item">
                      <div className="stat-bar">
                        <div
                          className="stat-fill in-development"
                          style={{
                            width: `${
                              (statsData.inDevelopment /
                                statsData.totalProjects) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <div className="stat-label">
                        In Development
                        <span>{statsData.inDevelopment}</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-bar">
                        <div
                          className="stat-fill completed"
                          style={{
                            width: `${
                              (statsData.completed / statsData.totalProjects) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <div className="stat-label">
                        Completed
                        <span>{statsData.completed}</span>
                      </div>
                    </div>
                  </div>
                  <div className="community-request">
                    <h5>Community Request</h5>
                    <p>Submit your own feature idea</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* TheLab: Public Roadmap */}
        <section className="roadmap-section">
          <div className="roadmap-header">
            <h2 className="section-title-simple">TheLab: Public Roadmap</h2>
            <div className="roadmap-filters">
              <span className="filter-date">Q3 2025</span>
              <span className="filter-date">Q4 2025</span>
            </div>
          </div>

          <Row xs={1} md={2} lg={4} className="g-4">
            {roadmapProjects.map((project) => (
              <Col key={project.id}>
                {project.isDarkMode ? (
                  <Card className="roadmap-card dark-mode-card">
                    <Card.Body>
                      <div className="dark-mode-icon">🌙</div>
                      <h4 className="roadmap-title-dark">{project.title}</h4>
                    </Card.Body>
                  </Card>
                ) : (
                  <Card className="roadmap-card">
                    <Card.Body>
                      {project.badge && (
                        <Badge
                          bg={project.badgeColor}
                          className="roadmap-badge"
                        >
                          {project.badge}
                        </Badge>
                      )}
                      <h4 className="roadmap-title">{project.title}</h4>
                      <p className="roadmap-description">
                        {project.description}
                      </p>
                      <div className="roadmap-footer">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="vote-btn"
                          onClick={() => handleVote(project.id)}
                          disabled={votedProjects.has(project.id)}
                        >
                          <span className="vote-icon">
                            {votedProjects.has(project.id) ? "✓" : "👍"}
                          </span>
                          {project.votes +
                            (votedProjects.has(project.id) ? 1 : 0)}
                        </Button>
                        <span className="roadmap-quarter">
                          {project.quarter}
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            ))}
          </Row>
        </section>

        {/* Archive: Legacy Projects */}
        <section className="legacy-section">
          <h2 className="section-title-simple">Archive: Legacy Projects</h2>
          <Row xs={1} md={2} className="g-4">
            {legacyProjects.map((project) => (
              <Col key={project.id}>
                <Card
                  className="legacy-card"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%), url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Card.Body>
                    <div className="legacy-header">
                      <span className="legacy-year">{project.year}</span>
                      <span className="legacy-category">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="legacy-title">{project.title}</h3>
                    <p className="legacy-description">{project.description}</p>
                    <a href="#" className="legacy-cta">
                      {project.cta} →
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  )
}

export default ProjectsPage
