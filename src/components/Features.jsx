//component/Features.jsx
import React from "react"
import { Container } from "react-bootstrap"
import "./Features.css"

const featuresData = [
  {
    id: 1,
    title: "Intelligent Automation",
    description:
      "Streamline workflows with AI-powered automation that learns from your patterns and optimizes operations in real-time.",
    icon: "⚡",
    gradient: "purple",
    size: "large",
  },
  {
    id: 2,
    title: "Real-Time Analytics",
    description:
      "Make data-driven decisions with advanced analytics and customizable dashboards.",
    icon: "📊",
    gradient: "teal",
    size: "medium",
  },
  {
    id: 3,
    title: "Scalable Infrastructure",
    description:
      "Built to grow with your business, from startup to enterprise scale.",
    icon: "🚀",
    gradient: "blue",
    size: "medium",
  },
  {
    id: 4,
    title: "Seamless Integration",
    description:
      "Connect all your tools in one unified platform. Works with 500+ apps and services.",
    icon: "🔗",
    gradient: "purple",
    size: "medium",
  },
  {
    id: 5,
    title: "Enterprise Security",
    description:
      "Bank-level encryption, SOC 2 compliance, and advanced access controls.",
    icon: "🔒",
    gradient: "teal",
    size: "small",
  },
  {
    id: 6,
    title: "24/7 Support",
    description:
      "Expert support when you need it, with 99.9% uptime guarantee.",
    icon: "💬",
    gradient: "blue",
    size: "small",
  },
]

function Features() {
  return (
    <div className="features-section-wrapper">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="features-title">Everything You Need to Succeed</h2>
          <p className="features-subtitle">
            Powerful tools designed for the modern business, integrated into one
            seamless platform
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`bento-item bento-${feature.size} bento-gradient-${feature.gradient}`}
            >
              <div className="bento-content">
                <div className="bento-icon">{feature.icon}</div>
                <h3 className="bento-title">{feature.title}</h3>
                <p className="bento-description">{feature.description}</p>
              </div>
              <div className="bento-glow"></div>
            </div>
          ))}
        </div>

        {/* Value Proposition Grid */}
        <div className="value-prop-section">
          <h3 className="value-prop-title">The Integrated Advantage</h3>
          <div className="value-prop-grid">
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4>Automation First</h4>
              <p>
                Eliminate repetitive tasks and focus on what matters. Our AI
                learns your workflows and suggests optimizations.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h4>Data-Driven Insights</h4>
              <p>
                Transform raw data into actionable insights with real-time
                analytics and predictive intelligence.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Infinite Scalability</h4>
              <p>
                Start small, grow big. Our infrastructure scales automatically
                to match your business needs.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Features
