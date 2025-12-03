import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import brandLogo from "../assets/images/bigeen-logo.png"
import "./Navbar.css"

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img
            src={brandLogo}
            height="40"
            className="d-inline-block align-top"
            alt="Bigeen Solutions Logo"
            loading="lazy"
          />
          <span className="brand-text">Bigeen Solutions</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation menu"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">
              Services
            </Nav.Link>
            <Button
              variant="light"
              as={Link}
              to="/contact"
              className="ms-lg-3 mt-2 mt-lg-0 nav-cta-button"
            >
              Start Project
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
