import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa"
import Faq from "../components/Faq"
import "./ContactPage.css"

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    topic: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [submissionStatus, setSubmissionStatus] = useState(null) // null, 'submitting', 'success', 'error'

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName) newErrors.fullName = "Full name is required."
    if (!formData.workEmail) {
      newErrors.workEmail = "Work email is required."
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = "Email address is invalid."
    }
    if (!formData.companyName)
      newErrors.companyName = "Company name is required."
    if (!formData.topic) newErrors.topic = "Please select a topic."
    if (!formData.message) newErrors.message = "Please tell us how we can help."
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
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setSubmissionStatus("success")
        setFormData({
          fullName: "",
          workEmail: "",
          companyName: "",
          topic: "",
          message: "",
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch {
      setSubmissionStatus("error")
    }
  }

  return (
    <div className="contact-page-wrapper">
      <Container className="contact-container">
        <Row className="contact-main-row">
          {/* Left Column - Contact Info */}
          <Col lg={5} className="contact-info-col">
            <div className="contact-info">
              <p className="contact-label">CONTACT US</p>
              <h1 className="contact-title">Let's scale together.</h1>
              <p className="contact-subtitle">
                Have a question about our Integrated tools? Our team is ready to
                help you optimize your workflow and accelerate growth.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <p className="contact-item-label">Email us</p>
                    <a
                      href="mailto:bigeen08@gmail.com"
                      className="contact-link"
                    >
                      hello@bigeen.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <p className="contact-item-label">Call us</p>
                    <a href="tel:+2349052495949" className="contact-link">
                      +234 (90) 51495949
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <p className="contact-item-label">Visit us</p>
                    <p className="contact-address">Abuja, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </Col>

          {/* Right Column - Contact Form */}
          <Col lg={7} className="contact-form-col">
            <div className="contact-form-wrapper">
              <h2 className="form-title">Send us a message</h2>

              {submissionStatus === "success" ? (
                <Alert variant="success" className="success-alert">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </Alert>
              ) : (
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          isInvalid={!!errors.fullName}
                          placeholder="Jane Doe"
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.fullName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Work Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="workEmail"
                          value={formData.workEmail}
                          onChange={handleChange}
                          isInvalid={!!errors.workEmail}
                          placeholder="jane@company.com"
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.workEmail}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      isInvalid={!!errors.companyName}
                      placeholder="Acme Corp"
                      className="form-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.companyName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Topic</Form.Label>
                    <Form.Select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      isInvalid={!!errors.topic}
                      className="form-input"
                    >
                      <option value="">Select a topic...</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="other">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.topic}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>How can we help?</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      placeholder="Tell us more about your project needs..."
                      className="form-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {submissionStatus === "error" && (
                    <Alert variant="danger" className="error-alert">
                      Something went wrong. Please try again later.
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="submit-btn"
                    disabled={submissionStatus === "submitting"}
                  >
                    {submissionStatus === "submitting"
                      ? "Sending..."
                      : "Send Message ➤"}
                  </Button>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      {/* FAQ Section */}
      <div className="faq-section">
        <Faq />
      </div>
    </div>
  )
}

export default ContactPage
