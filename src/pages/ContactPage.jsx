import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa"
import "./ContactPage.css"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [submissionStatus, setSubmissionStatus] = useState(null) // null, 'submitting', 'success', 'error'

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required."
    if (!formData.email) {
      newErrors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid."
    }
    if (!formData.message) newErrors.message = "Message is required."
    return newErrors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setSubmissionStatus(null)
      return
    }

    setErrors({})
    setSubmissionStatus("submitting")

    try {
      const response = await fetch("https://formspree.io/f/movwonva", {
        // <-- PASTE YOUR FORMSPREE URL HERE
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setSubmissionStatus("success")
        setFormData({ name: "", email: "", message: "" }) // Clear form
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      setSubmissionStatus(error.message ? "error" : "error")
    }
  }

  return (
    <div className="contact-page-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <div className="social-icons mb-4">
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaBehance />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>

            <h1 className="fw-bold">Want to get in touch?</h1>
            <h1 className="fw-bold mb-5">Drop me a line</h1>

            {submissionStatus === "success" ? (
              <Alert variant="success">
                Thank you! Your message has been sent successfully.
              </Alert>
            ) : (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4 text-start">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        placeholder="Enter your name"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4 text-start">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4 text-start">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="Enter your message"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {submissionStatus === "error" && (
                  <Alert variant="danger" className="text-start">
                    Something went wrong. Please try again later.
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="submit-btn"
                  disabled={submissionStatus === "submitting"}
                >
                  {submissionStatus === "submitting"
                    ? "Submitting..."
                    : "Submit"}
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactPage
