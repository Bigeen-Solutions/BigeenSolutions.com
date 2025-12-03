import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Clients.css"

// Import your client logos
import logo1 from "../assets/images/clients/logo1.png"
import logo2 from "../assets/images/clients/logo2.png"
import logo3 from "../assets/images/clients/logo3.png"
import logo4 from "../assets/images/clients/logo4.png"
import logo5 from "../assets/images/clients/logo5.png"

const clientLogos = [
  { src: logo1, name: "Client 1" },
  { src: logo2, name: "Client 2" },
  { src: logo3, name: "Client 3" },
  { src: logo4, name: "Client 4" },
  { src: logo5, name: "Client 5" },
]

function Clients() {
  return (
    <div className="clients-section">
      <Container>
        <div className="clients-header">
          <h3 className="clients-title">
            Trusted by Forward-Thinking Companies
          </h3>
        </div>
        <Row className="align-items-center justify-content-center">
          {clientLogos.map((logo, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={2} className="client-col">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="client-logo"
                loading="lazy"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Clients
