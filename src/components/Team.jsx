//components/Team.jsx
import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "./Team.css"

// Import your team member images
import member1 from "../assets/images/team/member1.jpg"
import member2 from "../assets/images/team/member2.jpg"
import member3 from "../assets/images/team/member3.jpg"
import member4 from "../assets/images/team/member4.jpg"

const teamData = [
  {
    name: "William Anderson",
    title: "Founder & CEO",
    imageUrl: member1,
  },
  {
    name: "Ava Smith",
    title: "Technical Lead",
    imageUrl: member2,
  },
  {
    name: "Brenda Reyes",
    title: "Head of Mobile",
    imageUrl: member3,
  },
  {
    name: "Arjun Sharma",
    title: "Head of Solutions",
    imageUrl: member4,
  },
]

function Team() {
  return (
    <div className="team-section-wrapper">
      <Container className="py-5 text-white">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Talented Team</h1>
          <p className="lead text-white-50">
            A completely distributed team dedicated to constructing the finest
            communication platform designed for developers.
          </p>
        </div>
        <Row>
          {teamData.map((member, index) => (
            <Col md={6} lg={3} key={index} className="text-center mb-4">
              <Image
                src={member.imageUrl}
                rounded
                className="team-member-image"
              />
              <h4 className="mt-3 mb-0 fw-bold">{member.name}</h4>
              <p className="text-white-50">{member.title}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Team
