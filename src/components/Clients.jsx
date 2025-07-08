import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Clients.css"

// Import your client logos
import logo1 from "../assets/images/clients/logo1.png"
import logo2 from "../assets/images/clients/logo2.png"
import logo3 from "../assets/images/clients/logo3.png"
import logo4 from "../assets/images/clients/logo4.png"
import logo5 from "../assets/images/clients/logo5.png"

const clientLogos = [logo1, logo2, logo3, logo4, logo5]

function Clients() {
  return (
    <div className="clients-section bg-light text-center py-5">
      <Container>
        <h5 className="text-muted text-uppercase mb-4">
          Trusted by leading companies
        </h5>
        <Row className="align-items-center">
          {clientLogos.map((logo, index) => (
            <Col key={index} xs={6} md>
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="client-logo"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Clients
