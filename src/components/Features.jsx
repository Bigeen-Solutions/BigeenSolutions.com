// component/Features.jsx
import React from "react"
import { Container } from "react-bootstrap"
import { RefreshCw, TrendingUp, Shield, Cloud } from "lucide-react"
import "./Features.css"

function Features() {
  return (
    // ID added here for navigation
    <section id="features" className="features-section-wrapper">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="features-title">
            Everything you need to{" "}
            <span className="highlight-purple">grow</span>
          </h2>
          <p className="features-subtitle">
            Powerful features wrapped in a simple, intuitive interface designed
            for lean teams.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Smart Automation (Wide) */}
          <div className="bento-card span-2-cols">
            <div className="icon-wrapper icon-purple">
              <RefreshCw size={24} />
            </div>
            <h3 className="card-title">Smart Automation</h3>
            <p className="card-desc">
              Trigger complex workflows based on user behavior. Connect your
              favorite tools and let Bigeen handle the repetitive tasks.
            </p>
            {/* Visual: Workflow UI */}
            <div className="workflow-visual">
              <div className="workflow-status">
                <span className="dot"></span> Workflow Active
              </div>
              <div className="workflow-progress">
                <div className="workflow-line" style={{ width: "90%" }}></div>
              </div>
              <div className="workflow-progress">
                <div className="workflow-line" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>

          {/* Card 2: Real-time Analytics (Tall) */}
          <div className="bento-card span-2-rows">
            <div className="icon-wrapper icon-purple">
              <TrendingUp size={24} />
            </div>
            <h3 className="card-title">Real-time Analytics</h3>
            <p className="card-desc">
              Deep insights into your revenue, churn, and user engagement.
            </p>
            {/* Visual: Bar Chart */}
            <div className="chart-visual">
              <div className="chart-bar" style={{ height: "40%" }}></div>
              <div className="chart-bar" style={{ height: "60%" }}></div>
              <div className="chart-bar" style={{ height: "50%" }}></div>
              <div className="chart-bar" style={{ height: "75%" }}></div>
              <div className="chart-bar active" style={{ height: "90%" }}></div>
            </div>
          </div>

          {/* Card 3: Enterprise Security (Small) */}
          <div className="bento-card">
            <div className="icon-wrapper icon-purple">
              <Shield size={24} />
            </div>
            <h3 className="card-title">Enterprise Security</h3>
            <p className="card-desc">
              SOC2 compliant data protection for peace of mind.
            </p>
          </div>

          {/* Card 4: Instant Scalability (Small) */}
          <div className="bento-card">
            <div className="icon-wrapper icon-teal">
              <Cloud size={24} />
            </div>
            <h3 className="card-title">Instant Scalability</h3>
            <p className="card-desc">
              Infrastructure that grows automatically with your user base.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Features
