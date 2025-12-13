import React from "react"
import { Container } from "react-bootstrap"
import "./Clients.css"

// Mock client names - replace with actual logos when available
const clientLogos = [
  { name: "TechCorp", industry: "Technology" },
  { name: "FinanceHub", industry: "Finance" },
  { name: "DataFlow", industry: "Analytics" },
  { name: "CloudSync", industry: "Cloud Services" },
  { name: "AutomateX", industry: "Automation" },
  { name: "ScaleSmart", industry: "Enterprise" },
  { name: "InnovateLab", industry: "R&D" },
  { name: "GlobalOps", industry: "Operations" },
]

function Clients() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <div className="clients-section">
      <Container>
        <div className="clients-header">
          <p className="clients-label">Trusted By</p>
        </div>
      </Container>

      {/* Infinite Scroll Ticker */}
      <div className="clients-ticker-wrapper">
        <div className="clients-ticker">
          {duplicatedLogos.map((client, index) => (
            <div key={index} className="client-item">
              <div className="client-logo-text">{client.name}</div>
              <span className="client-industry">{client.industry}</span>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div className="clients-stats">
          <div className="stat-item">
            <div className="stat-number">2,500+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Clients
