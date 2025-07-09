import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import brandLogo from "../assets/images/bigeen-logo.png"

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        position: "absolute",
        width: "100%",
        backgroundColor: "rgba(42, 13, 91, 1)",
        zIndex: 10,
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={brandLogo}
            height="30"
            className="d-inline-block align-top"
            alt="Bigeen Solutions Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
          </Nav>
          <Button variant="light" as={Link} to="/contact">
            Contact us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
