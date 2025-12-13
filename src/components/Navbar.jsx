import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/images/bigeen-logo.png"
import "./Navbar.css"

function CustomNavbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleFeaturesClick = (e) => {
    e.preventDefault()
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document
          .getElementById("features")
          ?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document
        .getElementById("features")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <img src={logo} alt="Bigeen Solutions" className="brand-logo" />
          <span className="brand-text">Bigeen Solutions</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center">
            <Nav.Link href="#features" onClick={handleFeaturesClick}>
              Features
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
            >
              Solutions
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Get in touch
            </Nav.Link>
            <Button
              as={Link}
              to="/contact"
              variant="dark"
              className="cta-button ms-3"
            >
              Get Access
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
